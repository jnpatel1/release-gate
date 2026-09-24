"""In-process pub/sub that feeds the browser over Server-Sent Events."""

from __future__ import annotations

import asyncio
import itertools
from typing import Any, Dict, Set

from .timeutil import iso, utcnow


class EventHub:
    def __init__(self) -> None:
        self._subscribers: Set[asyncio.Queue] = set()
        self._seq = itertools.count(1)

    def subscribe(self) -> asyncio.Queue:
        queue: asyncio.Queue = asyncio.Queue(maxsize=1000)
        self._subscribers.add(queue)
        return queue

    def unsubscribe(self, queue: asyncio.Queue) -> None:
        self._subscribers.discard(queue)

    def publish(self, type_: str, data: Dict[str, Any]) -> None:
        event = {"id": next(self._seq), "type": type_, "at": iso(utcnow()), "data": data}
        for queue in list(self._subscribers):
            try:
                queue.put_nowait(event)
            except asyncio.QueueFull:
                # A stalled browser tab shouldn't back up the server. It will
                # resync from GraphQL on reconnect.
                pass

    @property
    def subscriber_count(self) -> int:
        return len(self._subscribers)
