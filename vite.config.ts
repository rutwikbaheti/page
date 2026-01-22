import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Custom domain automatereply.com is at the root
  base: '/',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    // Ensure the index.html is processed correctly
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
});
