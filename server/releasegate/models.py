"""Database schema.

SQLite for the demo; nothing here is SQLite-specific, so pointing
RG_DATABASE_URL at Postgres is a config change.
"""

from __future__ import annotations

from datetime import datetime
from typing import Any, Optional

from sqlalchemy import (
    JSON,
    Boolean,
    DateTime,
    ForeignKey,
    Integer,
    String,
    Text,
    UniqueConstraint,
)
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column


class Base(DeclarativeBase):
    pass


class Person(Base):
    __tablename__ = "people"

    id: Mapped[str] = mapped_column(String(40), primary_key=True)
    name: Mapped[str] = mapped_column(String(80))
    role: Mapped[str] = mapped_column(String(80))
    org: Mapped[str] = mapped_column(String(80), default="")
    initials: Mapped[str] = mapped_column(String(4))
    external: Mapped[bool] = mapped_column(Boolean, default=False)
    is_ai: Mapped[bool] = mapped_column(Boolean, default=False)


class Part(Base):
    """A part at its current revision, as reviewed in CoLab."""

    __tablename__ = "parts"

    number: Mapped[str] = mapped_column(String(20), primary_key=True)
    sort_order: Mapped[int] = mapped_column(Integer, default=0)
    name: Mapped[str] = mapped_column(String(120))
    rev: Mapped[str] = mapped_column(String(8))
    assembly: Mapped[str] = mapped_column(String(120))
    model: Mapped[str] = mapped_column(String(20))
    material: Mapped[str] = mapped_column(String(80))
    finish: Mapped[str] = mapped_column(String(80))
    process: Mapped[str] = mapped_column(String(80))
    cad_files: Mapped[list] = mapped_column(JSON, default=list)
    review_title: Mapped[str] = mapped_column(String(160))
    review_stage: Mapped[str] = mapped_column(String(60))
    review_due: Mapped[Optional[datetime]] = mapped_column(DateTime, nullable=True)
    # Set when Windchill confirms the lifecycle change, not when we approve.
    released_at: Mapped[Optional[datetime]] = mapped_column(DateTime, nullable=True)
    released_decision_id: Mapped[Optional[str]] = mapped_column(String(12), nullable=True)
    # Approved by the gate, waiting for Windchill to confirm.
    pending_decision_id: Mapped[Optional[str]] = mapped_column(String(12), nullable=True)


class Reviewer(Base):
    """A requested review on the current revision (one per role)."""

    __tablename__ = "reviewers"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    part_number: Mapped[str] = mapped_column(ForeignKey("parts.number"), index=True)
    role: Mapped[str] = mapped_column(String(40))
    person_id: Mapped[str] = mapped_column(ForeignKey("people.id"))
    status: Mapped[str] = mapped_column(String(20))  # pending | complete
    due: Mapped[Optional[datetime]] = mapped_column(DateTime, nullable=True)
    completed_at: Mapped[Optional[datetime]] = mapped_column(DateTime, nullable=True)
    nudged_at: Mapped[Optional[datetime]] = mapped_column(DateTime, nullable=True)


class Feedback(Base):
    __tablename__ = "feedback"

    id: Mapped[str] = mapped_column(String(12), primary_key=True)
    part_number: Mapped[str] = mapped_column(ForeignKey("parts.number"), index=True)
    number: Mapped[int] = mapped_column(Integer)
    title: Mapped[str] = mapped_column(String(200))
    body: Mapped[str] = mapped_column(Text)
    priority: Mapped[str] = mapped_column(String(12))  # critical | high | medium | low
    category: Mapped[str] = mapped_column(String(40))
    # open | in_progress | resolved | waived | dismissed
    status: Mapped[str] = mapped_column(String(16))
    source: Mapped[str] = mapped_column(String(8))  # human | ai
    triage: Mapped[Optional[str]] = mapped_column(String(12), nullable=True)
    citation: Mapped[Optional[str]] = mapped_column(String(200), nullable=True)
    author_id: Mapped[Optional[str]] = mapped_column(ForeignKey("people.id"), nullable=True)
    owner_id: Mapped[Optional[str]] = mapped_column(ForeignKey("people.id"), nullable=True)
    pin: Mapped[Optional[dict]] = mapped_column(JSON, nullable=True)
    sheet_ref: Mapped[Optional[str]] = mapped_column(String(60), nullable=True)

    jira_key: Mapped[Optional[str]] = mapped_column(String(20), nullable=True, index=True)
    jira_status: Mapped[Optional[str]] = mapped_column(String(20), nullable=True)
    jira_updated_at: Mapped[Optional[datetime]] = mapped_column(DateTime, nullable=True)
    # none | pending | synced | error
    sync_state: Mapped[str] = mapped_column(String(10), default="none")

    resolved_at: Mapped[Optional[datetime]] = mapped_column(DateTime, nullable=True)
    resolved_by: Mapped[Optional[str]] = mapped_column(String(120), nullable=True)
    waiver_reason: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    waived_by_id: Mapped[Optional[str]] = mapped_column(ForeignKey("people.id"), nullable=True)
    waived_at: Mapped[Optional[datetime]] = mapped_column(DateTime, nullable=True)
    dismiss_reason: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    dismissed_by_id: Mapped[Optional[str]] = mapped_column(ForeignKey("people.id"), nullable=True)

    created_at: Mapped[datetime] = mapped_column(DateTime)
    updated_at: Mapped[datetime] = mapped_column(DateTime)
    version: Mapped[int] = mapped_column(Integer, default=1)


