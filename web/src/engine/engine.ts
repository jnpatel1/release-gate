// In-browser engine for the shareable build. It mirrors the Python backend's
// behaviour (outbox with retries, idempotent Jira writes, signed-webhook
// handling, Windchill's validation hook) with simulated network latency, so
// the console runs with no server. Log titles match the server's.

import policyJson from '../../../shared/policy.json';
import seedJson from '../../../shared/seed.json';
import { BackendError, type Backend } from '../api/backend';
import type {
  AuditEntry,
  Chaos,
  Check,
  ConsoleSnapshot,
  Decision,
  Feedback,
  FeedbackStatus,
  GateOutcome,
  HttpCall,
  JiraIssue,
  JiraStatus,
  LiveEvent,
  LogEntry,
  Part,
  PartSummary,
  Person,
  PlmState,
  Policy,
  Priority,
  ReleaseResult,
  ReviewRecord,
  Systems,
} from '../api/types';
import { evaluate, type PolicyResult } from './policy';

const POLICY = policyJson as Policy;
const SEED = seedJson as any;

const INTEGRATION = { id: 'svc-colab-release-gate', name: 'CoLab Release Gate' };
const T = { webhook: 350, reviewer: 2200, retryBase: 1000, retryCap: 8000, slow: 600, maxAttempts: 6, plmEvent: 300 };
const MIN_REASON = 12;
const TRANSITION_IDS: Record<JiraStatus, string> = { 'To Do': '11', 'In Progress': '21', Done: '31' };
const PRIORITY_MAP: Record<string, string> = { critical: 'Highest', high: 'High', medium: 'Medium', low: 'Low' };
const STATUS_LABEL: Record<string, string> = { open: 'open', in_progress: 'in progress', resolved: 'resolved', waived: 'waived' };
const JIRA_BASE = 'https://kestrel.atlassian.example/rest/api/2';
const WC_BASE = 'https://plm.kestrel.example/Windchill/servlet/odata';

// ----------------------------------------------------------------- rows

interface Thread { at: number; authorId: string | null; authorLabel: string; text: string; kind: 'comment' | 'system' }
interface PartRow {
  number: string; order: number; name: string; rev: string; assembly: string; model: Part['model'];
  material: string; finish: string; process: string; cadFiles: string[];
  reviewTitle: string; reviewStage: string; reviewDue: number;
  releasedAt: number | null; releasedDecisionId: string | null; pendingDecisionId: string | null;
}
interface ReviewerRow { partNumber: string; role: string; personId: string; status: 'pending' | 'complete'; due: number | null; completedAt: number | null; nudgedAt: number | null }
interface FeedbackRow {
  id: string; partNumber: string; number: number; title: string; body: string; priority: Priority; category: string;
  status: FeedbackStatus; source: 'human' | 'ai'; triage: Feedback['triage']; citation: string | null;
  authorId: string | null; ownerId: string | null; pin: { p: number[]; n: number[] } | null; sheetRef: string | null;
  jiraKey: string | null; jiraStatus: string | null; jiraUpdatedAt: number | null; syncState: Feedback['syncState'];
  resolvedAt: number | null; resolvedBy: string | null; waiverReason: string | null; waivedById: string | null; waivedAt: number | null;
  dismissReason: string | null; dismissedById: string | null; createdAt: number; updatedAt: number; thread: Thread[];
}
interface DecisionRow {
  id: string; partNumber: string; rev: string; at: number; outcome: 'approved' | 'rejected';
  promotionRequestId: string | null; requestedBy: string | null; checks: Check[]; snapshotHash: string; record: ReviewRecord | null;
}
interface MsgRow {
  id: number; createdAt: number; topic: string; orderingKey: string; partNumber: string | null; label: string;
  payload: Record<string, any>; status: 'pending' | 'in_flight' | 'retrying' | 'delivered' | 'dead';
  attempts: number; maxAttempts: number; nextAttemptAt: number; lastError: string | null;
}
interface JiraRow {
  id: string; key: string; summary: string; description: string; status: JiraStatus; resolution: string | null;
  priority: string; assigneeId: string | null; colabId: string | null; created: number; updated: number;
  comments: { id: string; authorId: string; authorName: string; body: string; created: number }[];
}
interface WcPartRow {
  id: string; number: string; name: string; revision: string; version: string; state: 'INWORK' | 'RELEASED';
  attachments: { fileName: string; mimeType: string; size: number; createdOn: number }[];
  history: { at: number; from: string; to: string; by: string }[];
}
interface WcPromotion {
  id: string; partNumber: string; revision: string; status: 'OPEN' | 'APPROVED' | 'REJECTED' | 'ON_HOLD';
  requestedBy: string; createdOn: number; reasons: string[]; decisionId: string | null;
}

interface State {
  people: Map<string, Person>;
  parts: PartRow[];
  reviewers: ReviewerRow[];
  feedback: FeedbackRow[];
  decisions: DecisionRow[];
  audit: (AuditEntry & { partNumber: string | null; atMs: number })[];
  outbox: MsgRow[];
  log: LogEntry[];
  inbound: Set<string>;
  gateCache: Map<string, [string, number]>;
  jira: { issues: Map<string, JiraRow>; next: number; chaos: Chaos };
  wc: { parts: Map<string, WcPartRow>; promotions: WcPromotion[]; nextPr: number };
  seq: { log: number; audit: number; msg: number; comment: number; decision: number };
}

class HttpError extends Error {
  constructor(public status: number, message: string, public retryAfter: number | null = null, public body: unknown = null) {
    super(message);
  }
}

class DeliveryError extends Error {
  constructor(message: string, public retryable: boolean, public status: number | null = null, public retryAfter: number | null = null) {
    super(message);
  }
}

interface Tracer { calls: HttpCall[] }
interface HandlerResult { summary: string; ref?: string | null; tag?: string; updates?: Partial<FeedbackRow> }

// ---------------------------------------------------------------- utils

const now = () => Date.now();
const iso = (ms: number | null | undefined) => (ms == null ? null : new Date(ms).toISOString());
const mins = (m: number) => m * 60_000;
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const uuid = () =>
  (globalThis.crypto && 'randomUUID' in globalThis.crypto
    ? globalThis.crypto.randomUUID()
    : `${Math.random().toString(16).slice(2)}-${Date.now().toString(16)}`);

function canonical(value: unknown): string {
  if (Array.isArray(value)) return `[${value.map(canonical).join(',')}]`;
  if (value && typeof value === 'object') {
    return `{${Object.keys(value as object)
      .sort()
      .map((k) => `${JSON.stringify(k)}:${canonical((value as any)[k])}`)
      .join(',')}}`;
  }
  return JSON.stringify(value);
}

async function sha256(text: string): Promise<string> {
  try {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
    return 'sha256:' + Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, '0')).join('');
  } catch {
    // Insecure context fallback (not cryptographic, only used when subtle crypto is unavailable).
    let h1 = 0x811c9dc5;
    let out = '';
    for (let round = 0; round < 8; round++) {
      for (let i = 0; i < text.length; i++) h1 = Math.imul(h1 ^ text.charCodeAt(i) ^ round, 16777619);
      out += (h1 >>> 0).toString(16).padStart(8, '0');
    }
    return 'sha256:' + out;
  }
}

export class OfflineEngine implements Backend {
  readonly mode = 'offline' as const;
  private s!: State;
  private ready: Promise<void>;
  private listeners = new Set<(e: LiveEvent) => void>();
  private timers = new Set<ReturnType<typeof setTimeout>>();
  private epoch = 0;
  private pumping = false;
  private wakeTimer: ReturnType<typeof setTimeout> | null = null;
  private currentUserId = SEED.workspace.currentUserId as string;

  constructor() {
    this.ready = this.load();
  }

  // ============================================================ plumbing

  private emit(e: LiveEvent) {
    for (const l of this.listeners) queueMicrotask(() => l(e));
  }

  private changed(part: string | null) {
    this.emit({ type: 'changed', data: { part } });
  }

  private later(fn: () => void | Promise<void>, ms: number) {
    const epoch = this.epoch;
    const t = setTimeout(() => {
      this.timers.delete(t);
      if (epoch === this.epoch) void fn();
    }, ms);
    this.timers.add(t);
  }

