"""Inbound webhooks from Jira and Windchill.

Every inbound call is verified (HMAC), de-duplicated by its delivery ID, and
recorded with what we did about it. Jira events we caused ourselves are echoes
and change nothing, which is what stops two-way sync from looping.
"""

from __future__ import annotations

import json
from typing import Any, Dict, Optional

from fastapi import APIRouter, Request
from fastapi.responses import JSONResponse
from sqlalchemy import or_, select
from sqlalchemy.exc import IntegrityError

from .config import INTEGRATION_ACCOUNT_ID
from .gate import build_record, canonical_hash, gate_for, next_decision_id, policy_state, refresh_gate
from .logbook import add_log, audit
from .models import Comment, Feedback, GateDecision, InboundWebhook, Part
from .outbox import enqueue
from .security import verify
from .timeutil import parse_iso, utcnow

router = APIRouter()

STATUS_LABEL = {"open": "open", "in_progress": "in progress", "resolved": "resolved", "waived": "waived"}


def _target_status(jira_status: str, current: str) -> Optional[str]:
    """Map a Jira status onto CoLab feedback. None means nothing to change."""
    if jira_status == "Done":
        return None if current in ("resolved", "waived", "dismissed") else "resolved"
    if jira_status == "In Progress":
        return None if current == "in_progress" else "in_progress"
    if jira_status == "To Do":
        return None if current == "open" else "open"
    return None


def _claim(s, source: str, delivery_id: str, event_type: str, payload: Dict[str, Any]) -> Optional[InboundWebhook]:
    """Record the delivery. Returns None if we've already processed it."""
    if s.scalar(
        select(InboundWebhook.id).where(InboundWebhook.source == source, InboundWebhook.delivery_id == delivery_id)
    ):
        return None
    wh = InboundWebhook(
        source=source,
        delivery_id=delivery_id,
        received_at=utcnow(),
        event_type=event_type,
        outcome="applied",
        payload=payload,
    )
    s.add(wh)
    s.flush()
    return wh


# ----------------------------------------------------------------- Jira


