import { useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import './navbar.css'
import { useTranslation } from './translation'
import brandLogo from '../assets/Logo 2.png'

// Base nav structure so we can swap strings while keeping routing consistent.
const NAV_LINKS = [
  { key: 'home', navigateTo: { pathname: '/', hash: '#hero' } },
  { key: 'about', navigateTo: { pathname: '/about', hash: '#about' } },
  { key: 'services', navigateTo: { pathname: '/services', hash: '#services' } },
  { key: 'portfolio', navigateTo: { pathname: '/portfolio', hash: '#portfolio' } },
]

const NAV_TRANSLATIONS = {
  en: {
    brand: 'SwissStack',
    links: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      portfolio: 'Portfolio',
    },
    cta: 'Contact Here',
    menuToggle: 'Toggle navigation menu',
  },
  de: {
    brand: 'SwissStack',
    links: {
      home: 'Startseite',
      about: 'Über uns',
      services: 'Leistungen',
      portfolio: 'Portfolio',
    },
    cta: 'Kontakt',
    menuToggle: 'Navigation öffnen oder schließen',
  },
}

function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const { language } = useTranslation()
  const copy = NAV_TRANSLATIONS[language]

  const toggleMenu = () => setIsOpen((prev) => !prev)
  const closeMenu = () => setIsOpen(false)

  const scrollToHash = (hash) => {
    const target = document.querySelector(hash)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleNavigate = (event, pathname, hash) => {
    event.preventDefault()
    closeMenu()

    const performScroll = () => {
      if (hash) {
        requestAnimationFrame(() => scrollToHash(hash))
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }

    if (location.pathname !== pathname) {
      navigate(pathname)
      setTimeout(performScroll, 120)
    } else {
      performScroll()
    }
  }

  return (
    <header className="site-header">
      <nav className="nav-bar">
        <Link to="/" className="brand" onClick={(event) => handleNavigate(event, '/', '#hero')}>
          <img className="brand-logo" src={brandLogo} alt={`${copy.brand} logo`} />
          <span className="brand-name">{copy.brand}</span>
        </Link>

        {/* Desktop navigation + CTA */}
        <div className={`nav-links ${isOpen ? 'nav-links--open' : ''}`}>
          <div className="nav-links__panel">
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.key}>
                  {link.navigateTo ? (
                    <a
                      href={`${link.navigateTo.pathname}${link.navigateTo.hash ?? ''}`}
                      className={
                        location.pathname === link.navigateTo.pathname
                          ? 'nav-link nav-link--active'
                          : 'nav-link'
                      }
                      onClick={(event) =>
                        handleNavigate(event, link.navigateTo.pathname, link.navigateTo.hash)
                      }
                    >
                      {copy.links[link.key]}
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
                      {copy.links[link.key]}
                    </NavLink>
                  ) : (
                    <a href={link.href} className="nav-link" onClick={closeMenu}>
                      {copy.links[link.key]}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <a className="cta-link" href="/contact" onClick={(event) => handleNavigate(event, '/contact', '#contact')}>
              {copy.cta}
            </a>
          </div>
        </div>

        {/* Hamburger button for tablets/phones */}
        <button
          type="button"
          className={`nav-toggle ${isOpen ? 'nav-toggle--active' : ''}`}
          aria-label={copy.menuToggle}
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
