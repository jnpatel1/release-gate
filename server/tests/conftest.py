from __future__ import annotations

import json
import sys
from pathlib import Path
from typing import Any, Dict, Optional

import httpx
import pytest

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

from releasegate.app import create_app  # noqa: E402
from releasegate.config import Settings  # noqa: E402


@pytest.fixture
async def app(tmp_path):
    settings = Settings(
        base_url="http://testserver",
        database_url=f"sqlite:///{tmp_path / 'test.db'}",
        retry_base_s=0.05,
        retry_cap_s=0.2,
        webhook_delay_s=0.01,
        reviewer_delay_s=0.05,
        http_timeout_s=2,
        slow_network_s=0.01,
        serve_web=False,
    )

    def http_factory(a):
        # Route every outbound call (connector, mocks, webhooks) back into the
        # same ASGI app without opening a socket.
        return httpx.AsyncClient(transport=httpx.ASGITransport(app=a), base_url="http://testserver")

    application = create_app(settings, http_factory=http_factory)
    async with application.router.lifespan_context(application):
        yield application


@pytest.fixture
async def client(app):
    async with httpx.AsyncClient(transport=httpx.ASGITransport(app=app), base_url="http://testserver") as c:
        yield c


@pytest.fixture
def ctx(app):
    return app.state.ctx


class Api:
    """Small helper around the GraphQL endpoint and the mock systems."""

    def __init__(self, client: httpx.AsyncClient, ctx) -> None:
        self.client = client
        self.ctx = ctx

    async def gql(self, query: str, variables: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
        r = await self.client.post("/graphql", json={"query": query, "variables": variables or {}})
        assert r.status_code == 200, r.text
        return r.json()

    async def ok(self, query: str, variables: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
        body = await self.gql(query, variables)
        assert not body.get("errors"), json.dumps(body["errors"], indent=2)
        return body["data"]

    async def part(self, number: str = "BRK-2210") -> Dict[str, Any]:
        data = await self.ok(
            """query($n: String!) { part(number: $n) {
                number rev plmState
                gate { outcome blockingPassed blockingTotal itemsToClear checks { id status summary itemIds roles deliveryIds } decisionId snapshotHash }
                feedback { id status triage jiraKey jiraStatus syncState resolvedBy waiverReason thread { text kind } }
                reviewers { role status }
                deliveries { id status topic attempts }
                decisions { id outcome hasRecord }
            } }""",
            {"n": number},
        )
        return data["part"]

    async def feedback(self, fid: str, number: str = "BRK-2210") -> Dict[str, Any]:
        part = await self.part(number)
        return next(f for f in part["feedback"] if f["id"] == fid)

    async def jira_move(self, key: str, target: str, user: str = "p-maya") -> None:
        ids = {"To Do": "11", "In Progress": "21", "Done": "31"}
        r = await self.client.post(
            f"/mock/jira/rest/api/2/issue/{key}/transitions",
            json={"transition": {"id": ids[target]}},
            headers={"X-Mock-User": user},
        )
        assert r.status_code == 204, r.text

    async def settle(self, timeout: float = 5.0) -> None:
        await self.ctx.settle(timeout)


@pytest.fixture
def api(client, ctx) -> Api:
    return Api(client, ctx)
