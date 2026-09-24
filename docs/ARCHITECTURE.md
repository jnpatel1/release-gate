# Architecture and decisions

## The problem

Mechanical engineering teams review designs in CoLab, track the follow-up work in Jira, and release parts through a PLM like Windchill. Those three don't agree on their own. A part can be promoted to Released in Windchill while a critical review comment is still open in CoLab, and the Jira ticket for a fix can be closed without anyone updating the review.

CoLab already gets part of the way: it syncs comments and status with Jira, and after a review you can attach the issue list or review summary back in PLM. Release Gate is a working sketch of the next step, where the release itself depends on the review.

## The flows

**1. Windchill asks before it releases.** An engineer requests promotion of `BRK-2210 Rev C` to Released. Windchill's workflow calls the gate's validation hook (`POST /webhooks/plm/promotion-check`, HMAC-signed) and waits for the answer.

```
Windchill                         Release Gate
  | create PR-00015                    |
  |-- may BRK-2210 C release? -------->|  evaluate policy against CoLab state
  |<------- REJECT + reasons ----------|  store decision R-0042 (rejected, checks, hash)
  | PR-00015 = REJECTED                 |
```

**2. When everything passes**, the gate records an approved decision with a review record and marks the part *releasing*, not released. Windchill promotes the part and sends a lifecycle event (`POST /webhooks/plm/events`). Only then does the gate mark it Released and queue the review record for attachment. The gate never assumes a write in another system happened.

**3. Two-way Jira sync.** Resolving or waiving feedback in CoLab writes outbox messages (comment, then transition) in the same transaction. The worker delivers them. Jira's webhook for that change comes back and is recognised as an echo. Closing a ticket in Jira sends a webhook the gate applies to the feedback.

**4. AI findings need a person.** An AutoReview finding starts untriaged and blocks release by itself. A person accepts it (it then counts like any other feedback, and high-priority ones get a Jira issue) or dismisses it with a reason that goes in the record.

## Decisions and tradeoffs

**Policy is data.** Rules live in `shared/policy.json` and the engine is pure functions over a small state snapshot. Customers differ (who must review, whether critical items can be waived, what to do when sync is broken), and that should be config, not code. It also makes the engine easy to test: `shared/policy_cases.json` holds 14 cases that both the Python engine and the TypeScript port must pass.

**Outbox instead of calling Jira inline.** A user's click shouldn't fail because Jira is slow, and a crash between "save in CoLab" and "tell Jira" shouldn't lose the update. Writing the change and the outbox row in one transaction makes the handoff atomic. Tradeoff: eventual consistency, which the UI shows honestly (sync dots, the "in sync" check).

**Per-key ordering.** Messages share an ordering key per feedback item, and only the oldest undelivered message for a key is eligible. A transition can't overtake the create for the same issue. A dead message blocks its key until someone retries it, which is deliberate: skipping it would reorder history.

**Retries.** Exponential backoff (base × 2^(n-1), capped) with 25% jitter, honouring `Retry-After`. 408/425/429 and 5xx are retried; other 4xx go straight to dead-letter because the request itself is wrong.

**Idempotent writes.** Jira has no idempotency keys. Each issue stores the CoLab feedback ID in a custom field, and the connector searches for it before creating, so a retry after a lost response links the existing issue. Transitions check the current status first. Comments carry a marker and are skipped if already present. The webhook also carries the feedback ID, so a lost create response can be linked by whichever arrives first.

**Webhook hygiene.** Signatures are verified before parsing (HMAC-SHA256, constant-time compare). Each delivery ID is recorded under a unique constraint, so duplicates are dropped even if two copies race. Events older than the last applied `updated` timestamp are ignored. Events caused by the integration's own service account are echoes and change nothing, which is what stops two-way sync from looping.

**Fail closed.** The "in sync" check blocks release while any change is unconfirmed. Windchill holds a promotion if the gate doesn't answer. For aerospace and medical customers, releasing on stale data is worse than waiting. The policy has a `failClosedOnSync` switch for teams who'd rather warn.

**Frozen releases.** After release, feedback on that revision can't change, and a Jira ticket reopened afterwards is logged but not applied. Changes belong on the next revision.

**Tamper-evident record.** The review record is canonical JSON (sorted keys, no whitespace) plus its SHA-256. If anything in it changes later, the hash no longer matches.

**GraphQL for the console, REST for integrations.** The console asks for one nested view of a part, which suits GraphQL (and CoLab's stack). Jira and Windchill expose REST, so the connectors speak REST. Live updates use Server-Sent Events: one-way, auto-reconnecting, and enough here.

**One process for the demo.** Console, API and both mocks run in one FastAPI process, but they only talk over HTTP through configurable base URLs, so each mock could be its own service without code changes. Tests route the same calls through an in-memory ASGI transport.

**Two engines, one set of vectors.** The shareable single-file build can't run Python, so `web/src/engine` re-implements the flows in TypeScript behind the same `Backend` interface the server client uses. The policy engine is checked against the shared vectors; the rest is covered by running the same Playwright script against both builds.

## If this went to production

- **Postgres and more workers.** Claim outbox rows with `SELECT … FOR UPDATE SKIP LOCKED`, and partition by ordering key so workers scale out without breaking per-issue order. Or move delivery to a queue (SQS FIFO with the ordering key as the group ID).
- **Real auth.** OAuth 2.0 (3LO) or Connect/Forge app auth for Jira Cloud, Windchill credentials from a secrets manager, per-customer webhook secrets with rotation.
- **Real Windchill hook.** A workflow expression robot or a custom listener on promotion requests, installed like CoLab's existing Windchill integration.
- **Observability.** Metrics on queue depth, attempts, dead letters and webhook outcomes; alerts on dead letters; a trace ID from the click to the Jira call.
- **Multi-tenant config.** Per-workspace policies, field mappings (priority → Jira priority, custom field IDs) and status mappings, edited in the product.
- **Reconciliation.** A periodic job that compares CoLab and Jira state and repairs drift that webhooks missed.

## Code map

| File | What it does |
|---|---|
| `server/releasegate/policy.py` | The rules engine. Start here. |
| `server/releasegate/gate.py` | Builds the policy input from the database, handles released/releasing states, builds the review record and hash. |
| `server/releasegate/services.py` | What the buttons do: resolve, waive, triage, nudge, request release. Each writes CoLab state plus outbox rows in one transaction. |
| `server/releasegate/outbox.py` | Enqueue, backoff, the worker loop, per-key ordering, dead letters. |
| `server/releasegate/handlers.py` | One idempotent handler per outbox topic. |
| `server/releasegate/connectors/` | HTTP clients for Jira and Windchill, with request tracing for the log. |
| `server/releasegate/webhooks.py` | Jira webhooks (verify, dedupe, stale, echo, apply) and Windchill's validation hook and lifecycle events. |
| `server/releasegate/mocks/` | Mock Jira and Windchill, including the failure switches. |
| `server/releasegate/schema.py` | GraphQL types, queries and mutations. |
| `web/src/viewer/` | three.js viewer and the procedural parts. Pins use the same millimetre coordinates as the seed data. |
| `web/src/engine/engine.ts` | The in-browser engine for the single-file build. |
