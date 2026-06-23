import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  /* Ensure all routes (e.g. /careers, /admin/jobs) serve index.html in preview mode */
  preview: { port: 4173 },
})
