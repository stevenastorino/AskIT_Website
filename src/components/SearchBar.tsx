import { useEffect, useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { IconSearch } from './Icons'

type SearchBarProps = {
  size?: 'hero' | 'header' | 'page'
  initialQuery?: string
  autoFocus?: boolean
}

export function SearchBar({ size = 'page', initialQuery = '', autoFocus = false }: SearchBarProps) {
  const [query, setQuery] = useState(initialQuery)
  const navigate = useNavigate()

  useEffect(() => {
    setQuery(initialQuery)
  }, [initialQuery])

  function onSubmit(event: FormEvent) {
    event.preventDefault()
    const next = query.trim()
    if (!next) return
    navigate(`/search?q=${encodeURIComponent(next)}`)
  }

  return (
    <form className={`search search-${size}`} onSubmit={onSubmit} role="search">
      <IconSearch className="search-icon" />
      <label className="sr-only" htmlFor={`search-${size}`}>
        Search IT help articles
      </label>
      <input
        id={`search-${size}`}
        type="search"
        value={query}
        autoFocus={autoFocus}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={
          size === 'hero'
            ? 'Search 100 guides — VPN, printer, password, files…'
            : 'Search guides'
        }
      />
      <button type="submit">Search</button>
    </form>
  )
}
