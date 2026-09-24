"""Gate evaluation for a part, decision records, and the review record."""

from __future__ import annotations

import hashlib
import html
import json
from datetime import datetime
from typing import Any, Dict, List, Optional

from sqlalchemy import func, select
from sqlalchemy.orm import Session

from . import policy as policy_engine
from .logbook import add_log, mark_changed
from .models import Feedback, GateDecision, OutboxMessage, Part, Person, Reviewer
from .timeutil import iso

UNCONFIRMED = ("pending", "in_flight", "retrying")


def policy_state(s: Session, part: Part) -> Dict[str, Any]:
    """The subset of a part's state the policy engine looks at."""
    feedback = s.scalars(select(Feedback).where(Feedback.part_number == part.number)).all()
    reviews = s.scalars(select(Reviewer).where(Reviewer.part_number == part.number)).all()
    unconfirmed = s.scalars(
        select(OutboxMessage)
        .where(OutboxMessage.part_number == part.number, OutboxMessage.status.in_(UNCONFIRMED))
        .order_by(OutboxMessage.id)
    ).all()
    dead = s.scalars(
        select(OutboxMessage)
        .where(OutboxMessage.part_number == part.number, OutboxMessage.status == "dead")
        .order_by(OutboxMessage.id)
    ).all()
    return {
        "feedback": [
            {"id": f.id, "priority": f.priority, "status": f.status, "source": f.source, "triage": f.triage}
            for f in feedback
        ],
        "reviews": [{"role": r.role, "status": r.status} for r in reviews],
        "sync": {
            "pending": len(unconfirmed),
            "failed": len(dead),
            "deliveryIds": [str(m.id) for m in unconfirmed + dead],
        },
    }


def _counts(checks: List[Dict[str, Any]]) -> Dict[str, int]:
    blocking = [c for c in checks if c.get("blocking")]
    return {
        "blockingTotal": len(blocking),
        "blockingPassed": sum(1 for c in blocking if c.get("status") == "pass"),
    }


def gate_for(ctx, s: Session, part: Part) -> Dict[str, Any]:
    """Current gate state. Released revisions are frozen at their decision."""
    decision_id, outcome = None, None
    if part.released_at and part.released_decision_id:
        decision_id, outcome = part.released_decision_id, "RELEASED"
    elif part.pending_decision_id:
        decision_id, outcome = part.pending_decision_id, "RELEASING"
    decision = s.get(GateDecision, decision_id) if decision_id else None
    if decision is not None:
        return {
            "outcome": outcome,
            **_counts(decision.checks),
            "itemsToClear": 0,
            "checks": decision.checks,
            "releasedAt": iso(part.released_at),
            "decisionId": decision.id,
            "snapshotHash": decision.snapshot_hash,
        }
    result = policy_engine.evaluate(ctx.policy, policy_state(s, part))
    result.update({"releasedAt": None, "decisionId": None, "snapshotHash": None})
    return result


def refresh_gate(ctx, s: Session, part_number: str) -> Dict[str, Any]:
    """Re-evaluate a part and announce the change if the outcome moved."""
    s.flush()
    part = s.get(Part, part_number)
    result = gate_for(ctx, s, part)
    key = (result["outcome"], result["blockingPassed"])
    previous = ctx.gate_cache.get(part_number)
    ctx.gate_cache[part_number] = key
    if previous is not None and previous[0] != key[0]:
        level = {"READY": "ok", "RELEASED": "ok", "RELEASING": "info"}.get(key[0], "warn")
        add_log(
            s,
            system="gate",
            direction="internal",
            level=level,
            title=f"{part.number} Rev {part.rev} is now {key[0].lower()}",
            detail=f"Gate moved from {previous[0]} to {key[0]} ({key[1]} of {result['blockingTotal']} blocking checks pass).",
            ref=part.number,
            part=part.number,
            tag="gate",
        )
    mark_changed(s, part_number)
    return result


def next_decision_id(s: Session, start: int) -> str:
    ids = s.scalars(select(GateDecision.id)).all()
    highest = max([int(i.split("-")[1]) for i in ids] + [start - 1])
    return f"R-{highest + 1:04d}"


def canonical_hash(obj: Any) -> str:
    canonical = json.dumps(obj, sort_keys=True, separators=(",", ":"), ensure_ascii=False)
    return "sha256:" + hashlib.sha256(canonical.encode("utf-8")).hexdigest()


def _name(s: Session, person_id: Optional[str]) -> Optional[str]:
    if not person_id:
        return None
    p = s.get(Person, person_id)
    return p.name if p else person_id


def disposition(s: Session, f: Feedback) -> str:
    if f.status == "resolved":
        return f"Resolved by {f.resolved_by or 'owner'}"
    if f.status == "waived":
        return f"Waived by {_name(s, f.waived_by_id)}: {f.waiver_reason}"
    if f.status == "dismissed":
        return f"AI finding dismissed by {_name(s, f.dismissed_by_id)}: {f.dismiss_reason}"
    if f.priority in ("medium", "low"):
        return "Open, carried to the next revision (non-blocking)"
    return "Open"


