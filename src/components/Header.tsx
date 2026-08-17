import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SearchBar } from './SearchBar'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="wordmark" onClick={() => setOpen(false)}>
          <span className="wordmark-mark" aria-hidden="true">
            ?
          </span>
          <span>
            IT-Questions.com
          </span>
        </Link>

        <div className="header-search">
          <SearchBar size="header" />
        </div>

        <nav className={`header-nav ${open ? 'is-open' : ''}`} aria-label="Primary">
          <NavLink to="/browse" onClick={() => setOpen(false)}>
            All guides
          </NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>
            Contact IT
          </NavLink>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-label="Open menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
