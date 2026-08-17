import { renderToString } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import { AppShell } from './App'
import { articles } from './data/articles'
import { categories } from './data/categories'
import { basename } from './lib/basename'

export type PageMeta = {
  title: string
  description: string
}

export function render(path: string) {
  const location = basename === '/' ? path : `${basename}${path}`

  return renderToString(
    <MemoryRouter basename={basename} initialEntries={[location]}>
      <AppShell />
    </MemoryRouter>,
  )
}

export function getPrerenderRoutes() {
  return [
    '/',
    '/browse',
    '/contact',
    '/search',
    ...categories.map((category) => `/category/${category.id}`),
    ...articles.map((article) => `/guide/${article.slug}`),
  ]
}

export function getPageMeta(path: string): PageMeta {
  if (path === '/') {
    return {
      title: 'AskIT · Employee IT self-service',
      description:
        'AskIT is an employee self-service knowledge base with the 100 IT questions staff ask most — VPN, printers, passwords, files, and hardware.',
    }
  }
  if (path === '/browse') {
    return {
      title: 'All guides · AskIT',
      description: 'Browse all 100 IT self-service guides by topic and effort.',
    }
  }
  if (path === '/contact') {
    return {
      title: 'Contact IT · AskIT',
      description: 'When a guide is not enough: ticket checklist, walk-up hours, and urgent contacts.',
    }
  }
  if (path === '/search') {
    return {
      title: 'Search · AskIT',
      description: 'Search the AskIT employee IT handbook.',
    }
  }

  const category = categories.find((item) => path === `/category/${item.id}`)
  if (category) {
    return {
      title: `${category.name} · AskIT`,
      description: category.blurb,
    }
  }

  const article = articles.find((item) => path === `/guide/${item.slug}`)
  if (article) {
    return {
      title: `${article.title} · AskIT`,
      description: article.summary,
    }
  }

  return {
    title: 'Page not found · AskIT',
    description: 'That guide is not in the handbook.',
  }
}
