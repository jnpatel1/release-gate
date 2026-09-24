"""Transactional outbox and its delivery worker.

A change and the message announcing it are committed together, so a crash can't
leave one without the other. The worker then delivers each message with retries
(exponential backoff with jitter, honouring Retry-After). Messages with the same
ordering key go out strictly in order: a Jira transition never overtakes the
create for that issue.
"""

from __future__ import annotations

import asyncio
import logging
import random
from datetime import timedelta
from typing import Any, Dict, Optional, Tuple

from sqlalchemy import select
from sqlalchemy.orm import Session

from .connectors.http import DeliveryError, Tracer
from .gate import refresh_gate
from .handlers import HANDLERS, system_for
from .logbook import add_log, mark_changed
from .models import DeliveryAttempt, Feedback, OutboxMessage
from .timeutil import utcnow

log = logging.getLogger("releasegate.outbox")

UNDELIVERED = ("pending", "in_flight", "retrying", "dead")


def enqueue(
    s: Session,
    *,
    topic: str,
    ordering_key: str,
    part_number: Optional[str],
    label: str,
    payload: Dict[str, Any],
    max_attempts: int,
) -> OutboxMessage:
    msg = OutboxMessage(
        created_at=utcnow(),
        topic=topic,
        ordering_key=ordering_key,
        part_number=part_number,
        label=label,
        payload=payload,
        status="pending",
        attempts=0,
        max_attempts=max_attempts,
        next_attempt_at=utcnow(),
    )
    s.add(msg)
    s.flush()
    s.info["wake_worker"] = True
    if ordering_key.startswith("feedback:"):
        refresh_sync_state(s, ordering_key.split(":", 1)[1])
    return msg


def refresh_sync_state(s: Session, feedback_id: str) -> None:
    s.flush()
    f = s.get(Feedback, feedback_id)
    if f is None:
        return
    statuses = s.scalars(
        select(OutboxMessage.status).where(
            OutboxMessage.ordering_key == f"feedback:{feedback_id}",
            OutboxMessage.status.in_(UNDELIVERED),
        )
    ).all()
    if "dead" in statuses:
        f.sync_state = "error"
    elif statuses:
        f.sync_state = "pending"
    elif f.jira_key:
        f.sync_state = "synced"
    else:
        f.sync_state = "none"


def backoff_seconds(settings, attempt: int, retry_after: Optional[float] = None, rand=random.random) -> float:
    """Exponential backoff (base * 2^(n-1), capped) with 25% jitter."""
    ceiling = min(settings.retry_cap_s, settings.retry_base_s * (2 ** (attempt - 1)))
    delay = ceiling * (0.75 + 0.25 * rand())
    if retry_after:
        delay = max(delay, min(retry_after, settings.retry_cap_s * 2))
    return round(delay, 2)