def build_record(
    ctx,
    s: Session,
    part: Part,
    *,
    decision_id: str,
    decided_at: datetime,
    promotion_request_id: Optional[str],
    requested_by: Optional[str],
    checks: List[Dict[str, Any]],
) -> Dict[str, Any]:
    """The review record attached to the part in Windchill on release."""
    feedback = s.scalars(
        select(Feedback).where(Feedback.part_number == part.number).order_by(Feedback.number)
    ).all()
    reviewers = s.scalars(select(Reviewer).where(Reviewer.part_number == part.number)).all()
    body = {
        "recordId": decision_id,
        "decision": "approved",
        "decidedAt": iso(decided_at),
        "promotionRequestId": promotion_request_id,
        "requestedBy": requested_by,
        "part": {
            "number": part.number,
            "name": part.name,
            "rev": part.rev,
            "assembly": part.assembly,
            "material": part.material,
            "finish": part.finish,
            "process": part.process,
        },
        "review": {"title": part.review_title, "stage": part.review_stage},
        "policy": {
            "id": ctx.policy["id"],
            "name": ctx.policy["name"],
            "version": ctx.policy["version"],
            "failClosedOnSync": ctx.policy.get("failClosedOnSync", True),
        },
        "checks": [
            {k: c[k] for k in ("id", "title", "blocking", "status", "summary")} for c in checks
        ],
        "reviews": [
            {
                "role": r.role,
                "person": _name(s, r.person_id),
                "status": r.status,
                "completedAt": iso(r.completed_at),
            }
            for r in reviewers
        ],
        "feedback": [
            {
                "id": f.id,
                "number": f.number,
                "title": f.title,
                "priority": f.priority,
                "category": f.category,
                "source": "AutoReview" if f.source == "ai" else "Reviewer",
                "status": f.status,
                "disposition": disposition(s, f),
                "jiraKey": f.jira_key,
            }
            for f in feedback
        ],
    }
    body["snapshotHash"] = canonical_hash(body)
    return body


def record_filename(record: Dict[str, Any]) -> str:
    part = record["part"]
    return f"{part['number']}_Rev{part['rev']}_review-record.html"


def render_record_html(record: Dict[str, Any]) -> str:
    """A self-contained HTML rendering of the record for people in Windchill."""
    e = html.escape
    part = record["part"]
    rows = "".join(
        f"<tr><td>{e(f['id'])}</td><td>{e(f['priority'].title())}</td><td>{e(f['title'])}</td>"
        f"<td>{e(f['disposition'])}</td><td>{e(f['jiraKey'] or '')}</td></tr>"
        for f in record["feedback"]
    )
    checks = "".join(
        f"<tr><td>{'PASS' if c['status'] == 'pass' else c['status'].upper()}</td>"
        f"<td>{e(c['title'])}</td><td>{e(c['summary'])}</td></tr>"
        for c in record["checks"]
    )
    reviews = "".join(
        f"<tr><td>{e(r['role'])}</td><td>{e(r['person'] or '')}</td><td>{e(r['status'])}</td>"
        f"<td>{e(r['completedAt'] or '')}</td></tr>"
        for r in record["reviews"]
    )
    return f"""<!doctype html><html><head><meta charset="utf-8">
<title>{e(part['number'])} Rev {e(part['rev'])} review record</title>
<style>
body{{font:14px/1.5 system-ui,sans-serif;color:#121720;margin:32px;max-width:1000px}}
h1{{font-size:20px;margin:0 0 4px}} .meta{{color:#586476;margin-bottom:24px}}
table{{border-collapse:collapse;width:100%;margin:8px 0 24px}}
th,td{{border:1px solid #d5dbe2;padding:6px 8px;text-align:left;vertical-align:top}}
th{{background:#f1f4f7;font-size:12px;text-transform:uppercase;letter-spacing:.04em}}
code{{font:12px ui-monospace,monospace;word-break:break-all}}
</style></head><body>
<h1>{e(part['number'])} {e(part['name'])}, Rev {e(part['rev'])}: review record {e(record['recordId'])}</h1>
<div class="meta">Approved for release {e(record['decidedAt'])} under {e(record['policy']['name'])} v{record['policy']['version']}.
Promotion request {e(record['promotionRequestId'] or 'n/a')}, requested by {e(record['requestedBy'] or 'n/a')}.</div>
<h2>Release checks</h2><table><tr><th>Result</th><th>Check</th><th>Detail</th></tr>{checks}</table>
<h2>Reviews</h2><table><tr><th>Role</th><th>Reviewer</th><th>Status</th><th>Completed</th></tr>{reviews}</table>
<h2>Feedback</h2><table><tr><th>ID</th><th>Priority</th><th>Feedback</th><th>Disposition</th><th>Jira</th></tr>{rows}</table>
<p>Snapshot hash <code>{e(record['snapshotHash'])}</code></p>
</body></html>"""


def feedback_stats(s: Session, part_number: str) -> Dict[str, Any]:
    rows = s.scalars(select(Feedback).where(Feedback.part_number == part_number)).all()
    closed = [f for f in rows if f.status in ("resolved", "waived", "dismissed")]
    durations = [
        (f.resolved_at - f.created_at).total_seconds() / 3600
        for f in rows
        if f.status == "resolved" and f.resolved_at and f.created_at
    ]
    return {
        "total": len(rows),
        "open": len(rows) - len(closed),
        "closed": len(closed),
        "avgResolveHours": round(sum(durations) / len(durations), 1) if durations else None,
    }


def count_parts(s: Session) -> int:
    return s.scalar(select(func.count()).select_from(Part)) or 0