  private addLog(e: Omit<LogEntry, 'id' | 'at' | 'detail' | 'ref' | 'partNumber' | 'statusCode' | 'latencyMs' | 'tag' | 'meta'> & Partial<LogEntry>) {
    const entry: LogEntry = {
      id: ++this.s.seq.log,
      at: new Date().toISOString(),
      detail: null,
      ref: null,
      partNumber: null,
      statusCode: null,
      latencyMs: null,
      tag: null,
      meta: null,
      ...e,
    };
    this.s.log.push(entry);
    if (this.s.log.length > 500) this.s.log.shift();
    this.emit({ type: 'log', data: entry });
    return entry;
  }

  private audit(actor: string, action: string, partNumber: string | null, entityId: string, detail: string | null = null) {
    this.s.audit.push({ id: ++this.s.seq.audit, at: new Date().toISOString(), atMs: now(), actor, action, entityId, detail, partNumber });
  }

  private me(): Person {
    return this.s.people.get(this.currentUserId)!;
  }

  private person(id: string | null | undefined): Person | null {
    return id ? this.s.people.get(id) ?? null : null;
  }

  private part(number: string): PartRow {
    const p = this.s.parts.find((x) => x.number === number);
    if (!p) throw new BackendError(`Part ${number} doesn't exist.`);
    return p;
  }

  private fb(id: string): FeedbackRow {
    const f = this.s.feedback.find((x) => x.id === id);
    if (!f) throw new BackendError(`Feedback ${id} doesn't exist.`);
    return f;
  }

  private editable(number: string): PartRow {
    const p = this.part(number);
    if (p.releasedAt || p.pendingDecisionId) {
      throw new BackendError(`${p.number} Rev ${p.rev} is released. Start a new revision to change it.`);
    }
    return p;
  }

  private systemNote(f: FeedbackRow, text: string, label = 'CoLab') {
    f.thread.push({ at: now(), authorId: null, authorLabel: label, text, kind: 'system' });
  }

  private touch(f: FeedbackRow) {
    f.updatedAt = now();
  }

  /** Simulated network hop: latency, optional slow mode, then run the call. */
  private async net<T>(tracer: Tracer, method: string, url: string, body: unknown, fn: () => T): Promise<T> {
    const started = performance.now();
    const call: HttpCall = { method, url, requestBody: body, status: null, latencyMs: null, requestHeaders: { Authorization: 'Basic ••••••' } };
    tracer.calls.push(call);
    await sleep(35 + Math.random() * 90 + (this.s.jira.chaos.slowNetwork ? T.slow : 0));
    try {
      const out = fn();
      call.status = method === 'POST' && /\/(issue|comment|PromotionRequests)$/.test(url) ? 201 : method === 'POST' ? 204 : 200;
      call.responseBody = out ?? null;
      return out;
    } catch (err) {
      if (err instanceof HttpError) {
        call.status = err.status;
        call.error = `${err.status} ${err.message}`;
        call.responseBody = err.body;
      }
      throw err;
    } finally {
      call.latencyMs = Math.round(performance.now() - started);
    }
  }

  // ============================================================== seeding

  private async load() {
    const s: State = {
      people: new Map(),
      parts: [],
      reviewers: [],
      feedback: [],
      decisions: [],
      audit: [],
      outbox: [],
      log: [],
      inbound: new Set(),
      gateCache: new Map(),
      jira: {
        issues: new Map(),
        next: SEED.jira.nextNumber,
        chaos: { jiraOutage: false, jiraLostResponses: false, duplicateWebhooks: false, slowNetwork: false },
      },
      wc: { parts: new Map(), promotions: [], nextPr: SEED.windchill.nextPromotionNumber },
      seq: { log: 0, audit: 0, msg: 0, comment: 0, decision: SEED.nextDecisionNumber - 1 },
    };
    this.s = s;
    const t0 = now();
    for (const p of SEED.people) {
      s.people.set(p.id, {
        id: p.id, name: p.name, role: p.role, org: p.org ?? '', initials: p.initials,
        external: !!p.external, isAi: !!p.isAi,
      });
    }
    const jiraUpdated = new Map<string, number>();
    for (const i of SEED.jira.issues) {
      const at = t0 - mins(i.minsAgo);
      jiraUpdated.set(i.key, at);
      s.jira.issues.set(i.key, {
        id: String(10000 + Number(i.key.split('-')[1])), key: i.key, summary: i.summary, description: '',
        status: i.status, resolution: i.resolution ?? null, priority: i.priority ?? 'Medium',
        assigneeId: i.assigneeId ?? null, colabId: i.colabId ?? null, created: at, updated: at, comments: [],
      });
    }
    SEED.parts.forEach((p: any, order: number) => {
      s.parts.push({
        number: p.number, order, name: p.name, rev: p.rev, assembly: p.assembly, model: p.model,
        material: p.material, finish: p.finish, process: p.process, cadFiles: p.cadFiles ?? [],
        reviewTitle: p.review.title, reviewStage: p.review.stage, reviewDue: t0 + mins(p.review.dueInMins),
        releasedAt: null, releasedDecisionId: null, pendingDecisionId: null,
      });
      for (const r of p.reviewers) {
        s.reviewers.push({
          partNumber: p.number, role: r.role, personId: r.personId, status: r.status,
          due: r.dueInMins != null ? t0 + mins(r.dueInMins) : null,
          completedAt: r.completedMinsAgo != null ? t0 - mins(r.completedMinsAgo) : null, nudgedAt: null,
        });
      }
      for (const f of p.feedback) {
        const created = t0 - mins(f.minsAgo);
        const resolvedAt = f.resolvedMinsAgo != null ? t0 - mins(f.resolvedMinsAgo) : null;
        const waivedAt = f.waivedMinsAgo != null ? t0 - mins(f.waivedMinsAgo) : null;
        s.feedback.push({
          id: f.id, partNumber: p.number, number: f.number, title: f.title, body: f.body, priority: f.priority,
          category: f.category, status: f.status, source: f.source, triage: f.triage ?? null, citation: f.citation ?? null,
          authorId: f.authorId ?? null, ownerId: f.ownerId ?? null, pin: f.pin ?? null, sheetRef: f.sheetRef ?? null,
          jiraKey: f.jiraKey ?? null, jiraStatus: f.jiraStatus ?? null,
          jiraUpdatedAt: f.jiraKey ? jiraUpdated.get(f.jiraKey) ?? null : null,
          syncState: f.jiraKey ? 'synced' : 'none', resolvedAt,
          resolvedBy: f.resolvedById ? s.people.get(f.resolvedById)!.name : null,
          waiverReason: f.waiverReason ?? null, waivedById: f.waivedById ?? null, waivedAt,
          dismissReason: f.dismissReason ?? null, dismissedById: f.dismissedById ?? null,
          createdAt: created, updatedAt: Math.max(created, resolvedAt ?? 0, waivedAt ?? 0),
          thread: (f.thread ?? []).map((c: any) => ({
            at: t0 - mins(c.minsAgo), authorId: c.authorId, authorLabel: s.people.get(c.authorId)!.name, text: c.text, kind: 'comment' as const,
          })),
        });
      }
    });
    // Windchill mock
    SEED.parts.forEach((p: any, i: number) => {
      const releasedAt = p.releasedMinsAgo ? t0 - mins(p.releasedMinsAgo) : null;
      s.wc.parts.set(p.number, {
        id: `OR:wt.part.WTPart:${224310 + 17 * i}`, number: p.number, name: String(p.name).toUpperCase(),
        revision: p.rev, version: `${p.rev}.${2 + (i % 3)}`, state: p.plmState,
        attachments: (p.cadFiles ?? []).map((name: string, j: number) => ({
          fileName: name, mimeType: 'application/octet-stream', size: 180000 + 37000 * j + 11000 * i, createdOn: t0 - mins(9000 - 400 * i),
        })),
        history: releasedAt ? [{ at: releasedAt, from: 'INWORK', to: 'RELEASED', by: `Promotion ${p.releasedPromotionId}` }] : [],
      });
    });
    s.wc.promotions = SEED.windchill.promotionRequests.map((pr: any) => ({
      id: pr.id, partNumber: pr.partNumber, revision: pr.revision, status: pr.status,
      requestedBy: s.people.get(pr.requestedById)?.name ?? pr.requestedById, createdOn: t0 - mins(pr.minsAgo),
      reasons: pr.reasons ?? [], decisionId: pr.decisionId ?? null,
    }));
    // Parts released before the demo starts get a decision and record.
    for (const p of SEED.parts) {
      if (!p.releasedDecisionId) continue;
      const part = this.part(p.number);
      const decidedAt = t0 - mins(p.releasedMinsAgo + 2);
      const checks = evaluate(POLICY, this.policyState(part)).checks;
      const requestedBy = s.wc.promotions.find((x) => x.id === p.releasedPromotionId)?.requestedBy ?? null;
      const record = await this.buildRecord(part, p.releasedDecisionId, decidedAt, p.releasedPromotionId, requestedBy, checks);
      s.decisions.push({
        id: p.releasedDecisionId, partNumber: part.number, rev: part.rev, at: decidedAt, outcome: 'approved',
        promotionRequestId: p.releasedPromotionId, requestedBy, checks, snapshotHash: record.snapshotHash, record,
      });
      part.releasedAt = t0 - mins(p.releasedMinsAgo);
      part.releasedDecisionId = p.releasedDecisionId;
      s.wc.parts.get(part.number)!.attachments.push({
        fileName: `${part.number}_Rev${part.rev}_review-record.html`, mimeType: 'text/html', size: 9200, createdOn: part.releasedAt,
      });
    }
    for (const h of [...(SEED.history ?? [])].sort((a: any, b: any) => b.minsAgo - a.minsAgo)) {
      s.log.push({
        id: ++s.seq.log, at: new Date(t0 - mins(h.minsAgo)).toISOString(), system: h.system, direction: h.direction,
        level: h.level, title: h.title, detail: h.detail ?? null, ref: h.ref ?? null, partNumber: h.part ?? null,
        statusCode: h.statusCode ?? null, latencyMs: h.latencyMs ?? null, tag: h.tag ?? null, meta: null,
      });
    }
    this.addLog({
      system: 'gate', direction: 'internal', level: 'info',
      title: `Connected to Jira (${SEED.jira.project}) and Windchill. ${SEED.parts.length} parts in review.`,
      detail: 'Running entirely in your browser: Jira, Windchill and the gate are simulated.', tag: 'boot',
    });
    for (const p of s.parts) this.refreshGate(p.number, true);
  }

