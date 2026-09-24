import '@fontsource/ibm-plex-sans/latin-400.css';
import '@fontsource/ibm-plex-sans/latin-500.css';
import '@fontsource/ibm-plex-sans/latin-600.css';
import '@fontsource/ibm-plex-mono/latin-400.css';
import '@fontsource/ibm-plex-mono/latin-500.css';
import '@fontsource/ibm-plex-mono/latin-600.css';
import '@fontsource/barlow-condensed/latin-600.css';
import '@fontsource/barlow-condensed/latin-700.css';
import './styles/tokens.css';
import './styles/app.css';

import { createRoot } from 'react-dom/client';
import type { Backend } from './api/backend';
import { ServerBackend } from './api/server';
import { App } from './App';
import { OfflineEngine } from './engine/engine';
import { useStore } from './state/store';

async function pickBackend(): Promise<Backend> {
  if (__OFFLINE__) return new OfflineEngine();
  try {
    const res = await fetch('/api/health', { cache: 'no-store' });
    if (res.ok) return new ServerBackend();
  } catch {
    /* no server: fall through */
  }
  // Opened without the Python server (for example from a file): run in-browser.
  return new OfflineEngine();
}

document.documentElement.dataset.theme = useStore.getState().theme;
createRoot(document.getElementById('root')!).render(<App />);
pickBackend().then((backend) => useStore.getState().boot(backend));
