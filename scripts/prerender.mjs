import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { pathToFileURL } from 'node:url'

const dist = join(process.cwd(), 'dist')
const ssrDir = join(process.cwd(), 'dist-ssr')

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function applyTemplate(template, html, meta) {
  let page = template.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
  page = page.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(meta.title)}</title>`)
  page = page.replace(
    /<meta\s+name="description"\s+content="[\s\S]*?"\s*\/?>/,
    `<meta name="description" content="${escapeHtml(meta.description)}" />`,
  )
  return page
}

async function resolveServerEntry() {
  const files = await readdir(ssrDir)
  const match = files.find((file) => file.startsWith('entry-server') && file.endsWith('.js'))
  if (!match) {
    throw new Error(`Could not find SSR bundle in ${ssrDir}. Found: ${files.join(', ')}`)
  }
  return join(ssrDir, match)
}

const server = await import(pathToFileURL(await resolveServerEntry()).href)
const template = await readFile(join(dist, 'index.html'), 'utf8')
const routes = server.getPrerenderRoutes()

for (const path of routes) {
  const html = server.render(path)
  const page = applyTemplate(template, html, server.getPageMeta(path))
  const file = path === '/' ? join(dist, 'index.html') : join(dist, path.slice(1), 'index.html')
  await mkdir(dirname(file), { recursive: true })
  await writeFile(file, page)
}

const notFound = applyTemplate(
  template,
  server.render('/this-page-does-not-exist'),
  server.getPageMeta('/this-page-does-not-exist'),
)
await writeFile(join(dist, '404.html'), notFound)

console.log(`Prerendered ${routes.length} HTML pages plus 404.html`)
