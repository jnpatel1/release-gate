"""HTTP calls to external systems, with a trace of every request for the log."""

from __future__ import annotations

import base64
import json
import time
from dataclasses import dataclass, field
from typing import Any, Dict, Iterable, List, Optional, Tuple

import httpx

RETRYABLE_STATUS = {408, 425, 429}


class DeliveryError(Exception):
    """A call to an external system failed.

    `retryable` separates "try again later" (timeouts, 429, 5xx) from "this
    request is wrong and will never succeed" (other 4xx), which goes straight
    to the dead-letter state so a person can look at it.
    """

    def __init__(
        self,
        message: str,
        *,
        retryable: bool,
        status: Optional[int] = None,
        retry_after: Optional[float] = None,
    ) -> None:
        super().__init__(message)
        self.message = message
        self.retryable = retryable
        self.status = status
        self.retry_after = retry_after


@dataclass
class Tracer:
    """Collects request/response pairs made while handling one delivery."""

    calls: List[Dict[str, Any]] = field(default_factory=list)

    @property
    def last_status(self) -> Optional[int]:
        for call in reversed(self.calls):
            if call.get("status") is not None:
                return call["status"]
        return None

    @property
    def total_ms(self) -> int:
        return sum(int(c.get("latencyMs") or 0) for c in self.calls)


def basic_auth(user: str, secret: str) -> str:
    token = base64.b64encode(f"{user}:{secret}".encode()).decode()
    return f"Basic {token}"


def _redact(headers: Dict[str, str]) -> Dict[str, str]:
    out = {}
    for k, v in headers.items():
        if k.lower() in ("authorization", "cookie"):
            out[k] = v.split(" ")[0] + " ••••••" if " " in v else "••••••"
        else:
            out[k] = v
    return out


def _body(resp: httpx.Response) -> Any:
    if not resp.content:
        return None
    try:
        return resp.json()
    except (json.JSONDecodeError, ValueError):
        text = resp.text
        return text if len(text) < 600 else text[:600] + "…"


def _retry_after(resp: httpx.Response) -> Optional[float]:
    value = resp.headers.get("Retry-After")
    if not value:
        return None
    try:
        return float(value)
    except ValueError:
        return None


async def call(
    client: httpx.AsyncClient,
    tracer: Tracer,
    method: str,
    url: str,
    *,
    headers: Optional[Dict[str, str]] = None,
    json_body: Any = None,
    params: Optional[Dict[str, str]] = None,
    expect: Iterable[int] = (200, 201, 204),
    timeout: float = 4.0,
) -> Tuple[httpx.Response, Any]:
    headers = dict(headers or {})
    if json_body is not None:
        headers.setdefault("Content-Type", "application/json")
    trace: Dict[str, Any] = {
        "method": method,
        "url": url + (("?" + str(httpx.QueryParams(params))) if params else ""),
        "requestHeaders": _redact(headers),
        "requestBody": json_body,
        "status": None,
        "responseBody": None,
        "latencyMs": None,
        "error": None,
    }
    tracer.calls.append(trace)
    started = time.perf_counter()
    try:
        resp = await client.request(
            method,
            url,
            headers=headers,
            content=json.dumps(json_body).encode() if json_body is not None else None,
            params=params,
            timeout=timeout,
        )
    except httpx.TimeoutException:
        trace["latencyMs"] = int((time.perf_counter() - started) * 1000)
        trace["error"] = f"No response within {timeout:.0f} s"
        raise DeliveryError(f"No response within {timeout:.0f} s", retryable=True)
    except httpx.TransportError as exc:
        trace["latencyMs"] = int((time.perf_counter() - started) * 1000)
        trace["error"] = f"Connection failed: {exc.__class__.__name__}"
        raise DeliveryError(f"Couldn't connect ({exc.__class__.__name__})", retryable=True)

    trace["latencyMs"] = int((time.perf_counter() - started) * 1000)
    trace["status"] = resp.status_code
    body = _body(resp)
    trace["responseBody"] = body
    if resp.status_code in tuple(expect):
        return resp, body

    reason = resp.reason_phrase or "Error"
    detail = ""
    if isinstance(body, dict):
        msgs = body.get("errorMessages") or body.get("error") or body.get("message")
        if isinstance(msgs, list):
            detail = "; ".join(str(m) for m in msgs)
        elif msgs:
            detail = str(msgs.get("message") if isinstance(msgs, dict) else msgs)
    if detail.strip().lower() == reason.lower():
        detail = ""  # "504 Gateway Timeout: Gateway timeout" says it twice
    message = f"{resp.status_code} {reason}" + (f": {detail}" if detail else "")
    retryable = resp.status_code in RETRYABLE_STATUS or resp.status_code >= 500
    trace["error"] = message
    raise DeliveryError(message, retryable=retryable, status=resp.status_code, retry_after=_retry_after(resp))
