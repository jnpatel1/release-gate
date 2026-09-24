import { Sparkles, X } from 'lucide-react';
import { useEffect, useRef, type ReactNode } from 'react';
import type { Feedback, Person, Priority } from '../api/types';
import { PRIORITY_LABEL, STATUS_LABEL, initialsColor, isClosed, toneOf } from '../lib/format';

export function BrandMark({ open }: { open: boolean }) {
  // A barrier gate. The arm lifts when the selected part is released.
  return (
    <svg className={`brand-mark${open ? ' is-open' : ''}`} viewBox="0 0 28 28" aria-hidden="true">
      <rect width="28" height="28" rx="6.5" fill="var(--accent)" />
      <rect x="4" y="21.4" width="20" height="1.6" rx="0.8" fill="var(--on-accent)" opacity="0.5" />
      <rect x="6.2" y="10" width="3.8" height="11.8" rx="1" fill="var(--on-accent)" />
      <g className="arm">
        <rect x="7.4" y="10.6" width="16.6" height="3.6" rx="1.8" fill="var(--on-accent)" />
        <rect x="12.6" y="10.6" width="2.6" height="3.6" fill="var(--accent)" opacity="0.85" />
        <rect x="17.8" y="10.6" width="2.6" height="3.6" fill="var(--accent)" opacity="0.85" />
        <circle cx="8.1" cy="12.4" r="2.5" fill="var(--on-accent)" />
        <circle cx="8.1" cy="12.4" r="1" fill="var(--accent)" />
      </g>
    </svg>
  );
}

export function Avatar({ person, size }: { person: Person | null | undefined; size?: 'lg' }) {
  if (!person) return <span className="avatar" style={{ ['--h' as string]: 220 }}>?</span>;
  if (person.isAi) {
    return (
      <span className={`avatar is-ai${size === 'lg' ? ' avatar-lg' : ''}`} title="AutoReview">
        <Sparkles />
      </span>
    );
  }
  return (
    <span
      className={`avatar${person.external ? ' is-external' : ''}${size === 'lg' ? ' avatar-lg' : ''}`}
      style={{ ['--h' as string]: initialsColor(person.id) }}
      title={`${person.name}, ${person.role}${person.external ? ` (${person.org})` : ''}`}
    >
      {person.initials}
    </span>
  );
}

export function PersonChip({ person, sub }: { person: Person | null | undefined; sub?: ReactNode }) {
  if (!person) return <span className="muted">Unassigned</span>;
  return (
    <span className="person">
      <Avatar person={person} />
      <span className="person-name">{person.name}</span>
      {sub}
    </span>
  );
}

export function PriorityLabel({ priority }: { priority: Priority }) {
  return <span className={`prio p-${priority}`}>{PRIORITY_LABEL[priority]}</span>;
}

const STATUS_CLASS: Record<Feedback['status'], string> = {
  open: 't-outline',
  in_progress: 't-accent',
  resolved: 't-pass',
  waived: 't-waived',
  dismissed: '',
};

export function StatusTag({ f }: { f: Pick<Feedback, 'status' | 'source' | 'triage'> }) {
  if (f.source === 'ai' && f.triage === 'untriaged') {
    return (
      <span className="tag t-ai">
        <Sparkles /> Needs triage
      </span>
    );
  }
  return <span className={`tag ${STATUS_CLASS[f.status]}`}>{STATUS_LABEL[f.status]}</span>;
}

export function MiniBalloon({ f }: { f: Pick<Feedback, 'number' | 'status' | 'priority'> }) {
  return <span className={`mini-balloon tone-${toneOf(f)}${isClosed(f) ? ' is-closed' : ''}`}>{f.number}</span>;
}

const SYNC_LABEL: Record<Feedback['syncState'], string> = {
  none: '',
  pending: 'Syncing to Jira',
  synced: 'In sync with Jira',
  error: 'Jira sync failed',
};

export function JiraChip({ f }: { f: Pick<Feedback, 'jiraKey' | 'syncState' | 'jiraStatus'> }) {
  if (!f.jiraKey && f.syncState === 'none') return null;
  return (
    <span className="jira-chip" title={`${SYNC_LABEL[f.syncState]}${f.jiraStatus ? `. Jira status: ${f.jiraStatus}` : ''}`}>
      <span className={`sync-dot s-${f.syncState}`} />
      {f.jiraKey ?? 'Creating…'}
    </span>
  );
}

export function useDismiss(open: boolean, onClose: () => void) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('pointerdown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);
  return ref;
}

export function Modal({
  title,
  subtitle,
  onClose,
  children,
  footer,
  wide,
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  onClose: () => void;
  children: ReactNode;
  footer?: ReactNode;
  wide?: boolean;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);
  return (
    <div className="modal-scrim" onPointerDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal" role="dialog" aria-modal="true" style={wide ? { width: 'min(900px, 100%)' } : undefined}>
        <div className="modal-head">
          <div>
            <h2>{title}</h2>
            {subtitle && <p>{subtitle}</p>}
          </div>
          <button className="icon-btn" onClick={onClose} aria-label="Close">
            <X />
          </button>
        </div>
        <div className="modal-body">{children}</div>
        {footer && <div className="modal-foot">{footer}</div>}
      </div>
    </div>
  );
}
