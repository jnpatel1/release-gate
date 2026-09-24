import { create } from 'zustand';
import { BackendError, type Backend } from '../api/backend';
import type { ConsoleSnapshot, JiraIssue, LiveEvent, LogEntry, PlmState } from '../api/types';

export type RightTab = 'checks' | 'feedback' | 'record';
export type DrawerTab = 'log' | 'jira' | 'plm';
export type FeedbackFilter = 'all' | 'open' | 'blocking' | 'ai';
export type Modal = null | { kind: 'record'; decisionId: string } | { kind: 'policy' } | { kind: 'about' };

export interface Toast {
  id: number;
  tone: 'ok' | 'error' | 'warn' | 'info';
  title: string;
  body?: string;
  action?: { label: string; run: () => void };
}

interface State {
  backend: Backend;
  booted: boolean;
  fatal: string | null;
  connected: boolean;
  partNumber: string;
  snap: ConsoleSnapshot | null;
  log: LogEntry[];
  fresh: Record<number, true>;
  jira: JiraIssue[];
  plm: PlmState | null;
  selectedId: string | null;
  focusToken: number;
  rightTab: RightTab;
  filter: FeedbackFilter;
  drawerTab: DrawerTab;
  drawerOpen: boolean;
  drawerHeight: number;
  showClosed: boolean;
  busy: Record<string, boolean>;
  toasts: Toast[];
  modal: Modal;
  stampAt: number | null;
  rejectAt: number | null;
  readyAt: number | null;
  theme: 'light' | 'dark';
  jiraActor: string;

  boot(backend: Backend): Promise<void>;
  refresh(immediate?: boolean): void;
  selectPart(number: string): void;
  select(id: string | null, focus?: boolean): void;
  set<K extends keyof State>(key: K, value: State[K]): void;
  act<T>(key: string, fn: (b: Backend) => Promise<T>): Promise<T | undefined>;
  toast(t: Omit<Toast, 'id'>): void;
  dismissToast(id: number): void;
  toggleTheme(): void;
}

