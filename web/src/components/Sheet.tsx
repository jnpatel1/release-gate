import { Eye, EyeOff, Maximize } from 'lucide-react';
import { useEffect, useMemo, useRef } from 'react';
import type { Part } from '../api/types';
import { dateLong, isClosed, toneOf } from '../lib/format';
import { useStore } from '../state/store';
import { PartViewer, type PinSpec, type ViewName } from '../viewer/PartViewer';
import { MiniBalloon } from './common';

const COLUMNS = ['8', '7', '6', '5', '4', '3', '2', '1'];
const ROWS = ['D', 'C', 'B', 'A'];

function Zones() {
  return (
    <>
      <div className="zones zones-top" aria-hidden="true">
        {COLUMNS.map((c) => (
          <span key={c}>{c}</span>
        ))}
      </div>
      <div className="zones zones-bottom" aria-hidden="true">
        {COLUMNS.map((c) => (
          <span key={c}>{c}</span>
        ))}
      </div>
      <div className="zones zones-left" aria-hidden="true">
        {ROWS.map((r) => (
          <span key={r}>{r}</span>
        ))}
      </div>
      <div className="zones zones-right" aria-hidden="true">
        {ROWS.map((r) => (
          <span key={r}>{r}</span>
        ))}
      </div>
    </>
  );
}

function TitleBlock({ part, workspace }: { part: Part; workspace: string }) {
  const outcome = part.gate.outcome;
  return (
    <div className="titleblock" aria-label="Title block">
      <div className="tb-row tb-head">
        <div className="tb-cell">
          <span className="tb-label">{workspace}</span>
          <span className="tb-title">{part.name}</span>
        </div>
        <div className="tb-cell tb-rev">
          <span className="tb-label">Rev</span>
          <strong>{part.rev}</strong>
        </div>
      </div>
      <div className="tb-row">
        <div className="tb-cell">
          <span className="tb-label">Part no.</span>
          <span className="tb-value">{part.number}</span>
        </div>
        <div className="tb-cell">
          <span className="tb-label">Material</span>
          <span className="tb-value">{part.material}</span>
        </div>
        <div className="tb-cell">
          <span className="tb-label">Finish</span>
          <span className="tb-value">{part.finish}</span>
        </div>
      </div>
      <div className="tb-row">
        <div className="tb-cell">
          <span className="tb-label">Lifecycle</span>
          <span className="tb-value">{part.plmState === 'RELEASED' ? 'RELEASED' : 'IN WORK'}</span>
        </div>
        <div className="tb-cell">
          <span className="tb-label">Gate</span>
          <span className={`tb-value tb-gate o-${outcome.toLowerCase()}`}>{outcome}</span>
        </div>
        <div className="tb-cell">
          <span className="tb-label">Units</span>
          <span className="tb-value">MM · 1:1</span>
        </div>
      </div>
    </div>
  );
}

function Stamp({ part, fresh }: { part: Part; fresh: boolean }) {
  return (
    <div className={`stamp${fresh ? ' is-new' : ''}`} aria-label="Released stamp" data-testid="stamp">
      <span>For manufacture</span>
      <strong>RELEASED</strong>
      <span>
        Rev {part.rev} · {dateLong(part.gate.releasedAt)} · {part.gate.decisionId}
      </span>
    </div>
  );
}

export function Sheet() {
  const part = useStore((s) => s.snap?.part);
  const workspace = useStore((s) => s.snap?.workspace.name ?? '');
  const selectedId = useStore((s) => s.selectedId);
  const focusToken = useStore((s) => s.focusToken);
  const showClosed = useStore((s) => s.showClosed);
  const theme = useStore((s) => s.theme);
  const stampAt = useStore((s) => s.stampAt);
  const select = useStore((s) => s.select);
  const set = useStore((s) => s.set);
  const hostRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<PartViewer | null>(null);

  useEffect(() => {
    const viewer = new PartViewer(hostRef.current!, (id) => {
      if (id) useStore.getState().select(id, true);
      else useStore.getState().select(null, false);
    });
    viewerRef.current = viewer;
    return () => viewer.dispose();
  }, []);

  useEffect(() => {
    if (part) viewerRef.current?.setModel(part.model);
  }, [part?.model]);

  const pins: PinSpec[] = useMemo(() => {
    if (!part) return [];
    return part.feedback
      .filter((f) => f.pin && (showClosed || !isClosed(f) || f.id === selectedId))
      .map((f) => ({
        id: f.id,
        number: f.number,
        tone: toneOf(f),
        ai: f.source === 'ai',
        closed: isClosed(f),
        title: f.title,
        ...f.pin!,
      }));
  }, [part, showClosed, selectedId]);

  useEffect(() => {
    viewerRef.current?.setPins(pins);
  }, [pins]);

  const prevSelected = useRef<string | null>(null);
  useEffect(() => {
    viewerRef.current?.setSelected(selectedId, false);
    if (prevSelected.current && !selectedId) viewerRef.current?.view('fit');
    prevSelected.current = selectedId;
  }, [selectedId]);

  useEffect(() => {
    if (focusToken) viewerRef.current?.setSelected(useStore.getState().selectedId, true);
  }, [focusToken]);

  useEffect(() => {
    viewerRef.current?.setTheme(theme === 'dark');
  }, [theme]);

  useEffect(() => {
    if (!stampAt) return;
    viewerRef.current?.view('fit');
    viewerRef.current?.celebrate();
  }, [stampAt]);

  const view = (v: ViewName) => viewerRef.current?.view(v);
  const notes = part?.feedback.filter((f) => !f.pin && (showClosed || !isClosed(f))) ?? [];
  const released = part?.gate.outcome === 'RELEASED';
  const freshStamp = !!stampAt && Date.now() - stampAt < 4000;
  const closedCount = part?.feedback.filter((f) => f.pin && isClosed(f)).length ?? 0;

  return (
    <section className="sheet" aria-label="Model view">
      <Zones />
      <div className="sheet-inner">
        <div className="viewer-host" ref={hostRef} />
        <div className="view-tools">
          <button className="tool-btn" onClick={() => view('fit')} title="Fit the part">
            <Maximize /> <span className="label-text">Fit</span>
          </button>
          <button className="tool-btn" onClick={() => view('front')}>
            Front
          </button>
          <button className="tool-btn" onClick={() => view('top')}>
            Top
          </button>
          <button className="tool-btn" onClick={() => view('right')}>
            Right
          </button>
          <span className="tool-sep" />
          <button
            className="tool-btn"
            aria-pressed={showClosed}
            onClick={() => set('showClosed', !showClosed)}
            title="Show resolved, waived and dismissed feedback"
          >
            {showClosed ? <Eye /> : <EyeOff />}
            <span className="label-text">Closed ({closedCount})</span>
          </button>
        </div>
        {notes.length > 0 && (
          <div className="sheet-notes">
            {notes.map((f) => (
              <button
                key={f.id}
                className={`sheet-note tone-${toneOf(f)}${f.id === selectedId ? ' is-selected' : ''}`}
                onClick={() => select(f.id, false)}
                title={f.title}
              >
                <MiniBalloon f={f} />
                <span className="text">{f.title}</span>
                <span className="where">{f.sheetRef}</span>
              </button>
            ))}
          </div>
        )}
        <div className="viewer-hint">Drag to orbit · scroll to zoom · click a balloon</div>
        {part && <TitleBlock part={part} workspace={workspace} />}
        {part && released && <Stamp part={part} fresh={freshStamp} />}
      </div>
    </section>
  );
}
