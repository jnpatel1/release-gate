"""Integration log and audit trail helpers."""

from __future__ import annotations

from typing import Any, Dict, Optional

from sqlalchemy.orm import Session

from .models import AuditEntry, LogEntry
from .timeutil import iso, utcnow


def log_to_dict(e: LogEntry) -> Dict[str, Any]:
    return {
        "id": e.id,
        "at": iso(e.at),
        "system": e.system,
        "direction": e.direction,
        "level": e.level,
        "title": e.title,
        "detail": e.detail,
        "ref": e.ref,
        "partNumber": e.part_number,
        "statusCode": e.status_code,
        "latencyMs": e.latency_ms,
        "tag": e.tag,
        "meta": e.meta,
    }


def add_log(
    s: Session,
    *,
    system: str,
    direction: str,
    level: str,
    title: str,
    detail: Optional[str] = None,
    ref: Optional[str] = None,
    part: Optional[str] = None,
    status_code: Optional[int] = None,
    latency_ms: Optional[int] = None,
    tag: Optional[str] = None,
    meta: Any = None,
) -> LogEntry:
    entry = LogEntry(
        at=utcnow(),
        system=system,
        direction=direction,
        level=level,
        title=title,
        detail=detail,
        ref=ref,
        part_number=part,
        status_code=status_code,
        latency_ms=latency_ms,
        tag=tag,
        meta=meta,
    )
    s.add(entry)
    s.flush()
    s.info["events"].append(("log", log_to_dict(entry)))
    return entry


def audit(
    s: Session,
    *,
    actor: str,
    action: str,
    part: Optional[str],
    entity: str,
    entity_id: str,
    detail: Optional[str] = None,
) -> None:
    s.add(
        AuditEntry(
            at=utcnow(),
            actor=actor,
            action=action,
            part_number=part,
            entity=entity,
            entity_id=entity_id,
            detail=detail,
        )
    )


def mark_changed(s: Session, part: Optional[str]) -> None:
    events = s.info["events"]
    payload = {"part": part}
    if ("changed", payload) not in events:
        events.append(("changed", payload))
