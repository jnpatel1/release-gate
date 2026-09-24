"""A small stand-in for Jira Cloud.

Implements only what the connector and the demo board need, using Jira's REST
v2 shapes: search, create, get, transitions, comments, and signed webhooks.
Chaos switches simulate the failures a real integration has to survive.
"""

from __future__ import annotations

import asyncio
import json
import re
import uuid
from datetime import datetime
from typing import Any, Dict, List, Optional, Tuple

import httpx
from fastapi import APIRouter, Request
from fastapi.responses import JSONResponse, Response

from ..config import INTEGRATION_ACCOUNT_ID, INTEGRATION_DISPLAY_NAME
from ..security import sign
from ..timeutil import iso, minutes_ago, utcnow

STATUSES = ["To Do", "In Progress", "Done"]
TRANSITION_IDS = {"To Do": "11", "In Progress": "21", "Done": "31"}
STATUS_CATEGORY = {"To Do": "new", "In Progress": "indeterminate", "Done": "done"}
COLAB_FIELD = "customfield_10042"


class JiraMock:
    def __init__(self, ctx) -> None:
        self.ctx = ctx
        self.issues: Dict[str, Dict[str, Any]] = {}
        self.people: Dict[str, Dict[str, str]] = {}
        self.project = "ENG"
        self.project_name = ""
        self.next_number = 1
        self.chaos = {"outage": False, "lost_responses": False, "duplicate_webhooks": False, "slow": False}
        self.webhooks_sent = 0

    # ------------------------------------------------------------- state

    def reset(self, seed: Dict[str, Any]) -> None:
        cfg = seed["jira"]
        self.project = cfg["project"]
        self.project_name = cfg.get("projectName", cfg["project"])
        self.next_number = cfg["nextNumber"]
        self.people = {p["id"]: {"accountId": p["id"], "displayName": p["name"]} for p in seed["people"]}
        self.issues = {}
        self.chaos = {k: False for k in self.chaos}
        self.webhooks_sent = 0
        for raw in cfg["issues"]:
            at = minutes_ago(raw["minsAgo"])
            number = int(raw["key"].split("-")[1])
            self.issues[raw["key"]] = {
                "id": str(10000 + number),
                "key": raw["key"],
                "summary": raw["summary"],
                "description": raw.get("description", ""),
                "status": raw["status"],
                "resolution": raw.get("resolution"),
                "priority": raw.get("priority", "Medium"),
                "assignee": raw.get("assigneeId"),
                "labels": ["colab", "design-review"] if raw.get("colabId") else [],
                "colab_id": raw.get("colabId"),
                "created": at,
                "updated": at,
                "comments": [],
            }

    def issue_json(self, issue: Dict[str, Any]) -> Dict[str, Any]:
        assignee = self.people.get(issue["assignee"]) if issue.get("assignee") else None
        return {
            "id": issue["id"],
            "key": issue["key"],
            "self": f"{self.ctx.settings.jira_url}/rest/api/2/issue/{issue['id']}",
            "fields": {
                "summary": issue["summary"],
                "description": issue["description"],
                "status": {
                    "name": issue["status"],
                    "statusCategory": {"key": STATUS_CATEGORY[issue["status"]]},
                },
                "resolution": {"name": issue["resolution"]} if issue.get("resolution") else None,
                "priority": {"name": issue["priority"]},
                "assignee": assignee,
                "labels": issue["labels"],
                COLAB_FIELD: issue.get("colab_id"),
                "created": iso(issue["created"]),
                "updated": iso(issue["updated"]),
            },
        }

    # ----------------------------------------------------------- helpers

    def actor(self, request: Request) -> Optional[Tuple[str, str]]:
        """Who is calling: a person using the board, or the integration."""
        mock_user = request.headers.get("X-Mock-User")
        if mock_user and mock_user in self.people:
            p = self.people[mock_user]
            return p["accountId"], p["displayName"]
        if request.headers.get("Authorization", "").startswith("Basic "):
            return INTEGRATION_ACCOUNT_ID, INTEGRATION_DISPLAY_NAME
        return None

    async def gate(self, request: Request) -> Optional[Response]:
        """Apply chaos and auth. Returns an error response or None."""
        if self.chaos["slow"]:
            await asyncio.sleep(self.ctx.settings.slow_network_s)
        who = self.actor(request)
        if who is None:
            return JSONResponse({"errorMessages": ["You are not authenticated."]}, status_code=401)
        if self.chaos["outage"] and who[0] == INTEGRATION_ACCOUNT_ID:
            return JSONResponse(
                {"errorMessages": ["Service unavailable. Try again shortly."]},
                status_code=503,
                headers={"Retry-After": "2"},
            )
        return None

    def emit(self, event: str, issue: Dict[str, Any], who: Tuple[str, str], changelog: List[Dict[str, Any]]) -> None:
        payload = {
            "timestamp": int(utcnow().timestamp() * 1000),
            "webhookEvent": event,
            "issue_event_type_name": "issue_created" if event == "jira:issue_created" else "issue_generic",
            "user": {"accountId": who[0], "displayName": who[1]},
            "issue": self.issue_json(issue),
            "changelog": {"items": changelog},
        }
        body = json.dumps(payload).encode()
        headers = {
            "Content-Type": "application/json",
            "X-Atlassian-Webhook-Identifier": str(uuid.uuid4()),
            "X-Hub-Signature": sign(self.ctx.settings.jira_webhook_secret, body),
        }
        copies = 2 if self.chaos["duplicate_webhooks"] else 1
        delay = self.ctx.settings.webhook_delay_s
        for i in range(copies):
            self.ctx.spawn(lambda: self._deliver(body, headers), delay=delay + i * 0.3, name="jira-webhook")

    async def _deliver(self, body: bytes, headers: Dict[str, str]) -> None:
        url = f"{self.ctx.settings.base_url}/webhooks/jira"
        for attempt in range(3):
            try:
                resp = await self.ctx.http.post(url, content=body, headers=headers, timeout=5)
                self.webhooks_sent += 1
                if resp.status_code < 500:
                    return
            except httpx.HTTPError:
                pass
            await asyncio.sleep(0.8 * (attempt + 1))

    def search(self, jql: str) -> List[Dict[str, Any]]:
        results = list(self.issues.values())
        project = re.search(r"project\s*=\s*\"?(\w+)\"?", jql, re.I)
        if project:
            results = [i for i in results if i["key"].startswith(project.group(1) + "-")]
        colab = re.search(r"cf\[10042\]\s*=\s*\"([^\"]+)\"", jql)
        if colab:
            results = [i for i in results if i.get("colab_id") == colab.group(1)]
        results.sort(key=lambda i: i["updated"], reverse=True)
        return results


