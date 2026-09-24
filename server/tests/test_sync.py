"""Two-way Jira sync: outbox delivery, retries, idempotency, webhooks."""

from __future__ import annotations

import json

import pytest
from sqlalchemy import func, select

from releasegate.config import Settings
from releasegate.models import InboundWebhook, OutboxMessage
from releasegate.outbox import backoff_seconds
from releasegate.security import sign

RESOLVE = "mutation($id: String!, $note: String) { resolveFeedback(id: $id, note: $note) }"
WAIVE = "mutation($id: String!, $r: String!) { waiveFeedback(id: $id, reason: $r) }"
TRIAGE = "mutation($id: String!, $d: String!, $n: String) { triageFinding(id: $id, decision: $d, note: $n) }"
CHAOS = """mutation($o: Boolean, $l: Boolean, $d: Boolean) {
  setChaos(jiraOutage: $o, jiraLostResponses: $l, duplicateWebhooks: $d) { jiraOutage }
}"""


async def test_resolving_in_colab_closes_the_jira_issue(api, ctx):
    await api.ok(RESOLVE, {"id": "F-101", "note": "Gusset is 4.0 mm in C.1"})
    await api.settle()

    issue = ctx.jira.issues["ENG-141"]
    assert issue["status"] == "Done"
    assert any("Gusset is 4.0 mm in C.1" in c["body"] for c in issue["comments"])

    fb = await api.feedback("F-101")
    assert fb["status"] == "resolved"
    assert fb["jiraStatus"] == "Done"
    assert fb["syncState"] == "synced"

    # Jira's webhook for our own change is recognised as an echo.
    with ctx.Session() as s:
        outcomes = s.scalars(select(InboundWebhook.outcome)).all()
    assert "echo" in outcomes
    assert "applied" not in outcomes


async def test_closing_in_jira_resolves_the_feedback(api, ctx):
    await api.jira_move("ENG-142", "Done", user="p-maya")
    await api.settle()

    fb = await api.feedback("F-102")
    assert fb["status"] == "resolved"
    assert fb["resolvedBy"] == "Maya Chen (in Jira)"
    part = await api.part()
    critical = next(c for c in part["gate"]["checks"] if c["id"] == "critical-closed")
    assert critical["itemIds"] == ["F-101"]


async def test_duplicate_webhooks_are_applied_once(api, ctx):
    await api.ok(CHAOS, {"d": True})
    await api.jira_move("ENG-142", "Done")
    await api.settle()

    with ctx.Session() as s:
        rows = s.scalars(select(InboundWebhook)).all()
    # Two deliveries were sent with the same identifier; only one row exists.
    assert ctx.jira.webhooks_sent == 2
    assert len(rows) == 1
    assert rows[0].outcome == "applied"
    data = await api.ok("{ log(limit: 50) { tag title } }")
    assert any(e["tag"] == "duplicate" for e in data["log"])


async def test_webhook_with_bad_signature_is_rejected(client, ctx):
    body = json.dumps({"issue": {"key": "ENG-142", "fields": {"status": {"name": "Done"}}}}).encode()
    r = await client.post(
        "/webhooks/jira",
        content=body,
        headers={"X-Hub-Signature": "sha256=deadbeef", "X-Atlassian-Webhook-Identifier": "abc"},
    )
    assert r.status_code == 401
    with ctx.Session() as s:
        assert s.scalar(select(func.count()).select_from(InboundWebhook)) == 0


async def test_out_of_order_webhook_is_ignored(client, api, ctx):
    payload = {
        "webhookEvent": "jira:issue_updated",
        "user": {"accountId": "p-maya", "displayName": "Maya Chen"},
        "issue": {
            "key": "ENG-142",
            "fields": {"status": {"name": "Done"}, "updated": "2020-01-01T00:00:00.000Z"},
        },
    }
    body = json.dumps(payload).encode()
    r = await client.post(
        "/webhooks/jira",
        content=body,
        headers={
            "X-Hub-Signature": sign(ctx.settings.jira_webhook_secret, body),
            "X-Atlassian-Webhook-Identifier": "old-event",
        },
    )
    assert r.json()["outcome"] == "stale"
    assert (await api.feedback("F-102"))["status"] == "in_progress"


