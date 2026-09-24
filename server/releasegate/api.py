"""Plain REST endpoints: health, live event stream, records, reset."""

from __future__ import annotations

import asyncio
import json

from fastapi import APIRouter, Request
from fastapi.responses import HTMLResponse, JSONResponse, StreamingResponse

from . import __version__
from .gate import render_record_html
from .lifecycle import reset_demo
from .models import GateDecision

router = APIRouter()


@router.get("/api/health")
async def health(request: Request):
    ctx = request.app.state.ctx
    return {"ok": True, "mode": "server", "version": __version__, "listeners": ctx.hub.subscriber_count}


@router.get("/api/stream")
async def stream(request: Request):
    """Server-Sent Events: log entries and change notices, as they happen."""
    ctx = request.app.state.ctx
    queue = ctx.hub.subscribe()

    async def events():
        try:
            yield "retry: 1500\n\n"
            yield f"data: {json.dumps({'type': 'hello', 'data': {}})}\n\n"
            while True:
                if await request.is_disconnected():
                    break
                try:
                    event = await asyncio.wait_for(queue.get(), timeout=15)
                    yield f"data: {json.dumps(event, default=str)}\n\n"
                except asyncio.TimeoutError:
                    yield ": keep-alive\n\n"
        finally:
            ctx.hub.unsubscribe(queue)

    return StreamingResponse(
        events(),
        media_type="text/event-stream",
        headers={"Cache-Control": "no-cache", "X-Accel-Buffering": "no"},
    )


@router.get("/api/records/{decision_id}")
async def record_json(request: Request, decision_id: str):
    ctx = request.app.state.ctx
    with ctx.Session() as s:
        d = s.get(GateDecision, decision_id)
        if d is None or d.record is None:
            return JSONResponse({"error": f"No review record for {decision_id}"}, status_code=404)
        return d.record


@router.get("/api/records/{decision_id}/html")
async def record_html(request: Request, decision_id: str):
    ctx = request.app.state.ctx
    with ctx.Session() as s:
        d = s.get(GateDecision, decision_id)
        if d is None or d.record is None:
            return JSONResponse({"error": f"No review record for {decision_id}"}, status_code=404)
        return HTMLResponse(render_record_html(d.record))


@router.post("/api/reset")
async def reset(request: Request):
    await reset_demo(request.app.state.ctx)
    return {"ok": True}
