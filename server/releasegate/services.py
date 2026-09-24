"""Domain operations behind the console's buttons.

Each operation changes CoLab-side state and writes outbox messages in the same
transaction. Nothing here calls Jira directly; the worker does that.
"""

from __future__ import annotations

import uuid
from typing import Any, Dict, Optional

from sqlalchemy import select
from sqlalchemy.orm import Session

from .connectors.http import DeliveryError, Tracer
from .gate import refresh_gate
from .handlers import windchill
from .logbook import add_log, audit, mark_changed
from .models import Comment, Feedback, OutboxMessage, Part, Person, Reviewer
from .outbox import enqueue, refresh_sync_state
from .timeutil import utcnow

MIN_REASON = 12


class UserError(Exception):
    """A request we refuse, with a message meant for the person who made it."""


# ------------------------------------------------------------------ helpers


def current_user(ctx, s: Session) -> Person:
    return s.get(Person, ctx.current_user_id)


def _feedback(s: Session, feedback_id: str) -> Feedback:
    f = s.get(Feedback, feedback_id)
    if f is None:
        raise UserError(f"Feedback {feedback_id} doesn't exist.")
    return f


def _editable_part(s: Session, number: str) -> Part:
    part = s.get(Part, number)
    if part is None:
        raise UserError(f"Part {number} doesn't exist.")
    if part.released_at or part.pending_decision_id:
        raise UserError(f"{part.number} Rev {part.rev} is released. Start a new revision to change it.")
    return part


def _system_note(s: Session, f: Feedback, text: str) -> None:
    s.add(Comment(feedback_id=f.id, author_id=None, author_label="CoLab", at=utcnow(), text=text, kind="system"))


def _comment(s: Session, f: Feedback, author: Person, text: str) -> None:
    s.add(Comment(feedback_id=f.id, author_id=author.id, author_label=author.name, at=utcnow(), text=text))


def _touch(f: Feedback) -> None:
    f.updated_at = utcnow()
    f.version += 1


def _linked_or_linking(s: Session, f: Feedback) -> bool:
    """True if the feedback has a Jira issue, or one is on its way."""
    if f.jira_key:
        return True
    pending_create = s.scalar(
        select(OutboxMessage.id).where(
            OutboxMessage.ordering_key == f"feedback:{f.id}",
            OutboxMessage.topic == "jira.create_issue",
            OutboxMessage.status != "delivered",
        )
    )
    return pending_create is not None


def _queue_jira(ctx, s: Session, f: Feedback, *, to: str, resolution: Optional[str], note: Optional[str], author: str):
    if not _linked_or_linking(s, f):
        return
    key = f.jira_key or "its Jira issue"
    if note:
        enqueue(
            s,
            topic="jira.comment",
            ordering_key=f"feedback:{f.id}",
            part_number=f.part_number,
            label=f"Post note on {key}",
            payload={"feedbackId": f.id, "text": note, "author": author, "marker": f"rg-{uuid.uuid4().hex[:8]}"},
            max_attempts=ctx.settings.max_attempts,
        )
    enqueue(
        s,
        topic="jira.transition",
        ordering_key=f"feedback:{f.id}",
        part_number=f.part_number,
        label=f"Move {key} to {to}",
        payload={"feedbackId": f.id, "to": to, "resolution": resolution},
        max_attempts=ctx.settings.max_attempts,
    )


def _waivers_allowed(ctx, priority: str) -> bool:
    for rule in ctx.policy["rules"]:
        if rule["type"] == "no_open_feedback" and priority in rule.get("params", {}).get("priorities", []):
            return bool(rule["params"].get("allowWaiver", True))
    return True


# --------------------------------------------------------------- feedback


