import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ArticleCard } from '../components/ArticleCard'
import { SearchBar } from '../components/SearchBar'
import { usePageTitle } from '../lib/pageTitle'
import { searchArticles } from '../lib/search'

export function SearchPage() {
  const [params] = useSearchParams()
  const query = params.get('q') ?? ''
  usePageTitle(
    query.trim() ? `Results for “${query.trim()}” · AskIT` : 'Search · AskIT',
    'Search the AskIT employee IT handbook.',
  )
  const results = useMemo(() => (query.trim() ? searchArticles(query) : []), [query])

  return (
    <div className="page-search">
      <header className="page-intro">
        <p className="kicker">Search</p>
        <h1>{query.trim() ? `Results for “${query.trim()}”` : 'Search the guides'}</h1>
        <SearchBar size="page" initialQuery={query} autoFocus={!query} />
      </header>

      {query.trim() && (
        <p className="result-count">
          {results.length === 0
            ? 'No guides matched. Try a shorter word, like printer, VPN, or password.'
            : `${results.length} guide${results.length === 1 ? '' : 's'} found`}
        </p>
      )}

      <div className="stack-list">
        {results.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>

      {query.trim() && results.length === 0 && (
        <p className="empty-help">
          Still stuck? <Link to="/contact">Contact IT</Link> or{' '}
          <Link to="/browse">browse every guide</Link>.
        </p>
      )}
    </div>
  )
}