  // ================================================================ gate

  private policyState(part: PartRow) {
    const unconfirmed = this.s.outbox.filter((m) => m.partNumber === part.number && ['pending', 'in_flight', 'retrying'].includes(m.status));
    const dead = this.s.outbox.filter((m) => m.partNumber === part.number && m.status === 'dead');
    return {
      feedback: this.s.feedback
        .filter((f) => f.partNumber === part.number)
        .map((f) => ({ id: f.id, priority: f.priority, status: f.status, source: f.source, triage: f.triage })),
      reviews: this.s.reviewers.filter((r) => r.partNumber === part.number).map((r) => ({ role: r.role, status: r.status })),
      sync: { pending: unconfirmed.length, failed: dead.length, deliveryIds: [...unconfirmed, ...dead].map((m) => String(m.id)) },
    };
  }

  private gateFor(part: PartRow): Omit<PolicyResult, 'outcome'> & {
    outcome: GateOutcome;
    releasedAt: string | null;
    decisionId: string | null;
    snapshotHash: string | null;
  } {
    const decisionId = part.releasedAt && part.releasedDecisionId ? part.releasedDecisionId : part.pendingDecisionId;
    const d = decisionId ? this.s.decisions.find((x) => x.id === decisionId) : undefined;
    if (d) {
      const blocking = d.checks.filter((c) => c.blocking);
      return {
        outcome: part.releasedAt ? 'RELEASED' : 'RELEASING',
        blockingTotal: blocking.length,
        blockingPassed: blocking.filter((c) => c.status === 'pass').length,
        itemsToClear: 0,
        checks: d.checks,
        releasedAt: iso(part.releasedAt),
        decisionId: d.id,
        snapshotHash: d.snapshotHash,
      };
    }
    return { ...evaluate(POLICY, this.policyState(part)), releasedAt: null, decisionId: null, snapshotHash: null };
  }

  private refreshGate(number: string, silent = false) {
    const part = this.part(number);
    const g = this.gateFor(part);
    const prev = this.s.gateCache.get(number);
    this.s.gateCache.set(number, [g.outcome, g.blockingPassed]);
    if (!silent && prev && prev[0] !== g.outcome) {
      const level = ({ READY: 'ok', RELEASED: 'ok', RELEASING: 'info' } as Record<string, LogEntry['level']>)[g.outcome] ?? 'warn';
      this.addLog({
        system: 'gate', direction: 'internal', level,
        title: `${part.number} Rev ${part.rev} is now ${String(g.outcome).toLowerCase()}`,
        detail: `Gate moved from ${prev[0]} to ${g.outcome} (${g.blockingPassed} of ${g.blockingTotal} blocking checks pass).`,
        ref: part.number, partNumber: part.number, tag: 'gate',
      });
    }
    this.changed(number);
    return g;
  }

  private disposition(f: FeedbackRow): string {
    if (f.status === 'resolved') return `Resolved by ${f.resolvedBy ?? 'owner'}`;
    if (f.status === 'waived') return `Waived by ${this.person(f.waivedById)?.name}: ${f.waiverReason}`;
    if (f.status === 'dismissed') return `AI finding dismissed by ${this.person(f.dismissedById)?.name}: ${f.dismissReason}`;
    if (f.priority === 'medium' || f.priority === 'low') return 'Open, carried to the next revision (non-blocking)';
    return 'Open';
  }

  private async buildRecord(part: PartRow, decisionId: string, decidedAt: number, prId: string | null, requestedBy: string | null, checks: Check[]): Promise<ReviewRecord> {
    const body: Omit<ReviewRecord, 'snapshotHash'> = {
      recordId: decisionId,
      decision: 'approved',
      decidedAt: iso(decidedAt)!,
      promotionRequestId: prId,
      requestedBy,
      part: { number: part.number, name: part.name, rev: part.rev, assembly: part.assembly, material: part.material, finish: part.finish, process: part.process },
      review: { title: part.reviewTitle, stage: part.reviewStage },
      policy: { id: POLICY.id, name: POLICY.name, version: POLICY.version, failClosedOnSync: POLICY.failClosedOnSync },
      checks: checks.map((c) => ({ id: c.id, title: c.title, blocking: c.blocking, status: c.status, summary: c.summary })),
      reviews: this.s.reviewers
        .filter((r) => r.partNumber === part.number)
        .map((r) => ({ role: r.role, person: this.person(r.personId)?.name ?? null, status: r.status, completedAt: iso(r.completedAt) })),
      feedback: this.s.feedback
        .filter((f) => f.partNumber === part.number)
        .sort((a, b) => a.number - b.number)
        .map((f) => ({
          id: f.id, number: f.number, title: f.title, priority: f.priority, category: f.category,
          source: f.source === 'ai' ? 'AutoReview' : 'Reviewer', status: f.status, disposition: this.disposition(f), jiraKey: f.jiraKey,
        })),
    };
    return { ...body, snapshotHash: await sha256(canonical(body)) };
  }

  // ============================================================== outbox

  private enqueue(topic: string, orderingKey: string, partNumber: string | null, label: string, payload: Record<string, any>) {
    const t = now();
    this.s.outbox.push({
      id: ++this.s.seq.msg, createdAt: t, topic, orderingKey, partNumber, label, payload,
      status: 'pending', attempts: 0, maxAttempts: T.maxAttempts, nextAttemptAt: t, lastError: null,
    });
    if (orderingKey.startsWith('feedback:')) this.refreshSync(orderingKey.slice(9));
    this.wake();
  }

  private refreshSync(feedbackId: string) {
    const f = this.s.feedback.find((x) => x.id === feedbackId);
    if (!f) return;
    const statuses = this.s.outbox.filter((m) => m.orderingKey === `feedback:${feedbackId}` && m.status !== 'delivered').map((m) => m.status);
    f.syncState = statuses.includes('dead') ? 'error' : statuses.length ? 'pending' : f.jiraKey ? 'synced' : 'none';
  }

  private wake(delay = 0) {
    if (this.wakeTimer) clearTimeout(this.wakeTimer);
    const epoch = this.epoch;
    this.wakeTimer = setTimeout(() => {
      this.wakeTimer = null;
      if (epoch === this.epoch) void this.pump();
    }, delay);
  }

  private nextDue(): { msg: MsgRow | null; wait: number } {
    const undelivered = this.s.outbox.filter((m) => m.status !== 'delivered');
    const head = new Map<string, number>();
    for (const m of undelivered) if (!head.has(m.orderingKey)) head.set(m.orderingKey, m.id);
    let wait = Infinity;
    const t = now();
    for (const m of undelivered) {
      if (m.status !== 'pending' && m.status !== 'retrying') continue;
      if (head.get(m.orderingKey) !== m.id) continue;
      if (m.nextAttemptAt <= t) return { msg: m, wait: 0 };
      wait = Math.min(wait, m.nextAttemptAt - t);
    }
    return { msg: null, wait };
  }

