import { useState } from 'react'
import './navbar.css'

// Central list of links so the nav stays easy to update.
const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' }
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen((prev) => !prev)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="site-header">
      <nav className="nav-bar">
        {/* Brand mirrors the badge in the Figma design */}
        <a href="#hero" className="brand">
          <span className="brand-mark" aria-hidden="true">
            SS
          </span>
          <span className="brand-name">SwissStack</span>
        </a>

        {/* Desktop navigation + CTA */}
        <div className={`nav-links ${isOpen ? 'nav-links--open' : ''}`}>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="cta-link" href="#portal" onClick={closeMenu}>
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
