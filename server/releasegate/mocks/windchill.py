"""A small stand-in for PTC Windchill.

Parts with lifecycle states, promotion requests, and attachments, at paths
shaped like Windchill REST Services (OData). A promotion request calls an
external validation hook (the Release Gate) before approving, and fails closed:
if the hook can't answer, the request is held rather than approved.
"""

from __future__ import annotations

import asyncio
import json
import uuid
from typing import Any, Dict, List, Optional

import httpx
from fastapi import APIRouter, Request
from fastapi.responses import HTMLResponse, JSONResponse, Response

from ..security import sign
from ..timeutil import iso, minutes_ago, utcnow

ODATA = "/Windchill/servlet/odata"
STATE_DISPLAY = {"INWORK": "In Work", "UNDERREVIEW": "Under Review", "RELEASED": "Released"}


class WindchillMock:
    def __init__(self, ctx) -> None:
        self.ctx = ctx
        self.parts: Dict[str, Dict[str, Any]] = {}
        self.promotions: List[Dict[str, Any]] = []
        self.next_pr = 1
        self.chaos = {"outage": False}

    def reset(self, seed: Dict[str, Any], attachments: Optional[List[Dict[str, Any]]] = None) -> None:
        self.chaos = {"outage": False}
        self.parts = {}
        people = {p["id"]: p["name"] for p in seed["people"]}
        for i, p in enumerate(seed["parts"]):
            files = [
                {
                    "FileName": name,
                    "MimeType": "application/octet-stream",
                    "Size": 180_000 + 37_000 * j + 11_000 * i,
                    "CreatedOn": iso(minutes_ago(9000 - 400 * i)),
                    "Content": None,
                }
                for j, name in enumerate(p.get("cadFiles", []))
            ]
            released_at = minutes_ago(p["releasedMinsAgo"]) if p.get("releasedMinsAgo") else None
            self.parts[p["number"]] = {
                "ID": f"OR:wt.part.WTPart:{224_310 + 17 * i}",
                "Number": p["number"],
                "Name": p["name"].upper(),
                "Revision": p["rev"],
                "Version": f"{p['rev']}.{2 + i % 3}",
                "State": p["plmState"],
                "Attachments": files,
                "History": (
                    [{"At": iso(released_at), "From": "INWORK", "To": "RELEASED", "By": "Promotion " + p.get("releasedPromotionId", "")}]
                    if released_at
                    else []
                ),
            }
        wc = seed["windchill"]
        self.next_pr = wc["nextPromotionNumber"]
        self.promotions = [
            {
                "ID": pr["id"],
                "PartNumber": pr["partNumber"],
                "Revision": pr["revision"],
                "TargetState": "RELEASED",
                "Status": pr["status"],
                "RequestedBy": people.get(pr["requestedById"], pr["requestedById"]),
                "CreatedOn": iso(minutes_ago(pr["minsAgo"])),
                "Reasons": pr.get("reasons", []),
                "GateDecisionId": pr.get("decisionId"),
            }
            for pr in wc["promotionRequests"]
        ]
        for att in attachments or []:
            self._put_attachment(att["part"], att["filename"], att["content"], att["mime"], att.get("at"))

    def _put_attachment(self, number: str, filename: str, content: str, mime: str, at=None) -> bool:
        part = self.parts[number]
        existing = next((a for a in part["Attachments"] if a["FileName"] == filename), None)
        entry = {
            "FileName": filename,
            "MimeType": mime,
            "Size": len(content.encode()),
            "CreatedOn": iso(at or utcnow()),
            "Content": content,
        }
        if existing:
            existing.update(entry)
            return False
        part["Attachments"].append(entry)
        return True

    def part_json(self, part: Dict[str, Any]) -> Dict[str, Any]:
        return {
            "ID": part["ID"],
            "Number": part["Number"],
            "Name": part["Name"],
            "Revision": part["Revision"],
            "Version": part["Version"],
            "State": {"Value": part["State"], "Display": STATE_DISPLAY[part["State"]]},
            "Attachments": [{k: v for k, v in a.items() if k != "Content"} for a in part["Attachments"]],
            "History": part["History"],
        }

    def check_auth(self, request: Request) -> Optional[Response]:
        if request.headers.get("X-Mock-User"):
            return None
        if not request.headers.get("Authorization", "").startswith("Basic "):
            return JSONResponse({"error": {"code": "401", "message": "Authentication required"}}, status_code=401)
        if self.chaos["outage"]:
            return JSONResponse({"error": {"code": "503", "message": "Server is unavailable"}}, status_code=503)
        return None

    async def validate_with_gate(self, pr: Dict[str, Any]) -> Dict[str, Any]:
        s = self.ctx.settings
        payload = {
            "promotionRequestId": pr["ID"],
            "partNumber": pr["PartNumber"],
            "revision": pr["Revision"],
            "targetState": pr["TargetState"],
            "requestedBy": pr["RequestedBy"],
            "requestedAt": pr["CreatedOn"],
        }
        body = json.dumps(payload).encode()
        resp = await self.ctx.http.post(
            f"{s.base_url}/webhooks/plm/promotion-check",
            content=body,
            headers={"Content-Type": "application/json", "X-PLM-Signature": sign(s.plm_shared_secret, body)},
            timeout=5,
        )
        resp.raise_for_status()
        return resp.json()

    def announce_state_change(self, part: Dict[str, Any], before: str, pr_id: str) -> None:
        s = self.ctx.settings
        payload = {
            "eventId": str(uuid.uuid4()),
            "type": "LIFECYCLE_STATE_CHANGED",
            "partNumber": part["Number"],
            "revision": part["Revision"],
            "from": before,
            "to": part["State"],
            "promotionRequestId": pr_id,
            "at": iso(utcnow()),
        }
        body = json.dumps(payload).encode()
        headers = {"Content-Type": "application/json", "X-PLM-Signature": sign(s.plm_shared_secret, body)}

        async def deliver() -> None:
            for attempt in range(3):
                try:
                    r = await self.ctx.http.post(f"{s.base_url}/webhooks/plm/events", content=body, headers=headers, timeout=5)
                    if r.status_code < 500:
                        return
                except httpx.HTTPError:
                    pass
                await asyncio.sleep(0.8 * (attempt + 1))

        self.ctx.spawn(deliver, delay=0.3, name="windchill-event")


