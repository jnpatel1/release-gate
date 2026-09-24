"""The policy engine against the shared test vectors (the TS port runs the same)."""

from __future__ import annotations

import copy
import json
from pathlib import Path

import pytest

from releasegate.policy import evaluate

SHARED = Path(__file__).resolve().parents[2] / "shared"
POLICY = json.loads((SHARED / "policy.json").read_text())
CASES = json.loads((SHARED / "policy_cases.json").read_text())


@pytest.mark.parametrize("case", CASES["cases"], ids=[c["name"] for c in CASES["cases"]])
def test_policy_case(case):
    policy = copy.deepcopy(POLICY)
    policy.update(case.get("policyOverrides", {}))
    state = {"reviews": CASES["baseReviews"], "sync": {"pending": 0, "failed": 0}, **case["state"]}
    result = evaluate(policy, state)
    expect = case["expect"]

    assert result["outcome"] == expect["outcome"]
    assert [c["id"] for c in result["checks"] if c["status"] == "fail"] == expect["failing"]
    assert [c["id"] for c in result["checks"] if c["status"] == "warn"] == expect["warnings"]
    assert result["blockingPassed"] == expect["blockingPassed"]
    assert result["itemsToClear"] == expect["itemsToClear"]


def test_unknown_rule_type_is_an_error():
    policy = {"rules": [{"id": "x", "type": "nope", "title": "x"}]}
    with pytest.raises(ValueError):
        evaluate(policy, {"feedback": []})


def test_summaries_name_the_items():
    result = evaluate(
        POLICY,
        {
            "feedback": [
                {"id": "F-2", "priority": "critical", "status": "open", "source": "human"},
                {"id": "F-1", "priority": "critical", "status": "open", "source": "human"},
            ],
            "reviews": CASES["baseReviews"],
        },
    )
    critical = next(c for c in result["checks"] if c["id"] == "critical-closed")
    assert critical["itemIds"] == ["F-1", "F-2"]
    assert critical["summary"] == "2 open: F-1, F-2"
