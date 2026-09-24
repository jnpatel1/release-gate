import {
  Activity,
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  CircleDot,
  Database,
  ExternalLink,
  FileText,
  LayoutGrid,
  LoaderCircle,
  Rocket,
  ChevronsUp,
  ChevronUp as ArrowUpSmall,
  Equal,
  ChevronDown as ArrowDownSmall,
} from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import type { JiraIssue, JiraStatus, LogEntry, PlmPart } from '../api/types';
import { ago, bytes, dateTime, logStamp } from '../lib/format';
import { useStore } from '../state/store';

// ------------------------------------------------------------------- log

type LogFilter = 'all' | 'jira' | 'windchill' | 'problems';

const TAG_LABEL: Record<string, string> = {
  echo: 'echo',
  duplicate: 'duplicate',
  stale: 'out of order',
  linked: 'linked',
  retry: 'retry',
  dead: 'dead letter',
  frozen: 'frozen',
  chaos: 'simulation',
  rejected: 'bad signature',
  decision: 'decision',
  applied: 'applied',
  released: 'released',
  ai: 'AutoReview',
};

function codeClass(code: number | null) {
  if (!code) return '';
  if (code < 300) return 'c2';
  if (code < 500) return 'c4';
  return 'c5';
}

function Json({ value }: { value: unknown }) {
  if (value === null || value === undefined) return <pre className="json">(empty)</pre>;
  return <pre className="json">{typeof value === 'string' ? value : JSON.stringify(value, null, 2)}</pre>;
}

