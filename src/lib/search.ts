import { articles } from '../data/articles'
import type { Article, CategoryId, Difficulty } from '../types'

function normalize(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim()
}

export function searchArticles(query: string): Article[] {
  const terms = normalize(query).split(' ').filter((term) => term.length > 1)
  if (terms.length === 0) return []

  return articles
    .map((article) => {
      const haystack = normalize(
        [
          article.title,
          article.summary,
          article.tags.join(' '),
          article.symptoms.join(' '),
          article.steps.map((step) => `${step.title} ${step.detail}`).join(' '),
        ].join(' '),
      )
      const score = terms.reduce((total, term) => {
        if (normalize(article.title).includes(term)) return total + 6
        if (article.tags.some((tag) => normalize(tag).includes(term))) return total + 3
        if (haystack.includes(term)) return total + 1
        return total - 8
      }, 0)
      return { article, score }
    })
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((result) => result.article)
}

export function filterArticles(options: {
  category?: CategoryId | 'all'
  difficulty?: Difficulty | 'all'
  query?: string
}): Article[] {
  const query = options.query?.trim() ?? ''
  const base = query ? searchArticles(query) : articles
  return base.filter((article) => {
    if (options.category && options.category !== 'all' && article.category !== options.category) {
      return false
    }
    if (options.difficulty && options.difficulty !== 'all' && article.difficulty !== options.difficulty) {
      return false
    }
    return true
  })
}
