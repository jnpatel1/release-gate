"""GraphQL API for the console (queries and mutations).

External systems talk REST and webhooks; the console talks GraphQL.
Live updates arrive separately over Server-Sent Events (/api/stream).
"""

import logging
from typing import Dict, List, Optional

import strawberry
from sqlalchemy import select
from strawberry.scalars import JSON
from strawberry.types import Info

from . import services
from .gate import feedback_stats, gate_for
from .models import AuditEntry, Comment, Feedback, GateDecision, LogEntry, OutboxMessage, Part, Person, Reviewer
from .services import UserError
from .timeutil import iso

log = logging.getLogger("releasegate.graphql")


def _ctx(info: Info):
    return info.context["request"].app.state.ctx


# ------------------------------------------------------------------- types


@strawberry.type
class PersonT:
    id: str
    name: str
    role: str
    org: str
    initials: str
    external: bool
    is_ai: bool


@strawberry.type
class PinT:
    x: float
    y: float
    z: float
    nx: float
    ny: float
    nz: float


@strawberry.type
class CommentT:
    at: str
    author: Optional[PersonT]
    author_label: str
    text: str
    kind: str


@strawberry.type
class FeedbackT:
    id: str
    number: int
    title: str
    body: str
    priority: str
    category: str
    status: str
    source: str
    triage: Optional[str]
    citation: Optional[str]
    pin: Optional[PinT]
    sheet_ref: Optional[str]
    author: Optional[PersonT]
    owner: Optional[PersonT]
    jira_key: Optional[str]
    jira_status: Optional[str]
    sync_state: str
    waiver_reason: Optional[str]
    waived_by: Optional[PersonT]
    dismiss_reason: Optional[str]
    dismissed_by: Optional[PersonT]
    resolved_by: Optional[str]
    resolved_at: Optional[str]
    created_at: str
    updated_at: str
    thread: List[CommentT]


@strawberry.type
class CheckT:
    id: str
    type: str
    title: str
    blocking: bool
    status: str
    summary: str
    item_ids: List[str]
    roles: List[str]
    delivery_ids: List[str]


@strawberry.type
class GateT:
    outcome: str
    blocking_total: int
    blocking_passed: int
    items_to_clear: int
    checks: List[CheckT]
    released_at: Optional[str]
    decision_id: Optional[str]
    snapshot_hash: Optional[str]


@strawberry.type
class ReviewerT:
    role: str
    status: str
    due: Optional[str]
    completed_at: Optional[str]
    nudged_at: Optional[str]
    person: PersonT


@strawberry.type
class DecisionT:
    id: str
    at: str
    outcome: str
    promotion_request_id: Optional[str]
    requested_by: Optional[str]
    snapshot_hash: str
    checks: List[CheckT]
    has_record: bool


@strawberry.type
class AuditT:
    id: int
    at: str
    actor: str
    action: str
    entity_id: str
    detail: Optional[str]


@strawberry.type
class StatsT:
    total: int
    open: int
    closed: int
    avg_resolve_hours: Optional[float]


@strawberry.type
class ReviewT:
    title: str
    stage: str
    due: Optional[str]


@strawberry.type
class DeliveryT:
    id: int
    topic: str
    label: str
    status: str
    attempts: int
    max_attempts: int
    next_attempt_at: Optional[str]
    last_error: Optional[str]
    ordering_key: str


@strawberry.type
class PartSummaryT:
    number: str
    name: str
    rev: str
    assembly: str
    model: str
    plm_state: str
    gate_outcome: str
    blocking_passed: int
    blocking_total: int
    items_to_clear: int
    open_count: int


@strawberry.type
class PartT:
    number: str
    name: str
    rev: str
    assembly: str
    model: str
    material: str
    finish: str
    process: str
    cad_files: List[str]
    plm_state: str
    review: ReviewT
    gate: GateT
    feedback: List[FeedbackT]
    reviewers: List[ReviewerT]
    decisions: List[DecisionT]
    audit: List[AuditT]
    stats: StatsT
    deliveries: List[DeliveryT]


@strawberry.type
class LogEntryT:
    id: int
    at: str
    system: str
    direction: str
    level: str
    title: str
    detail: Optional[str]
    ref: Optional[str]
    part_number: Optional[str]
    status_code: Optional[int]
    latency_ms: Optional[int]
    tag: Optional[str]
    meta: Optional[JSON]


