// Shapes the console works with. The GraphQL API and the in-browser engine
// both return exactly these.

export type Priority = 'critical' | 'high' | 'medium' | 'low';
export type FeedbackStatus = 'open' | 'in_progress' | 'resolved' | 'waived' | 'dismissed';
export type Triage = 'untriaged' | 'accepted' | 'dismissed' | null;
export type GateOutcome = 'BLOCKED' | 'READY' | 'RELEASING' | 'RELEASED';
export type CheckStatus = 'pass' | 'fail' | 'warn';
export type ModelKind = 'bracket' | 'plate' | 'shaft' | 'housing';
export type SyncState = 'none' | 'pending' | 'synced' | 'error';
export type JiraStatus = 'To Do' | 'In Progress' | 'Done';

export interface Person {
  id: string;
  name: string;
  role: string;
  org: string;
  initials: string;
  external: boolean;
  isAi: boolean;
}

export interface Pin {
  x: number;
  y: number;
  z: number;
  nx: number;
  ny: number;
  nz: number;
}

export interface Comment {
  at: string;
  author: Person | null;
  authorLabel: string;
  text: string;
  kind: 'comment' | 'system';
}

export interface Feedback {
  id: string;
  number: number;
  title: string;
  body: string;
  priority: Priority;
  category: string;
  status: FeedbackStatus;
  source: 'human' | 'ai';
  triage: Triage;
  citation: string | null;
  pin: Pin | null;
  sheetRef: string | null;
  author: Person | null;
  owner: Person | null;
  jiraKey: string | null;
  jiraStatus: string | null;
  syncState: SyncState;
  waiverReason: string | null;
  waivedBy: Person | null;
  dismissReason: string | null;
  dismissedBy: Person | null;
  resolvedBy: string | null;
  resolvedAt: string | null;
  createdAt: string;
  updatedAt: string;
  thread: Comment[];
}

export interface Check {
  id: string;
  type: string;
  title: string;
  blocking: boolean;
  status: CheckStatus;
  summary: string;
  itemIds: string[];
  roles: string[];
  deliveryIds: string[];
}

export interface Gate {
  outcome: GateOutcome;
  blockingTotal: number;
  blockingPassed: number;
  itemsToClear: number;
  checks: Check[];
  releasedAt: string | null;
  decisionId: string | null;
  snapshotHash: string | null;
}

export interface Reviewer {
  role: string;
  status: 'pending' | 'complete';
  due: string | null;
  completedAt: string | null;
  nudgedAt: string | null;
  person: Person;
}

export interface Decision {
  id: string;
  at: string;
  outcome: 'approved' | 'rejected';
  promotionRequestId: string | null;
  requestedBy: string | null;
  snapshotHash: string;
  checks: Check[];
  hasRecord: boolean;
}

export interface AuditEntry {
  id: number;
  at: string;
  actor: string;
  action: string;
  entityId: string;
  detail: string | null;
}

export interface Stats {
  total: number;
  open: number;
  closed: number;
  avgResolveHours: number | null;
}

export interface Delivery {
  id: number;
  topic: string;
  label: string;
  status: string;
  attempts: number;
  maxAttempts: number;
  nextAttemptAt: string | null;
  lastError: string | null;
  orderingKey: string;
}

export interface PartSummary {
  number: string;
  name: string;
  rev: string;
  assembly: string;
  model: ModelKind;
  plmState: 'INWORK' | 'RELEASED';
  gateOutcome: GateOutcome;
  blockingPassed: number;
  blockingTotal: number;
  itemsToClear: number;
  openCount: number;
}

export interface Part {
  number: string;
  name: string;
  rev: string;
  assembly: string;
  model: ModelKind;
  material: string;
  finish: string;
  process: string;
  cadFiles: string[];
  plmState: 'INWORK' | 'RELEASED';
  review: { title: string; stage: string; due: string | null };
  gate: Gate;
  feedback: Feedback[];
  reviewers: Reviewer[];
  decisions: Decision[];
  audit: AuditEntry[];
  stats: Stats;
  deliveries: Delivery[];
}

