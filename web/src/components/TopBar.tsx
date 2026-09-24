import { Ellipsis, ExternalLink, FlaskConical, Info, Moon, RotateCcw, ShieldCheck, Sun, Braces } from 'lucide-react';
import { useCallback, useState } from 'react';
import type { Chaos } from '../api/types';
import { useStore } from '../state/store';
import { BrandMark, useDismiss } from './common';

const CHAOS: { key: keyof Chaos; title: string; body: string }[] = [
  { key: 'jiraOutage', title: 'Jira API outage', body: 'Jira answers 503 with Retry-After. Watch the outbox back off and the gate refuse to release on unconfirmed data.' },
  { key: 'jiraLostResponses', title: 'Lost create responses', body: 'Jira creates the issue, then the response times out. The retry finds it instead of making a duplicate.' },
  { key: 'duplicateWebhooks', title: 'Duplicate webhooks', body: 'Jira delivers every webhook twice with the same delivery ID. Only the first is applied.' },
  { key: 'slowNetwork', title: 'Slow network', body: 'Adds 600 ms to every Jira call.' },
];

function SimulateMenu() {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  const ref = useDismiss(open, close);
  const chaos = useStore((s) => s.snap?.systems.chaos);
  const act = useStore((s) => s.act);
  const active = chaos ? Object.values(chaos).filter(Boolean).length : 0;
  return (
    <div className="popover-anchor" ref={ref}>
      <button
        className={`btn btn-sm${active ? ' btn-danger' : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        title="Simulate integration failures"
      >
        <FlaskConical />
        Simulate{active ? ` · ${active} on` : ''}
      </button>
      {open && chaos && (
        <div className="popover" role="menu">
          <div className="popover-head">
            <h3>Simulate failures</h3>
            <p>These switch the mock Jira into bad behaviour. The console and the board keep working.</p>
          </div>
          {CHAOS.map((c) => (
            <button
              key={c.key}
              className="chaos-row"
              role="menuitemcheckbox"
              aria-checked={chaos[c.key]}
              onClick={() => act(`chaos:${c.key}`, (b) => b.setChaos({ [c.key]: !chaos[c.key] }))}
            >
              <div style={{ flex: 1 }}>
                <strong>{c.title}</strong>
                <span>{c.body}</span>
              </div>
              <span className="switch" role="switch" aria-checked={chaos[c.key]} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function MoreMenu() {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  const ref = useDismiss(open, close);
  const set = useStore((s) => s.set);
  const act = useStore((s) => s.act);
  const mode = useStore((s) => s.backend?.mode);
  return (
    <div className="popover-anchor" ref={ref}>
      <button className="icon-btn" onClick={() => setOpen((o) => !o)} aria-label="More" aria-expanded={open}>
        <Ellipsis />
      </button>
      {open && (
        <div className="popover" style={{ width: 260 }} role="menu">
          <button className="menu-item" onClick={() => (set('modal', { kind: 'about' }), close())}>
            <Info /> About this demo
          </button>
          <button
            className="menu-item"
            onClick={() => {
              close();
              void act('reset', (b) => b.reset());
            }}
          >
            <RotateCcw /> Reset demo data
          </button>
          {mode === 'server' && (
            <>
              <div className="menu-sep" />
              <a className="menu-item" href="#jira" target="_blank" rel="noreferrer">
                <ExternalLink /> Open Jira board in a new window
              </a>
              <a className="menu-item" href="#windchill" target="_blank" rel="noreferrer">
                <ExternalLink /> Open Windchill in a new window
              </a>
              <a className="menu-item" href="/graphql" target="_blank" rel="noreferrer">
                <Braces /> GraphQL explorer
              </a>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export function TopBar() {
  const snap = useStore((s) => s.snap);
  const connected = useStore((s) => s.connected);
  const mode = useStore((s) => s.backend?.mode);
  const theme = useStore((s) => s.theme);
  const toggleTheme = useStore((s) => s.toggleTheme);
  const set = useStore((s) => s.set);
  const systems = snap?.systems;
  const released = snap?.part?.gate.outcome === 'RELEASED';
  const label = { healthy: 'Healthy', degraded: 'Degraded', down: 'Down' } as const;
  const queued = systems ? systems.pending + systems.retrying + systems.dead : 0;

  return (
    <header className="topbar app-top">
      <div className="brand">
        <BrandMark open={released} />
        <span className="brand-name">Release Gate</span>
        <span className="brand-sep" />
        <div className="brand-ctx">
          <strong>{snap?.workspace.name ?? 'Loading…'}</strong>
          <span>{snap?.workspace.program} · CoLab design reviews → Windchill releases</span>
        </div>
      </div>
      <div className="topbar-spacer" />
      <div className="systems">
        {systems && (
          <>
            <span className={`sys-pill is-${systems.jira}`} title={queued ? `${queued} deliveries waiting` : 'All deliveries confirmed'}>
              <span className="dot" />
              Jira <span className="state">{label[systems.jira]}</span>
            </span>
            <span className={`sys-pill is-${systems.windchill}`}>
              <span className="dot" />
              Windchill <span className="state">{label[systems.windchill]}</span>
            </span>
          </>
        )}
        {mode === 'offline' ? (
          <span className="sys-pill is-offline-mode" title="Everything runs in your browser; no server needed.">
            <span className="dot" />
            In-browser demo
          </span>
        ) : (
          <span className={`sys-pill ${connected ? 'is-live' : 'is-down'}`} title="Live updates over Server-Sent Events">
            <span className="dot" />
            {connected ? 'Live' : 'Reconnecting'}
          </span>
        )}
      </div>
      <div className="topbar-actions">
        <SimulateMenu />
        <button className="icon-btn" onClick={() => set('modal', { kind: 'policy' })} aria-label="Release policy" title="Release policy">
          <ShieldCheck />
        </button>
        <button className="icon-btn" onClick={toggleTheme} aria-label={theme === 'dark' ? 'Light theme' : 'Dark theme'} title="Toggle theme">
          {theme === 'dark' ? <Sun /> : <Moon />}
        </button>
        <MoreMenu />
      </div>
    </header>
  );
}
