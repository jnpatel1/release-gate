"""Jira connector (REST v2 shapes, simplified).

Jira has no idempotency keys, so creates are made safe another way: every issue
we create carries the CoLab feedback ID in a custom field, and we search for
that ID before creating. A retry after a lost response finds the issue instead
of making a second one.
"""

from __future__ import annotations

from typing import Any, Dict, List, Optional

import httpx

from .http import DeliveryError, Tracer, basic_auth, call

COLAB_ID_FIELD = "customfield_10042"  # "CoLab Feedback" short-text field

PRIORITY_MAP = {"critical": "Highest", "high": "High", "medium": "Medium", "low": "Low"}


class JiraConnector:
    def __init__(self, client: httpx.AsyncClient, base_url: str, user: str, token: str, timeout: float) -> None:
        self.client = client
        self.base = base_url.rstrip("/")
        self.headers = {"Authorization": basic_auth(user, token), "Accept": "application/json"}
        self.timeout = timeout

    async def _call(self, tracer: Tracer, method: str, path: str, **kw):
        return await call(
            self.client, tracer, method, self.base + path, headers=self.headers, timeout=self.timeout, **kw
        )

    async def find_by_colab_id(self, tracer: Tracer, colab_id: str) -> Optional[Dict[str, Any]]:
        _, body = await self._call(
            tracer,
            "GET",
            "/rest/api/2/search",
            params={"jql": f'cf[10042] = "{colab_id}"', "fields": "status,summary"},
        )
        issues = (body or {}).get("issues", [])
        return issues[0] if issues else None

    async def create_issue(self, tracer: Tracer, fields: Dict[str, Any]) -> Dict[str, Any]:
        _, body = await self._call(tracer, "POST", "/rest/api/2/issue", json_body={"fields": fields}, expect=(201,))
        return body

    async def get_issue(self, tracer: Tracer, key: str) -> Dict[str, Any]:
        _, body = await self._call(tracer, "GET", f"/rest/api/2/issue/{key}", params={"fields": "status,updated"})
        return body

    async def transitions(self, tracer: Tracer, key: str) -> List[Dict[str, Any]]:
        _, body = await self._call(tracer, "GET", f"/rest/api/2/issue/{key}/transitions")
        return (body or {}).get("transitions", [])

    async def transition(self, tracer: Tracer, key: str, transition_id: str, resolution: Optional[str]) -> None:
        payload: Dict[str, Any] = {"transition": {"id": transition_id}}
        if resolution:
            payload["fields"] = {"resolution": {"name": resolution}}
        await self._call(tracer, "POST", f"/rest/api/2/issue/{key}/transitions", json_body=payload, expect=(204,))

    async def comments(self, tracer: Tracer, key: str) -> List[Dict[str, Any]]:
        _, body = await self._call(tracer, "GET", f"/rest/api/2/issue/{key}/comment")
        return (body or {}).get("comments", [])

    async def add_comment(self, tracer: Tracer, key: str, text: str) -> None:
        await self._call(tracer, "POST", f"/rest/api/2/issue/{key}/comment", json_body={"body": text}, expect=(201,))

    async def move_to(self, tracer: Tracer, key: str, target: str, resolution: Optional[str]) -> str:
        """Idempotent status change. Returns the status before the move."""
        issue = await self.get_issue(tracer, key)
        current = issue["fields"]["status"]["name"]
        if current == target:
            return current
        options = await self.transitions(tracer, key)
        match = next((t for t in options if t["to"]["name"] == target), None)
        if match is None:
            raise DeliveryError(f"Jira has no transition from {current} to {target}", retryable=False)
        await self.transition(tracer, key, match["id"], resolution)
        return current
