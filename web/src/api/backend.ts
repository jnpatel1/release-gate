import type {
  Chaos,
  ConsoleSnapshot,
  JiraIssue,
  JiraStatus,
  LiveEvent,
  LogEntry,
  PlmState,
  ReleaseResult,
  ReviewRecord,
} from './types';

/**
 * Everything the console needs from "the backend". Two implementations:
 * ServerBackend (GraphQL + SSE against the Python app) and OfflineEngine
 * (the same flows simulated in the browser, for the shareable build).
 */
export interface Backend {
  readonly mode: 'server' | 'offline';

  snapshot(partNumber: string): Promise<ConsoleSnapshot>;
  log(limit?: number): Promise<LogEntry[]>;
  jiraIssues(): Promise<JiraIssue[]>;
  plm(): Promise<PlmState>;
  record(decisionId: string): Promise<ReviewRecord | null>;
  subscribe(onEvent: (e: LiveEvent) => void, onStatus: (connected: boolean) => void): () => void;

  resolveFeedback(id: string, note?: string): Promise<void>;
  reopenFeedback(id: string): Promise<void>;
  waiveFeedback(id: string, reason: string): Promise<void>;
  triageFinding(id: string, decision: 'accept' | 'dismiss', note?: string): Promise<void>;
  nudgeReviewer(partNumber: string, role: string): Promise<void>;
  requestRelease(partNumber: string): Promise<ReleaseResult>;
  retryDelivery(id: number): Promise<void>;
  setChaos(patch: Partial<Chaos>): Promise<Chaos>;
  reset(): Promise<void>;

  /** Act inside the mock Jira board as a person (fires a webhook to the gate). */
  jiraTransition(key: string, to: JiraStatus, asUserId: string): Promise<void>;
  /** Click "Promote" inside the mock Windchill UI. */
  plmPromote(partNumber: string, as: { id: string; name: string }): Promise<ReleaseResult>;
  /** Direct link to an attachment's raw content, when the mock serves one. */
  attachmentUrl(partNumber: string, fileName: string): string | null;
}

export class BackendError extends Error {}
