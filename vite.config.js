import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/dsy-events/', // Ensure this matches your GitHub repository name
});