const initialTheme = (): 'light' | 'dark' => {
  try {
    const saved = localStorage.getItem('rg-theme');
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
    /* storage unavailable */
  }
  // A host page (or the viewer's own theme switch) may already have chosen.
  const stamped = document.documentElement.dataset.theme;
  if (stamped === 'light' || stamped === 'dark') return stamped;
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

let refreshTimer: ReturnType<typeof setTimeout> | null = null;
let refreshing = false;
let refreshAgain = false;
let toastSeq = 0;
let unsubscribe: (() => void) | null = null;

export const useStore = create<State>((set, get) => ({
  backend: null as unknown as Backend,
  booted: false,
  fatal: null,
  connected: false,
  partNumber: 'BRK-2210',
  snap: null,
  log: [],
  fresh: {},
  jira: [],
  plm: null,
  selectedId: null,
  focusToken: 0,
  rightTab: 'checks',
  filter: 'all',
  drawerTab: 'log',
  drawerOpen: true,
  drawerHeight: Math.round(Math.min(280, Math.max(200, window.innerHeight * 0.28))),
  showClosed: false,
  busy: {},
  toasts: [],
  modal: null,
  stampAt: null,
  rejectAt: null,
  readyAt: null,
  theme: initialTheme(),
  jiraActor: 'p-maya',

  async boot(backend) {
    set({ backend });
    unsubscribe?.();
    unsubscribe = backend.subscribe(
      (e: LiveEvent) => {
        if (e.type === 'log') {
          set((s) => {
            if (s.log.some((l) => l.id === e.data.id)) return {};
            return { log: [e.data, ...s.log].slice(0, 250), fresh: { ...s.fresh, [e.data.id]: true } };
          });
          setTimeout(() => {
            set((s) => {
              const fresh = { ...s.fresh };
              delete fresh[e.data.id];
              return { fresh };
            });
          }, 2200);
          get().refresh();
        } else if (e.type === 'changed') {
          get().refresh();
        } else if (e.type === 'reset') {
          set({ selectedId: null, stampAt: null, rejectAt: null, readyAt: null });
          backend.log().then((log) => set({ log }));
          get().refresh(true);
        }
      },
      (connected) => {
        const was = get().connected;
        set({ connected });
        if (connected && !was && get().booted) {
          // Reconnected: catch up on anything we missed.
          backend.log().then((log) => set({ log }));
          get().refresh(true);
        }
      },
    );
    try {
      const [snap, log, jira, plm] = await Promise.all([
        backend.snapshot(get().partNumber),
        backend.log(),
        backend.jiraIssues(),
        backend.plm(),
      ]);
      set({ snap, log, jira, plm, booted: true, fatal: null });
    } catch (err) {
      set({ fatal: err instanceof Error ? err.message : String(err) });
    }
  },

  refresh(immediate = false) {
    if (refreshTimer) clearTimeout(refreshTimer);
    const run = async () => {
      if (refreshing) {
        refreshAgain = true;
        return;
      }
      refreshing = true;
      try {
        const { backend, partNumber } = get();
        const [snap, jira, plm] = await Promise.all([backend.snapshot(partNumber), backend.jiraIssues(), backend.plm()]);
        const prev = get().snap;
        const patch: Partial<State> = { snap, jira, plm };
        if (prev?.part && snap.part && prev.part.number === snap.part.number) {
          const before = prev.part.gate.outcome;
          const after = snap.part.gate.outcome;
          if (before !== 'RELEASED' && after === 'RELEASED') {
            patch.stampAt = Date.now();
            patch.selectedId = null;
            patch.rightTab = 'checks';
            get().toast({
              tone: 'ok',
              title: `${snap.part.number} Rev ${snap.part.rev} is released`,
              body: 'Windchill confirmed the lifecycle change. The review record is being attached.',
            });
          } else if (before === 'BLOCKED' && after === 'READY') {
            patch.readyAt = Date.now();
            get().toast({ tone: 'ok', title: 'Every blocking check passes', body: 'Rev ' + snap.part.rev + ' is ready to release.' });
          }
        }
        set(patch);
      } catch {
        /* transient; the next event triggers another refresh */
      } finally {
        refreshing = false;
        if (refreshAgain) {
          refreshAgain = false;
          get().refresh();
        }
      }
    };
    if (immediate) void run();
    else refreshTimer = setTimeout(run, 90);
  },

  selectPart(number) {
    if (number === get().partNumber) return;
    set({ partNumber: number, selectedId: null, stampAt: null, rejectAt: null, readyAt: null });
    get().refresh(true);
  },

  select(id, focus = true) {
    set((s) => ({
      selectedId: id,
      focusToken: focus ? s.focusToken + 1 : s.focusToken,
      rightTab: id ? 'feedback' : s.rightTab,
    }));
  },

  set(key, value) {
    set({ [key]: value } as Partial<State>);
  },

  async act(key, fn) {
    set((s) => ({ busy: { ...s.busy, [key]: true } }));
    try {
      const out = await fn(get().backend);
      get().refresh(true);
      return out;
    } catch (err) {
      const message = err instanceof BackendError || err instanceof Error ? err.message : String(err);
      get().toast({ tone: 'error', title: message });
      return undefined;
    } finally {
      set((s) => {
        const busy = { ...s.busy };
        delete busy[key];
        return { busy };
      });
    }
  },

  toast(t) {
    const id = ++toastSeq;
    set((s) => ({ toasts: [...s.toasts.slice(-3), { ...t, id }] }));
    setTimeout(() => get().dismissToast(id), t.tone === 'error' ? 7000 : 5200);
  },

  dismissToast(id) {
    set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) }));
  },

  toggleTheme() {
    const theme = get().theme === 'dark' ? 'light' : 'dark';
    try {
      localStorage.setItem('rg-theme', theme);
    } catch {
      /* ignore */
    }
    set({ theme });
  },
}));
