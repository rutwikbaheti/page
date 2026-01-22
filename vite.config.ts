
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Since you are using a custom domain, the base should be '/'
  base: '/', 
  // Ensure the public directory is used for static assets like CNAME
  publicDir: 'public',
});
