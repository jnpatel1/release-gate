"""Release policy engine.

Pure functions only: a policy (rules as data) plus a snapshot of one part
revision's review state in, a gate result out. No database and no HTTP, so the
rules are easy to test and easy to reason about in an audit.

The browser build ships a TypeScript port of this module. Both are checked
against the same test vectors in shared/policy_cases.json.
"""

from __future__ import annotations

from typing import Any, Callable, Dict, List

Json = Dict[str, Any]

OPEN_STATUSES = ("open", "in_progress")


def _blocking_statuses(allow_waiver: bool) -> set:
    statuses = set(OPEN_STATUSES)
    if not allow_waiver:
        # A waiver doesn't clear an item when the policy forbids waivers
        # for that priority (critical items need a real fix).
        statuses.add("waived")
    return statuses


def _untriaged_ai(item: Json) -> bool:
    return item.get("source") == "ai" and item.get("triage") == "untriaged"


def _join(ids: List[str], limit: int = 3) -> str:
    shown = ", ".join(ids[:limit])
    extra = len(ids) - limit
    return f"{shown} +{extra} more" if extra > 0 else shown


def rule_no_open_feedback(params: Json, state: Json, policy: Json) -> Json:
    priorities = set(params.get("priorities", []))
    statuses = _blocking_statuses(params.get("allowWaiver", True))
    offending = [
        f
        for f in state.get("feedback", [])
        if f.get("priority") in priorities
        and f.get("status") in statuses
        # Untriaged AI findings are handled by their own rule. They only count
        # against priority rules once a person has accepted them.
        and not _untriaged_ai(f)
    ]
    ids = sorted(f["id"] for f in offending)
    if not ids:
        summary = "None open"
    else:
        summary = f"{len(ids)} open: {_join(ids)}"
        if any(f.get("status") == "waived" for f in offending):
            summary += " (policy doesn't allow waivers here)"
    return {"itemIds": ids, "summary": summary}


def rule_ai_findings_triaged(params: Json, state: Json, policy: Json) -> Json:
    ids = sorted(f["id"] for f in state.get("feedback", []) if _untriaged_ai(f))
    summary = "All findings triaged" if not ids else f"{len(ids)} awaiting a person: {_join(ids)}"
    return {"itemIds": ids, "summary": summary}


def rule_requested_reviews_complete(params: Json, state: Json, policy: Json) -> Json:
    required = params.get("roles", [])
    by_role = {r["role"]: r for r in state.get("reviews", [])}
    waiting: List[str] = []
    not_requested: List[str] = []
    for role in required:
        review = by_role.get(role)
        if review is None:
            not_requested.append(role)
        elif review.get("status") != "complete":
            waiting.append(role)
    parts = []
    if waiting:
        parts.append("Waiting on " + ", ".join(waiting))
    if not_requested:
        parts.append(", ".join(not_requested) + " not requested")
    summary = "; ".join(parts) if parts else "All requested reviews complete"
    return {"roles": waiting + not_requested, "summary": summary}


def rule_integrations_in_sync(params: Json, state: Json, policy: Json) -> Json:
    sync = state.get("sync", {})
    pending = int(sync.get("pending", 0))
    failed = int(sync.get("failed", 0))
    ids = list(sync.get("deliveryIds", []))
    if not pending and not failed:
        summary = "Every change confirmed by Jira and Windchill"
    else:
        bits = []
        if pending:
            bits.append(f"{pending} pending")
        if failed:
            bits.append(f"{failed} failed")
        summary = ", ".join(bits) + " (release can't use unconfirmed data)"
    return {"deliveryIds": ids, "summary": summary, "_offending": pending + failed}


RULES: Dict[str, Callable[[Json, Json, Json], Json]] = {
    "no_open_feedback": rule_no_open_feedback,
    "ai_findings_triaged": rule_ai_findings_triaged,
    "requested_reviews_complete": rule_requested_reviews_complete,
    "integrations_in_sync": rule_integrations_in_sync,
}


def evaluate(policy: Json, state: Json) -> Json:
    """Evaluate every rule and roll the results up into a gate outcome."""
    checks: List[Json] = []
    to_clear: set = set()
    for rule in policy["rules"]:
        fn = RULES.get(rule["type"])
        if fn is None:
            raise ValueError(f"Unknown rule type: {rule['type']}")
        result = fn(rule.get("params", {}), state, policy)
        blocking = bool(rule.get("blocking", True))
        if rule["type"] == "integrations_in_sync" and not policy.get("failClosedOnSync", True):
            blocking = False
        item_ids = result.get("itemIds", [])
        roles = result.get("roles", [])
        deliveries = result.get("deliveryIds", [])
        offending = len(item_ids) + len(roles) + result.get("_offending", 0)
        status = "pass" if offending == 0 else ("fail" if blocking else "warn")
        if status == "fail":
            to_clear.update(item_ids)
            to_clear.update(f"review:{r}" for r in roles)
            if result.get("_offending", 0):
                if deliveries:
                    to_clear.update(f"delivery:{d}" for d in deliveries)
                else:
                    to_clear.add(f"sync:{rule['id']}")
        checks.append(
            {
                "id": rule["id"],
                "type": rule["type"],
                "title": rule["title"],
                "blocking": blocking,
                "status": status,
                "summary": result["summary"],
                "itemIds": item_ids,
                "roles": roles,
                "deliveryIds": deliveries,
            }
        )

    blocking_checks = [c for c in checks if c["blocking"]]
    passed = sum(1 for c in blocking_checks if c["status"] == "pass")
    outcome = "READY" if passed == len(blocking_checks) else "BLOCKED"
    return {
        "outcome": outcome,
        "blockingTotal": len(blocking_checks),
        "blockingPassed": passed,
        "itemsToClear": len(to_clear),
        "checks": checks,
    }