@router.post("/webhooks/jira")
async def jira_webhook(request: Request):
    ctx = request.app.state.ctx
    raw = await request.body()
    delivery_id = request.headers.get("X-Atlassian-Webhook-Identifier") or ""
    if not verify(ctx.settings.jira_webhook_secret, raw, request.headers.get("X-Hub-Signature")):
        with ctx.uow() as s:
            add_log(s, system="jira", direction="in", level="error", title="Rejected a Jira webhook with a bad signature", detail="The HMAC didn't match the shared secret, so the payload was ignored.", tag="rejected", status_code=401)
        return JSONResponse({"error": "invalid signature"}, status_code=401)

    payload = json.loads(raw)
    issue = payload.get("issue", {})
    key = issue.get("key", "?")
    fields = issue.get("fields", {})
    jira_status = (fields.get("status") or {}).get("name", "")
    updated = parse_iso(fields["updated"]) if fields.get("updated") else utcnow()
    user = payload.get("user") or {}
    actor_id, actor_name = user.get("accountId"), user.get("displayName", "Someone")
    event = payload.get("webhookEvent", "jira:issue_updated")
    short_id = delivery_id[:8]

    try:
        with ctx.uow() as s:
            wh = _claim(s, "jira", delivery_id, event, payload)
            if wh is None:
                add_log(s, system="jira", direction="in", level="info", title=f"Duplicate webhook for {key} ignored", detail=f"Delivery {short_id} was already processed.", ref=key, tag="duplicate")
                return {"outcome": "duplicate"}

            colab_id = fields.get("customfield_10042")
            match = Feedback.jira_key == key
            if colab_id:
                match = or_(match, Feedback.id == colab_id)
            f = s.scalar(select(Feedback).where(match))
            if f is None:
                wh.outcome = "ignored"
                add_log(s, system="jira", direction="in", level="info", title=f"{key} changed in Jira; not linked to CoLab feedback", detail="Nothing to do.", ref=key, tag="ignored")
                return {"outcome": "ignored"}

            linked_now = False
            if not f.jira_key:
                # The create response was lost, but the webhook carries our ID.
                f.jira_key = key
                f.jira_status = jira_status
                linked_now = True

            if f.jira_updated_at and updated < f.jira_updated_at:
                wh.outcome = "stale"
                add_log(s, system="jira", direction="in", level="info", title=f"Out-of-order webhook for {key} ignored", detail="It is older than the state we already have.", ref=f.id, part=f.part_number, tag="stale")
                return {"outcome": "stale"}
            f.jira_updated_at = updated
            f.jira_status = jira_status

            part = s.get(Part, f.part_number)
            if linked_now:
                add_log(s, system="jira", direction="in", level="ok", title=f"Linked {key} to {f.id} from its webhook", detail="The create response never arrived, but the issue carries the CoLab feedback ID.", ref=f.id, part=f.part_number, tag="linked")

            if actor_id == INTEGRATION_ACCOUNT_ID:
                wh.outcome = "echo"
                if not linked_now:
                    add_log(s, system="jira", direction="in", level="info", title=f"Echo of our own change to {key}; no-op", detail=f"{key} is {jira_status}. The change came from this integration, so nothing is applied back.", ref=f.id, part=f.part_number, tag="echo")
                refresh_gate(ctx, s, f.part_number)
                return {"outcome": "echo"}

            if part.released_at or part.pending_decision_id:
                wh.outcome = "ignored"
                add_log(s, system="jira", direction="in", level="warn", title=f"{actor_name} moved {key} to {jira_status} after {part.number} Rev {part.rev} was released", detail="The released record doesn't change. Raise it on the next revision.", ref=f.id, part=f.part_number, tag="frozen")
                return {"outcome": "ignored"}

            target = _target_status(jira_status, f.status)
            if target is None:
                wh.outcome = "echo"
                add_log(s, system="jira", direction="in", level="info", title=f"{key} is {jira_status}; {f.id} already matches", detail="Nothing to apply.", ref=f.id, part=f.part_number, tag="noop")
                refresh_gate(ctx, s, f.part_number)
                return {"outcome": "noop"}

            before = f.status
            f.status = target
            if target == "resolved":
                f.resolved_at = utcnow()
                f.resolved_by = f"{actor_name} (in Jira)"
            else:
                f.resolved_at = f.resolved_by = None
                f.waiver_reason = f.waived_by_id = f.waived_at = None
            f.updated_at = utcnow()
            f.version += 1
            s.add(Comment(feedback_id=f.id, author_id=None, author_label="Jira", at=utcnow(), text=f"{actor_name} moved {key} to {jira_status}.", kind="system"))
            audit(s, actor=f"{actor_name} (Jira)", action="feedback.sync", part=f.part_number, entity="feedback", entity_id=f.id, detail=f"{before} → {target} from {key}")
            add_log(
                s,
                system="jira",
                direction="in",
                level="ok",
                title=f"{actor_name} moved {key} to {jira_status}; {f.id} is now {STATUS_LABEL.get(target, target)}",
                detail=f"Signature verified. Delivery {short_id}.",
                ref=f.id,
                part=f.part_number,
                tag="applied",
            )
            refresh_gate(ctx, s, f.part_number)
            return {"outcome": "applied"}
    except IntegrityError:
        # Two copies raced past the duplicate check; the unique constraint caught it.
        return {"outcome": "duplicate"}


# ------------------------------------------------------------- Windchill


