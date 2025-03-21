import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['lucide-react'],
    }
  },
  optimizeDeps: {
    include: ['html2canvas']
  }
});