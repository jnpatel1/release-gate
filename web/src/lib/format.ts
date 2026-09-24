import type { Feedback, Priority } from '../api/types';
import type { PinTone } from '../viewer/PartViewer';

const MIN = 60_000;
const HOUR = 60 * MIN;
const DAY = 24 * HOUR;

export function ago(iso: string | null | undefined, now = Date.now()): string {
  if (!iso) return '';
  const diff = now - Date.parse(iso);
  if (diff < 45_000) return 'just now';
  if (diff < HOUR) return `${Math.round(diff / MIN)} min ago`;
  if (diff < DAY) return `${Math.round(diff / HOUR)} h ago`;
  const days = Math.round(diff / DAY);
  return days === 1 ? 'yesterday' : `${days} days ago`;
}

export function due(iso: string | null | undefined, now = Date.now()): string {
  if (!iso) return '';
  const diff = Date.parse(iso) - now;
  if (diff < 0) return `was due ${ago(iso, now)}`;
  if (diff < HOUR) return `due in ${Math.max(1, Math.round(diff / MIN))} min`;
  if (diff < DAY) return `due in ${Math.round(diff / HOUR)} h`;
  const days = Math.round(diff / DAY);
  return days === 1 ? 'due tomorrow' : `due in ${days} days`;
}

export function clock(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
}

/** Time of day for today's events, a short date for older ones. */
export function logStamp(iso: string, now = new Date()): string {
  const d = new Date(iso);
  if (d.toDateString() === now.toDateString()) return clock(iso);
  if (now.getTime() - d.getTime() < DAY * 1.5 && d.getDate() !== now.getDate()) {
    return `Yday ${d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}`;
  }
  return d.toLocaleDateString([], { day: 'numeric', month: 'short' });
}

export function dateLong(iso: string | null | undefined): string {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString([], { day: 'numeric', month: 'short', year: 'numeric' });
}

export function dateTime(iso: string | null | undefined): string {
  if (!iso) return '';
  const d = new Date(iso);
  return `${d.toLocaleDateString([], { day: 'numeric', month: 'short' })}, ${d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}`;
}

export function bytes(n: number): string {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(0)} KB`;
  return `${(n / 1024 / 1024).toFixed(1)} MB`;
}

export function shortHash(hash: string | null | undefined): string {
  if (!hash) return '';
  const [algo, hex] = hash.split(':');
  return hex ? `${algo}:${hex.slice(0, 8)}…${hex.slice(-6)}` : hash;
}

export const PRIORITY_LABEL: Record<Priority, string> = {
  critical: 'Critical',
  high: 'High',
  medium: 'Medium',
  low: 'Low',
};

export const STATUS_LABEL: Record<Feedback['status'], string> = {
  open: 'Open',
  in_progress: 'In progress',
  resolved: 'Resolved',
  waived: 'Waived',
  dismissed: 'Dismissed',
};

export function isClosed(f: Pick<Feedback, 'status'>) {
  return f.status === 'resolved' || f.status === 'waived' || f.status === 'dismissed';
}

export function toneOf(f: Pick<Feedback, 'status' | 'priority'>): PinTone {
  if (f.status === 'resolved') return 'resolved';
  if (f.status === 'waived') return 'waived';
  if (f.status === 'dismissed') return 'dismissed';
  return f.priority;
}

export function initialsColor(id: string): number {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) % 360;
  return h;
}