class Comment(Base):
    __tablename__ = "comments"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    feedback_id: Mapped[str] = mapped_column(ForeignKey("feedback.id"), index=True)
    author_id: Mapped[Optional[str]] = mapped_column(ForeignKey("people.id"), nullable=True)
    author_label: Mapped[str] = mapped_column(String(120))
    at: Mapped[datetime] = mapped_column(DateTime)
    text: Mapped[str] = mapped_column(Text)
    kind: Mapped[str] = mapped_column(String(12), default="comment")  # comment | system


class AuditEntry(Base):
    __tablename__ = "audit"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    at: Mapped[datetime] = mapped_column(DateTime, index=True)
    actor: Mapped[str] = mapped_column(String(120))
    action: Mapped[str] = mapped_column(String(60))
    part_number: Mapped[Optional[str]] = mapped_column(String(20), nullable=True, index=True)
    entity: Mapped[str] = mapped_column(String(40))
    entity_id: Mapped[str] = mapped_column(String(40))
    detail: Mapped[Optional[str]] = mapped_column(Text, nullable=True)


class OutboxMessage(Base):
    """A change that must reach an external system.

    Written in the same transaction as the change itself, then delivered by a
    background worker with retries. Messages that share an ordering_key are
    delivered strictly in order.
    """

    __tablename__ = "outbox"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    created_at: Mapped[datetime] = mapped_column(DateTime)
    topic: Mapped[str] = mapped_column(String(40))
    ordering_key: Mapped[str] = mapped_column(String(60), index=True)
    part_number: Mapped[Optional[str]] = mapped_column(String(20), nullable=True, index=True)
    label: Mapped[str] = mapped_column(String(200))
    payload: Mapped[dict] = mapped_column(JSON)
    # pending | in_flight | retrying | delivered | dead
    status: Mapped[str] = mapped_column(String(12), default="pending", index=True)
    attempts: Mapped[int] = mapped_column(Integer, default=0)
    max_attempts: Mapped[int] = mapped_column(Integer, default=6)
    next_attempt_at: Mapped[datetime] = mapped_column(DateTime)
    last_error: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    last_status: Mapped[Optional[int]] = mapped_column(Integer, nullable=True)
    delivered_at: Mapped[Optional[datetime]] = mapped_column(DateTime, nullable=True)


class DeliveryAttempt(Base):
    __tablename__ = "delivery_attempts"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    message_id: Mapped[int] = mapped_column(ForeignKey("outbox.id"), index=True)
    attempt: Mapped[int] = mapped_column(Integer)
    at: Mapped[datetime] = mapped_column(DateTime)
    ok: Mapped[bool] = mapped_column(Boolean)
    error: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    traces: Mapped[list] = mapped_column(JSON, default=list)


class InboundWebhook(Base):
    """Every webhook we received, with what we did about it."""

    __tablename__ = "inbound_webhooks"
    __table_args__ = (UniqueConstraint("source", "delivery_id", name="uq_webhook_delivery"),)

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    source: Mapped[str] = mapped_column(String(20))
    delivery_id: Mapped[str] = mapped_column(String(80))
    received_at: Mapped[datetime] = mapped_column(DateTime)
    event_type: Mapped[str] = mapped_column(String(60))
    # applied | echo | stale | ignored | rejected
    outcome: Mapped[str] = mapped_column(String(12))
    detail: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    payload: Mapped[Optional[dict]] = mapped_column(JSON, nullable=True)


class GateDecision(Base):
    """The gate's answer to one Windchill promotion request."""

    __tablename__ = "gate_decisions"

    id: Mapped[str] = mapped_column(String(12), primary_key=True)
    part_number: Mapped[str] = mapped_column(ForeignKey("parts.number"), index=True)
    rev: Mapped[str] = mapped_column(String(8))
    at: Mapped[datetime] = mapped_column(DateTime)
    outcome: Mapped[str] = mapped_column(String(10))  # approved | rejected
    promotion_request_id: Mapped[Optional[str]] = mapped_column(String(20), nullable=True)
    requested_by: Mapped[Optional[str]] = mapped_column(String(120), nullable=True)
    checks: Mapped[list] = mapped_column(JSON, default=list)
    snapshot_hash: Mapped[str] = mapped_column(String(80))
    record: Mapped[Optional[dict]] = mapped_column(JSON, nullable=True)


class LogEntry(Base):
    """What the integration log in the UI shows."""

    __tablename__ = "log_entries"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    at: Mapped[datetime] = mapped_column(DateTime, index=True)
    system: Mapped[str] = mapped_column(String(12))  # jira | windchill | gate | colab | notify
    direction: Mapped[str] = mapped_column(String(10))  # out | in | internal
    level: Mapped[str] = mapped_column(String(8))  # ok | info | warn | error
    title: Mapped[str] = mapped_column(String(300))
    detail: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    ref: Mapped[Optional[str]] = mapped_column(String(40), nullable=True)
    part_number: Mapped[Optional[str]] = mapped_column(String(20), nullable=True)
    status_code: Mapped[Optional[int]] = mapped_column(Integer, nullable=True)
    latency_ms: Mapped[Optional[int]] = mapped_column(Integer, nullable=True)
    tag: Mapped[Optional[str]] = mapped_column(String(16), nullable=True)
    meta: Mapped[Optional[Any]] = mapped_column(JSON, nullable=True)


__all__ = [
    "Base",
    "Person",
    "Part",
    "Reviewer",
    "Feedback",
    "Comment",
    "AuditEntry",
    "OutboxMessage",
    "DeliveryAttempt",
    "InboundWebhook",
    "GateDecision",
    "LogEntry",
]
