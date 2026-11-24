import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'

// Change the Resume URLs whenever either PDF changes to refresh browser caches.
const resumeVersion = createHash('sha256')
  .update(readFileSync(new URL('./public/GiaKiet_Resume.pdf', import.meta.url)))
  .update(readFileSync(new URL('./public/GiaKiet_Resume_VI.pdf', import.meta.url)))
  .digest('hex')
  .slice(0, 12)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.RESUME_VERSION': JSON.stringify(resumeVersion),
  },
})
