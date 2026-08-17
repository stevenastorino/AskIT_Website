import { Link } from 'react-router-dom'
import { categories } from '../data/categories'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <p className="footer-brand">
            Ask<em>IT</em>
          </p>
          <p className="footer-blurb">
            Self-service answers for the problems employees ask the service desk every day.
            Try a guide first. Open a ticket when you are still stuck.
          </p>
        </div>
        <div>
          <h2>Topics</h2>
          <ul>
            {categories.slice(0, 5).map((category) => (
              <li key={category.id}>
                <Link to={`/category/${category.id}`}>{category.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>More</h2>
          <ul>
            {categories.slice(5).map((category) => (
              <li key={category.id}>
                <Link to={`/category/${category.id}`}>{category.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Need a person</h2>
          <ul>
            <li>
              <Link to="/contact">Contact IT</Link>
            </li>
            <li>
              <Link to="/browse">Browse all 100 guides</Link>
            </li>
            <li>
              <a href="tel:+15550100">Service desk · ext. 4357</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="footer-note">
        Internal knowledge base · Replace placeholder contacts with your service-desk details
      </p>
    </footer>
  )
}