def resolve_feedback(ctx, feedback_id: str, note: Optional[str] = None) -> None:
    note = (note or "").strip() or None
    with ctx.uow() as s:
        f = _feedback(s, feedback_id)
        _editable_part(s, f.part_number)
        if f.source == "ai" and f.triage == "untriaged":
            raise UserError("Triage this AutoReview finding first: accept it or dismiss it.")
        if f.status == "resolved":
            return
        me = current_user(ctx, s)
        f.status = "resolved"
        f.resolved_at = utcnow()
        f.resolved_by = me.name
        _touch(f)
        if note:
            _comment(s, f, me, note)
        _system_note(s, f, f"Resolved by {me.name}.")
        audit(s, actor=me.name, action="feedback.resolve", part=f.part_number, entity="feedback", entity_id=f.id, detail=note)
        add_log(
            s,
            system="colab",
            direction="internal",
            level="ok",
            title=f"{me.name} resolved {f.id}",
            detail=f.title,
            ref=f.id,
            part=f.part_number,
            tag="resolve",
        )
        _queue_jira(ctx, s, f, to="Done", resolution="Done", note=note, author=me.name)
        refresh_gate(ctx, s, f.part_number)


def reopen_feedback(ctx, feedback_id: str) -> None:
    with ctx.uow() as s:
        f = _feedback(s, feedback_id)
        _editable_part(s, f.part_number)
        if f.status in ("open", "in_progress"):
            return
        me = current_user(ctx, s)
        was = f.status
        f.status = "open"
        f.resolved_at = f.resolved_by = None
        f.waiver_reason = f.waived_by_id = f.waived_at = None
        if f.source == "ai" and f.triage == "dismissed":
            f.triage = "untriaged"
            f.dismiss_reason = f.dismissed_by_id = None
        _touch(f)
        _system_note(s, f, f"Reopened by {me.name}.")
        audit(s, actor=me.name, action="feedback.reopen", part=f.part_number, entity="feedback", entity_id=f.id, detail=f"was {was}")
        add_log(s, system="colab", direction="internal", level="info", title=f"{me.name} reopened {f.id}", detail=f.title, ref=f.id, part=f.part_number, tag="reopen")
        _queue_jira(ctx, s, f, to="To Do", resolution=None, note=None, author=me.name)
        refresh_gate(ctx, s, f.part_number)


def waive_feedback(ctx, feedback_id: str, reason: str) -> None:
    reason = (reason or "").strip()
    with ctx.uow() as s:
        f = _feedback(s, feedback_id)
        _editable_part(s, f.part_number)
        if f.source == "ai" and f.triage == "untriaged":
            raise UserError("Triage this AutoReview finding first: accept it or dismiss it.")
        if not _waivers_allowed(ctx, f.priority):
            raise UserError(
                f"The release policy doesn't allow waiving {f.priority} feedback. Resolve it instead."
            )
        if len(reason) < MIN_REASON:
            raise UserError("Add a reason (at least 12 characters) so the review record explains the decision.")
        me = current_user(ctx, s)
        f.status = "waived"
        f.waiver_reason = reason
        f.waived_by_id = me.id
        f.waived_at = utcnow()
        _touch(f)
        _system_note(s, f, f"Waived by {me.name}: {reason}")
        audit(s, actor=me.name, action="feedback.waive", part=f.part_number, entity="feedback", entity_id=f.id, detail=reason)
        add_log(s, system="colab", direction="internal", level="ok", title=f"{me.name} waived {f.id}", detail=reason, ref=f.id, part=f.part_number, tag="waive")
        _queue_jira(ctx, s, f, to="Done", resolution="Won't Do", note=f"Waived in CoLab: {reason}", author=me.name)
        refresh_gate(ctx, s, f.part_number)


