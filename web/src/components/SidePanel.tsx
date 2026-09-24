import {
  ArrowLeft,
  Bell,
  Check,
  FileText,
  Lock,
  LoaderCircle,
  Quote,
  RefreshCw,
  Sparkles,
  TriangleAlert,
  X,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import type { Check as GateCheck, Feedback, Part } from '../api/types';
import { ago, dateTime, due, isClosed, shortHash } from '../lib/format';
import { SUGGESTED } from '../lib/suggestions';
import { useStore, type FeedbackFilter } from '../state/store';
import { JiraChip, MiniBalloon, PersonChip, PriorityLabel, StatusTag, Avatar } from './common';

const CHECK_ICON = { pass: Check, fail: X, warn: TriangleAlert } as const;

function isBlockingItem(part: Part, id: string) {
  return part.gate.checks.some((c) => c.blocking && c.status === 'fail' && c.itemIds.includes(id));
}

// ------------------------------------------------------------------ checks

function CheckCard({ check, part }: { check: GateCheck; part: Part }) {
  const select = useStore((s) => s.select);
  const selectedId = useStore((s) => s.selectedId);
  const act = useStore((s) => s.act);
  const busy = useStore((s) => s.busy);
  const Icon = CHECK_ICON[check.status];
  const frozen = part.gate.outcome === 'RELEASED' || part.gate.outcome === 'RELEASING';
  const byId = new Map(part.feedback.map((f) => [f.id, f]));

  let body: JSX.Element | null = null;
  if (check.type === 'no_open_feedback' || check.type === 'ai_findings_triaged') {
    body = (
      <>
        {check.itemIds.map((id) => {
          const f = byId.get(id);
          if (!f) return null;
          return (
            <button key={id} className={`item-row${selectedId === id ? ' is-selected' : ''}`} onClick={() => select(id, true)}>
              <MiniBalloon f={f} />
              <span className="text">{f.title}</span>
              {check.type === 'ai_findings_triaged' ? (
                <span className="tag t-ai">
                  <Sparkles /> Triage
                </span>
              ) : f.jiraKey ? (
                <JiraChip f={f} />
              ) : (
                <PriorityLabel priority={f.priority} />
              )}
            </button>
          );
        })}
      </>
    );
  } else if (check.type === 'requested_reviews_complete') {
    body = (
      <>
        {part.reviewers.map((r) => {
          const nudging = !!busy[`nudge:${r.role}`] || (!!r.nudgedAt && r.status === 'pending' && Date.now() - Date.parse(r.nudgedAt) < 15000);
          return (
            <div key={r.role} className="reviewer-row">
              <span className="who">
                <Avatar person={r.person} />
                <span>
                  {r.person.name} <span className="role">· {r.role}</span>
                </span>
              </span>
              {r.status === 'complete' ? (
                <span className="tag t-pass">
                  <Check /> Done
                </span>
              ) : frozen ? (
                <span className="tag">Pending</span>
              ) : (
                <button
                  className="btn btn-sm"
                  disabled={nudging}
                  onClick={() => act(`nudge:${r.role}`, (b) => b.nudgeReviewer(part.number, r.role))}
                  title={`Send ${r.person.name} a reminder`}
                >
                  {nudging ? <LoaderCircle className="spin" /> : <Bell />}
                  {nudging ? 'Reminder sent' : `Nudge · ${due(r.due)}`}
                </button>
              )}
            </div>
          );
        })}
      </>
    );
  } else if (check.type === 'integrations_in_sync') {
    body = part.deliveries.length ? (
      <>
        {part.deliveries.map((d) => (
          <div key={d.id} className="delivery-row">
            <div className="what">
              <div>{d.label}</div>
              <div className="why">
                {d.status === 'dead'
                  ? `Failed after ${d.attempts} attempts: ${d.lastError}`
                  : d.status === 'retrying'
                    ? `Attempt ${d.attempts} failed (${d.lastError}). Retrying.`
                    : d.status === 'in_flight'
                      ? 'Sending…'
                      : d.attempts
                        ? 'Queued'
                        : 'Waiting its turn'}
              </div>
            </div>
            {(d.status === 'dead' || d.status === 'retrying') && (
              <button className="btn btn-sm" onClick={() => act(`retry:${d.id}`, (b) => b.retryDelivery(d.id))}>
                <RefreshCw /> Retry now
              </button>
            )}
          </div>
        ))}
      </>
    ) : null;
  }

  return (
    <div className={`check is-${check.status}`} data-testid={`check-${check.id}`} data-status={check.status}>
      <div className="check-head">
        <span className="check-icon">
          <Icon />
        </span>
        <div>
          <div className="check-title">{check.title}</div>
          <div className="check-summary">{check.summary}</div>
        </div>
        <span className={`tag t-display ${check.blocking ? '' : 't-outline'}`}>{check.blocking ? 'Blocking' : 'Advisory'}</span>
      </div>
      {check.status !== 'pass' && body && <div className="check-body">{body}</div>}
    </div>
  );
}

function ChecksTab({ part }: { part: Part }) {
  const set = useStore((s) => s.set);
  const policy = useStore((s) => s.snap?.workspace.policy);
  const frozen = part.gate.outcome === 'RELEASED' || part.gate.outcome === 'RELEASING';
  const ordered = [...part.gate.checks].sort((a, b) => Number(b.blocking) - Number(a.blocking));
  return (
    <div className="checks">
      <div className="checks-intro">
        <span className="label">{frozen ? `Frozen at decision ${part.gate.decisionId}` : 'Release checks'}</span>
        <button className="btn btn-ghost btn-sm" onClick={() => set('modal', { kind: 'policy' })}>
          {policy?.name} v{policy?.version}
        </button>
      </div>
      {ordered.map((c) => (
        <CheckCard key={c.id} check={c} part={part} />
      ))}
    </div>
  );
}

// ---------------------------------------------------------------- feedback

const FILTERS: { key: FeedbackFilter; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'open', label: 'Open' },
  { key: 'blocking', label: 'Blocking' },
  { key: 'ai', label: 'AutoReview' },
];