router = APIRouter()


def _mock(request: Request) -> WindchillMock:
    return request.app.state.ctx.windchill


@router.get(ODATA + "/ProdMgmt/Parts")
async def list_parts(request: Request):
    wm = _mock(request)
    if (err := wm.check_auth(request)) is not None:
        return err
    return {"value": [wm.part_json(p) for p in wm.parts.values()]}


@router.get(ODATA + "/ProdMgmt/Parts('{number}')")
async def get_part(request: Request, number: str):
    wm = _mock(request)
    if (err := wm.check_auth(request)) is not None:
        return err
    part = wm.parts.get(number)
    if not part:
        return JSONResponse({"error": {"code": "404", "message": f"No part {number}"}}, status_code=404)
    return wm.part_json(part)


@router.get(ODATA + "/ChangeMgmt/PromotionRequests")
async def list_promotions(request: Request):
    wm = _mock(request)
    if (err := wm.check_auth(request)) is not None:
        return err
    return {"value": list(reversed(wm.promotions))}


@router.post(ODATA + "/ChangeMgmt/PromotionRequests", status_code=201)
async def create_promotion(request: Request):
    wm = _mock(request)
    if (err := wm.check_auth(request)) is not None:
        return err
    body = await request.json()
    number = body.get("PartNumber")
    part = wm.parts.get(number)
    if not part:
        return JSONResponse({"error": {"code": "404", "message": f"No part {number}"}}, status_code=404)
    if part["State"] == "RELEASED":
        return JSONResponse(
            {"error": {"code": "409", "message": f"{number} Rev {part['Revision']} is already Released"}},
            status_code=409,
        )
    pr = {
        "ID": f"PR-{wm.next_pr:05d}",
        "PartNumber": number,
        "Revision": part["Revision"],
        "TargetState": body.get("TargetState", "RELEASED"),
        "Status": "OPEN",
        "RequestedBy": body.get("RequestedBy", "unknown"),
        "CreatedOn": iso(utcnow()),
        "Reasons": [],
        "GateDecisionId": None,
    }
    wm.next_pr += 1
    wm.promotions.append(pr)

    try:
        verdict = await wm.validate_with_gate(pr)
    except (httpx.HTTPError, ValueError) as exc:
        # Fail closed: without an answer from the gate, nothing gets released.
        pr["Status"] = "ON_HOLD"
        pr["Reasons"] = [f"Release Gate didn't answer ({exc.__class__.__name__}); promotion held."]
        return pr

    pr["GateDecisionId"] = verdict.get("decisionId")
    if verdict.get("decision") == "APPROVE":
        pr["Status"] = "APPROVED"
        before = part["State"]
        part["State"] = "RELEASED"
        part["History"].append({"At": iso(utcnow()), "From": before, "To": "RELEASED", "By": f"Promotion {pr['ID']}"})
        wm.announce_state_change(part, before, pr["ID"])
    else:
        pr["Status"] = "REJECTED"
        pr["Reasons"] = verdict.get("reasons", [])
    return pr


@router.put(ODATA + "/ProdMgmt/Parts('{number}')/Attachments('{filename}')")
async def put_attachment(request: Request, number: str, filename: str):
    wm = _mock(request)
    if (err := wm.check_auth(request)) is not None:
        return err
    if number not in wm.parts:
        return JSONResponse({"error": {"code": "404", "message": f"No part {number}"}}, status_code=404)
    body = await request.json()
    created = wm._put_attachment(number, filename, body.get("Content", ""), body.get("MimeType", "text/plain"))
    return JSONResponse({"FileName": filename, "Created": created}, status_code=201 if created else 200)


@router.get(ODATA + "/ProdMgmt/Parts('{number}')/Attachments('{filename}')/$value")
async def get_attachment(request: Request, number: str, filename: str):
    wm = _mock(request)
    part = wm.parts.get(number)
    att = next((a for a in (part or {}).get("Attachments", []) if a["FileName"] == filename), None)
    if not att or att.get("Content") is None:
        return JSONResponse({"error": {"code": "404", "message": "No content for that attachment"}}, status_code=404)
    if att["MimeType"] == "text/html":
        return HTMLResponse(att["Content"])
    return Response(att["Content"], media_type=att["MimeType"])
