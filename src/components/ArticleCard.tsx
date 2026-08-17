import { Link } from 'react-router-dom'
import { categoryById } from '../data/categories'
import { articleHref } from '../data/topics'
import type { Article } from '../types'
import { CategoryIcon } from './Icons'

const difficultyLabel = {
  easy: 'Easy',
  moderate: 'Moderate',
  escalate: 'Call IT if needed',
}

export function ArticleCard({ article, index }: { article: Article; index?: number }) {
  const category = categoryById[article.category]

  return (
    <Link to={articleHref(article.slug)} className="article-card">
      {index !== undefined && <span className="article-index">{String(index + 1).padStart(2, '0')}</span>}
      <span className="article-card-icon">
        <CategoryIcon id={article.category} />
      </span>
      <div>
        <p className="eyebrow">
          {category.name} · {article.minutes} min · {difficultyLabel[article.difficulty]}
        </p>
        <h3>{article.title}</h3>
        <p>{article.summary}</p>
      </div>
    </Link>
  )
}

export function DifficultyBadge({ value }: { value: Article['difficulty'] }) {
  return <span className={`badge badge-${value}`}>{difficultyLabel[value]}</span>
}
