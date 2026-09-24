"""The release flow end to end: Windchill asks, the gate answers."""

from __future__ import annotations

import pytest

RELEASE = "mutation($n: String!) { requestRelease(partNumber: $n) { promotionRequestId status reasons decisionId } }"
RESOLVE = "mutation($id: String!, $note: String) { resolveFeedback(id: $id, note: $note) }"
WAIVE = "mutation($id: String!, $r: String!) { waiveFeedback(id: $id, reason: $r) }"
TRIAGE = "mutation($id: String!, $d: String!, $n: String) { triageFinding(id: $id, decision: $d, note: $n) }"
NUDGE = "mutation($n: String!, $r: String!) { nudgeReviewer(partNumber: $n, role: $r) }"


async def clear_everything(api):
    await api.ok(RESOLVE, {"id": "F-101", "note": "Gusset is 4.0 mm in C.1"})
    await api.jira_move("ENG-142", "Done")
    await api.ok(TRIAGE, {"id": "F-104", "d": "dismiss", "n": "Slots sit outside the clamp load path."})
    await api.ok(WAIVE, {"id": "F-103", "r": "Keep the tight fit for the pilot build; revisit at Rev D."})
    await api.ok(NUDGE, {"n": "BRK-2210", "r": "Quality"})
    await api.settle()


async def test_starts_blocked(api):
    part = await api.part()
    gate = part["gate"]
    assert gate["outcome"] == "BLOCKED"
    assert gate["blockingPassed"] == 1
    assert gate["itemsToClear"] == 5
    failing = [c["id"] for c in gate["checks"] if c["status"] == "fail"]
    assert failing == ["critical-closed", "high-dispositioned", "ai-triaged", "reviews-complete"]


async def test_windchill_promotion_is_rejected_while_blocked(api, ctx):
    data = await api.ok(RELEASE, {"n": "BRK-2210"})
    result = data["requestRelease"]
    assert result["status"] == "REJECTED"
    assert any("No open critical feedback" in r for r in result["reasons"])
    assert ctx.windchill.parts["BRK-2210"]["State"] == "INWORK"

    part = await api.part()
    assert part["decisions"][0]["outcome"] == "rejected"
    assert part["gate"]["outcome"] == "BLOCKED"


async def test_full_release(api, ctx):
    await clear_everything(api)
    part = await api.part()
    assert part["gate"]["outcome"] == "READY", part["gate"]["checks"]

    data = await api.ok(RELEASE, {"n": "BRK-2210"})
    assert data["requestRelease"]["status"] == "APPROVED"
    await api.settle()

    part = await api.part()
    assert part["gate"]["outcome"] == "RELEASED"
    assert part["plmState"] == "RELEASED"
    assert part["gate"]["snapshotHash"].startswith("sha256:")
    assert part["decisions"][0]["hasRecord"] is True

    wc_part = ctx.windchill.parts["BRK-2210"]
    assert wc_part["State"] == "RELEASED"
    names = [a["FileName"] for a in wc_part["Attachments"]]
    assert "BRK-2210_RevC_review-record.html" in names

    record = (await api.ok("query($d: String!) { record(decisionId: $d) }", {"d": part["gate"]["decisionId"]}))["record"]
    dispositions = {f["id"]: f["disposition"] for f in record["feedback"]}
    assert dispositions["F-103"].startswith("Waived by Jordan Lee")
    assert dispositions["F-104"].startswith("AI finding dismissed")
    assert dispositions["F-102"] == "Resolved by Maya Chen (in Jira)"


async def test_released_revision_is_frozen(api):
    await clear_everything(api)
    await api.ok(RELEASE, {"n": "BRK-2210"})
    await api.settle()
    body = await api.gql("mutation { reopenFeedback(id: \"F-101\") }")
    assert "is released" in body["errors"][0]["message"]


async def test_second_promotion_request_is_refused_by_windchill(api):
    await clear_everything(api)
    await api.ok(RELEASE, {"n": "BRK-2210"})
    await api.settle()
    body = await api.gql(RELEASE, {"n": "BRK-2210"})
    assert "already released" in body["errors"][0]["message"]


async def test_policy_refuses_critical_waivers(api):
    body = await api.gql(WAIVE, {"id": "F-101", "r": "We'll fix it on the next build"})
    assert "doesn't allow waiving critical" in body["errors"][0]["message"]


async def test_waiver_needs_a_real_reason(api):
    body = await api.gql(WAIVE, {"id": "F-103", "r": "ok"})
    assert "reason" in body["errors"][0]["message"]


async def test_untriaged_ai_finding_cannot_be_resolved(api):
    body = await api.gql(RESOLVE, {"id": "F-104"})
    assert "Triage this AutoReview finding first" in body["errors"][0]["message"]


async def test_ready_part_releases_immediately(api, ctx):
    data = await api.ok(RELEASE, {"n": "PLT-1180"})
    assert data["requestRelease"]["status"] == "APPROVED"
    await api.settle()
    part = await api.part("PLT-1180")
    assert part["gate"]["outcome"] == "RELEASED"


async def test_reset_restores_the_scenario(api, client):
    await api.ok(RESOLVE, {"id": "F-101"})
    await api.settle()
    r = await client.post("/api/reset")
    assert r.status_code == 200
    part = await api.part()
    assert part["gate"]["itemsToClear"] == 5
    assert (await api.feedback("F-101"))["status"] == "open"
