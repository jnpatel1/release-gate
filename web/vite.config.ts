import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

// Two builds from one codebase:
//   `vite build`                 -> dist/, served by the Python app, talks to the real backend
//   `vite build --mode offline`  -> dist-offline/index.html, one self-contained file that runs
//                                   the same flows against an in-browser engine (for sharing)
export default defineConfig(({ mode }) => {
  const offline = mode === 'offline';
  const api = 'http://127.0.0.1:8000';
  return {
    plugins: [react(), ...(offline ? [viteSingleFile({ removeViteModuleLoader: true })] : [])],
    define: { __OFFLINE__: JSON.stringify(offline) },
    build: {
      outDir: offline ? 'dist-offline' : 'dist',
      emptyOutDir: true,
      assetsInlineLimit: offline ? 100_000_000 : 4096,
      chunkSizeWarningLimit: 2500,
    },
    server: {
      port: 5173,
      proxy: { '/graphql': api, '/api': api, '/mock': api, '/webhooks': api },
      fs: { allow: ['..'] },
    },
  };
});