  private async pump() {
    if (this.pumping) return;
    this.pumping = true;
    const epoch = this.epoch;
    try {
      for (;;) {
        const { msg, wait } = this.nextDue();
        if (!msg) {
          if (wait !== Infinity) this.wake(Math.max(20, wait));
          return;
        }
        await this.deliver(msg);
        if (epoch !== this.epoch) return;
      }
    } finally {
      if (epoch === this.epoch) this.pumping = false;
    }
  }

  private backoff(attempt: number, retryAfter: number | null) {
    const ceiling = Math.min(T.retryCap, T.retryBase * 2 ** (attempt - 1));
    let delay = ceiling * (0.75 + 0.25 * Math.random());
    if (retryAfter) delay = Math.max(delay, Math.min(retryAfter * 1000, T.retryCap * 2));
    return Math.round(delay / 10) * 10;
  }

  private async deliver(msg: MsgRow) {
    const epoch = this.epoch;
    msg.status = 'in_flight';
    msg.attempts += 1;
    this.changed(msg.partNumber);
    const tracer: Tracer = { calls: [] };
    let result: HandlerResult | null = null;
    let error: DeliveryError | null = null;
    try {
      result = await this.handle(msg, tracer);
    } catch (e) {
      error = e instanceof DeliveryError ? e : new DeliveryError(`Unexpected error: ${(e as Error).message}`, true);
    }
    if (epoch !== this.epoch) return;
    const system = msg.topic.startsWith('plm.') ? 'windchill' : 'jira';
    const fid = msg.orderingKey.startsWith('feedback:') ? msg.orderingKey.slice(9) : null;
    const lastStatus = [...tracer.calls].reverse().find((c) => c.status != null)?.status ?? null;
    const latency = tracer.calls.reduce((a, c) => a + (c.latencyMs ?? 0), 0);
    const meta = { messageId: msg.id, topic: msg.topic, attempt: msg.attempts, calls: tracer.calls } as LogEntry['meta'];
    if (!error && result) {
      msg.status = 'delivered';
      msg.lastError = null;
      if (fid && result.updates) Object.assign(this.fb(fid), result.updates);
      this.addLog({
        system, direction: 'out', level: 'ok', title: result.summary,
        detail: msg.attempts > 1 ? `${msg.label}. Attempt ${msg.attempts}.` : msg.label,
        ref: result.ref ?? fid, partNumber: msg.partNumber, statusCode: lastStatus, latencyMs: latency, tag: result.tag ?? null, meta,
      });
    } else if (error && error.retryable && msg.attempts < msg.maxAttempts) {
      const delay = this.backoff(msg.attempts, error.retryAfter);
      msg.status = 'retrying';
      msg.nextAttemptAt = now() + delay;
      msg.lastError = error.message;
      this.addLog({
        system, direction: 'out', level: 'warn', title: `${msg.label}: ${error.message}`,
        detail: `Attempt ${msg.attempts} of ${msg.maxAttempts}. Retrying in ${(delay / 1000).toFixed(1)} s.`,
        ref: fid ?? msg.partNumber, partNumber: msg.partNumber, statusCode: error.status, latencyMs: latency, tag: 'retry',
        meta: { ...meta, retryInS: delay / 1000 },
      });
    } else if (error) {
      msg.status = 'dead';
      msg.lastError = error.message;
      const why = error.retryable ? `Gave up after ${msg.attempts} attempts.` : 'Not retryable: the request itself was rejected.';
      this.addLog({
        system, direction: 'out', level: 'error', title: `${msg.label}: ${error.message}`,
        detail: `${why} Waiting for someone to retry it.`, ref: fid ?? msg.partNumber, partNumber: msg.partNumber,
        statusCode: error.status, latencyMs: latency, tag: 'dead', meta,
      });
    }
    if (fid) this.refreshSync(fid);
    if (msg.partNumber) this.refreshGate(msg.partNumber);
  }

  private async handle(msg: MsgRow, tracer: Tracer): Promise<HandlerResult> {
    const p = msg.payload;
    const wrap = async <R>(fn: () => Promise<R>): Promise<R> => {
      try {
        return await fn();
      } catch (e) {
        if (e instanceof HttpError) {
          const retryable = e.status >= 500 || [408, 425, 429].includes(e.status);
          throw new DeliveryError(`${e.status} ${e.message}`, retryable, e.status, e.retryAfter);
        }
        throw e;
      }
    };
    return wrap(async () => {
      switch (msg.topic) {
        case 'jira.create_issue': {
          const f = this.fb(p.feedbackId);
          const part = this.part(f.partNumber);
          if (f.jiraKey) return { summary: `${f.jiraKey} is already linked to ${f.id}; nothing to create`, ref: f.jiraKey, tag: 'noop' };
          const jql = `cf[10042] = "${f.id}"`;
          const found = await this.net(tracer, 'GET', `${JIRA_BASE}/search?jql=${encodeURIComponent(jql)}`, null, () => this.jiraSearch(f.id));
          if (found) {
            return {
              summary: `Found ${found.key} from an earlier attempt and linked it to ${f.id}. No duplicate created.`,
              ref: found.key, tag: 'linked', updates: { jiraKey: found.key, jiraStatus: found.status },
            };
          }
          const fields = {
            project: { key: SEED.jira.project }, issuetype: { name: 'Task' },
            summary: `[${part.number} Rev ${part.rev}] ${f.title}`, priority: { name: PRIORITY_MAP[f.priority] },
            labels: ['colab', 'design-review', part.number.toLowerCase()], customfield_10042: f.id,
          };
          const created = await this.net(tracer, 'POST', `${JIRA_BASE}/issue`, { fields }, () => this.jiraCreate(fields, INTEGRATION));
          return { summary: `Created ${created.key} for ${f.id}`, ref: created.key, tag: 'created', updates: { jiraKey: created.key, jiraStatus: 'To Do' } };
        }
        case 'jira.transition': {
          const f = this.fb(p.feedbackId);
          const key = f.jiraKey;
          if (!key) return { summary: `${f.id} has no Jira issue; nothing to move`, tag: 'noop' };
          const issue = await this.net(tracer, 'GET', `${JIRA_BASE}/issue/${key}?fields=status,updated`, null, () => this.jiraGet(key));
          if (issue.status === p.to) return { summary: `${key} was already ${p.to}`, ref: key, tag: 'noop', updates: { jiraStatus: p.to } };
          await this.net(tracer, 'GET', `${JIRA_BASE}/issue/${key}/transitions`, null, () => this.jiraTransitions(key));
          const body: any = { transition: { id: TRANSITION_IDS[p.to as JiraStatus] } };
          if (p.resolution) body.fields = { resolution: { name: p.resolution } };
          await this.net(tracer, 'POST', `${JIRA_BASE}/issue/${key}/transitions`, body, () =>
            this.jiraDoTransition(key, p.to, p.resolution ?? null, INTEGRATION),
          );
          return { summary: `Moved ${key} from ${issue.status} to ${p.to}`, ref: key, tag: 'moved', updates: { jiraStatus: p.to } };
        }
        case 'jira.comment': {
          const f = this.fb(p.feedbackId);
          const key = f.jiraKey;
          if (!key) return { summary: `${f.id} has no Jira issue; comment kept in CoLab only`, tag: 'noop' };
          const existing = await this.net(tracer, 'GET', `${JIRA_BASE}/issue/${key}/comment`, null, () => this.jiraComments(key));
          if (existing.some((c) => c.body.includes(p.marker))) return { summary: `Note already on ${key}; skipped the duplicate`, ref: key, tag: 'noop' };
          const text = `${p.text}\n\n(${p.author} via CoLab, ref ${p.marker})`;
          await this.net(tracer, 'POST', `${JIRA_BASE}/issue/${key}/comment`, { body: text }, () => this.jiraAddComment(key, text, INTEGRATION));
          return { summary: `Posted ${p.author}'s note on ${key}`, ref: key, tag: 'commented' };
        }
        case 'plm.attach_record': {
          const d = this.s.decisions.find((x) => x.id === p.decisionId)!;
          const name = `${d.partNumber}_Rev${d.rev}_review-record.html`;
          const url = `${WC_BASE}/ProdMgmt/Parts('${d.partNumber}')/Attachments('${name}')`;
          await this.net(tracer, 'PUT', url, { MimeType: 'text/html', Description: 'Design review record from CoLab' }, () => {
            const wc = this.s.wc.parts.get(d.partNumber)!;
            const existing = wc.attachments.find((a) => a.fileName === name);
            if (existing) existing.createdOn = now();
            else wc.attachments.push({ fileName: name, mimeType: 'text/html', size: 9400 + Math.round(Math.random() * 800), createdOn: now() });
            return { FileName: name };
          });
          return { summary: `Attached ${name} to ${d.partNumber} in Windchill`, ref: d.partNumber, tag: 'attached' };
        }
      }
      throw new DeliveryError(`Unknown topic ${msg.topic}`, false);
    });
  }