router = APIRouter()


def _mock(request: Request) -> JiraMock:
    return request.app.state.ctx.jira


def _not_found(key: str) -> JSONResponse:
    return JSONResponse({"errorMessages": [f"Issue {key} does not exist."]}, status_code=404)


@router.get("/rest/api/2/search")
async def search(request: Request, jql: str = "", maxResults: int = 100):
    jm = _mock(request)
    if (err := await jm.gate(request)) is not None:
        return err
    found = jm.search(jql)[:maxResults]
    return {"total": len(found), "issues": [jm.issue_json(i) for i in found]}


@router.post("/rest/api/2/issue", status_code=201)
async def create_issue(request: Request):
    jm = _mock(request)
    if (err := await jm.gate(request)) is not None:
        return err
    body = await request.json()
    fields = body.get("fields", {})
    if not fields.get("summary"):
        return JSONResponse({"errors": {"summary": "You must specify a summary of the issue."}}, status_code=400)
    who = jm.actor(request)
    number = jm.next_number
    jm.next_number += 1
    key = f"{jm.project}-{number}"
    now = utcnow()
    issue = {
        "id": str(10000 + number),
        "key": key,
        "summary": fields["summary"],
        "description": fields.get("description", ""),
        "status": "To Do",
        "resolution": None,
        "priority": (fields.get("priority") or {}).get("name", "Medium"),
        "assignee": None,
        "labels": fields.get("labels", []),
        "colab_id": fields.get(COLAB_FIELD),
        "created": now,
        "updated": now,
        "comments": [],
    }
    jm.issues[key] = issue
    jm.emit("jira:issue_created", issue, who, [])
    if jm.chaos["lost_responses"] and who[0] == INTEGRATION_ACCOUNT_ID:
        # The issue exists, but the caller never hears about it.
        return JSONResponse({"errorMessages": ["Gateway timeout"]}, status_code=504)
    return {"id": issue["id"], "key": key, "self": f"{request.app.state.ctx.settings.jira_url}/rest/api/2/issue/{issue['id']}"}