@strawberry.type
class ChaosT:
    jira_outage: bool
    jira_lost_responses: bool
    duplicate_webhooks: bool
    slow_network: bool


@strawberry.type
class SystemsT:
    jira: str
    windchill: str
    pending: int
    retrying: int
    dead: int
    chaos: ChaosT


@strawberry.type
class WorkspaceT:
    name: str
    program: str
    current_user: PersonT
    policy: JSON


@strawberry.type
class ReleaseResultT:
    promotion_request_id: str
    status: str
    reasons: List[str]
    decision_id: Optional[str]


# -------------------------------------------------------------- converters


def _person(p: Optional[Person]) -> Optional[PersonT]:
    if p is None:
        return None
    return PersonT(id=p.id, name=p.name, role=p.role, org=p.org, initials=p.initials, external=p.external, is_ai=p.is_ai)


def _check(c: Dict) -> CheckT:
    return CheckT(
        id=c["id"],
        type=c.get("type", ""),
        title=c["title"],
        blocking=c["blocking"],
        status=c["status"],
        summary=c["summary"],
        item_ids=c.get("itemIds", []),
        roles=c.get("roles", []),
        delivery_ids=c.get("deliveryIds", []),
    )


def _gate(g: Dict) -> GateT:
    return GateT(
        outcome=g["outcome"],
        blocking_total=g["blockingTotal"],
        blocking_passed=g["blockingPassed"],
        items_to_clear=g.get("itemsToClear", 0),
        checks=[_check(c) for c in g["checks"]],
        released_at=g.get("releasedAt"),
        decision_id=g.get("decisionId"),
        snapshot_hash=g.get("snapshotHash"),
    )


def _plm_state(part: Part) -> str:
    return "RELEASED" if part.released_at else "INWORK"


def _feedback(f: Feedback, people: Dict[str, Person], thread: List[Comment]) -> FeedbackT:
    pin = None
    if f.pin:
        (x, y, z), (nx, ny, nz) = f.pin["p"], f.pin["n"]
        pin = PinT(x=x, y=y, z=z, nx=nx, ny=ny, nz=nz)
    return FeedbackT(
        id=f.id,
        number=f.number,
        title=f.title,
        body=f.body,
        priority=f.priority,
        category=f.category,
        status=f.status,
        source=f.source,
        triage=f.triage,
        citation=f.citation,
        pin=pin,
        sheet_ref=f.sheet_ref,
        author=_person(people.get(f.author_id)),
        owner=_person(people.get(f.owner_id)),
        jira_key=f.jira_key,
        jira_status=f.jira_status,
        sync_state=f.sync_state,
        waiver_reason=f.waiver_reason,
        waived_by=_person(people.get(f.waived_by_id)),
        dismiss_reason=f.dismiss_reason,
        dismissed_by=_person(people.get(f.dismissed_by_id)),
        resolved_by=f.resolved_by,
        resolved_at=iso(f.resolved_at),
        created_at=iso(f.created_at),
        updated_at=iso(f.updated_at),
        thread=[
            CommentT(at=iso(c.at), author=_person(people.get(c.author_id)), author_label=c.author_label, text=c.text, kind=c.kind)
            for c in thread
        ],
    )


# ------------------------------------------------------------------ schema


