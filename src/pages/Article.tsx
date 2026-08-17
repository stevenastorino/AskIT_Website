import { useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { DifficultyBadge } from '../components/ArticleCard'
import { articleBySlug, articles } from '../data/articles'
import { categoryById } from '../data/categories'
import { usePageTitle } from '../lib/pageTitle'

export function ArticlePage() {
  const { slug } = useParams()
  const article = slug ? articleBySlug[slug] : undefined
  const [feedback, setFeedback] = useState<'yes' | 'no' | null>(null)
  usePageTitle(
    article ? `${article.title} · AskIT` : 'AskIT',
    article?.summary,
  )

  const related = useMemo(() => {
    if (!article) return []
    return articles
      .filter((item) => item.category === article.category && item.slug !== article.slug)
      .slice(0, 4)
  }, [article])

  if (!article) {
    return <Navigate to="/browse" replace />
  }

  const category = categoryById[article.category]

  return (
    <article className="page-article">
      <nav className="crumbs">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to={`/category/${category.id}`}>{category.name}</Link>
        <span>/</span>
        <span>{article.title}</span>
      </nav>

      <header className="article-hero">
        <p className="kicker">{category.name}</p>
        <h1>{article.title}</h1>
        <p className="lede">{article.summary}</p>
        <div className="article-meta">
          <DifficultyBadge value={article.difficulty} />
          <span>About {article.minutes} minutes</span>
          <span>{article.steps.length} steps</span>
        </div>
      </header>

      <div className="article-layout">
        <div>
          <section className="symptoms">
            <h2>You might notice</h2>
            <ul>
              {article.symptoms.map((symptom) => (
                <li key={symptom}>{symptom}</li>
              ))}
            </ul>
          </section>

          <ol className="steps">
            {article.steps.map((step, index) => (
              <li key={step.title}>
                <span className="step-num">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>

          {article.tip && (
            <aside className="callout callout-tip">
              <p className="callout-label">Tip</p>
              <p>{article.tip}</p>
            </aside>
          )}

          <aside className="callout callout-escalate">
            <p className="callout-label">When to contact IT</p>
            <p>{article.escalate}</p>
            <Link to="/contact" className="text-link">
              Open the contact page
            </Link>
          </aside>

          <section className="feedback">
            <h2>Did this get you unstuck?</h2>
            {feedback ? (
              <p className="feedback-thanks">
                {feedback === 'yes'
                  ? 'Good. Bookmark this page if it is a problem you hit more than once.'
                  : 'Fair enough. Take the error text and what you already tried to the contact page.'}
              </p>
            ) : (
              <div className="feedback-actions">
                <button type="button" onClick={() => setFeedback('yes')}>
                  Yes
                </button>
                <button type="button" onClick={() => setFeedback('no')}>
                  Not yet
                </button>
              </div>
            )}
          </section>
        </div>

        <aside className="article-aside">
          <h2>Related in {category.name}</h2>
          <ul>
            {related.map((item) => (
              <li key={item.slug}>
                <Link to={`/guide/${item.slug}`}>{item.title}</Link>
              </li>
            ))}
          </ul>
          <div className="aside-tags">
            {article.tags.map((tag) => (
              <Link key={tag} to={`/search?q=${encodeURIComponent(tag)}`} rel="nofollow">
                {tag}
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </article>
  )
}
