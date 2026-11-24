import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'

const resumeVersions = Object.fromEntries(
  ['GiaKiet_Resume.pdf', 'GiaKiet_Resume_VI.pdf'].map((filename) => [
    filename,
    createHash('sha256')
      .update(readFileSync(new URL(`./public/${filename}`, import.meta.url)))
      .digest('hex')
      .slice(0, 12),
  ]),
)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.RESUME_VERSIONS': JSON.stringify(resumeVersions),
  },
})
