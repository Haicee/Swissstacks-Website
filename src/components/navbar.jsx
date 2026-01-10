import { useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import './navbar.css'

// Central list keeps everything easy to tweak; anchors point back to the home page.
const NAV_LINKS = [
  { label: 'Home', scrollTarget: '#hero' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', href: '/#services' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Contact', href: '/#contact' }
]

function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen((prev) => !prev)
  const closeMenu = () => setIsOpen(false)

  const scrollToHash = (hash) => {
    const target = document.querySelector(hash)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleHomeClick = (event, hash = '#hero') => {
    event.preventDefault()
    closeMenu()

    const performScroll = () => {
      // Wait a frame so the DOM is ready before scrolling.
      requestAnimationFrame(() => scrollToHash(hash))
    }

    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(performScroll, 100)
    } else {
      performScroll()
    }
  }

  return (
    <header className="site-header">
      <nav className="nav-bar">
        <Link to="/" className="brand" onClick={(event) => handleHomeClick(event, '#hero')}>
          <span className="brand-mark" aria-hidden="true">
            SS
          </span>
          <span className="brand-name">SwissStack</span>
        </Link>

        {/* Desktop navigation + CTA */}
        <div className={`nav-links ${isOpen ? 'nav-links--open' : ''}`}>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                {link.scrollTarget ? (
                  <a
                    href={`/${link.scrollTarget}`}
                    className={
                      location.pathname === '/'
                        ? 'nav-link nav-link--active'
                        : 'nav-link'
                    }
                    onClick={(event) => handleHomeClick(event, link.scrollTarget)}
                  >
                    {link.label}
                  </a>
                ) : link.to ? (
                  <NavLink
                    to={link.to}
                    end={link.exact}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      isActive ? 'nav-link nav-link--active' : 'nav-link'
                    }
                  >
                    {link.label}
                  </NavLink>
                ) : (
                  <a href={link.href} className="nav-link" onClick={closeMenu}>
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <a className="cta-link" href="/#portal" onClick={closeMenu}>
            Client Portal
          </a>
        </div>

        {/* Hamburger button for tablets/phones */}
        <button
          type="button"
          className={`nav-toggle ${isOpen ? 'nav-toggle--active' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Overlay fades the page when the drawer is open */}
      <div
        className={`nav-overlay ${isOpen ? 'nav-overlay--visible' : ''}`}
        onClick={closeMenu}
      />
    </header>
  )
}

export default Navbar