def triage_finding(ctx, feedback_id: str, decision: str, note: Optional[str] = None) -> None:
    note = (note or "").strip()
    with ctx.uow() as s:
        f = _feedback(s, feedback_id)
        _editable_part(s, f.part_number)
        if f.source != "ai" or f.triage != "untriaged":
            raise UserError(f"{f.id} isn't an AutoReview finding waiting for triage.")
        me = current_user(ctx, s)
        if decision == "accept":
            f.triage = "accepted"
            f.owner_id = f.owner_id or me.id
            _touch(f)
            if note:
                _comment(s, f, me, note)
            _system_note(s, f, f"Accepted by {me.name}. Tracked like any other {f.priority}-priority feedback.")
            audit(s, actor=me.name, action="finding.accept", part=f.part_number, entity="feedback", entity_id=f.id, detail=note or None)
            add_log(s, system="colab", direction="internal", level="ok", title=f"{me.name} accepted AutoReview finding {f.id}", detail=f.title, ref=f.id, part=f.part_number, tag="triage")
            if f.priority in ("critical", "high"):
                enqueue(
                    s,
                    topic="jira.create_issue",
                    ordering_key=f"feedback:{f.id}",
                    part_number=f.part_number,
                    label=f"Create Jira issue for {f.id}",
                    payload={"feedbackId": f.id},
                    max_attempts=ctx.settings.max_attempts,
                )
        elif decision == "dismiss":
            if len(note) < MIN_REASON:
                raise UserError("Say why you're dismissing it (at least 12 characters). The reason goes in the review record.")
            f.triage = "dismissed"
            f.status = "dismissed"
            f.dismiss_reason = note
            f.dismissed_by_id = me.id
            _touch(f)
            _system_note(s, f, f"Dismissed by {me.name}: {note}")
            audit(s, actor=me.name, action="finding.dismiss", part=f.part_number, entity="feedback", entity_id=f.id, detail=note)
            add_log(s, system="colab", direction="internal", level="ok", title=f"{me.name} dismissed AutoReview finding {f.id}", detail=note, ref=f.id, part=f.part_number, tag="triage")
        else:
            raise UserError("Decision must be accept or dismiss.")
        refresh_gate(ctx, s, f.part_number)


# ---------------------------------------------------------------- reviews


def nudge_reviewer(ctx, part_number: str, role: str) -> None:
    with ctx.uow() as s:
        _editable_part(s, part_number)
        r = s.scalar(select(Reviewer).where(Reviewer.part_number == part_number, Reviewer.role == role))
        if r is None:
            raise UserError(f"No {role} review was requested on {part_number}.")
        if r.status == "complete":
            raise UserError(f"The {role} review is already complete.")
        person = s.get(Person, r.person_id)
        r.nudged_at = utcnow()
        add_log(
            s,
            system="notify",
            direction="out",
            level="info",
            title=f"Reminder sent to {person.name} for the {role} review",
            detail="In the demo, the reviewer answers a couple of seconds later.",
            ref=part_number,
            part=part_number,
            tag="nudge",
        )
        mark_changed(s, part_number)
    ctx.spawn(lambda: complete_review(ctx, part_number, role), delay=ctx.settings.reviewer_delay_s, name=f"review:{part_number}:{role}")


async def complete_review(ctx, part_number: str, role: str) -> None:
    with ctx.uow() as s:
        r = s.scalar(select(Reviewer).where(Reviewer.part_number == part_number, Reviewer.role == role))
        part = s.get(Part, part_number)
        if r is None or r.status == "complete" or part.released_at:
            return
        person = s.get(Person, r.person_id)
        r.status = "complete"
        r.completed_at = utcnow()
        audit(s, actor=person.name, action="review.complete", part=part_number, entity="review", entity_id=role)
        add_log(
            s,
            system="colab",
            direction="in",
            level="ok",
            title=f"{person.name} completed the {role} review",
            detail="Simulated reviewer response.",
            ref=part_number,
            part=part_number,
            tag="review",
        )
        refresh_gate(ctx, s, part_number)


# ---------------------------------------------------------------- release


