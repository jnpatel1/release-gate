import { useEffect, useState } from 'react';
import { Drawer, JiraBoard, WindchillPanel } from './components/Drawer';
import { GateBand } from './components/GateBand';
import { Modals } from './components/Modals';
import { PartRail, PartSwitch } from './components/PartRail';
import { Sheet } from './components/Sheet';
import { SidePanel } from './components/SidePanel';
import { BrandMark } from './components/common';
import { Toasts } from './components/Toasts';
import { TopBar } from './components/TopBar';
import { useStore } from './state/store';

function useHash() {
  const [hash, setHash] = useState(() => window.location.hash.replace('#', ''));
  useEffect(() => {
    const on = () => setHash(window.location.hash.replace('#', ''));
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);
  return hash;
}

function Standalone({ which }: { which: 'jira' | 'windchill' }) {
  return (
    <div className="standalone">
      <div className="standalone-head">
        <BrandMark open={false} />
        <strong>{which === 'jira' ? 'Jira board (mock)' : 'Windchill (mock)'}</strong>
        <span className="muted">Changes here reach the Release Gate console in real time.</span>
      </div>
      {which === 'jira' ? <JiraBoard /> : <WindchillPanel />}
      <Toasts />
    </div>
  );
}

export function App() {
  const booted = useStore((s) => s.booted);
  const fatal = useStore((s) => s.fatal);
  const theme = useStore((s) => s.theme);
  const drawerOpen = useStore((s) => s.drawerOpen);
  const drawerHeight = useStore((s) => s.drawerHeight);
  const hash = useHash();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  if (fatal) {
    return (
      <div className="boot">
        <div>
          <h1>Release Gate</h1>
          <p>{fatal}</p>
        </div>
      </div>
    );
  }
  if (!booted) {
    return (
      <div className="boot">
        <div>
          <h1>Release Gate</h1>
          <p>Connecting to Jira and Windchill…</p>
        </div>
      </div>
    );
  }
  if (hash === 'jira' || hash === 'windchill') return <Standalone which={hash} />;

  return (
    <div className="app" style={{ ['--drawer-h' as string]: drawerOpen ? `${drawerHeight}px` : '43px' }}>
      <TopBar />
      <PartRail />
      <main className="app-main">
        <PartSwitch />
        <GateBand />
        <Sheet />
      </main>
      <SidePanel />
      <Drawer />
      <Toasts />
      <Modals />
    </div>
  );
}
