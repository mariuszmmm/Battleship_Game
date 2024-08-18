import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ships/', // Ustaw nazwę repozytorium, np. '/my-app/'
});
