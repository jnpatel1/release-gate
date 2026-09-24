import { FileText, LoaderCircle, Send, Unlock } from 'lucide-react';
import { useEffect, useState } from 'react';
import { dateTime, due, shortHash } from '../lib/format';
import { useStore } from '../state/store';
import { OutcomeIcon } from './PartRail';

const WORD = { BLOCKED: 'Blocked', READY: 'Ready to release', RELEASING: 'Releasing', RELEASED: 'Released' } as const;

export function GateBand() {
  const part = useStore((s) => s.snap?.part);
  const busy = useStore((s) => !!s.busy.release);
  const rejectAt = useStore((s) => s.rejectAt);
  const readyAt = useStore((s) => s.readyAt);
  const act = useStore((s) => s.act);
  const set = useStore((s) => s.set);
  const toast = useStore((s) => s.toast);
  const [shaking, setShaking] = useState(false);
  const [justReady, setJustReady] = useState(false);

  useEffect(() => {
    if (!rejectAt) return;
    setShaking(true);
    const t = setTimeout(() => setShaking(false), 520);
    return () => clearTimeout(t);
  }, [rejectAt]);

  useEffect(() => {
    if (!readyAt) return;
    setJustReady(true);
    const t = setTimeout(() => setJustReady(false), 3000);
    return () => clearTimeout(t);
  }, [readyAt]);

  if (!part) return <div className="gate-band" />;
  const g = part.gate;
  const blocking = g.checks.filter((c) => c.blocking);
  const advisory = g.checks.filter((c) => !c.blocking);
  const warnings = advisory.filter((c) => c.status === 'warn');

  const release = async () => {
    const res = await act('release', (b) => b.requestRelease(part.number));
    if (!res) return;
    if (res.status === 'REJECTED') {
      set('rejectAt', Date.now());
      set('rightTab', 'checks');
      toast({
        tone: 'error',
        title: `Windchill rejected ${res.promotionRequestId}`,
        body: `Windchill asked the gate before promoting ${part.number}. The gate said no: ${res.reasons.length} check${res.reasons.length === 1 ? '' : 's'} failing.`,
      });
    } else if (res.status === 'APPROVED') {
      toast({
        tone: 'info',
        title: `Windchill approved ${res.promotionRequestId}`,
        body: `Decision ${res.decisionId}. Waiting for Windchill to confirm the lifecycle change.`,
      });
    } else if (res.status === 'ON_HOLD') {
      toast({ tone: 'warn', title: `${res.promotionRequestId} is on hold`, body: res.reasons.join(' ') });
    }
  };

  let sub: JSX.Element;
  if (g.outcome === 'BLOCKED') {
    sub = (
      <>
        <b>
          {g.blockingPassed} of {g.blockingTotal}
        </b>{' '}
        blocking checks pass · <b>{g.itemsToClear}</b> item{g.itemsToClear === 1 ? '' : 's'} to clear · review {due(part.review.due)}
      </>
    );
  } else if (g.outcome === 'READY') {
    const carried = warnings.reduce((n, w) => n + w.itemIds.length, 0);
    sub = (
      <>
        All <b>{g.blockingTotal}</b> blocking checks pass
        {carried ? ` · ${carried} medium/low item${carried === 1 ? '' : 's'} carried to the next revision` : ''}
      </>
    );
  } else if (g.outcome === 'RELEASING') {
    sub = <>Gate approved decision {g.decisionId}. Waiting for Windchill to confirm the lifecycle change.</>;
  } else {
    sub = (
      <>
        Released {dateTime(g.releasedAt)} · decision <b>{g.decisionId}</b> · <span className="mono">{shortHash(g.snapshotHash)}</span>
      </>
    );
  }

  return (
    <section
      className={`gate-band o-${g.outcome.toLowerCase()}${shaking ? ' is-shaking' : ''}${justReady ? ' just-ready' : ''}`}
      aria-live="polite"
      data-testid="gate-band"
      data-outcome={g.outcome}
    >
      <div className="gate-icon">
        <OutcomeIcon outcome={g.outcome} />
      </div>
      <div className="gate-text">
        <div className="gate-word">
          {WORD[g.outcome]}
          <small>
            {part.number} · Rev {part.rev}
          </small>
        </div>
        <div className="gate-sub">{sub}</div>
      </div>
      <div className="meter" aria-label={`${g.blockingPassed} of ${g.blockingTotal} blocking checks pass`}>
        <div className="meter-bar">
          {blocking.map((c) => (
            <span key={c.id} className={`meter-seg ${c.status}`} title={`${c.status === 'pass' ? 'Pass' : 'Fail'}: ${c.title}`} />
          ))}
          <span className="meter-gap" />
          {advisory.map((c) => (
            <span key={c.id} className={`meter-seg advisory ${c.status}`} title={`Advisory: ${c.title}`} />
          ))}
        </div>
        <div className="meter-caption">
          <span>Blocking</span>
          <span>
            {g.blockingPassed}/{g.blockingTotal}
          </span>
        </div>
      </div>
      <div className="gate-actions">
        {g.outcome === 'BLOCKED' && (
          <button className="btn" onClick={release} disabled={busy} title="Windchill will ask the gate before promoting, and the gate will explain why not">
            {busy ? <LoaderCircle className="spin" /> : <Send />}
            Request release
          </button>
        )}
        {g.outcome === 'READY' && (
          <button className="btn btn-primary is-glowing" onClick={release} disabled={busy} data-testid="release">
            {busy ? <LoaderCircle className="spin" /> : <Unlock />}
            Release Rev {part.rev} to Windchill
          </button>
        )}
        {g.outcome === 'RELEASING' && (
          <button className="btn" disabled>
            <LoaderCircle className="spin" />
            Releasing…
          </button>
        )}
        {g.outcome === 'RELEASED' && g.decisionId && (
          <button className="btn" onClick={() => set('modal', { kind: 'record', decisionId: g.decisionId! })}>
            <FileText />
            Review record
          </button>
        )}
      </div>
    </section>
  );
}