async def request_release(ctx, part_number: str) -> Dict[str, Any]:
    """Ask Windchill to promote the part. Windchill asks the gate before it answers."""
    with ctx.uow() as s:
        part = s.get(Part, part_number)
        if part is None:
            raise UserError(f"Part {part_number} doesn't exist.")
        if part.released_at:
            raise UserError(f"{part.number} Rev {part.rev} is already released.")
        me = current_user(ctx, s)
        requested_by, rev = me.name, part.rev

    tracer = Tracer()
    try:
        pr = await windchill(ctx).request_promotion(tracer, part_number, requested_by)
    except DeliveryError as exc:
        with ctx.uow() as s:
            add_log(
                s,
                system="windchill",
                direction="out",
                level="error",
                title=f"Windchill didn't take the promotion request for {part_number}: {exc.message}",
                ref=part_number,
                part=part_number,
                status_code=exc.status,
                latency_ms=tracer.total_ms,
                tag="promotion",
                meta={"calls": tracer.calls},
            )
        raise UserError(f"Windchill didn't accept the promotion request ({exc.message}).")

    status = pr.get("Status", "OPEN")
    level = {"APPROVED": "ok", "REJECTED": "error", "ON_HOLD": "warn"}.get(status, "info")
    with ctx.uow() as s:
        add_log(
            s,
            system="windchill",
            direction="out",
            level=level,
            title=f"Promotion request {pr['ID']} for {part_number} Rev {rev}: {status.replace('_', ' ').lower()}",
            detail="; ".join(pr.get("Reasons") or []) or None,
            ref=pr["ID"],
            part=part_number,
            status_code=tracer.last_status,
            latency_ms=tracer.total_ms,
            tag="promotion",
            meta={"calls": tracer.calls},
        )
        mark_changed(s, part_number)
    return {
        "promotionRequestId": pr["ID"],
        "status": status,
        "reasons": pr.get("Reasons") or [],
        "decisionId": pr.get("GateDecisionId"),
    }


# ------------------------------------------------------------ operations


def retry_delivery(ctx, message_id: int) -> None:
    with ctx.uow() as s:
        msg = s.get(OutboxMessage, message_id)
        if msg is None:
            raise UserError(f"Delivery {message_id} doesn't exist.")
        if msg.status not in ("dead", "retrying"):
            return
        if msg.status == "dead":
            msg.max_attempts = msg.attempts + 3
        msg.status = "pending" if msg.status == "dead" else msg.status
        msg.next_attempt_at = utcnow()
        me = current_user(ctx, s)
        add_log(s, system="gate", direction="internal", level="info", title=f"{me.name} retried: {msg.label}", ref=str(msg.id), part=msg.part_number, tag="retry-now")
        if msg.ordering_key.startswith("feedback:"):
            refresh_sync_state(s, msg.ordering_key.split(":", 1)[1])
        if msg.part_number:
            refresh_gate(ctx, s, msg.part_number)
        s.info["wake_worker"] = True


CHAOS_LABELS = {
    "jiraOutage": "Jira API outage (503s)",
    "jiraLostResponses": "Jira drops create responses",
    "duplicateWebhooks": "Jira sends every webhook twice",
    "slowNetwork": "Slow network (+600 ms)",
}


def get_chaos(ctx) -> Dict[str, bool]:
    return {
        "jiraOutage": ctx.jira.chaos["outage"],
        "jiraLostResponses": ctx.jira.chaos["lost_responses"],
        "duplicateWebhooks": ctx.jira.chaos["duplicate_webhooks"],
        "slowNetwork": ctx.jira.chaos["slow"],
    }


def set_chaos(ctx, **flags: Optional[bool]) -> Dict[str, bool]:
    mapping = {
        "jiraOutage": "outage",
        "jiraLostResponses": "lost_responses",
        "duplicateWebhooks": "duplicate_webhooks",
        "slowNetwork": "slow",
    }
    changed = []
    for name, value in flags.items():
        if value is None or name not in mapping:
            continue
        key = mapping[name]
        if ctx.jira.chaos[key] != bool(value):
            ctx.jira.chaos[key] = bool(value)
            changed.append((name, bool(value)))
    if changed:
        with ctx.uow() as s:
            for name, value in changed:
                add_log(
                    s,
                    system="gate",
                    direction="internal",
                    level="warn" if value else "info",
                    title=f"Simulation {'on' if value else 'off'}: {CHAOS_LABELS[name]}",
                    tag="chaos",
                )
            mark_changed(s, None)
    return get_chaos(ctx)
