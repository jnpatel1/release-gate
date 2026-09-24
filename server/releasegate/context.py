"""Application context: one object that owns every long-lived dependency.

Passing this around (instead of module globals) keeps tests isolated: each test
builds its own app, database and mock systems.
"""

from __future__ import annotations

import asyncio
import json
import logging
from contextlib import contextmanager
from typing import Any, Callable, Dict, Iterator, List, Optional, Set, Tuple

import httpx
from sqlalchemy import create_engine, event
from sqlalchemy.orm import Session, sessionmaker

from .config import SHARED_DIR, Settings
from .events import EventHub
from .models import Base

log = logging.getLogger("releasegate")


def load_json(name: str) -> Dict[str, Any]:
    with open(SHARED_DIR / name, encoding="utf-8") as fh:
        return json.load(fh)


class AppContext:
    def __init__(self, settings: Settings) -> None:
        self.settings = settings
        self.policy: Dict[str, Any] = load_json("policy.json")
        self.hub = EventHub()
        self.http: Optional[httpx.AsyncClient] = None

        connect_args = {}
        if settings.database_url.startswith("sqlite"):
            connect_args = {"check_same_thread": False, "timeout": 5}
        self.engine = create_engine(settings.database_url, connect_args=connect_args, future=True)
        if settings.database_url.startswith("sqlite"):

            @event.listens_for(self.engine, "connect")
            def _sqlite_pragmas(dbapi_conn, _record):  # pragma: no cover - trivial
                cur = dbapi_conn.cursor()
                cur.execute("PRAGMA journal_mode=WAL")
                cur.execute("PRAGMA foreign_keys=ON")
                cur.execute("PRAGMA busy_timeout=5000")
                cur.close()

        self.Session = sessionmaker(self.engine, expire_on_commit=False, future=True)

        # Mock external systems (created in app.py to avoid import cycles).
        self.jira: Any = None
        self.windchill: Any = None
        self.worker: Any = None

        # Last gate outcome per part, so we only announce real changes.
        self.gate_cache: Dict[str, Tuple[str, int]] = {}
        self._tasks: Set[asyncio.Task] = set()

    # ------------------------------------------------------------------ db

    def create_schema(self, drop: bool = False) -> None:
        if drop:
            Base.metadata.drop_all(self.engine)
        Base.metadata.create_all(self.engine)

    @contextmanager
    def uow(self) -> Iterator[Session]:
        """Unit of work: one transaction, events published only after commit.

        Never hold one of these open across an `await` that calls an external
        system. SQLite would keep the write lock while we wait.
        """
        session = self.Session()
        session.info["events"] = []
        session.info["wake_worker"] = False
        try:
            yield session
            session.commit()
        except Exception:
            session.rollback()
            raise
        finally:
            session.close()
        for type_, data in session.info["events"]:
            self.hub.publish(type_, data)
        if session.info["wake_worker"] and self.worker is not None:
            self.worker.wake()

    # --------------------------------------------------------------- tasks

    def spawn(self, coro_factory: Callable[[], Any], delay: float = 0.0, name: str = "") -> None:
        """Run a coroutine in the background, optionally after a delay."""

        async def runner() -> None:
            try:
                if delay:
                    await asyncio.sleep(delay)
                await coro_factory()
            except asyncio.CancelledError:
                raise
            except Exception:  # pragma: no cover - logged for debugging
                log.exception("background task %s failed", name or coro_factory)

        task = asyncio.get_running_loop().create_task(runner(), name=name or None)
        self._tasks.add(task)
        task.add_done_callback(self._tasks.discard)

    async def cancel_tasks(self) -> None:
        tasks: List[asyncio.Task] = [t for t in self._tasks if not t.done()]
        for t in tasks:
            t.cancel()
        for t in tasks:
            try:
                await t
            except (asyncio.CancelledError, Exception):
                pass
        self._tasks.clear()

    async def settle(self, timeout: float = 5.0) -> None:
        """Wait for background work to finish (used by tests)."""
        loop = asyncio.get_running_loop()
        deadline = loop.time() + timeout
        while loop.time() < deadline:
            busy = [t for t in self._tasks if not t.done()]
            if not busy and (self.worker is None or self.worker.drained()):
                return
            await asyncio.sleep(0.02)
