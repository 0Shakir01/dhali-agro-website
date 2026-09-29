import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/dhali-agro-website/',
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    strictPort: true,
    watch: {
      ignored: ['**/public/videos/**', '**/node_modules/**', '**/scratch/**']
    }
  }
});