  // ======================================================== mock Jira

  private jiraGate(actor: { id: string }) {
    if (this.s.jira.chaos.jiraOutage && actor.id === INTEGRATION.id) {
      throw new HttpError(503, 'Service Unavailable', 2, { errorMessages: ['Service unavailable. Try again shortly.'] });
    }
  }

  private jiraSearch(colabId: string): JiraRow | null {
    this.jiraGate(INTEGRATION);
    return [...this.s.jira.issues.values()].find((i) => i.colabId === colabId) ?? null;
  }

  private jiraGet(key: string): JiraRow {
    this.jiraGate(INTEGRATION);
    const i = this.s.jira.issues.get(key);
    if (!i) throw new HttpError(404, 'Not Found', null, { errorMessages: [`Issue ${key} does not exist.`] });
    return i;
  }

  private jiraTransitions(key: string) {
    const i = this.jiraGet(key);
    return (['To Do', 'In Progress', 'Done'] as JiraStatus[]).filter((s) => s !== i.status).map((s) => ({ id: TRANSITION_IDS[s], name: s }));
  }

  private jiraCreate(fields: any, actor: { id: string; name: string }): { key: string } {
    this.jiraGate(actor);
    const n = this.s.jira.next++;
    const key = `${SEED.jira.project}-${n}`;
    const t = now();
    const issue: JiraRow = {
      id: String(10000 + n), key, summary: fields.summary, description: '', status: 'To Do', resolution: null,
      priority: fields.priority?.name ?? 'Medium', assigneeId: null, colabId: fields.customfield_10042 ?? null,
      created: t, updated: t, comments: [],
    };
    this.s.jira.issues.set(key, issue);
    this.jiraEmit('jira:issue_created', issue, actor, []);
    if (this.s.jira.chaos.jiraLostResponses && actor.id === INTEGRATION.id) {
      throw new HttpError(504, 'Gateway Timeout', null, { errorMessages: ['Gateway timeout'] });
    }
    return { key };
  }

  private jiraDoTransition(key: string, to: JiraStatus, resolution: string | null, actor: { id: string; name: string }) {
    this.jiraGate(actor);
    const i = this.s.jira.issues.get(key);
    if (!i) throw new HttpError(404, 'Not Found');
    if (i.status === to) throw new HttpError(400, 'Bad Request', null, { errorMessages: ['That transition is not valid.'] });
    const before = i.status;
    i.status = to;
    i.resolution = to === 'Done' ? resolution ?? 'Done' : null;
    i.updated = now();
    this.jiraEmit('jira:issue_updated', i, actor, [{ field: 'status', fromString: before, toString: to }]);
    this.changed(null);
  }

  private jiraComments(key: string) {
    return this.jiraGet(key).comments;
  }

  private jiraAddComment(key: string, body: string, actor: { id: string; name: string }) {
    const i = this.jiraGet(key);
    i.comments.push({ id: String(20000 + ++this.s.seq.comment), authorId: actor.id, authorName: actor.name, body, created: now() });
    i.updated = now();
  }

  private jiraEmit(event: string, issue: JiraRow, actor: { id: string; name: string }, changelog: unknown[]) {
    const payload = {
      webhookEvent: event,
      user: { accountId: actor.id, displayName: actor.name },
      issue: { key: issue.key, fields: { status: { name: issue.status }, updated: iso(issue.updated), customfield_10042: issue.colabId } },
      changelog: { items: changelog },
    };
    const deliveryId = uuid();
    const copies = this.s.jira.chaos.duplicateWebhooks ? 2 : 1;
    for (let i = 0; i < copies; i++) {
      this.later(() => this.receiveJira(JSON.parse(JSON.stringify(payload)), deliveryId), T.webhook + i * 300);
    }
  }

  // ==================================================== inbound webhooks

  private receiveJira(payload: any, deliveryId: string) {
    const key: string = payload.issue.key;
    const status: string = payload.issue.fields.status.name;
    const updated = Date.parse(payload.issue.fields.updated);
    const actorId: string = payload.user.accountId;
    const actorName: string = payload.user.displayName;
    const short = deliveryId.slice(0, 8);
    const dedupeKey = `jira:${deliveryId}`;
    if (this.s.inbound.has(dedupeKey)) {
      this.addLog({ system: 'jira', direction: 'in', level: 'info', title: `Duplicate webhook for ${key} ignored`, detail: `Delivery ${short} was already processed.`, ref: key, tag: 'duplicate' });
      return;
    }
    this.s.inbound.add(dedupeKey);
    const colabId = payload.issue.fields.customfield_10042;
    const f = this.s.feedback.find((x) => x.jiraKey === key || (colabId && x.id === colabId));
    if (!f) {
      this.addLog({ system: 'jira', direction: 'in', level: 'info', title: `${key} changed in Jira; not linked to CoLab feedback`, detail: 'Nothing to do.', ref: key, tag: 'ignored' });
      return;
    }
    let linkedNow = false;
    if (!f.jiraKey) {
      f.jiraKey = key;
      f.jiraStatus = status;
      linkedNow = true;
    }
    if (f.jiraUpdatedAt && updated < f.jiraUpdatedAt) {
      this.addLog({ system: 'jira', direction: 'in', level: 'info', title: `Out-of-order webhook for ${key} ignored`, detail: 'It is older than the state we already have.', ref: f.id, partNumber: f.partNumber, tag: 'stale' });
      return;
    }
    f.jiraUpdatedAt = updated;
    f.jiraStatus = status;
    const part = this.part(f.partNumber);
    if (linkedNow) {
      this.addLog({ system: 'jira', direction: 'in', level: 'ok', title: `Linked ${key} to ${f.id} from its webhook`, detail: 'The create response never arrived, but the issue carries the CoLab feedback ID.', ref: f.id, partNumber: f.partNumber, tag: 'linked' });
    }
    if (actorId === INTEGRATION.id) {
      if (!linkedNow) {
        this.addLog({ system: 'jira', direction: 'in', level: 'info', title: `Echo of our own change to ${key}; no-op`, detail: `${key} is ${status}. The change came from this integration, so nothing is applied back.`, ref: f.id, partNumber: f.partNumber, tag: 'echo' });
      }
      this.refreshSync(f.id);
      this.refreshGate(f.partNumber);
      return;
    }
    if (part.releasedAt || part.pendingDecisionId) {
      this.addLog({ system: 'jira', direction: 'in', level: 'warn', title: `${actorName} moved ${key} to ${status} after ${part.number} Rev ${part.rev} was released`, detail: "The released record doesn't change. Raise it on the next revision.", ref: f.id, partNumber: f.partNumber, tag: 'frozen' });
      return;
    }
    let target: FeedbackStatus | null = null;
    if (status === 'Done') target = ['resolved', 'waived', 'dismissed'].includes(f.status) ? null : 'resolved';
    else if (status === 'In Progress') target = f.status === 'in_progress' ? null : 'in_progress';
    else if (status === 'To Do') target = f.status === 'open' ? null : 'open';
    if (!target) {
      this.addLog({ system: 'jira', direction: 'in', level: 'info', title: `${key} is ${status}; ${f.id} already matches`, detail: 'Nothing to apply.', ref: f.id, partNumber: f.partNumber, tag: 'noop' });
      this.refreshGate(f.partNumber);
      return;
    }
    const before = f.status;
    f.status = target;
    if (target === 'resolved') {
      f.resolvedAt = now();
      f.resolvedBy = `${actorName} (in Jira)`;
    } else {
      f.resolvedAt = null;
      f.resolvedBy = null;
      f.waiverReason = null;
      f.waivedById = null;
      f.waivedAt = null;
    }
    this.touch(f);
    this.systemNote(f, `${actorName} moved ${key} to ${status}.`, 'Jira');
    this.audit(`${actorName} (Jira)`, 'feedback.sync', f.partNumber, f.id, `${before} → ${target} from ${key}`);
    this.addLog({
      system: 'jira', direction: 'in', level: 'ok',
      title: `${actorName} moved ${key} to ${status}; ${f.id} is now ${STATUS_LABEL[target] ?? target}`,
      detail: `Signature verified. Delivery ${short}.`, ref: f.id, partNumber: f.partNumber, tag: 'applied',
    });
    this.refreshGate(f.partNumber);
  }

