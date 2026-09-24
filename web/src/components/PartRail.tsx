import { Lock, LockOpen, ShieldCheck, Stamp, LoaderCircle } from 'lucide-react';
import type { GateOutcome, PartSummary } from '../api/types';
import { useStore } from '../state/store';

export function OutcomeIcon({ outcome }: { outcome: GateOutcome }) {
  if (outcome === 'READY') return <LockOpen />;
  if (outcome === 'RELEASED') return <Stamp />;
  if (outcome === 'RELEASING') return <LoaderCircle className="spin" />;
  return <Lock />;
}

function footText(p: PartSummary) {
  if (p.gateOutcome === 'RELEASED') return 'Released';
  if (p.gateOutcome === 'RELEASING') return 'Releasing…';
  if (p.gateOutcome === 'READY') return 'Ready to release';
  return `${p.blockingPassed} of ${p.blockingTotal} checks pass`;
}

export function PartRail() {
  const snap = useStore((s) => s.snap);
  const current = useStore((s) => s.partNumber);
  const selectPart = useStore((s) => s.selectPart);
  const set = useStore((s) => s.set);
  if (!snap) return <aside className="rail app-rail" />;
  const policy = snap.workspace.policy;
  const blocking = policy.rules.filter((r) => r.blocking).length;

  return (
    <aside className="rail app-rail" aria-label="Parts in review">
      <div className="rail-head">
        <span className="label">Parts in review</span>
        <span className="label">{snap.parts.length}</span>
      </div>
      <div className="rail-assembly">{snap.parts[0]?.assembly}</div>
      <div className="part-list">
        {snap.parts.map((p) => (
          <button
            key={p.number}
            className={`part-row${p.number === current ? ' is-active' : ''}`}
            onClick={() => selectPart(p.number)}
            aria-current={p.number === current}
          >
            <span className="part-id">
              <span className="part-num">{p.number}</span>
              <span className="part-rev">Rev {p.rev}</span>
            </span>
            <span className={`part-icon o-${p.gateOutcome.toLowerCase()}`} title={p.gateOutcome}>
              <OutcomeIcon outcome={p.gateOutcome} />
            </span>
            <span className="part-name">{p.name}</span>
            <span className="part-foot">
              <span>{footText(p)}</span>
              <span className="mini-meter" aria-hidden="true">
                {Array.from({ length: p.blockingTotal }, (_, i) => (
                  <i key={i} className={i < p.blockingPassed ? 'pass' : 'fail'} />
                ))}
              </span>
            </span>
          </button>
        ))}
      </div>
      <div className="rail-foot">
        <button className="policy-card" onClick={() => set('modal', { kind: 'policy' })}>
          <span className="policy-card-head">
            <ShieldCheck />
            {policy.name} v{policy.version}
          </span>
          <p>
            {blocking} blocking checks. {policy.failClosedOnSync ? 'Fails closed when Jira or Windchill is out of sync.' : 'Sync problems only warn.'}
          </p>
        </button>
      </div>
    </aside>
  );
}

export function PartSwitch() {
  const snap = useStore((s) => s.snap);
  const current = useStore((s) => s.partNumber);
  const selectPart = useStore((s) => s.selectPart);
  if (!snap) return null;
  return (
    <div className="part-switch" role="tablist" aria-label="Parts">
      {snap.parts.map((p) => (
        <button key={p.number} className={p.number === current ? 'is-active' : ''} onClick={() => selectPart(p.number)}>
          {p.number}
        </button>
      ))}
    </div>
  );
}