export interface HttpCall {
  method: string;
  url: string;
  requestHeaders?: Record<string, string>;
  requestBody?: unknown;
  status: number | null;
  responseBody?: unknown;
  latencyMs: number | null;
  error?: string | null;
}

export interface LogEntry {
  id: number;
  at: string;
  system: 'jira' | 'windchill' | 'gate' | 'colab' | 'notify';
  direction: 'out' | 'in' | 'internal';
  level: 'ok' | 'info' | 'warn' | 'error';
  title: string;
  detail: string | null;
  ref: string | null;
  partNumber: string | null;
  statusCode: number | null;
  latencyMs: number | null;
  tag: string | null;
  meta: { calls?: HttpCall[]; attempt?: number; retryInS?: number; [k: string]: unknown } | null;
}

export interface Chaos {
  jiraOutage: boolean;
  jiraLostResponses: boolean;
  duplicateWebhooks: boolean;
  slowNetwork: boolean;
}

export interface Systems {
  jira: 'healthy' | 'degraded' | 'down';
  windchill: 'healthy' | 'degraded' | 'down';
  pending: number;
  retrying: number;
  dead: number;
  chaos: Chaos;
}

export interface PolicyRule {
  id: string;
  type: string;
  title: string;
  blocking: boolean;
  params: Record<string, unknown>;
}

export interface Policy {
  id: string;
  name: string;
  version: number;
  description: string;
  failClosedOnSync: boolean;
  rules: PolicyRule[];
}

export interface Workspace {
  name: string;
  program: string;
  currentUser: Person;
  policy: Policy;
}

export interface ReleaseResult {
  promotionRequestId: string;
  status: 'APPROVED' | 'REJECTED' | 'ON_HOLD' | 'OPEN';
  reasons: string[];
  decisionId: string | null;
}

export interface ConsoleSnapshot {
  workspace: Workspace;
  parts: PartSummary[];
  part: Part | null;
  systems: Systems;
}

export interface JiraIssue {
  key: string;
  summary: string;
  status: JiraStatus;
  resolution: string | null;
  priority: string;
  assignee: string | null;
  assigneeId: string | null;
  colabId: string | null;
  updated: string;
}

export interface PlmAttachment {
  fileName: string;
  mimeType: string;
  size: number;
  createdOn: string;
}

export interface PlmPart {
  id: string;
  number: string;
  name: string;
  revision: string;
  version: string;
  state: 'INWORK' | 'UNDERREVIEW' | 'RELEASED';
  stateDisplay: string;
  attachments: PlmAttachment[];
  history: { at: string; from: string; to: string; by: string }[];
}

export interface PromotionRequest {
  id: string;
  partNumber: string;
  revision: string;
  status: 'OPEN' | 'APPROVED' | 'REJECTED' | 'ON_HOLD';
  requestedBy: string;
  createdOn: string;
  reasons: string[];
  decisionId: string | null;
}

export interface PlmState {
  parts: PlmPart[];
  promotions: PromotionRequest[];
}

export interface RecordFeedback {
  id: string;
  number: number;
  title: string;
  priority: Priority;
  category: string;
  source: string;
  status: FeedbackStatus;
  disposition: string;
  jiraKey: string | null;
}

export interface ReviewRecord {
  recordId: string;
  decision: string;
  decidedAt: string;
  promotionRequestId: string | null;
  requestedBy: string | null;
  part: { number: string; name: string; rev: string; assembly: string; material: string; finish: string; process: string };
  review: { title: string; stage: string };
  policy: { id: string; name: string; version: number; failClosedOnSync: boolean };
  checks: { id: string; title: string; blocking: boolean; status: CheckStatus; summary: string }[];
  reviews: { role: string; person: string | null; status: string; completedAt: string | null }[];
  feedback: RecordFeedback[];
  snapshotHash: string;
}

export type LiveEvent =
  | { type: 'log'; data: LogEntry }
  | { type: 'changed'; data: { part: string | null } }
  | { type: 'reset'; data: Record<string, never> }
  | { type: 'hello'; data: Record<string, never> };
