import { Link, Navigate, useParams } from 'react-router-dom'
import { CategoryIcon } from '../components/Icons'
import { TopicCard } from '../components/TopicCard'
import { articlesInCategory } from '../data/articles'
import { categoryById } from '../data/categories'
import { topicsInCategory } from '../data/topics'
import { usePageTitle } from '../lib/pageTitle'
import type { CategoryId } from '../types'

export function CategoryPage() {
  const { id } = useParams()
  const category = id && id in categoryById ? categoryById[id as CategoryId] : undefined
  usePageTitle(category ? `${category.name} · IT-Questions.com` : 'IT-Questions.com', category?.blurb)

  if (!category) {
    return <Navigate to="/browse" replace />
  }

  const topicPages = topicsInCategory(category.id)
  const items = articlesInCategory(category.id)

  return (
    <div className="page-category">
      <nav className="crumbs">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/browse">Guides</Link>
        <span>/</span>
        <span>{category.name}</span>
      </nav>
      <header className="page-intro">
        <span className="page-icon">
          <CategoryIcon id={category.id} />
        </span>
        <p className="kicker">
          {topicPages.length} pages · {items.length} guides
        </p>
        <h1>{category.name}</h1>
        <p className="lede">{category.blurb}</p>
      </header>
      <div className="topic-grid">
        {topicPages.map((topic) => (
          <TopicCard key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  )
}