  /** Windchill's validation hook. */
  private async promotionCheck(pr: WcPromotion): Promise<{ decision: 'APPROVE' | 'REJECT'; decisionId: string; reasons: string[] }> {
    const part = this.part(pr.partNumber);
    const existingId = part.releasedAt ? part.releasedDecisionId : part.pendingDecisionId;
    if (existingId) return { decision: 'APPROVE', decisionId: existingId, reasons: [] };
    const g = this.gateFor(part);
    const approved = g.outcome === 'READY';
    const decisionId = `R-${String(++this.s.seq.decision).padStart(4, '0')}`;
    const at = now();
    const failing = g.checks.filter((c) => c.status === 'fail');
    const reasons = failing.map((c) => `${c.title}: ${c.summary}`);
    let record: ReviewRecord | null = null;
    let hash: string;
    if (approved) {
      record = await this.buildRecord(part, decisionId, at, pr.id, pr.requestedBy, g.checks);
      hash = record.snapshotHash;
      part.pendingDecisionId = decisionId;
    } else {
      hash = await sha256(canonical({ part: part.number, rev: part.rev, state: this.policyState(part) }));
    }
    this.s.decisions.push({
      id: decisionId, partNumber: part.number, rev: part.rev, at, outcome: approved ? 'approved' : 'rejected',
      promotionRequestId: pr.id, requestedBy: pr.requestedBy, checks: g.checks, snapshotHash: hash, record,
    });
    this.audit('Windchill', 'gate.decision', part.number, decisionId, approved ? 'approved' : 'rejected: ' + reasons.join('; '));
    this.addLog({
      system: 'windchill', direction: 'in', level: approved ? 'ok' : 'error',
      title: approved
        ? `Windchill asked to release ${part.number} Rev ${part.rev} (${pr.id}): approved`
        : `Windchill asked to release ${part.number} Rev ${part.rev} (${pr.id}): rejected, ${failing.length} check${failing.length !== 1 ? 's' : ''} failing`,
      detail: approved ? `All blocking checks pass. Decision ${decisionId}` : reasons.join('; '),
      ref: pr.id, partNumber: part.number, tag: 'decision', meta: { decisionId, snapshotHash: hash, reasons },
    });
    this.refreshGate(part.number);
    return { decision: approved ? 'APPROVE' : 'REJECT', decisionId, reasons };
  }

  private receivePlmEvent(partNumber: string, prId: string) {
    const part = this.part(partNumber);
    if (part.releasedAt) return;
    const decisionId = part.pendingDecisionId;
    part.releasedAt = now();
    part.releasedDecisionId = decisionId;
    part.pendingDecisionId = null;
    this.audit('Windchill', 'part.released', part.number, part.number, `${prId} / ${decisionId}`);
    this.addLog({
      system: 'windchill', direction: 'in', level: 'ok', title: `Windchill confirmed ${part.number} Rev ${part.rev} is Released`,
      detail: `Lifecycle INWORK → RELEASED by ${prId}. Decision ${decisionId}.`, ref: prId, partNumber: part.number, tag: 'released',
    });
    if (decisionId) {
      this.enqueue('plm.attach_record', `part:${part.number}`, part.number, `Attach review record ${decisionId} to ${part.number} in Windchill`, { decisionId });
    }
    this.refreshGate(part.number);
  }

  // ================================================== mock Windchill

  private async wcPromote(partNumber: string, requestedBy: string, tracer: Tracer): Promise<WcPromotion> {
    const epoch = this.epoch;
    const body = { PartNumber: partNumber, TargetState: 'RELEASED', RequestedBy: requestedBy };
    const pr = await this.net(tracer, 'POST', `${WC_BASE}/ChangeMgmt/PromotionRequests`, body, () => {
      const wc = this.s.wc.parts.get(partNumber);
      if (!wc) throw new HttpError(404, 'Not Found', null, { error: { message: `No part ${partNumber}` } });
      if (wc.state === 'RELEASED') {
        throw new HttpError(409, `${partNumber} Rev ${wc.revision} is already Released`, null, {
          error: { message: `${partNumber} Rev ${wc.revision} is already Released` },
        });
      }
      const created: WcPromotion = {
        id: `PR-${String(this.s.wc.nextPr++).padStart(5, '0')}`, partNumber, revision: wc.revision, status: 'OPEN',
        requestedBy, createdOn: now(), reasons: [], decisionId: null,
      };
      this.s.wc.promotions.push(created);
      return created;
    });
    // Windchill calls the gate's validation hook before it answers.
    await sleep(60 + Math.random() * 60);
    if (epoch !== this.epoch) return pr;
    const verdict = await this.promotionCheck(pr);
    const wc = this.s.wc.parts.get(partNumber)!;
    pr.decisionId = verdict.decisionId;
    if (verdict.decision === 'APPROVE') {
      pr.status = 'APPROVED';
      const before = wc.state;
      wc.state = 'RELEASED';
      wc.history.push({ at: now(), from: before, to: 'RELEASED', by: `Promotion ${pr.id}` });
      this.later(() => this.receivePlmEvent(partNumber, pr.id), T.plmEvent);
    } else {
      pr.status = 'REJECTED';
      pr.reasons = verdict.reasons;
    }
    const call = tracer.calls[tracer.calls.length - 1];
    if (call) call.responseBody = { ID: pr.id, Status: pr.status, GateDecisionId: pr.decisionId, Reasons: pr.reasons };
    this.changed(partNumber);
    return pr;
  }

  // ============================================================ Backend

  async snapshot(partNumber: string): Promise<ConsoleSnapshot> {
    await this.ready;
    const s = this.s;
    const me = this.me();
    const parts: PartSummary[] = [...s.parts]
      .sort((a, b) => a.order - b.order)
      .map((p) => {
        const g = this.gateFor(p);
        return {
          number: p.number, name: p.name, rev: p.rev, assembly: p.assembly, model: p.model,
          plmState: p.releasedAt ? 'RELEASED' : 'INWORK', gateOutcome: g.outcome, blockingPassed: g.blockingPassed,
          blockingTotal: g.blockingTotal, itemsToClear: g.itemsToClear,
          openCount: s.feedback.filter((f) => f.partNumber === p.number && (f.status === 'open' || f.status === 'in_progress')).length,
        };
      });
    const row = s.parts.find((p) => p.number === partNumber) ?? null;
    let part: Part | null = null;
    if (row) {
      const g = this.gateFor(row);
      const fbs = s.feedback.filter((f) => f.partNumber === row.number).sort((a, b) => a.number - b.number);
      const closed = fbs.filter((f) => ['resolved', 'waived', 'dismissed'].includes(f.status));
      const durations = fbs.filter((f) => f.status === 'resolved' && f.resolvedAt).map((f) => (f.resolvedAt! - f.createdAt) / 3_600_000);
      part = {
        number: row.number, name: row.name, rev: row.rev, assembly: row.assembly, model: row.model,
        material: row.material, finish: row.finish, process: row.process, cadFiles: row.cadFiles,
        plmState: row.releasedAt ? 'RELEASED' : 'INWORK',
        review: { title: row.reviewTitle, stage: row.reviewStage, due: iso(row.reviewDue) },
        gate: {
          outcome: g.outcome, blockingTotal: g.blockingTotal, blockingPassed: g.blockingPassed, itemsToClear: g.itemsToClear,
          checks: g.checks, releasedAt: g.releasedAt, decisionId: g.decisionId, snapshotHash: g.snapshotHash,
        },
        feedback: fbs.map((f) => ({
          id: f.id, number: f.number, title: f.title, body: f.body, priority: f.priority, category: f.category,
          status: f.status, source: f.source, triage: f.triage, citation: f.citation,
          pin: f.pin ? { x: f.pin.p[0], y: f.pin.p[1], z: f.pin.p[2], nx: f.pin.n[0], ny: f.pin.n[1], nz: f.pin.n[2] } : null,
          sheetRef: f.sheetRef, author: this.person(f.authorId), owner: this.person(f.ownerId), jiraKey: f.jiraKey,
          jiraStatus: f.jiraStatus, syncState: f.syncState, waiverReason: f.waiverReason, waivedBy: this.person(f.waivedById),
          dismissReason: f.dismissReason, dismissedBy: this.person(f.dismissedById), resolvedBy: f.resolvedBy,
          resolvedAt: iso(f.resolvedAt), createdAt: iso(f.createdAt)!, updatedAt: iso(f.updatedAt)!,
          thread: f.thread.map((c) => ({ at: iso(c.at)!, author: this.person(c.authorId), authorLabel: c.authorLabel, text: c.text, kind: c.kind })),
        })),
        reviewers: s.reviewers
          .filter((r) => r.partNumber === row.number)
          .map((r) => ({ role: r.role, status: r.status, due: iso(r.due), completedAt: iso(r.completedAt), nudgedAt: iso(r.nudgedAt), person: this.person(r.personId)! })),
        decisions: s.decisions
          .filter((d) => d.partNumber === row.number)
          .sort((a, b) => b.at - a.at)
          .map<Decision>((d) => ({ id: d.id, at: iso(d.at)!, outcome: d.outcome, promotionRequestId: d.promotionRequestId, requestedBy: d.requestedBy, snapshotHash: d.snapshotHash, checks: d.checks, hasRecord: !!d.record })),
        audit: s.audit
          .filter((a) => a.partNumber === row.number)
          .sort((a, b) => b.atMs - a.atMs || b.id - a.id)
          .slice(0, 60)
          .map(({ id, at, actor, action, entityId, detail }) => ({ id, at, actor, action, entityId, detail })),
        stats: {
          total: fbs.length, open: fbs.length - closed.length, closed: closed.length,
          avgResolveHours: durations.length ? Math.round((durations.reduce((a, b) => a + b, 0) / durations.length) * 10) / 10 : null,
        },
        deliveries: s.outbox
          .filter((m) => m.partNumber === row.number && m.status !== 'delivered')
          .map((m) => ({ id: m.id, topic: m.topic, label: m.label, status: m.status, attempts: m.attempts, maxAttempts: m.maxAttempts, nextAttemptAt: iso(m.nextAttemptAt), lastError: m.lastError, orderingKey: m.orderingKey })),
      };
    }
    return { workspace: { name: SEED.workspace.name, program: SEED.workspace.program, currentUser: me, policy: POLICY }, parts, part, systems: this.systems() };
  }

