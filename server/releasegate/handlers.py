"""What each outbox topic does. Every handler is safe to run more than once."""

from __future__ import annotations

from dataclasses import dataclass, field
from typing import Any, Awaitable, Callable, Dict, Optional

from .connectors.http import Tracer
from .connectors.jira import COLAB_ID_FIELD, PRIORITY_MAP, JiraConnector
from .connectors.windchill import WindchillConnector
from .gate import record_filename, render_record_html
from .models import Feedback, GateDecision, Part


@dataclass
class HandlerResult:
    summary: str
    ref: Optional[str] = None
    tag: Optional[str] = None
    feedback_updates: Dict[str, Any] = field(default_factory=dict)


def jira(ctx) -> JiraConnector:
    s = ctx.settings
    return JiraConnector(ctx.http, s.jira_url, s.jira_user, s.jira_api_token, s.http_timeout_s)


def windchill(ctx) -> WindchillConnector:
    s = ctx.settings
    return WindchillConnector(ctx.http, s.windchill_url, s.windchill_user, s.windchill_password, s.http_timeout_s)


def _jira_key(ctx, feedback_id: str) -> Optional[str]:
    with ctx.uow() as s:
        f = s.get(Feedback, feedback_id)
        return f.jira_key if f else None


async def jira_create_issue(ctx, payload: Dict[str, Any], tracer: Tracer) -> HandlerResult:
    fid = payload["feedbackId"]
    with ctx.uow() as s:  # read a snapshot, then let go of the session before any HTTP
        f = s.get(Feedback, fid)
        part = s.get(Part, f.part_number)
        snap = {
            "key": f.jira_key,
            "title": f.title,
            "body": f.body,
            "priority": f.priority,
            "part": part.number,
            "rev": part.rev,
        }
    if snap["key"]:
        return HandlerResult(f"{snap['key']} is already linked to {fid}; nothing to create", ref=snap["key"], tag="noop")

    conn = jira(ctx)
    existing = await conn.find_by_colab_id(tracer, fid)
    if existing:
        key = existing["key"]
        return HandlerResult(
            f"Found {key} from an earlier attempt and linked it to {fid}. No duplicate created.",
            ref=key,
            tag="linked",
            feedback_updates={"jira_key": key, "jira_status": existing["fields"]["status"]["name"]},
        )

    fields = {
        "project": {"key": ctx.jira_project},
        "issuetype": {"name": "Task"},
        "summary": f"[{snap['part']} Rev {snap['rev']}] {snap['title']}",
        "description": f"{snap['body']}\n\nCoLab feedback {fid} on {snap['part']} Rev {snap['rev']}.",
        "priority": {"name": PRIORITY_MAP.get(snap["priority"], "Medium")},
        "labels": ["colab", "design-review", snap["part"].lower()],
        COLAB_ID_FIELD: fid,
    }
    created = await conn.create_issue(tracer, fields)
    key = created["key"]
    return HandlerResult(
        f"Created {key} for {fid}",
        ref=key,
        tag="created",
        feedback_updates={"jira_key": key, "jira_status": "To Do"},
    )


async def jira_transition(ctx, payload: Dict[str, Any], tracer: Tracer) -> HandlerResult:
    fid, target = payload["feedbackId"], payload["to"]
    key = _jira_key(ctx, fid)
    if not key:
        return HandlerResult(f"{fid} has no Jira issue; nothing to move", tag="noop")
    before = await jira(ctx).move_to(tracer, key, target, payload.get("resolution"))
    if before == target:
        return HandlerResult(f"{key} was already {target}", ref=key, tag="noop", feedback_updates={"jira_status": target})
    return HandlerResult(
        f"Moved {key} from {before} to {target}", ref=key, tag="moved", feedback_updates={"jira_status": target}
    )


async def jira_comment(ctx, payload: Dict[str, Any], tracer: Tracer) -> HandlerResult:
    fid, marker = payload["feedbackId"], payload["marker"]
    key = _jira_key(ctx, fid)
    if not key:
        return HandlerResult(f"{fid} has no Jira issue; comment kept in CoLab only", tag="noop")
    conn = jira(ctx)
    existing = await conn.comments(tracer, key)
    if any(marker in (c.get("body") or "") for c in existing):
        return HandlerResult(f"Note already on {key}; skipped the duplicate", ref=key, tag="noop")
    await conn.add_comment(tracer, key, f"{payload['text']}\n\n({payload['author']} via CoLab, ref {marker})")
    return HandlerResult(f"Posted {payload['author']}'s note on {key}", ref=key, tag="commented")


async def plm_attach_record(ctx, payload: Dict[str, Any], tracer: Tracer) -> HandlerResult:
    with ctx.uow() as s:
        decision = s.get(GateDecision, payload["decisionId"])
        record = dict(decision.record)
        part_number = decision.part_number
    filename = record_filename(record)
    await windchill(ctx).put_attachment(tracer, part_number, filename, render_record_html(record), "text/html")
    return HandlerResult(f"Attached {filename} to {part_number} in Windchill", ref=part_number, tag="attached")


Handler = Callable[[Any, Dict[str, Any], Tracer], Awaitable[HandlerResult]]

HANDLERS: Dict[str, Handler] = {
    "jira.create_issue": jira_create_issue,
    "jira.transition": jira_transition,
    "jira.comment": jira_comment,
    "plm.attach_record": plm_attach_record,
}


def system_for(topic: str) -> str:
    return "windchill" if topic.startswith("plm.") else "jira"
