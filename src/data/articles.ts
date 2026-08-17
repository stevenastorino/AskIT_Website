import type { Article, CategoryId } from '../types'
import { networkEmailAccountArticles } from './articles-network-email-accounts'
import { printersFilesHardwareArticles } from './articles-printers-files-hardware'
import { softwareSecurityMobileMeetingArticles } from './articles-software-security-mobile-meetings'

export const articles: Article[] = [
  ...networkEmailAccountArticles,
  ...printersFilesHardwareArticles,
  ...softwareSecurityMobileMeetingArticles,
]

export const articleBySlug = Object.fromEntries(
  articles.map((article) => [article.slug, article]),
) as Record<string, Article>

export function articlesInCategory(category: CategoryId): Article[] {
  return articles.filter((article) => article.category === category)
}

export const popularSlugs = [
  'connect-to-vpn',
  'reset-my-password',
  'printer-not-working',
  'recover-deleted-files',
  'report-phishing-email',
  'external-monitor-not-detected',
  'onedrive-not-syncing',
  'camera-or-mic-not-working-in-meetings',
  'account-locked-out',
  'keyboard-not-working',
] as const

export const popularArticles = popularSlugs
  .map((slug) => articleBySlug[slug])
  .filter(Boolean)