@router.get("/rest/api/2/issue/{key}")
async def get_issue(request: Request, key: str):
    jm = _mock(request)
    if (err := await jm.gate(request)) is not None:
        return err
    issue = jm.issues.get(key)
    return jm.issue_json(issue) if issue else _not_found(key)


@router.get("/rest/api/2/issue/{key}/transitions")
async def list_transitions(request: Request, key: str):
    jm = _mock(request)
    if (err := await jm.gate(request)) is not None:
        return err
    issue = jm.issues.get(key)
    if not issue:
        return _not_found(key)
    return {
        "transitions": [
            {"id": TRANSITION_IDS[s], "name": s, "to": {"name": s}} for s in STATUSES if s != issue["status"]
        ]
    }


@router.post("/rest/api/2/issue/{key}/transitions", status_code=204)
async def do_transition(request: Request, key: str):
    jm = _mock(request)
    if (err := await jm.gate(request)) is not None:
        return err
    issue = jm.issues.get(key)
    if not issue:
        return _not_found(key)
    body = await request.json()
    tid = str((body.get("transition") or {}).get("id", ""))
    target = next((s for s, i in TRANSITION_IDS.items() if i == tid), None)
    if target is None or target == issue["status"]:
        return JSONResponse(
            {"errorMessages": ["It seems that you have tried to perform a transition that is not valid."]},
            status_code=400,
        )
    before = issue["status"]
    issue["status"] = target
    if target == "Done":
        issue["resolution"] = ((body.get("fields") or {}).get("resolution") or {}).get("name", "Done")
    else:
        issue["resolution"] = None
    issue["updated"] = utcnow()
    jm.emit(
        "jira:issue_updated",
        issue,
        jm.actor(request),
        [{"field": "status", "fromString": before, "toString": target}],
    )
    return Response(status_code=204)


@router.get("/rest/api/2/issue/{key}/comment")
async def list_comments(request: Request, key: str):
    jm = _mock(request)
    if (err := await jm.gate(request)) is not None:
        return err
    issue = jm.issues.get(key)
    if not issue:
        return _not_found(key)
    return {"total": len(issue["comments"]), "comments": issue["comments"]}


@router.post("/rest/api/2/issue/{key}/comment", status_code=201)
async def add_comment(request: Request, key: str):
    jm = _mock(request)
    if (err := await jm.gate(request)) is not None:
        return err
    issue = jm.issues.get(key)
    if not issue:
        return _not_found(key)
    body = await request.json()
    who = jm.actor(request)
    comment = {
        "id": str(20000 + sum(len(i["comments"]) for i in jm.issues.values()) + 1),
        "author": {"accountId": who[0], "displayName": who[1]},
        "body": body.get("body", ""),
        "created": iso(utcnow()),
    }
    issue["comments"].append(comment)
    issue["updated"] = utcnow()
    return comment


@router.get("/_chaos")
async def get_chaos(request: Request):
    return _mock(request).chaos
