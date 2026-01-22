import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base to '/' for custom domains like automatereply.com
  base: '/',
  // Ensure public folder is explicitly handled
  publicDir: 'public',
  build: {
    outDir: 'dist',
    sourcemap: false
  }
});
