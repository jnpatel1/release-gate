// TypeScript port of server/releasegate/policy.py. Both are checked against
// shared/policy_cases.json, so the browser build and the server agree.

import type { Check, Policy } from '../api/types';

export interface PolicyFeedback {
  id: string;
  priority: string;
  status: string;
  source: string;
  triage?: string | null;
}

export interface PolicyState {
  feedback: PolicyFeedback[];
  reviews?: { role: string; status: string }[];
  sync?: { pending: number; failed: number; deliveryIds?: string[] };
}

export interface PolicyResult {
  outcome: 'READY' | 'BLOCKED';
  blockingTotal: number;
  blockingPassed: number;
  itemsToClear: number;
  checks: Check[];
}

interface RuleOutput {
  summary: string;
  itemIds?: string[];
  roles?: string[];
  deliveryIds?: string[];
  offending?: number;
}

const OPEN = ['open', 'in_progress'];

const untriagedAi = (f: PolicyFeedback) => f.source === 'ai' && f.triage === 'untriaged';

const join = (ids: string[], limit = 3) => {
  const shown = ids.slice(0, limit).join(', ');
  return ids.length > limit ? `${shown} +${ids.length - limit} more` : shown;
};

const byId = (a: string, b: string) => (a < b ? -1 : a > b ? 1 : 0);

const RULES: Record<string, (params: Record<string, any>, state: PolicyState) => RuleOutput> = {
  no_open_feedback(params, state) {
    const priorities: string[] = params.priorities ?? [];
    const statuses = new Set(OPEN);
    if (params.allowWaiver === false) statuses.add('waived');
    const offending = state.feedback.filter(
      (f) => priorities.includes(f.priority) && statuses.has(f.status) && !untriagedAi(f),
    );
    const ids = offending.map((f) => f.id).sort(byId);
    let summary = ids.length ? `${ids.length} open: ${join(ids)}` : 'None open';
    if (offending.some((f) => f.status === 'waived')) summary += " (policy doesn't allow waivers here)";
    return { itemIds: ids, summary };
  },

  ai_findings_triaged(_params, state) {
    const ids = state.feedback.filter(untriagedAi).map((f) => f.id).sort(byId);
    return { itemIds: ids, summary: ids.length ? `${ids.length} awaiting a person: ${join(ids)}` : 'All findings triaged' };
  },

  requested_reviews_complete(params, state) {
    const required: string[] = params.roles ?? [];
    const byRole = new Map((state.reviews ?? []).map((r) => [r.role, r]));
    const waiting: string[] = [];
    const notRequested: string[] = [];
    for (const role of required) {
      const r = byRole.get(role);
      if (!r) notRequested.push(role);
      else if (r.status !== 'complete') waiting.push(role);
    }
    const parts: string[] = [];
    if (waiting.length) parts.push('Waiting on ' + waiting.join(', '));
    if (notRequested.length) parts.push(notRequested.join(', ') + ' not requested');
    return { roles: [...waiting, ...notRequested], summary: parts.length ? parts.join('; ') : 'All requested reviews complete' };
  },

  integrations_in_sync(_params, state) {
    const pending = state.sync?.pending ?? 0;
    const failed = state.sync?.failed ?? 0;
    const ids = state.sync?.deliveryIds ?? [];
    if (!pending && !failed) return { deliveryIds: ids, summary: 'Every change confirmed by Jira and Windchill', offending: 0 };
    const bits: string[] = [];
    if (pending) bits.push(`${pending} pending`);
    if (failed) bits.push(`${failed} failed`);
    return { deliveryIds: ids, summary: `${bits.join(', ')} (release can't use unconfirmed data)`, offending: pending + failed };
  },
};

export function evaluate(policy: Policy, state: PolicyState): PolicyResult {
  const checks: Check[] = [];
  const toClear = new Set<string>();
  for (const rule of policy.rules) {
    const fn = RULES[rule.type];
    if (!fn) throw new Error(`Unknown rule type: ${rule.type}`);
    const out = fn((rule.params ?? {}) as Record<string, any>, state);
    let blocking = rule.blocking !== false;
    if (rule.type === 'integrations_in_sync' && policy.failClosedOnSync === false) blocking = false;
    const itemIds = out.itemIds ?? [];
    const roles = out.roles ?? [];
    const deliveryIds = out.deliveryIds ?? [];
    const offending = itemIds.length + roles.length + (out.offending ?? 0);
    const status = offending === 0 ? 'pass' : blocking ? 'fail' : 'warn';
    if (status === 'fail') {
      itemIds.forEach((id) => toClear.add(id));
      roles.forEach((r) => toClear.add(`review:${r}`));
      if (out.offending) {
        if (deliveryIds.length) deliveryIds.forEach((d) => toClear.add(`delivery:${d}`));
        else toClear.add(`sync:${rule.id}`);
      }
    }
    checks.push({ id: rule.id, type: rule.type, title: rule.title, blocking, status, summary: out.summary, itemIds, roles, deliveryIds });
  }
  const blockingChecks = checks.filter((c) => c.blocking);
  const passed = blockingChecks.filter((c) => c.status === 'pass').length;
  return {
    outcome: passed === blockingChecks.length ? 'READY' : 'BLOCKED',
    blockingTotal: blockingChecks.length,
    blockingPassed: passed,
    itemsToClear: toClear.size,
    checks,
  };
}