@router.post("/webhooks/plm/promotion-check")
async def promotion_check(request: Request):
    """Windchill's validation hook: may this promotion request go ahead?"""
    ctx = request.app.state.ctx
    raw = await request.body()
    if not verify(ctx.settings.plm_shared_secret, raw, request.headers.get("X-PLM-Signature")):
        return JSONResponse({"error": "invalid signature"}, status_code=401)
    body = json.loads(raw)
    pr_id, number = body.get("promotionRequestId"), body.get("partNumber")

    with ctx.uow() as s:
        part = s.get(Part, number)
        if part is None:
            return JSONResponse({"error": f"unknown part {number}"}, status_code=404)
        existing_id = part.released_decision_id if part.released_at else part.pending_decision_id
        if existing_id:
            existing = s.get(GateDecision, existing_id)
            return {"decision": "APPROVE", "decisionId": existing.id, "reasons": [], "snapshotHash": existing.snapshot_hash}

        result = gate_for(ctx, s, part)
        approved = result["outcome"] == "READY"
        decision_id = next_decision_id(s, ctx.next_decision_start)
        now = utcnow()
        failing = [c for c in result["checks"] if c["status"] == "fail"]
        reasons = [f"{c['title']}: {c['summary']}" for c in failing]
        record = None
        if approved:
            record = build_record(
                ctx,
                s,
                part,
                decision_id=decision_id,
                decided_at=now,
                promotion_request_id=pr_id,
                requested_by=body.get("requestedBy"),
                checks=result["checks"],
            )
            snapshot = record["snapshotHash"]
            part.pending_decision_id = decision_id
        else:
            snapshot = canonical_hash({"part": part.number, "rev": part.rev, "state": policy_state(s, part)})
        s.add(
            GateDecision(
                id=decision_id,
                part_number=part.number,
                rev=part.rev,
                at=now,
                outcome="approved" if approved else "rejected",
                promotion_request_id=pr_id,
                requested_by=body.get("requestedBy"),
                checks=result["checks"],
                snapshot_hash=snapshot,
                record=record,
            )
        )
        audit(s, actor="Windchill", action="gate.decision", part=part.number, entity="decision", entity_id=decision_id, detail=("approved" if approved else "rejected: " + "; ".join(reasons)))
        add_log(
            s,
            system="windchill",
            direction="in",
            level="ok" if approved else "error",
            title=(
                f"Windchill asked to release {part.number} Rev {part.rev} ({pr_id}): approved"
                if approved
                else f"Windchill asked to release {part.number} Rev {part.rev} ({pr_id}): rejected, {len(failing)} check{'s' if len(failing) != 1 else ''} failing"
            ),
            detail="All blocking checks pass. Decision " + decision_id if approved else "; ".join(reasons),
            ref=pr_id,
            part=part.number,
            tag="decision",
            meta={"decisionId": decision_id, "snapshotHash": snapshot, "reasons": reasons},
        )
        refresh_gate(ctx, s, part.number)

    return {
        "decision": "APPROVE" if approved else "REJECT",
        "decisionId": decision_id,
        "reasons": reasons,
        "snapshotHash": snapshot,
    }


@router.post("/webhooks/plm/events")
async def plm_events(request: Request):
    """Windchill tells us a lifecycle change actually happened."""
    ctx = request.app.state.ctx
    raw = await request.body()
    if not verify(ctx.settings.plm_shared_secret, raw, request.headers.get("X-PLM-Signature")):
        return JSONResponse({"error": "invalid signature"}, status_code=401)
    body = json.loads(raw)
    try:
        with ctx.uow() as s:
            wh = _claim(s, "windchill", body.get("eventId", ""), body.get("type", "?"), body)
            if wh is None:
                return {"outcome": "duplicate"}
            if body.get("type") != "LIFECYCLE_STATE_CHANGED" or body.get("to") != "RELEASED":
                wh.outcome = "ignored"
                return {"outcome": "ignored"}
            part = s.get(Part, body.get("partNumber"))
            if part is None or part.released_at:
                wh.outcome = "ignored"
                return {"outcome": "ignored"}
            decision_id = part.pending_decision_id or s.scalar(
                select(GateDecision.id).where(
                    GateDecision.promotion_request_id == body.get("promotionRequestId"),
                    GateDecision.outcome == "approved",
                )
            )
            part.released_at = utcnow()
            part.released_decision_id = decision_id
            part.pending_decision_id = None
            audit(s, actor="Windchill", action="part.released", part=part.number, entity="part", entity_id=part.number, detail=f"{body.get('promotionRequestId')} / {decision_id}")
            add_log(
                s,
                system="windchill",
                direction="in",
                level="ok",
                title=f"Windchill confirmed {part.number} Rev {part.rev} is Released",
                detail=f"Lifecycle {body.get('from')} → {body.get('to')} by {body.get('promotionRequestId')}. Decision {decision_id}.",
                ref=body.get("promotionRequestId"),
                part=part.number,
                tag="released",
            )
            if decision_id:
                enqueue(
                    s,
                    topic="plm.attach_record",
                    ordering_key=f"part:{part.number}",
                    part_number=part.number,
                    label=f"Attach review record {decision_id} to {part.number} in Windchill",
                    payload={"decisionId": decision_id},
                    max_attempts=ctx.settings.max_attempts,
                )
            refresh_gate(ctx, s, part.number)
            return {"outcome": "applied"}
    except IntegrityError:
        return {"outcome": "duplicate"}