async def test_outage_retries_with_backoff_then_recovers(api, ctx):
    await api.ok(CHAOS, {"o": True})
    await api.ok(WAIVE, {"id": "F-103", "r": "Keep the tight fit for the pilot build; revisit at Rev D."})

    # Let a few attempts fail.
    import asyncio

    await asyncio.sleep(0.4)
    part = await api.part()
    sync = next(c for c in part["gate"]["checks"] if c["id"] == "systems-in-sync")
    assert sync["status"] == "fail"
    assert any(d["attempts"] >= 1 for d in part["deliveries"])
    assert ctx.jira.issues["ENG-143"]["status"] == "In Progress"

    await api.ok(CHAOS, {"o": False})
    await api.settle()
    part = await api.part()
    assert part["deliveries"] == []
    assert ctx.jira.issues["ENG-143"]["status"] == "Done"
    assert ctx.jira.issues["ENG-143"]["resolution"] == "Won't Do"
    sync = next(c for c in part["gate"]["checks"] if c["id"] == "systems-in-sync")
    assert sync["status"] == "pass"


async def test_gives_up_after_max_attempts_and_can_be_retried(api, ctx):
    await api.ok(CHAOS, {"o": True})
    await api.ok(RESOLVE, {"id": "F-101"})
    await api.settle(timeout=8)
    with ctx.Session() as s:
        msg = s.scalar(select(OutboxMessage).where(OutboxMessage.status == "dead"))
    assert msg is not None and msg.attempts == ctx.settings.max_attempts

    await api.ok(CHAOS, {"o": False})
    await api.ok("mutation($id: Int!) { retryDelivery(id: $id) }", {"id": msg.id})
    await api.settle()
    assert ctx.jira.issues["ENG-141"]["status"] == "Done"


async def test_lost_create_response_does_not_duplicate_the_issue(api, ctx):
    await api.ok(CHAOS, {"l": True})
    await api.ok(TRIAGE, {"id": "F-104", "d": "accept"})
    await api.settle()

    matching = [i for i in ctx.jira.issues.values() if i.get("colab_id") == "F-104"]
    assert len(matching) == 1
    fb = await api.feedback("F-104")
    assert fb["jiraKey"] == matching[0]["key"]
    assert fb["syncState"] == "synced"


async def test_transition_waits_for_create_on_the_same_feedback(api, ctx):
    await api.ok(CHAOS, {"o": True})
    await api.ok(TRIAGE, {"id": "F-104", "d": "accept"})
    await api.ok(RESOLVE, {"id": "F-104", "note": "Moved the slots in by 5 mm"})
    import asyncio

    await asyncio.sleep(0.3)
    with ctx.Session() as s:
        msgs = s.scalars(select(OutboxMessage).order_by(OutboxMessage.id)).all()
    topics = [(m.topic, m.status, m.attempts) for m in msgs]
    # Only the create has been attempted; the comment and transition wait their turn.
    assert topics[0][0] == "jira.create_issue" and topics[0][2] >= 1
    assert all(t[2] == 0 for t in topics[1:])

    await api.ok(CHAOS, {"o": False})
    await api.settle()
    fb = await api.feedback("F-104")
    issue = ctx.jira.issues[fb["jiraKey"]]
    assert issue["status"] == "Done"
    assert any("Moved the slots in by 5 mm" in c["body"] for c in issue["comments"])


def test_backoff_grows_and_respects_the_cap():
    s = Settings(retry_base_s=1, retry_cap_s=8)
    lows = [backoff_seconds(s, n, rand=lambda: 0.0) for n in range(1, 7)]
    highs = [backoff_seconds(s, n, rand=lambda: 1.0) for n in range(1, 7)]
    assert highs == [1, 2, 4, 8, 8, 8]
    assert lows == [0.75, 1.5, 3, 6, 6, 6]
    assert backoff_seconds(s, 1, retry_after=5, rand=lambda: 0.0) == 5