@strawberry.type
class Query:
    @strawberry.field(description="Workspace, current user and the release policy in force.")
    def workspace(self, info: Info) -> WorkspaceT:
        ctx = _ctx(info)
        with ctx.Session() as s:
            me = s.get(Person, ctx.current_user_id)
            return WorkspaceT(
                name=ctx.seed["workspace"]["name"],
                program=ctx.seed["workspace"]["program"],
                current_user=_person(me),
                policy=ctx.policy,
            )

    @strawberry.field(description="Every part in review with its gate outcome.")
    def parts(self, info: Info) -> List[PartSummaryT]:
        ctx = _ctx(info)
        with ctx.Session() as s:
            out = []
            for part in s.scalars(select(Part).order_by(Part.sort_order)).all():
                g = gate_for(ctx, s, part)
                open_count = sum(
                    1
                    for f in s.scalars(select(Feedback).where(Feedback.part_number == part.number)).all()
                    if f.status in ("open", "in_progress")
                )
                out.append(
                    PartSummaryT(
                        number=part.number,
                        name=part.name,
                        rev=part.rev,
                        assembly=part.assembly,
                        model=part.model,
                        plm_state=_plm_state(part),
                        gate_outcome=g["outcome"],
                        blocking_passed=g["blockingPassed"],
                        blocking_total=g["blockingTotal"],
                        items_to_clear=g.get("itemsToClear", 0),
                        open_count=open_count,
                    )
                )
            return out

    @strawberry.field(description="One part with everything the console shows for it.")
    def part(self, info: Info, number: str) -> Optional[PartT]:
        ctx = _ctx(info)
        with ctx.Session() as s:
            part = s.get(Part, number)
            if part is None:
                return None
            people = {p.id: p for p in s.scalars(select(Person)).all()}
            feedback = s.scalars(select(Feedback).where(Feedback.part_number == number).order_by(Feedback.number)).all()
            comments = s.scalars(
                select(Comment).where(Comment.feedback_id.in_([f.id for f in feedback])).order_by(Comment.at, Comment.id)
            ).all()
            threads: Dict[str, List[Comment]] = {}
            for c in comments:
                threads.setdefault(c.feedback_id, []).append(c)
            reviewers = s.scalars(select(Reviewer).where(Reviewer.part_number == number).order_by(Reviewer.id)).all()
            decisions = s.scalars(
                select(GateDecision).where(GateDecision.part_number == number).order_by(GateDecision.at.desc())
            ).all()
            audit = s.scalars(
                select(AuditEntry).where(AuditEntry.part_number == number).order_by(AuditEntry.at.desc(), AuditEntry.id.desc()).limit(60)
            ).all()
            deliveries = s.scalars(
                select(OutboxMessage)
                .where(OutboxMessage.part_number == number, OutboxMessage.status != "delivered")
                .order_by(OutboxMessage.id)
            ).all()
            stats = feedback_stats(s, number)
            return PartT(
                number=part.number,
                name=part.name,
                rev=part.rev,
                assembly=part.assembly,
                model=part.model,
                material=part.material,
                finish=part.finish,
                process=part.process,
                cad_files=list(part.cad_files or []),
                plm_state=_plm_state(part),
                review=ReviewT(title=part.review_title, stage=part.review_stage, due=iso(part.review_due)),
                gate=_gate(gate_for(ctx, s, part)),
                feedback=[_feedback(f, people, threads.get(f.id, [])) for f in feedback],
                reviewers=[
                    ReviewerT(
                        role=r.role,
                        status=r.status,
                        due=iso(r.due),
                        completed_at=iso(r.completed_at),
                        nudged_at=iso(r.nudged_at),
                        person=_person(people[r.person_id]),
                    )
                    for r in reviewers
                ],
                decisions=[
                    DecisionT(
                        id=d.id,
                        at=iso(d.at),
                        outcome=d.outcome,
                        promotion_request_id=d.promotion_request_id,
                        requested_by=d.requested_by,
                        snapshot_hash=d.snapshot_hash,
                        checks=[_check(c) for c in d.checks],
                        has_record=d.record is not None,
                    )
                    for d in decisions
                ],
                audit=[
                    AuditT(id=a.id, at=iso(a.at), actor=a.actor, action=a.action, entity_id=a.entity_id, detail=a.detail)
                    for a in audit
                ],
                stats=StatsT(
                    total=stats["total"],
                    open=stats["open"],
                    closed=stats["closed"],
                    avg_resolve_hours=stats["avgResolveHours"],
                ),
                deliveries=[
                    DeliveryT(
                        id=m.id,
                        topic=m.topic,
                        label=m.label,
                        status=m.status,
                        attempts=m.attempts,
                        max_attempts=m.max_attempts,
                        next_attempt_at=iso(m.next_attempt_at),
                        last_error=m.last_error,
                        ordering_key=m.ordering_key,
                    )
                    for m in deliveries
                ],
            )

    @strawberry.field(description="Newest integration log entries first.")
    def log(self, info: Info, limit: int = 150) -> List[LogEntryT]:
        ctx = _ctx(info)
        with ctx.Session() as s:
            rows = s.scalars(select(LogEntry).order_by(LogEntry.id.desc()).limit(min(limit, 500))).all()
            return [
                LogEntryT(
                    id=e.id,
                    at=iso(e.at),
                    system=e.system,
                    direction=e.direction,
                    level=e.level,
                    title=e.title,
                    detail=e.detail,
                    ref=e.ref,
                    part_number=e.part_number,
                    status_code=e.status_code,
                    latency_ms=e.latency_ms,
                    tag=e.tag,
                    meta=e.meta,
                )
                for e in rows
            ]

    @strawberry.field(description="Health of the connected systems and the delivery queue.")
    def systems(self, info: Info) -> SystemsT:
        ctx = _ctx(info)
        with ctx.Session() as s:
            statuses = s.scalars(select(OutboxMessage.status).where(OutboxMessage.status != "delivered")).all()
        chaos = services.get_chaos(ctx)
        dead = statuses.count("dead")
        jira = "down" if chaos["jiraOutage"] else ("degraded" if (dead or any(chaos.values())) else "healthy")
        return SystemsT(
            jira=jira,
            windchill="down" if ctx.windchill.chaos["outage"] else "healthy",
            pending=statuses.count("pending") + statuses.count("in_flight"),
            retrying=statuses.count("retrying"),
            dead=dead,
            chaos=ChaosT(
                jira_outage=chaos["jiraOutage"],
                jira_lost_responses=chaos["jiraLostResponses"],
                duplicate_webhooks=chaos["duplicateWebhooks"],
                slow_network=chaos["slowNetwork"],
            ),
        )

    @strawberry.field(description="The review record attached to Windchill for an approved decision.")
    def record(self, info: Info, decision_id: str) -> Optional[JSON]:
        ctx = _ctx(info)
        with ctx.Session() as s:
            d = s.get(GateDecision, decision_id)
            return d.record if d else None


