import { Check, ExternalLink, LoaderCircle, TriangleAlert } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { PolicyRule, ReviewRecord } from '../api/types';
import { dateTime, PRIORITY_LABEL } from '../lib/format';
import { useStore } from '../state/store';
import { Modal } from './common';

function RecordModal({ decisionId }: { decisionId: string }) {
  const backend = useStore((s) => s.backend);
  const set = useStore((s) => s.set);
  const [record, setRecord] = useState<ReviewRecord | null | undefined>(undefined);
  useEffect(() => {
    let live = true;
    backend.record(decisionId).then((r) => live && setRecord(r));
    return () => {
      live = false;
    };
  }, [backend, decisionId]);
  const close = () => set('modal', null);
  const url = record ? backend.attachmentUrl(record.part.number, `${record.part.number}_Rev${record.part.rev}_review-record.html`) : null;

  return (
    <Modal
      wide
      title={record ? `Review record ${record.recordId}` : 'Review record'}
      subtitle={record ? `Attached to ${record.part.number} in Windchill when the release was approved` : undefined}
      onClose={close}
      footer={
        <>
          {url && (
            <a className="btn" href={url} target="_blank" rel="noreferrer">
              <ExternalLink /> Open the Windchill attachment
            </a>
          )}
          <button className="btn btn-primary" onClick={close}>
            Done
          </button>
        </>
      }
    >
      {record === undefined && (
        <div className="empty">
          <LoaderCircle className="spin" />
        </div>
      )}
      {record === null && <div className="empty">No record for {decisionId}.</div>}
      {record && (
        <div className="doc" data-testid="record">
          <div className="doc-block titleblock" style={{ position: 'static', width: 'auto', backdropFilter: 'none' }}>
            <div className="tb-row tb-head">
              <div className="tb-cell">
                <span className="tb-label">{record.review.title}</span>
                <span className="tb-title">{record.part.name}</span>
              </div>
              <div className="tb-cell tb-rev">
                <span className="tb-label">Rev</span>
                <strong>{record.part.rev}</strong>
              </div>
            </div>
            <div className="tb-row">
              <div className="tb-cell">
                <span className="tb-label">Part no.</span>
                <span className="tb-value">{record.part.number}</span>
              </div>
              <div className="tb-cell">
                <span className="tb-label">Decision</span>
                <span className="tb-value">{record.recordId} · approved</span>
              </div>
              <div className="tb-cell">
                <span className="tb-label">Promotion</span>
                <span className="tb-value">{record.promotionRequestId ?? 'n/a'}</span>
              </div>
              <div className="tb-cell">
                <span className="tb-label">Decided</span>
                <span className="tb-value">{dateTime(record.decidedAt)}</span>
              </div>
            </div>
            <div className="tb-row">
              <div className="tb-cell">
                <span className="tb-label">Material</span>
                <span className="tb-value">{record.part.material}</span>
              </div>
              <div className="tb-cell">
                <span className="tb-label">Finish</span>
                <span className="tb-value">{record.part.finish}</span>
              </div>
              <div className="tb-cell">
                <span className="tb-label">Policy</span>
                <span className="tb-value">
                  {record.policy.name} v{record.policy.version}
                </span>
              </div>
              <div className="tb-cell">
                <span className="tb-label">Requested by</span>
                <span className="tb-value">{record.requestedBy ?? 'n/a'}</span>
              </div>
            </div>
          </div>

          <section>
            <h3>Release checks</h3>
            <table className="doc-table">
              <tbody>
                {record.checks.map((c) => (
                  <tr key={c.id}>
                    <td style={{ width: 70 }}>
                      {c.status === 'pass' ? (
                        <span className="pass-mark">
                          <Check /> PASS
                        </span>
                      ) : (
                        <span className="pass-mark warn">
                          <TriangleAlert /> {c.status === 'warn' ? 'NOTE' : 'FAIL'}
                        </span>
                      )}
                    </td>
                    <td>{c.title}</td>
                    <td className="muted">{c.summary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section>
            <h3>Reviews</h3>
            <table className="doc-table">
              <thead>
                <tr>
                  <th>Role</th>
                  <th>Reviewer</th>
                  <th>Status</th>
                  <th>Completed</th>
                </tr>
              </thead>
              <tbody>
                {record.reviews.map((r) => (
                  <tr key={r.role}>
                    <td>{r.role}</td>
                    <td>{r.person}</td>
                    <td>{r.status}</td>
                    <td className="mono">{dateTime(r.completedAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section>
            <h3>Feedback and dispositions</h3>
            <table className="doc-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Priority</th>
                  <th>Feedback</th>
                  <th>Disposition</th>
                  <th>Jira</th>
                </tr>
              </thead>
              <tbody>
                {record.feedback.map((f) => (
                  <tr key={f.id}>
                    <td className="mono">{f.id}</td>
                    <td>{PRIORITY_LABEL[f.priority]}</td>
                    <td>
                      {f.title}
                      {f.source === 'AutoReview' && <span className="muted"> · AutoReview</span>}
                    </td>
                    <td>{f.disposition}</td>
                    <td className="mono">{f.jiraKey ?? ''}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section>
            <h3>Snapshot hash</h3>
            <div className="doc-hash">{record.snapshotHash}</div>
            <p className="hint" style={{ marginTop: 6 }}>
              SHA-256 of the canonical JSON above. If anything in the record changes after release, the hash stops matching.
            </p>
          </section>
        </div>
      )}
    </Modal>
  );
}

function describeRule(r: PolicyRule): string {
  const p = r.params as Record<string, any>;
  switch (r.type) {
    case 'no_open_feedback':
      return `Fails while any ${(p.priorities as string[]).join(' or ')} feedback is open or in progress.${
        p.allowWaiver === false ? ' Waivers are not accepted.' : ' A waiver with a written reason clears it.'
      }`;
    case 'ai_findings_triaged':
      return 'Every AutoReview finding needs a person to accept or dismiss it. Accepted findings then count like any other feedback.';
    case 'requested_reviews_complete':
      return `Fails until the ${(p.roles as string[]).join(', ')} reviews are complete.`;
    case 'integrations_in_sync':
      return 'Fails while any change is still on its way to Jira or Windchill, or failed to get there. The gate never releases on data it cannot confirm.';
    default:
      return r.type;
  }
}

function PolicyModal() {
  const set = useStore((s) => s.set);
  const policy = useStore((s) => s.snap?.workspace.policy);
  const [json, setJson] = useState(false);
  if (!policy) return null;
  return (
    <Modal
      title={`${policy.name} v${policy.version}`}
      subtitle={policy.description}
      onClose={() => set('modal', null)}
      footer={
        <>
          <button className="btn" onClick={() => setJson((j) => !j)}>
            {json ? 'Show rules' : 'Show as JSON'}
          </button>
          <button className="btn btn-primary" onClick={() => set('modal', null)}>
            Done
          </button>
        </>
      }
    >
      {json ? (
        <pre className="code-block">{JSON.stringify(policy, null, 2)}</pre>
      ) : (
        <div className="rules">
          {policy.rules.map((r, i) => (
            <div key={r.id} className="rule">
              <span className="rule-num">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h4>{r.title}</h4>
                <p>{describeRule(r)}</p>
              </div>
              <span className={`tag t-display ${r.blocking ? 't-crit' : 't-outline'}`}>{r.blocking ? 'Blocking' : 'Advisory'}</span>
            </div>
          ))}
          <p className="hint">
            Rules are data. Each customer can change thresholds, waiver rules and required reviewers without a code change. The
            server and the browser build run the same rules against a shared set of test cases.
          </p>
        </div>
      )}
    </Modal>
  );
}

function AboutModal() {
  const set = useStore((s) => s.set);
  const mode = useStore((s) => s.backend?.mode);
  return (
    <Modal title="About this demo" subtitle="A concept for CoLab's Workflows team" onClose={() => set('modal', null)}>
      <div className="about">
        <p>
          Engineering teams review designs in CoLab, track the work in Jira, and release parts in Windchill. Release Gate connects the
          three: <strong>Windchill can't promote a part to Released until the CoLab review says it's ready</strong>, and the answer comes
          with reasons, a decision record and a review record attached back in Windchill.
        </p>
        <div className="about-grid">
          <div className="about-card">
            <h4>Two-way Jira sync</h4>
            <p>Transactional outbox, retries with backoff, idempotent creates, signed and de-duplicated webhooks, echo suppression.</p>
          </div>
          <div className="about-card">
            <h4>Windchill release gate</h4>
            <p>Windchill's validation hook asks the gate. It fails closed and only shows Released once Windchill confirms.</p>
          </div>
          <div className="about-card">
            <h4>People decide</h4>
            <p>AutoReview findings can't block or pass a release until a person accepts or dismisses them, with a reason on record.</p>
          </div>
        </div>
        <div>
          <span className="label">Try it</span>
          <ol>
            <li>Click balloon 1 on the model and resolve it. Watch the log: the note and status go to Jira, and Jira's echo is ignored.</li>
            <li>Open the Jira board below and move ENG-142 to Done. The gate hears the webhook and clears balloon 2.</li>
            <li>Open balloon 4 (AutoReview) and dismiss it with a reason. Waive balloon 3.</li>
            <li>On the Checks tab, nudge Priya for the Quality review.</li>
            <li>Release Rev C. Windchill asks the gate, the gate approves, and the review record lands in Windchill.</li>
            <li>Reset from the ··· menu, turn on a Simulate switch, and do it again.</li>
          </ol>
        </div>
        <p className="disclaimer">
          Concept demo by Jaineel Patel. Jira, Windchill, the parts and the people are simulated
          {mode === 'offline' ? ', and in this build everything runs in your browser' : ''}. Not affiliated with CoLab, Atlassian or PTC.
        </p>
      </div>
    </Modal>
  );
}

export function Modals() {
  const modal = useStore((s) => s.modal);
  if (!modal) return null;
  if (modal.kind === 'record') return <RecordModal decisionId={modal.decisionId} />;
  if (modal.kind === 'policy') return <PolicyModal />;
  return <AboutModal />;
}
