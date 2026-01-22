
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Since you are using a custom domain (automatereply.com), the base should be '/'
  base: '/', 
});