function FeedbackList({ part }: { part: Part }) {
  const filter = useStore((s) => s.filter);
  const set = useStore((s) => s.set);
  const select = useStore((s) => s.select);
  const counts = {
    all: part.feedback.length,
    open: part.feedback.filter((f) => !isClosed(f)).length,
    blocking: part.feedback.filter((f) => isBlockingItem(part, f.id)).length,
    ai: part.feedback.filter((f) => f.source === 'ai').length,
  };
  const items = part.feedback.filter((f) =>
    filter === 'open' ? !isClosed(f) : filter === 'blocking' ? isBlockingItem(part, f.id) : filter === 'ai' ? f.source === 'ai' : true,
  );
  return (
    <>
      <div className="fb-filters" role="tablist">
        {FILTERS.map((x) => (
          <button key={x.key} className={`chip-filter${filter === x.key ? ' is-active' : ''}`} onClick={() => set('filter', x.key)}>
            {x.label} <b>{counts[x.key]}</b>
          </button>
        ))}
      </div>
      <div className="fb-list">
        {items.length === 0 && <div className="empty">Nothing here.</div>}
        {items.map((f) => (
          <button key={f.id} className={`fb-row${isClosed(f) ? ' is-closed' : ''}`} onClick={() => select(f.id, true)} data-testid={`fb-${f.id}`}>
            <MiniBalloon f={f} />
            <span>
              <span className="fb-title">{f.title}</span>
              <span className="fb-meta">
                <PriorityLabel priority={f.priority} />
                <span>{f.category}</span>
                {f.owner && <span>{f.owner.name}</span>}
                <JiraChip f={f} />
              </span>
            </span>
            <StatusTag f={f} />
          </button>
        ))}
      </div>
    </>
  );
}

type Mode = null | 'resolve' | 'waive' | 'dismiss';

