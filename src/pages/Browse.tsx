import { useMemo, useState } from 'react'
import { ArticleCard } from '../components/ArticleCard'
import { SearchBar } from '../components/SearchBar'
import { articles } from '../data/articles'
import { categories } from '../data/categories'
import { filterArticles } from '../lib/search'
import type { CategoryId, Difficulty } from '../types'

export function Browse() {
  const [category, setCategory] = useState<CategoryId | 'all'>('all')
  const [difficulty, setDifficulty] = useState<Difficulty | 'all'>('all')
  const [query, setQuery] = useState('')

  const visible = useMemo(
    () => filterArticles({ category, difficulty, query }),
    [category, difficulty, query],
  )

  return (
    <div className="page-browse">
      <header className="page-intro">
        <p className="kicker">{articles.length} field guides</p>
        <h1>Browse every IT question</h1>
        <p className="lede">
          Filter by topic or how involved the fix is. Each guide ends with when to stop and
          call the service desk.
        </p>
        <SearchBar size="page" />
      </header>

      <div className="filters">
        <label>
          Topic
          <select value={category} onChange={(event) => setCategory(event.target.value as CategoryId | 'all')}>
            <option value="all">All topics</option>
            {categories.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Effort
          <select
            value={difficulty}
            onChange={(event) => setDifficulty(event.target.value as Difficulty | 'all')}
          >
            <option value="all">Any effort</option>
            <option value="easy">Easy</option>
            <option value="moderate">Moderate</option>
            <option value="escalate">Call IT if needed</option>
          </select>
        </label>
        <label>
          Filter titles
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Type to narrow this list"
          />
        </label>
      </div>

      <p className="result-count">
        Showing {visible.length} of {articles.length}
      </p>
      <div className="stack-list">
        {visible.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  )
}