  private systems(): Systems {
    const c = this.s.jira.chaos;
    const statuses = this.s.outbox.filter((m) => m.status !== 'delivered').map((m) => m.status);
    const dead = statuses.filter((x) => x === 'dead').length;
    return {
      jira: c.jiraOutage ? 'down' : dead || Object.values(c).some(Boolean) ? 'degraded' : 'healthy',
      windchill: 'healthy',
      pending: statuses.filter((x) => x === 'pending' || x === 'in_flight').length,
      retrying: statuses.filter((x) => x === 'retrying').length,
      dead,
      chaos: { ...c },
    };
  }

  async log(limit = 150): Promise<LogEntry[]> {
    await this.ready;
    return this.s.log.slice(-limit).reverse();
  }

  async jiraIssues(): Promise<JiraIssue[]> {
    await this.ready;
    return [...this.s.jira.issues.values()]
      .sort((a, b) => b.updated - a.updated)
      .map((i) => ({
        key: i.key, summary: i.summary, status: i.status, resolution: i.resolution, priority: i.priority,
        assignee: this.person(i.assigneeId)?.name ?? null, assigneeId: i.assigneeId, colabId: i.colabId, updated: iso(i.updated)!,
      }));
  }

  async plm(): Promise<PlmState> {
    await this.ready;
    const display: Record<string, string> = { INWORK: 'In Work', UNDERREVIEW: 'Under Review', RELEASED: 'Released' };
    return {
      parts: [...this.s.wc.parts.values()].map((p) => ({
        id: p.id, number: p.number, name: p.name, revision: p.revision, version: p.version, state: p.state, stateDisplay: display[p.state],
        attachments: p.attachments.map((a) => ({ fileName: a.fileName, mimeType: a.mimeType, size: a.size, createdOn: iso(a.createdOn)! })),
        history: p.history.map((h) => ({ at: iso(h.at)!, from: h.from, to: h.to, by: h.by })),
      })),
      promotions: [...this.s.wc.promotions].reverse().map((p) => ({
        id: p.id, partNumber: p.partNumber, revision: p.revision, status: p.status, requestedBy: p.requestedBy,
        createdOn: iso(p.createdOn)!, reasons: p.reasons, decisionId: p.decisionId,
      })),
    };
  }

  async record(decisionId: string): Promise<ReviewRecord | null> {
    await this.ready;
    return this.s.decisions.find((d) => d.id === decisionId)?.record ?? null;
  }

  subscribe(onEvent: (e: LiveEvent) => void, onStatus: (connected: boolean) => void): () => void {
    this.listeners.add(onEvent);
    queueMicrotask(() => onStatus(true));
    return () => this.listeners.delete(onEvent);
  }

  private queueJira(f: FeedbackRow, to: JiraStatus, resolution: string | null, note: string | null, author: string) {
    const linking = f.jiraKey || this.s.outbox.some((m) => m.orderingKey === `feedback:${f.id}` && m.topic === 'jira.create_issue' && m.status !== 'delivered');
    if (!linking) return;
    const key = f.jiraKey ?? 'its Jira issue';
    if (note) {
      this.enqueue('jira.comment', `feedback:${f.id}`, f.partNumber, `Post note on ${key}`, {
        feedbackId: f.id, text: note, author, marker: `rg-${Math.random().toString(16).slice(2, 10)}`,
      });
    }
    this.enqueue('jira.transition', `feedback:${f.id}`, f.partNumber, `Move ${key} to ${to}`, { feedbackId: f.id, to, resolution });
  }

  async resolveFeedback(id: string, note?: string) {
    await this.ready;
    const text = (note ?? '').trim() || null;
    const f = this.fb(id);
    this.editable(f.partNumber);
    if (f.source === 'ai' && f.triage === 'untriaged') throw new BackendError('Triage this AutoReview finding first: accept it or dismiss it.');
    if (f.status === 'resolved') return;
    const me = this.me();
    f.status = 'resolved';
    f.resolvedAt = now();
    f.resolvedBy = me.name;
    this.touch(f);
    if (text) f.thread.push({ at: now(), authorId: me.id, authorLabel: me.name, text, kind: 'comment' });
    this.systemNote(f, `Resolved by ${me.name}.`);
    this.audit(me.name, 'feedback.resolve', f.partNumber, f.id, text);
    this.addLog({ system: 'colab', direction: 'internal', level: 'ok', title: `${me.name} resolved ${f.id}`, detail: f.title, ref: f.id, partNumber: f.partNumber, tag: 'resolve' });
    this.queueJira(f, 'Done', 'Done', text, me.name);
    this.refreshGate(f.partNumber);
  }

  async reopenFeedback(id: string) {
    await this.ready;
    const f = this.fb(id);
    this.editable(f.partNumber);
    if (f.status === 'open' || f.status === 'in_progress') return;
    const me = this.me();
    const was = f.status;
    f.status = 'open';
    f.resolvedAt = null;
    f.resolvedBy = null;
    f.waiverReason = null;
    f.waivedById = null;
    f.waivedAt = null;
    if (f.source === 'ai' && f.triage === 'dismissed') {
      f.triage = 'untriaged';
      f.dismissReason = null;
      f.dismissedById = null;
    }
    this.touch(f);
    this.systemNote(f, `Reopened by ${me.name}.`);
    this.audit(me.name, 'feedback.reopen', f.partNumber, f.id, `was ${was}`);
    this.addLog({ system: 'colab', direction: 'internal', level: 'info', title: `${me.name} reopened ${f.id}`, detail: f.title, ref: f.id, partNumber: f.partNumber, tag: 'reopen' });
    this.queueJira(f, 'To Do', null, null, me.name);
    this.refreshGate(f.partNumber);
  }

  async waiveFeedback(id: string, reason: string) {
    await this.ready;
    const text = (reason ?? '').trim();
    const f = this.fb(id);
    this.editable(f.partNumber);
    if (f.source === 'ai' && f.triage === 'untriaged') throw new BackendError('Triage this AutoReview finding first: accept it or dismiss it.');
    const rule = POLICY.rules.find((r) => r.type === 'no_open_feedback' && ((r.params as any).priorities ?? []).includes(f.priority));
    if (rule && (rule.params as any).allowWaiver === false) {
      throw new BackendError(`The release policy doesn't allow waiving ${f.priority} feedback. Resolve it instead.`);
    }
    if (text.length < MIN_REASON) throw new BackendError('Add a reason (at least 12 characters) so the review record explains the decision.');
    const me = this.me();
    f.status = 'waived';
    f.waiverReason = text;
    f.waivedById = me.id;
    f.waivedAt = now();
    this.touch(f);
    this.systemNote(f, `Waived by ${me.name}: ${text}`);
    this.audit(me.name, 'feedback.waive', f.partNumber, f.id, text);
    this.addLog({ system: 'colab', direction: 'internal', level: 'ok', title: `${me.name} waived ${f.id}`, detail: text, ref: f.id, partNumber: f.partNumber, tag: 'waive' });
    this.queueJira(f, 'Done', "Won't Do", `Waived in CoLab: ${text}`, me.name);
    this.refreshGate(f.partNumber);
  }