function Actions({ f, part }: { f: Feedback; part: Part }) {
  const act = useStore((s) => s.act);
  const busy = useStore((s) => s.busy);
  const policy = useStore((s) => s.snap?.workspace.policy);
  const [mode, setMode] = useState<Mode>(null);
  const [text, setText] = useState('');
  useEffect(() => {
    setMode(null);
    setText('');
  }, [f.id]);

  const frozen = part.gate.outcome === 'RELEASED' || part.gate.outcome === 'RELEASING';
  if (frozen) {
    return (
      <div className="detail-actions">
        <div className="locked-note">
          <Lock /> Rev {part.rev} is released, so its feedback is frozen. Changes go on the next revision.
        </div>
      </div>
    );
  }

  const waiverRule = policy?.rules.find((r) => r.type === 'no_open_feedback' && ((r.params.priorities as string[]) ?? []).includes(f.priority));
  const waiverAllowed = !waiverRule || waiverRule.params.allowWaiver !== false;
  const suggestion = SUGGESTED[f.id]?.[mode ?? 'resolve'];
  const jiraNote = f.jiraKey ? ` It's also posted on ${f.jiraKey}.` : '';
  const working = !!busy[`fb:${f.id}`];
  const run = async (fn: Parameters<typeof act>[1]) => {
    const ok = await act(`fb:${f.id}`, fn);
    if (ok !== undefined) {
      setMode(null);
      setText('');
    }
  };

  if (mode) {
    const label = mode === 'resolve' ? 'Resolution note' : mode === 'waive' ? 'Why is it acceptable to release with this open?' : 'Why is this finding wrong or not applicable?';
    const required = mode !== 'resolve';
    const tooShort = required && text.trim().length < 12;
    return (
      <div className="detail-actions">
        <div className="form-box">
          <label htmlFor={`note-${f.id}`}>
            {label}
            {mode === 'resolve' && <span className="muted"> (optional)</span>}
          </label>
          <textarea
            id={`note-${f.id}`}
            className="textarea"
            autoFocus
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={suggestion ?? ''}
          />
          <div className="hint">
            {mode === 'resolve'
              ? `Saved to the thread.${jiraNote}`
              : `Goes into the review record attached in Windchill.${jiraNote}`}
          </div>
          {suggestion && text !== suggestion && (
            <button className="btn btn-ghost btn-sm" style={{ alignSelf: 'flex-start' }} onClick={() => setText(suggestion)}>
              <Quote /> Use suggested text
            </button>
          )}
        </div>
        <div className="action-row">
          <button className="btn" onClick={() => setMode(null)}>
            Cancel
          </button>
          <button
            className="btn btn-primary"
            disabled={working || tooShort}
            data-testid={`confirm-${mode}`}
            onClick={() =>
              run((b) =>
                mode === 'resolve'
                  ? b.resolveFeedback(f.id, text).then(() => true)
                  : mode === 'waive'
                    ? b.waiveFeedback(f.id, text).then(() => true)
                    : b.triageFinding(f.id, 'dismiss', text).then(() => true),
              )
            }
          >
            {working && <LoaderCircle className="spin" />}
            {mode === 'resolve' ? 'Resolve' : mode === 'waive' ? 'Waive' : 'Dismiss finding'}
          </button>
        </div>
      </div>
    );
  }

  if (f.source === 'ai' && f.triage === 'untriaged') {
    return (
      <div className="detail-actions">
        <div className="hint">AutoReview raised this. A person decides whether it counts before it can affect the release.</div>
        <div className="action-row">
          <button className="btn" onClick={() => setMode('dismiss')} data-testid="dismiss">
            Dismiss…
          </button>
          <button className="btn btn-primary" disabled={working} data-testid="accept" onClick={() => run((b) => b.triageFinding(f.id, 'accept').then(() => true))}>
            {working ? <LoaderCircle className="spin" /> : <Check />} Accept finding
          </button>
        </div>
      </div>
    );
  }

  if (isClosed(f)) {
    return (
      <div className="detail-actions">
        <div className="action-row">
          <button className="btn" disabled={working} onClick={() => run((b) => b.reopenFeedback(f.id).then(() => true))}>
            Reopen
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="detail-actions">
      {!waiverAllowed && (
        <div className="hint">
          The release policy doesn't allow waiving {f.priority} feedback, so this one has to be resolved.
        </div>
      )}
      <div className="action-row">
        <button className="btn" disabled={!waiverAllowed} onClick={() => setMode('waive')} data-testid="waive">
          Waive…
        </button>
        <button className="btn btn-primary" onClick={() => setMode('resolve')} data-testid="resolve">
          <Check /> Resolve…
        </button>
      </div>
    </div>
  );
}

function FeedbackDetail({ f, part }: { f: Feedback; part: Part }) {
  const select = useStore((s) => s.select);
  const blocking = isBlockingItem(part, f.id);
  return (
    <div className="detail" data-testid="feedback-detail">
      <div className="detail-bar">
        <button className="btn btn-ghost btn-sm" onClick={() => select(null, false)}>
          <ArrowLeft /> All feedback
        </button>
        <span style={{ flex: 1 }} />
        <span className="mono muted">{f.id}</span>
      </div>
      <div className="detail-main">
        <div className="detail-tags">
          <StatusTag f={f} />
          <span className={`tag t-${{ critical: 'crit', high: 'high', medium: 'med', low: 'low' }[f.priority]}`}>{f.priority[0].toUpperCase() + f.priority.slice(1)}</span>
          <span className="tag">{f.category}</span>
          {f.source === 'ai' && (
            <span className="tag t-ai">
              <Sparkles /> AutoReview
            </span>
          )}
          {blocking && <span className="tag t-crit t-display">Blocks release</span>}
        </div>
        <h3 className="detail-title">
          <MiniBalloon f={f} />
          <span>{f.title}</span>
        </h3>
        <p className="detail-body">{f.body}</p>
        {f.citation && (
          <div className="citation">
            <FileText />
            <span>Cites {f.citation}</span>
          </div>
        )}
        <dl className="meta-grid">
          <dt>Owner</dt>
          <dd>
            <PersonChip person={f.owner} />
          </dd>
          <dt>Raised by</dt>
          <dd>
            <PersonChip person={f.author} sub={f.author?.external ? <span className="tag t-med">{f.author.org}</span> : undefined} />
            <span className="muted">{ago(f.createdAt)}</span>
          </dd>
          <dt>Location</dt>
          <dd>{f.pin ? 'Pinned on the model' : f.sheetRef ?? 'Whole part'}</dd>
          {(f.jiraKey || f.syncState !== 'none') && (
            <>
              <dt>Jira</dt>
              <dd>
                <JiraChip f={f} />
                {f.jiraStatus && <span className="muted">{f.jiraStatus}</span>}
              </dd>
            </>
          )}
          {f.status === 'resolved' && (
            <>
              <dt>Resolved</dt>
              <dd>
                {f.resolvedBy} · {ago(f.resolvedAt)}
              </dd>
            </>
          )}
          {f.status === 'waived' && (
            <>
              <dt>Waiver</dt>
              <dd>
                {f.waivedBy?.name}: “{f.waiverReason}”
              </dd>
            </>
          )}
          {f.status === 'dismissed' && (
            <>
              <dt>Dismissed</dt>
              <dd>
                {f.dismissedBy?.name}: “{f.dismissReason}”
              </dd>
            </>
          )}
        </dl>
        {f.thread.length > 0 && (
          <div className="thread">
            <span className="label">Discussion</span>
            {f.thread.map((c, i) =>
              c.kind === 'system' ? (
                <div key={i} className="thread-item is-system">
                  <span className="sys-glyph">
                    <i />
                  </span>
                  <span>
                    {c.text} <span className="muted">· {ago(c.at)}</span>
                  </span>
                </div>
              ) : (
                <div key={i} className="thread-item">
                  <Avatar person={c.author} />
                  <div>
                    <div className="who">
                      <b>{c.authorLabel}</b>
                      <span>{ago(c.at)}</span>
                    </div>
                    <p>{c.text}</p>
                  </div>
                </div>
              ),
            )}
          </div>
        )}
      </div>
      <Actions f={f} part={part} />
    </div>
  );
}

// ------------------------------------------------------------------ record

function RecordTab({ part }: { part: Part }) {
  const set = useStore((s) => s.set);
  return (
    <div className="record">
      <section>
        <h4 className="label">Gate decisions</h4>
        {part.decisions.length === 0 && (
          <p className="muted">No promotion requests yet. When Windchill asks to release Rev {part.rev}, the gate's answer is recorded here.</p>
        )}
        {part.decisions.map((d) => (
          <div key={d.id} className="decision">
            <div className="decision-head">
              <span className="id">{d.id}</span>
              <span className={`tag t-display ${d.outcome === 'approved' ? 't-pass' : 't-crit'}`}>{d.outcome}</span>
              {d.promotionRequestId && <span className="mono muted">{d.promotionRequestId}</span>}
              <span className="when">{dateTime(d.at)}</span>
            </div>
            {d.outcome === 'rejected' ? (
              <ul>
                {d.checks
                  .filter((c) => c.status === 'fail')
                  .map((c) => (
                    <li key={c.id}>
                      {c.title}: {c.summary}
                    </li>
                  ))}
              </ul>
            ) : (
              <div className="hint">All blocking checks passed{d.requestedBy ? `. Requested by ${d.requestedBy}.` : '.'}</div>
            )}
            <div className="hash">{shortHash(d.snapshotHash)}</div>
            {d.hasRecord && (
              <button className="btn btn-sm" style={{ alignSelf: 'flex-start' }} onClick={() => set('modal', { kind: 'record', decisionId: d.id })}>
                <FileText /> Open review record
              </button>
            )}
          </div>
        ))}
      </section>
      <section>
        <h4 className="label">Audit trail</h4>
        {part.audit.length === 0 && <p className="muted">Nothing recorded on this revision yet.</p>}
        <div className="audit">
          {part.audit.map((a) => (
            <div key={a.id} className="audit-item">
              <i />
              <div>
                <div className="what">
                  <b>{a.actor}</b> {a.action.replace('.', ' ').replace('_', ' ')} <span className="mono">{a.entityId}</span>
                </div>
                {a.detail && <div className="detail-line">{a.detail}</div>}
                <div className="when">{dateTime(a.at)}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// ------------------------------------------------------------------- panel

export function SidePanel() {
  const part = useStore((s) => s.snap?.part);
  const tab = useStore((s) => s.rightTab);
  const set = useStore((s) => s.set);
  const selectedId = useStore((s) => s.selectedId);
  const selected = useMemo(() => part?.feedback.find((f) => f.id === selectedId) ?? null, [part, selectedId]);

  if (!part) return <aside className="side app-side" />;
  const failing = part.gate.checks.filter((c) => c.blocking && c.status === 'fail').length;
  const open = part.feedback.filter((f) => !isClosed(f)).length;

  return (
    <aside className="side app-side" aria-label="Release checks and feedback">
      <div className="tabs" role="tablist">
        <button className={`tab${tab === 'checks' ? ' is-active' : ''}`} onClick={() => set('rightTab', 'checks')} role="tab">
          Checks <span className={`tab-count${failing ? ' is-alert' : ''}`}>{failing ? `${failing} failing` : 'all pass'}</span>
        </button>
        <button className={`tab${tab === 'feedback' ? ' is-active' : ''}`} onClick={() => set('rightTab', 'feedback')} role="tab">
          Feedback <span className="tab-count">{open}</span>
        </button>
        <button className={`tab${tab === 'record' ? ' is-active' : ''}`} onClick={() => set('rightTab', 'record')} role="tab">
          Record <span className="tab-count">{part.decisions.length}</span>
        </button>
      </div>
      <div className="side-body">
        {tab === 'checks' && <ChecksTab part={part} />}
        {tab === 'feedback' && (selected ? <FeedbackDetail f={selected} part={part} /> : <FeedbackList part={part} />)}
        {tab === 'record' && <RecordTab part={part} />}
      </div>
    </aside>
  );
}
