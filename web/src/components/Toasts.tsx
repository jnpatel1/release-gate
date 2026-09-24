import { Check, Info, TriangleAlert, X } from 'lucide-react';
import { useStore } from '../state/store';

const ICON = { ok: Check, error: X, warn: TriangleAlert, info: Info } as const;

export function Toasts() {
  const toasts = useStore((s) => s.toasts);
  const dismiss = useStore((s) => s.dismissToast);
  return (
    <div className="toasts" aria-live="assertive">
      {toasts.map((t) => {
        const Icon = ICON[t.tone];
        return (
          <div key={t.id} className={`toast t-${t.tone}`} role="status">
            <span className="toast-icon">
              <Icon />
            </span>
            <div>
              <b>{t.title}</b>
              {t.body && <p>{t.body}</p>}
              {t.action && (
                <button className="btn btn-sm" onClick={t.action.run}>
                  {t.action.label}
                </button>
              )}
            </div>
            <button className="icon-btn" onClick={() => dismiss(t.id)} aria-label="Dismiss">
              <X />
            </button>
          </div>
        );
      })}
    </div>
  );
}
