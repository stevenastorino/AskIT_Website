import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function githubPagesBase() {
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
