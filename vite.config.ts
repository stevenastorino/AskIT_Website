import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function githubPagesBase() {
  if (existsSync(resolve(process.cwd(), 'public/CNAME'))) return '/'
  const repo = process.env.GITHUB_REPOSITORY
  if (!repo) return '/'
  const name = repo.split('/')[1] ?? ''
  if (!name || name.endsWith('.github.io')) return '/'
  return `/${name}/`
}

export default defineConfig(({ isSsrBuild }) => ({
  base: githubPagesBase(),
  plugins: [react()],
  build: {
    outDir: isSsrBuild ? 'dist-ssr' : 'dist',
    emptyOutDir: true,
  },
}))
