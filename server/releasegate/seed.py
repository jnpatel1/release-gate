"""Load the demo scenario from shared/seed.json into the database and mocks."""

from __future__ import annotations

from typing import Any, Dict, List

from . import policy as policy_engine
from .context import load_json
from .gate import build_record, policy_state, record_filename, refresh_gate, render_record_html
from .logbook import add_log
from .models import Comment, Feedback, GateDecision, LogEntry, Part, Person, Reviewer
from .timeutil import minutes_ago, minutes_from_now


def seed_all(ctx) -> None:
    data = load_json("seed.json")
    ctx.seed = data
    ctx.jira_project = data["jira"]["project"]
    ctx.current_user_id = data["workspace"]["currentUserId"]
    ctx.next_decision_start = data["nextDecisionNumber"]
    ctx.gate_cache.clear()

    people = {p["id"]: p for p in data["people"]}
    jira_updated = {i["key"]: minutes_ago(i["minsAgo"]) for i in data["jira"]["issues"]}
    attachments: List[Dict[str, Any]] = []

    with ctx.uow() as s:
        for p in data["people"]:
            s.add(
                Person(
                    id=p["id"],
                    name=p["name"],
                    role=p["role"],
                    org=p.get("org", ""),
                    initials=p["initials"],
                    external=p.get("external", False),
                    is_ai=p.get("isAi", False),
                )
            )
        s.flush()

        for order, p in enumerate(data["parts"]):
            review = p["review"]
            part = Part(
                number=p["number"],
                sort_order=order,
                name=p["name"],
                rev=p["rev"],
                assembly=p["assembly"],
                model=p["model"],
                material=p["material"],
                finish=p["finish"],
                process=p["process"],
                cad_files=p.get("cadFiles", []),
                review_title=review["title"],
                review_stage=review["stage"],
                review_due=minutes_from_now(review["dueInMins"]),
            )
            s.add(part)
            s.flush()
            for r in p["reviewers"]:
                s.add(
                    Reviewer(
                        part_number=p["number"],
                        role=r["role"],
                        person_id=r["personId"],
                        status=r["status"],
                        due=minutes_from_now(r["dueInMins"]) if "dueInMins" in r else None,
                        completed_at=minutes_ago(r["completedMinsAgo"]) if "completedMinsAgo" in r else None,
                    )
                )
            for f in p["feedback"]:
                created = minutes_ago(f["minsAgo"])
                resolved_at = minutes_ago(f["resolvedMinsAgo"]) if "resolvedMinsAgo" in f else None
                waived_at = minutes_ago(f["waivedMinsAgo"]) if "waivedMinsAgo" in f else None
                pin = f.get("pin")
                s.add(
                    Feedback(
                        id=f["id"],
                        part_number=p["number"],
                        number=f["number"],
                        title=f["title"],
                        body=f["body"],
                        priority=f["priority"],
                        category=f["category"],
                        status=f["status"],
                        source=f["source"],
                        triage=f.get("triage"),
                        citation=f.get("citation"),
                        author_id=f.get("authorId"),
                        owner_id=f.get("ownerId"),
                        pin=pin,
                        sheet_ref=f.get("sheetRef"),
                        jira_key=f.get("jiraKey"),
                        jira_status=f.get("jiraStatus"),
                        jira_updated_at=jira_updated.get(f.get("jiraKey", ""), None),
                        sync_state="synced" if f.get("jiraKey") else "none",
                        resolved_at=resolved_at,
                        resolved_by=people[f["resolvedById"]]["name"] if f.get("resolvedById") else None,
                        waiver_reason=f.get("waiverReason"),
                        waived_by_id=f.get("waivedById"),
                        waived_at=waived_at,
                        dismiss_reason=f.get("dismissReason"),
                        dismissed_by_id=f.get("dismissedById"),
                        created_at=created,
                        updated_at=max(d for d in (created, resolved_at, waived_at) if d is not None),
                    )
                )
                s.flush()
                for c in f.get("thread", []):
                    author = people[c["authorId"]]
                    s.add(
                        Comment(
                            feedback_id=f["id"],
                            author_id=author["id"],
                            author_label=author["name"],
                            at=minutes_ago(c["minsAgo"]),
                            text=c["text"],
                        )
                    )
        s.flush()

        # Parts that were released before the demo starts get their decision
        # and review record, exactly as if the gate had approved them.
        for p in data["parts"]:
            if not p.get("releasedDecisionId"):
                continue
            part = s.get(Part, p["number"])
            decided_at = minutes_ago(p["releasedMinsAgo"] + 2)
            checks = policy_engine.evaluate(ctx.policy, policy_state(s, part))["checks"]
            requested_by = next(
                (people[pr["requestedById"]]["name"] for pr in data["windchill"]["promotionRequests"] if pr["id"] == p["releasedPromotionId"]),
                None,
            )
            record = build_record(
                ctx,
                s,
                part,
                decision_id=p["releasedDecisionId"],
                decided_at=decided_at,
                promotion_request_id=p["releasedPromotionId"],
                requested_by=requested_by,
                checks=checks,
            )
            s.add(
                GateDecision(
                    id=p["releasedDecisionId"],
                    part_number=part.number,
                    rev=part.rev,
                    at=decided_at,
                    outcome="approved",
                    promotion_request_id=p["releasedPromotionId"],
                    requested_by=requested_by,
                    checks=checks,
                    snapshot_hash=record["snapshotHash"],
                    record=record,
                )
            )
            part.released_at = minutes_ago(p["releasedMinsAgo"])
            part.released_decision_id = p["releasedDecisionId"]
            attachments.append(
                {
                    "part": part.number,
                    "filename": record_filename(record),
                    "content": render_record_html(record),
                    "mime": "text/html",
                    "at": part.released_at,
                }
            )

        for h in sorted(data.get("history", []), key=lambda x: -x["minsAgo"]):
            s.add(
                LogEntry(
                    at=minutes_ago(h["minsAgo"]),
                    system=h["system"],
                    direction=h["direction"],
                    level=h["level"],
                    title=h["title"],
                    detail=h.get("detail"),
                    ref=h.get("ref"),
                    part_number=h.get("part"),
                    status_code=h.get("statusCode"),
                    latency_ms=h.get("latencyMs"),
                    tag=h.get("tag"),
                )
            )
        s.flush()
        add_log(
            s,
            system="gate",
            direction="internal",
            level="info",
            title=f"Connected to Jira ({data['jira']['project']}) and Windchill. {len(data['parts'])} parts in review.",
            detail="Demo data loaded. Webhooks are signed with HMAC-SHA256.",
            tag="boot",
        )

    ctx.jira.reset(data)
    ctx.windchill.reset(data, attachments)

    with ctx.uow() as s:
        for p in data["parts"]:
            refresh_gate(ctx, s, p["number"])
