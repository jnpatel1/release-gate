import { describe, expect, it } from 'vitest';
import policyJson from '../../../shared/policy.json';
import cases from '../../../shared/policy_cases.json';
import type { Policy } from '../api/types';
import { evaluate } from './policy';

describe('policy engine (shared vectors)', () => {
  for (const c of cases.cases as any[]) {
    it(c.name, () => {
      const policy = { ...(policyJson as Policy), ...(c.policyOverrides ?? {}) };
      const state = { reviews: cases.baseReviews, sync: { pending: 0, failed: 0 }, ...c.state };
      const result = evaluate(policy, state);
      expect(result.outcome).toBe(c.expect.outcome);
      expect(result.checks.filter((x) => x.status === 'fail').map((x) => x.id)).toEqual(c.expect.failing);
      expect(result.checks.filter((x) => x.status === 'warn').map((x) => x.id)).toEqual(c.expect.warnings);
      expect(result.blockingPassed).toBe(c.expect.blockingPassed);
      expect(result.itemsToClear).toBe(c.expect.itemsToClear);
    });
  }
});