class OutboxWorker:
    def __init__(self, ctx) -> None:
        self.ctx = ctx
        self._wake = asyncio.Event()
        self._task: Optional[asyncio.Task] = None
        self._busy = False

    def start(self) -> None:
        self._task = asyncio.get_running_loop().create_task(self._run(), name="outbox-worker")

    async def stop(self) -> None:
        if self._task:
            self._task.cancel()
            try:
                await self._task
            except (asyncio.CancelledError, Exception):
                pass
            self._task = None

    def wake(self) -> None:
        self._wake.set()

    def drained(self) -> bool:
        """Nothing in flight and nothing waiting to be (re)tried. Dead letters don't count."""
        if self._busy:
            return False
        with self.ctx.Session() as s:
            waiting = s.scalar(
                select(OutboxMessage.id).where(OutboxMessage.status.in_(("pending", "in_flight", "retrying"))).limit(1)
            )
        return waiting is None

    # ---------------------------------------------------------------- loop

    async def _run(self) -> None:
        while True:
            try:
                self._wake.clear()
                msg_id, wait = self._next_due()
                if msg_id is None:
                    try:
                        await asyncio.wait_for(self._wake.wait(), timeout=wait)
                    except asyncio.TimeoutError:
                        pass
                    continue
                self._busy = True
                try:
                    await self._deliver(msg_id)
                finally:
                    self._busy = False
            except asyncio.CancelledError:
                raise
            except Exception:  # pragma: no cover - keep the worker alive
                log.exception("outbox worker iteration failed")
                await asyncio.sleep(0.5)

    def _next_due(self) -> Tuple[Optional[int], float]:
        with self.ctx.Session() as s:
            rows = s.execute(
                select(
                    OutboxMessage.id,
                    OutboxMessage.ordering_key,
                    OutboxMessage.status,
                    OutboxMessage.next_attempt_at,
                )
                .where(OutboxMessage.status.in_(UNDELIVERED))
                .order_by(OutboxMessage.id)
            ).all()
        now = utcnow()
        head_of_key: Dict[str, int] = {}
        for row in rows:
            head_of_key.setdefault(row.ordering_key, row.id)
        soonest = 1.0
        for row in rows:
            if row.status not in ("pending", "retrying"):
                continue
            if head_of_key[row.ordering_key] != row.id:
                continue  # an older message for this key hasn't been delivered yet
            if row.next_attempt_at <= now:
                return row.id, 0.0
            soonest = min(soonest, (row.next_attempt_at - now).total_seconds())
        return None, max(0.02, soonest)

    async def _deliver(self, msg_id: int) -> None:
        ctx = self.ctx
        with ctx.uow() as s:
            msg = s.get(OutboxMessage, msg_id)
            msg.status = "in_flight"
            msg.attempts += 1
            attempt, topic, payload = msg.attempts, msg.topic, dict(msg.payload)
            mark_changed(s, msg.part_number)

        tracer = Tracer()
        error: Optional[DeliveryError] = None
        result = None
        try:
            result = await HANDLERS[topic](ctx, payload, tracer)
        except DeliveryError as exc:
            error = exc
        except Exception as exc:  # pragma: no cover - unexpected bug in a handler
            log.exception("handler %s crashed", topic)
            error = DeliveryError(f"Unexpected error: {exc}", retryable=True)

        with ctx.uow() as s:
            msg = s.get(OutboxMessage, msg_id)
            system = system_for(topic)
            s.add(
                DeliveryAttempt(
                    message_id=msg.id,
                    attempt=attempt,
                    at=utcnow(),
                    ok=error is None,
                    error=error.message if error else None,
                    traces=tracer.calls,
                )
            )
            meta = {"messageId": msg.id, "topic": topic, "attempt": attempt, "calls": tracer.calls}
            feedback_id = msg.ordering_key.split(":", 1)[1] if msg.ordering_key.startswith("feedback:") else None

            if error is None:
                msg.status = "delivered"
                msg.delivered_at = utcnow()
                msg.last_error = None
                if feedback_id and result.feedback_updates:
                    f = s.get(Feedback, feedback_id)
                    for field, value in result.feedback_updates.items():
                        setattr(f, field, value)
                add_log(
                    s,
                    system=system,
                    direction="out",
                    level="ok",
                    title=result.summary,
                    detail=f"{msg.label}. Attempt {attempt}." if attempt > 1 else msg.label,
                    ref=result.ref or feedback_id,
                    part=msg.part_number,
                    status_code=tracer.last_status,
                    latency_ms=tracer.total_ms,
                    tag=result.tag,
                    meta=meta,
                )
            elif error.retryable and attempt < msg.max_attempts:
                delay = backoff_seconds(ctx.settings, attempt, error.retry_after)
                msg.status = "retrying"
                msg.next_attempt_at = utcnow() + timedelta(seconds=delay)
                msg.last_error = error.message
                msg.last_status = error.status
                meta["retryInS"] = delay
                meta["nextAttemptAt"] = msg.next_attempt_at.isoformat() + "Z"
                add_log(
                    s,
                    system=system,
                    direction="out",
                    level="warn",
                    title=f"{msg.label}: {error.message}",
                    detail=f"Attempt {attempt} of {msg.max_attempts}. Retrying in {delay:.1f} s.",
                    ref=feedback_id or msg.part_number,
                    part=msg.part_number,
                    status_code=error.status,
                    latency_ms=tracer.total_ms,
                    tag="retry",
                    meta=meta,
                )
            else:
                msg.status = "dead"
                msg.last_error = error.message
                msg.last_status = error.status
                why = (
                    f"Gave up after {attempt} attempts."
                    if error.retryable
                    else "Not retryable: the request itself was rejected."
                )
                add_log(
                    s,
                    system=system,
                    direction="out",
                    level="error",
                    title=f"{msg.label}: {error.message}",
                    detail=f"{why} Waiting for someone to retry it.",
                    ref=feedback_id or msg.part_number,
                    part=msg.part_number,
                    status_code=error.status,
                    latency_ms=tracer.total_ms,
                    tag="dead",
                    meta=meta,
                )

            if feedback_id:
                refresh_sync_state(s, feedback_id)
            if msg.part_number:
                refresh_gate(ctx, s, msg.part_number)
