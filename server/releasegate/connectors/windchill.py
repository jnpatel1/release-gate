"""Windchill connector.

Paths follow the shape of Windchill REST Services (OData). The mock implements
only what this integration uses.
"""

from __future__ import annotations

from typing import Any, Dict

import httpx

from .http import Tracer, basic_auth, call

ODATA = "/Windchill/servlet/odata"


class WindchillConnector:
    def __init__(self, client: httpx.AsyncClient, base_url: str, user: str, password: str, timeout: float) -> None:
        self.client = client
        self.base = base_url.rstrip("/")
        self.headers = {"Authorization": basic_auth(user, password), "Accept": "application/json"}
        self.timeout = timeout

    async def request_promotion(self, tracer: Tracer, part_number: str, requested_by: str) -> Dict[str, Any]:
        # Windchill calls the gate's validation hook before answering, so this
        # call covers the whole round trip. Give it room.
        _, body = await call(
            self.client,
            tracer,
            "POST",
            f"{self.base}{ODATA}/ChangeMgmt/PromotionRequests",
            headers=self.headers,
            json_body={"PartNumber": part_number, "TargetState": "RELEASED", "RequestedBy": requested_by},
            expect=(201,),
            timeout=self.timeout + 6,
        )
        return body

    async def put_attachment(self, tracer: Tracer, part_number: str, filename: str, content: str, mime: str) -> None:
        await call(
            self.client,
            tracer,
            "PUT",
            f"{self.base}{ODATA}/ProdMgmt/Parts('{part_number}')/Attachments('{filename}')",
            headers=self.headers,
            json_body={"Content": content, "MimeType": mime, "Description": "Design review record from CoLab"},
            expect=(200, 201),
            timeout=self.timeout,
        )