@strawberry.type
class Mutation:
    @strawberry.mutation
    def resolve_feedback(self, info: Info, id: str, note: Optional[str] = None) -> bool:
        services.resolve_feedback(_ctx(info), id, note)
        return True

    @strawberry.mutation
    def reopen_feedback(self, info: Info, id: str) -> bool:
        services.reopen_feedback(_ctx(info), id)
        return True

    @strawberry.mutation
    def waive_feedback(self, info: Info, id: str, reason: str) -> bool:
        services.waive_feedback(_ctx(info), id, reason)
        return True

    @strawberry.mutation(description="decision is accept or dismiss")
    def triage_finding(self, info: Info, id: str, decision: str, note: Optional[str] = None) -> bool:
        services.triage_finding(_ctx(info), id, decision, note)
        return True

    @strawberry.mutation
    def nudge_reviewer(self, info: Info, part_number: str, role: str) -> bool:
        services.nudge_reviewer(_ctx(info), part_number, role)
        return True

    @strawberry.mutation
    async def request_release(self, info: Info, part_number: str) -> ReleaseResultT:
        r = await services.request_release(_ctx(info), part_number)
        return ReleaseResultT(
            promotion_request_id=r["promotionRequestId"],
            status=r["status"],
            reasons=r["reasons"],
            decision_id=r["decisionId"],
        )

    @strawberry.mutation
    def retry_delivery(self, info: Info, id: int) -> bool:
        services.retry_delivery(_ctx(info), id)
        return True

    @strawberry.mutation
    def set_chaos(
        self,
        info: Info,
        jira_outage: Optional[bool] = None,
        jira_lost_responses: Optional[bool] = None,
        duplicate_webhooks: Optional[bool] = None,
        slow_network: Optional[bool] = None,
    ) -> ChaosT:
        c = services.set_chaos(
            _ctx(info),
            jiraOutage=jira_outage,
            jiraLostResponses=jira_lost_responses,
            duplicateWebhooks=duplicate_webhooks,
            slowNetwork=slow_network,
        )
        return ChaosT(
            jira_outage=c["jiraOutage"],
            jira_lost_responses=c["jiraLostResponses"],
            duplicate_webhooks=c["duplicateWebhooks"],
            slow_network=c["slowNetwork"],
        )

    @strawberry.mutation
    async def reset_demo(self, info: Info) -> bool:
        from .lifecycle import reset_demo

        await reset_demo(_ctx(info))
        return True


class Schema(strawberry.Schema):
    def process_errors(self, errors, execution_context=None) -> None:
        for error in errors:
            if not isinstance(getattr(error, "original_error", None), UserError):
                log.error("GraphQL error: %s", error, exc_info=getattr(error, "original_error", None))


schema = Schema(query=Query, mutation=Mutation)