  async triageFinding(id: string, decision: 'accept' | 'dismiss', note?: string) {
    await this.ready;
    const text = (note ?? '').trim();
    const f = this.fb(id);
    this.editable(f.partNumber);
    if (f.source !== 'ai' || f.triage !== 'untriaged') throw new BackendError(`${f.id} isn't an AutoReview finding waiting for triage.`);
    const me = this.me();
    if (decision === 'accept') {
      f.triage = 'accepted';
      f.ownerId = f.ownerId ?? me.id;
      this.touch(f);
      if (text) f.thread.push({ at: now(), authorId: me.id, authorLabel: me.name, text, kind: 'comment' });
      this.systemNote(f, `Accepted by ${me.name}. Tracked like any other ${f.priority}-priority feedback.`);
      this.audit(me.name, 'finding.accept', f.partNumber, f.id, text || null);
      this.addLog({ system: 'colab', direction: 'internal', level: 'ok', title: `${me.name} accepted AutoReview finding ${f.id}`, detail: f.title, ref: f.id, partNumber: f.partNumber, tag: 'triage' });
      if (f.priority === 'critical' || f.priority === 'high') {
        this.enqueue('jira.create_issue', `feedback:${f.id}`, f.partNumber, `Create Jira issue for ${f.id}`, { feedbackId: f.id });
      }
    } else {
      if (text.length < MIN_REASON) throw new BackendError("Say why you're dismissing it (at least 12 characters). The reason goes in the review record.");
      f.triage = 'dismissed';
      f.status = 'dismissed';
      f.dismissReason = text;
      f.dismissedById = me.id;
      this.touch(f);
      this.systemNote(f, `Dismissed by ${me.name}: ${text}`);
      this.audit(me.name, 'finding.dismiss', f.partNumber, f.id, text);
      this.addLog({ system: 'colab', direction: 'internal', level: 'ok', title: `${me.name} dismissed AutoReview finding ${f.id}`, detail: text, ref: f.id, partNumber: f.partNumber, tag: 'triage' });
    }
    this.refreshGate(f.partNumber);
  }

  async nudgeReviewer(partNumber: string, role: string) {
    await this.ready;
    this.editable(partNumber);
    const r = this.s.reviewers.find((x) => x.partNumber === partNumber && x.role === role);
    if (!r) throw new BackendError(`No ${role} review was requested on ${partNumber}.`);
    if (r.status === 'complete') throw new BackendError(`The ${role} review is already complete.`);
    const person = this.person(r.personId)!;
    r.nudgedAt = now();
    this.addLog({ system: 'notify', direction: 'out', level: 'info', title: `Reminder sent to ${person.name} for the ${role} review`, detail: 'In the demo, the reviewer answers a couple of seconds later.', ref: partNumber, partNumber, tag: 'nudge' });
    this.changed(partNumber);
    this.later(() => {
      const part = this.part(partNumber);
      if (r.status === 'complete' || part.releasedAt) return;
      r.status = 'complete';
      r.completedAt = now();
      this.audit(person.name, 'review.complete', partNumber, role);
      this.addLog({ system: 'colab', direction: 'in', level: 'ok', title: `${person.name} completed the ${role} review`, detail: 'Simulated reviewer response.', ref: partNumber, partNumber, tag: 'review' });
      this.refreshGate(partNumber);
    }, T.reviewer);
  }

  async requestRelease(partNumber: string): Promise<ReleaseResult> {
    await this.ready;
    const part = this.part(partNumber);
    if (part.releasedAt) throw new BackendError(`${part.number} Rev ${part.rev} is already released.`);
    const me = this.me();
    const tracer: Tracer = { calls: [] };
    let pr: WcPromotion;
    try {
      pr = await this.wcPromote(partNumber, me.name, tracer);
    } catch (e) {
      const msg = e instanceof HttpError ? `${e.status} ${e.message}` : String(e);
      this.addLog({ system: 'windchill', direction: 'out', level: 'error', title: `Windchill didn't take the promotion request for ${partNumber}: ${msg}`, ref: partNumber, partNumber, tag: 'promotion', meta: { calls: tracer.calls } });
      throw new BackendError(`Windchill didn't accept the promotion request (${msg}).`);
    }
    const level = ({ APPROVED: 'ok', REJECTED: 'error', ON_HOLD: 'warn' } as Record<string, LogEntry['level']>)[pr.status] ?? 'info';
    this.addLog({
      system: 'windchill', direction: 'out', level,
      title: `Promotion request ${pr.id} for ${partNumber} Rev ${part.rev}: ${pr.status.replace('_', ' ').toLowerCase()}`,
      detail: pr.reasons.join('; ') || null, ref: pr.id, partNumber, statusCode: 201,
      latencyMs: tracer.calls.reduce((a, c) => a + (c.latencyMs ?? 0), 0), tag: 'promotion', meta: { calls: tracer.calls },
    });
    this.changed(partNumber);
    return { promotionRequestId: pr.id, status: pr.status, reasons: pr.reasons, decisionId: pr.decisionId };
  }

  async retryDelivery(id: number) {
    await this.ready;
    const m = this.s.outbox.find((x) => x.id === id);
    if (!m) throw new BackendError(`Delivery ${id} doesn't exist.`);
    if (m.status !== 'dead' && m.status !== 'retrying') return;
    if (m.status === 'dead') {
      m.maxAttempts = m.attempts + 3;
      m.status = 'pending';
    }
    m.nextAttemptAt = now();
    this.addLog({ system: 'gate', direction: 'internal', level: 'info', title: `${this.me().name} retried: ${m.label}`, ref: String(m.id), partNumber: m.partNumber, tag: 'retry-now' });
    if (m.orderingKey.startsWith('feedback:')) this.refreshSync(m.orderingKey.slice(9));
    if (m.partNumber) this.refreshGate(m.partNumber);
    this.wake();
  }

  async setChaos(patch: Partial<Chaos>): Promise<Chaos> {
    await this.ready;
    const labels: Record<keyof Chaos, string> = {
      jiraOutage: 'Jira API outage (503s)',
      jiraLostResponses: 'Jira drops create responses',
      duplicateWebhooks: 'Jira sends every webhook twice',
      slowNetwork: 'Slow network (+600 ms)',
    };
    const c = this.s.jira.chaos;
    for (const k of Object.keys(patch) as (keyof Chaos)[]) {
      const v = patch[k];
      if (v == null || c[k] === v) continue;
      c[k] = v;
      this.addLog({ system: 'gate', direction: 'internal', level: v ? 'warn' : 'info', title: `Simulation ${v ? 'on' : 'off'}: ${labels[k]}`, tag: 'chaos' });
    }
    this.changed(null);
    return { ...c };
  }

  async reset() {
    this.epoch++;
    for (const t of this.timers) clearTimeout(t);
    this.timers.clear();
    if (this.wakeTimer) clearTimeout(this.wakeTimer);
    this.wakeTimer = null;
    this.pumping = false;
    this.ready = this.load();
    await this.ready;
    this.emit({ type: 'reset', data: {} });
  }

  async jiraTransition(key: string, to: JiraStatus, asUserId: string) {
    await this.ready;
    const actor = this.person(asUserId) ?? this.me();
    await sleep(40 + Math.random() * 50);
    this.jiraDoTransition(key, to, to === 'Done' ? 'Done' : null, { id: actor.id, name: actor.name });
  }

  async plmPromote(partNumber: string, as: { id: string; name: string }): Promise<ReleaseResult> {
    await this.ready;
    const tracer: Tracer = { calls: [] };
    try {
      const pr = await this.wcPromote(partNumber, as.name, tracer);
      return { promotionRequestId: pr.id, status: pr.status, reasons: pr.reasons, decisionId: pr.decisionId };
    } catch (e) {
      throw new BackendError(e instanceof HttpError ? e.message : String(e));
    }
  }

  attachmentUrl(): string | null {
    return null;
  }
}
