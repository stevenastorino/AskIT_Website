import { Link } from 'react-router-dom'
import { SearchBar } from '../components/SearchBar'

export function NotFound() {
  return (
    <div className="page-missing">
      <p className="kicker">404</p>
      <h1>That page is not in the handbook</h1>
      <p className="lede">The guide may have moved. Search or go back to the full list.</p>
      <SearchBar size="page" />
      <p>
        <Link to="/browse">Browse all guides</Link>
        {' · '}
        <Link to="/">Home</Link>
      </p>
    </div>
  )
}