function LogRow({ e, fresh }: { e: LogEntry; fresh: boolean }) {
  const [open, setOpen] = useState(false);
  const Dir = e.direction === 'out' ? ArrowRight : e.direction === 'in' ? ArrowLeft : CircleDot;
  const calls = e.meta?.calls ?? [];
  const attempt = e.tag === 'retry' && e.meta?.attempt ? `${TAG_LABEL.retry} ${e.meta.attempt}` : null;
  const tag = attempt ?? (e.tag ? TAG_LABEL[e.tag] : null);
  const sys = { jira: 'Jira', windchill: 'Windchill', gate: 'Gate', colab: 'CoLab', notify: 'Notify' }[e.system];
  const expandable = !!(e.detail || calls.length);
  return (
    <>
      <button
        className={`log-row lv-${e.level}${fresh ? ' is-fresh' : ''}${open ? ' is-open' : ''}`}
        onClick={() => expandable && setOpen((o) => !o)}
        aria-expanded={expandable ? open : undefined}
        data-tag={e.tag ?? ''}
      >
        <time className="log-time" dateTime={e.at} title={new Date(e.at).toLocaleString()}>
          {logStamp(e.at)}
        </time>
        <span className="log-dir" title={e.direction === 'out' ? 'Sent' : e.direction === 'in' ? 'Received' : 'Internal'}>
          <Dir />
        </span>
        <span className={`log-sys sys-${e.system}`}>{sys}</span>
        <span className="log-main">
          <div className="log-title">{e.title}</div>
          {e.detail && !open && <div className="log-sub">{e.detail}</div>}
        </span>
        <span className="log-meta">
          {tag && <span className="code t-tag">{tag}</span>}
          {e.statusCode ? <span className={`code ${codeClass(e.statusCode)}`}>{e.statusCode}</span> : null}
          {e.latencyMs != null && <span>{e.latencyMs} ms</span>}
        </span>
      </button>
      {open && (
        <div className="log-detail">
          {e.detail && <p>{e.detail}</p>}
          {calls.length > 0 && (
            <div className="calls">
              {calls.map((c, i) => (
                <div key={i} className="call">
                  <div className="call-head">
                    <span className="method">{c.method}</span>
                    <span className="url" title={c.url}>
                      {c.url}
                    </span>
                    {c.status != null && <span className={`code ${codeClass(c.status)}`}>{c.status}</span>}
                    {c.latencyMs != null && <span className="muted">{c.latencyMs} ms</span>}
                  </div>
                  <div className="call-body">
                    <div>
                      <span className="label">Request</span>
                      {c.requestHeaders && (
                        <Json
                          value={Object.entries(c.requestHeaders)
                            .map(([k, v]) => `${k}: ${v}`)
                            .join('\n')}
                        />
                      )}
                      {c.requestBody != null && <Json value={c.requestBody} />}
                    </div>
                    <div>
                      <span className="label">Response</span>
                      {c.error && <p style={{ margin: '4px 0 0', color: 'var(--crit-ink)' }}>{c.error}</p>}
                      <Json value={c.responseBody} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}

function IntegrationLog({ filter }: { filter: LogFilter }) {
  const log = useStore((s) => s.log);
  const fresh = useStore((s) => s.fresh);
  const rows = log.filter((e) =>
    filter === 'all'
      ? true
      : filter === 'problems'
        ? e.level === 'warn' || e.level === 'error'
        : e.system === filter,
  );
  if (!rows.length) return <div className="empty">No events yet.</div>;
  return (
    <div className="log" data-testid="log">
      {rows.map((e) => (
        <LogRow key={e.id} e={e} fresh={!!fresh[e.id]} />
      ))}
    </div>
  );
}

// ------------------------------------------------------------------ jira

const COLUMNS: JiraStatus[] = ['To Do', 'In Progress', 'Done'];
const ACTORS = [
  { id: 'p-maya', name: 'Maya Chen' },
  { id: 'p-luis', name: 'Luis Ortega' },
  { id: 'p-priya', name: 'Priya Nair' },
];

function PriorityGlyph({ p }: { p: string }) {
  const Icon = p === 'Highest' ? ChevronsUp : p === 'High' ? ArrowUpSmall : p === 'Medium' ? Equal : ArrowDownSmall;
  return (
    <span className={`prio-glyph p-${p}`} title={`${p} priority`}>
      <Icon />
      {p}
    </span>
  );
}

function partFromSummary(summary: string) {
  return /^\[([A-Z]{3}-\d{4})/.exec(summary)?.[1] ?? null;
}

export function JiraBoard() {
  const issues = useStore((s) => s.jira);
  const actor = useStore((s) => s.jiraActor);
  const set = useStore((s) => s.set);
  const act = useStore((s) => s.act);
  const busy = useStore((s) => s.busy);
  const selectPart = useStore((s) => s.selectPart);
  const select = useStore((s) => s.select);
  const [dragKey, setDragKey] = useState<string | null>(null);
  const [over, setOver] = useState<JiraStatus | null>(null);
  const project = useStore((s) => s.snap?.workspace.program);
  const actorName = ACTORS.find((a) => a.id === actor)?.name ?? 'someone';

  const move = (key: string, to: JiraStatus) => act(`jira:${key}`, (b) => b.jiraTransition(key, to, actor));
  const open = (issue: JiraIssue) => {
    const part = partFromSummary(issue.summary);
    if (part) selectPart(part);
    if (issue.colabId) setTimeout(() => select(issue.colabId!, true), 150);
  };

  return (
    <div className="board" data-testid="jira-board">
      <div className="board-note">
        <span>
          Mock Jira project <b>ENG</b>{project ? ` for ${project}` : ''}. Moving a linked card sends a signed webhook to the gate.
        </span>
        <label>
          Acting as{' '}
          <select value={actor} onChange={(e) => set('jiraActor', e.target.value)} aria-label="Act in Jira as">
            {ACTORS.map((a) => (
              <option key={a.id} value={a.id}>
                {a.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      {COLUMNS.map((col) => {
        const cards = issues.filter((i) => i.status === col);
        return (
          <div
            key={col}
            className={`board-col${over === col ? ' is-over' : ''}`}
            onDragOver={(e) => {
              e.preventDefault();
              setOver(col);
            }}
            onDragLeave={() => setOver((o) => (o === col ? null : o))}
            onDrop={(e) => {
              e.preventDefault();
              setOver(null);
              const key = e.dataTransfer.getData('text/plain');
              const issue = issues.find((i) => i.key === key);
              if (issue && issue.status !== col) void move(key, col);
            }}
            data-testid={`jira-col-${col}`}
          >
            <div className="board-head">
              <span className="label">{col}</span>
              <span className="label">{cards.length}</span>
            </div>
            {cards.map((i) => (
              <div
                key={i.key}
                className={`jcard${dragKey === i.key ? ' is-dragging' : ''}${i.colabId ? ' is-linked' : ''}`}
                draggable
                onDragStart={(e) => {
                  e.dataTransfer.setData('text/plain', i.key);
                  e.dataTransfer.effectAllowed = 'move';
                  setDragKey(i.key);
                }}
                onDragEnd={() => setDragKey(null)}
                data-testid={`jira-${i.key}`}
              >
                <div className="jcard-top">
                  <span className="jcard-key">{i.key}</span>
                  {busy[`jira:${i.key}`] ? (
                    <LoaderCircle className="spin" size={14} />
                  ) : i.colabId ? (
                    <button className="tag t-accent" onClick={() => open(i)} title="Open the CoLab feedback">
                      CoLab {i.colabId}
                    </button>
                  ) : (
                    <span className="tag">Not linked</span>
                  )}
                </div>
                <div className="jcard-summary" title={i.summary}>
                  {i.summary}
                </div>
                <div className="jcard-foot">
                  <PriorityGlyph p={i.priority} />
                  <span className="jcard-moves">
                    {COLUMNS.filter((c) => c !== col).map((c) => (
                      <button key={c} onClick={() => move(i.key, c)} title={`Move to ${c} as ${actorName}`} data-testid={`move-${i.key}-${c}`}>
                        → {c}
                      </button>
                    ))}
                  </span>
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

// ------------------------------------------------------------- windchill

function recordDecisionFor(part: PlmPart, promotions: { partNumber: string; status: string; decisionId: string | null }[]) {
  return promotions.find((p) => p.partNumber === part.number && p.status === 'APPROVED')?.decisionId ?? null;
}

export function WindchillPanel() {
  const plm = useStore((s) => s.plm);
  const current = useStore((s) => s.partNumber);
  const backend = useStore((s) => s.backend);
  const act = useStore((s) => s.act);
  const set = useStore((s) => s.set);
  const toast = useStore((s) => s.toast);
  const busy = useStore((s) => !!s.busy['plm:promote']);
  const [picked, setPicked] = useState<string | null>(null);
  const seen = useRef<Set<string>>(new Set());
  const [fresh, setFresh] = useState<Set<string>>(new Set());

  const partNumber = picked ?? current;
  const part = plm?.parts.find((p) => p.number === partNumber) ?? plm?.parts[0];

  useEffect(() => {
    if (!plm) return;
    const all = plm.parts.flatMap((p) => p.attachments.map((a) => `${p.number}/${a.fileName}`));
    if (seen.current.size) {
      const added = all.filter((k) => !seen.current.has(k));
      if (added.length) {
        setFresh(new Set(added));
        setTimeout(() => setFresh(new Set()), 2600);
      }
    }
    seen.current = new Set(all);
  }, [plm]);

  useEffect(() => setPicked(null), [current]);

  if (!plm || !part) return <div className="empty">Loading Windchill…</div>;
  const promotions = plm.promotions.filter((p) => p.partNumber === part.number);
  const decisionId = recordDecisionFor(part, plm.promotions);

  const promote = async () => {
    const res = await act('plm:promote', (b) => b.plmPromote(part.number, { id: 'p-maya', name: 'Maya Chen' }));
    if (!res) return;
    if (res.status === 'REJECTED') {
      set('rejectAt', Date.now());
      toast({ tone: 'error', title: `Release Gate rejected ${res.promotionRequestId}`, body: res.reasons.join(' · ') });
    } else if (res.status === 'APPROVED') {
      toast({ tone: 'info', title: `${res.promotionRequestId} approved`, body: `Gate decision ${res.decisionId}. ${part.number} is moving to Released.` });
    }
  };

  return (
    <div className="plm" data-testid="plm">
      <div>
        <div className="board-note" style={{ marginBottom: 8 }}>
          <span>
            Mock Windchill. Promotion requests call the Release Gate before anything is released, and hold if it doesn't answer.
          </span>
        </div>
        <table className="plm-table">
          <thead>
            <tr>
              <th>Number</th>
              <th>Name</th>
              <th>Version</th>
              <th>State</th>
              <th>Files</th>
            </tr>
          </thead>
          <tbody>
            {plm.parts.map((p) => (
              <tr key={p.number} className={p.number === part.number ? 'is-active' : ''} onClick={() => setPicked(p.number)}>
                <td className="mono">{p.number}</td>
                <td>{p.name}</td>
                <td className="mono">{p.version}</td>
                <td>
                  <span className={`state-chip s-${p.state}`} data-testid={`plm-state-${p.number}`}>
                    {p.stateDisplay}
                  </span>
                </td>
                <td className="mono">{p.attachments.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="plm-detail">
        <div className="plm-card">
          <h4>
            <span>
              <span className="mono">{part.number}</span> <span className="muted">Rev {part.revision}</span>
            </span>
            {part.state !== 'RELEASED' && (
              <button className="btn btn-sm" onClick={promote} disabled={busy} title="Create a promotion request as Maya Chen">
                {busy ? <LoaderCircle className="spin" /> : <Rocket />} Promote to Released
              </button>
            )}
          </h4>
          {promotions.length === 0 && <div className="hint">No promotion requests.</div>}
          {promotions.map((p) => (
            <div key={p.id} className="pr">
              <span className="id">{p.id}</span>
              <span className="muted">
                {p.requestedBy} · {ago(p.createdOn)}
              </span>
              <span className={`tag t-display ${p.status === 'APPROVED' ? 't-pass' : p.status === 'REJECTED' ? 't-crit' : 't-med'}`}>
                {p.status.replace('_', ' ')}
              </span>
              {p.reasons.length > 0 && <span className="reasons">{p.reasons.join(' · ')}</span>}
            </div>
          ))}
        </div>
        <div className="plm-card">
          <h4>
            <span className="label">Attachments</span>
          </h4>
          {part.attachments.map((a) => {
            const isRecord = a.fileName.includes('review-record');
            const url = backend?.attachmentUrl(part.number, a.fileName);
            return (
              <div key={a.fileName} className={`attachment${fresh.has(`${part.number}/${a.fileName}`) ? ' is-new' : ''}`}>
                {isRecord ? <FileText /> : <Database />}
                <span className="name" title={a.fileName}>
                  {a.fileName}
                </span>
                {isRecord && decisionId ? (
                  <span style={{ display: 'flex', gap: 4 }}>
                    <button className="btn btn-sm" onClick={() => set('modal', { kind: 'record', decisionId })}>
                      Open
                    </button>
                    {url && (
                      <a className="icon-btn" style={{ width: 26, height: 26 }} href={url} target="_blank" rel="noreferrer" title="Raw attachment">
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </span>
                ) : (
                  <span className="muted mono">{bytes(a.size)}</span>
                )}
              </div>
            );
          })}
        </div>
        {part.history.length > 0 && (
          <div className="plm-card">
            <h4>
              <span className="label">Lifecycle history</span>
            </h4>
            {part.history.map((h, i) => (
              <div key={i} className="pr">
                <span className="id">
                  {h.from} → {h.to}
                </span>
                <span className="muted">{h.by}</span>
                <span className="muted">{dateTime(h.at)}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------- drawer

export function Drawer() {
  const tab = useStore((s) => s.drawerTab);
  const open = useStore((s) => s.drawerOpen);
  const set = useStore((s) => s.set);
  const log = useStore((s) => s.log);
  const jira = useStore((s) => s.jira);
  const [filter, setFilter] = useState<LogFilter>('all');
  const problems = useMemo(() => log.filter((e) => e.level === 'error' || e.level === 'warn').length, [log]);

  const onGrip = (e: React.PointerEvent) => {
    e.preventDefault();
    const move = (ev: PointerEvent) => {
      const h = Math.round(Math.min(window.innerHeight * 0.72, Math.max(140, window.innerHeight - ev.clientY)));
      useStore.setState({ drawerHeight: h, drawerOpen: true });
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };

  const pick = (t: typeof tab) => {
    set('drawerTab', t);
    if (!open) set('drawerOpen', true);
    // The board and the PLM view need more room than the log.
    const want = Math.min(420, Math.round(window.innerHeight * 0.44));
    if (t !== 'log' && useStore.getState().drawerHeight < want) set('drawerHeight', want);
  };

  return (
    <section className="drawer app-drawer" aria-label="Integrations">
      <div className="drawer-grip" onPointerDown={onGrip} aria-hidden="true" />
      <div className="drawer-bar" role="tablist">
        <button className={`drawer-tab${tab === 'log' ? ' is-active' : ''}`} onClick={() => pick('log')} role="tab">
          <Activity /> Integration log <span className="live" />
        </button>
        <button className={`drawer-tab${tab === 'jira' ? ' is-active' : ''}`} onClick={() => pick('jira')} role="tab" data-testid="tab-jira">
          <LayoutGrid /> Jira board <span className="mock">mock</span>
          <span className="muted mono">{jira.length}</span>
        </button>
        <button className={`drawer-tab${tab === 'plm' ? ' is-active' : ''}`} onClick={() => pick('plm')} role="tab" data-testid="tab-plm">
          <Database /> Windchill <span className="mock">mock</span>
        </button>
        {tab === 'log' && open && (
          <div className="drawer-legend">
            {(['all', 'jira', 'windchill', 'problems'] as LogFilter[]).map((f) => (
              <button key={f} className={`chip-filter${filter === f ? ' is-active' : ''}`} onClick={() => setFilter(f)}>
                {f === 'all' ? 'All' : f === 'jira' ? 'Jira' : f === 'windchill' ? 'Windchill' : 'Problems'}
                {f === 'problems' && problems > 0 && <b>{problems}</b>}
              </button>
            ))}
            <span>
              <ArrowRight size={13} /> sent
            </span>
            <span>
              <ArrowLeft size={13} /> received
            </span>
          </div>
        )}
        {!(tab === 'log' && open) && <span style={{ marginLeft: 'auto' }} />}
        <button className="icon-btn" onClick={() => set('drawerOpen', !open)} aria-label={open ? 'Collapse' : 'Expand'}>
          {open ? <ChevronDown /> : <ChevronUp />}
        </button>
      </div>
      {open && (
        <div className="drawer-body">
          {tab === 'log' && <IntegrationLog filter={filter} />}
          {tab === 'jira' && <JiraBoard />}
          {tab === 'plm' && <WindchillPanel />}
        </div>
      )}
    </section>
  );
}
