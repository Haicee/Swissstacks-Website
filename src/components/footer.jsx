import { Link, useLocation, useNavigate } from 'react-router-dom'
import './footer.css'
import { useTranslation } from './translation'

const SERVICE_LINKS = [
  { key: 'residential', href: '#residential-proxies' },
  { key: 'datacenter', href: '#datacenter-proxies' },
  { key: 'managed', href: '#managed-it' },
  { key: 'web', href: '#web-development' },
]

const COMPANY_LINKS = [
  { key: 'about', href: '#about' },
  { key: 'contact', href: '#contact' },
]

const FOOTER_TRANSLATIONS = {
  en: {
    brandBody: 'Empowering businesses with resilient infrastructure and cutting-edge design since 2026.',
    servicesHeading: 'Services',
    companyHeading: 'Company',
    subscribeHeading: 'Subscribe',
    subscribeCopy: 'Latest tech news and updates',
    emailPlaceholder: 'Email address',
    submitAria: 'Submit email',
    footerLinks: {
      residential: 'Residential Proxies',
      datacenter: 'Datacenter Proxies',
      managed: 'Managed IT',
      web: 'Web Development',
      about: 'About Us',
      contact: 'Contact',
    },
    legal: {
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
  },
  de: {
    brandBody: 'Wir stärken Unternehmen mit robuster Infrastruktur und modernem Design seit 2026.',
    servicesHeading: 'Leistungen',
    companyHeading: 'Unternehmen',
    subscribeHeading: 'Abonnieren',
    subscribeCopy: 'Neueste Tech-News und Updates',
    emailPlaceholder: 'E-Mail-Adresse',
    submitAria: 'E-Mail senden',
    footerLinks: {
      residential: 'Residential Proxies',
      datacenter: 'Datacenter Proxies',
      managed: 'Verwaltete IT',
      web: 'Webentwicklung',
      about: 'Über uns',
      contact: 'Kontakt',
    },
    legal: {
      privacy: 'Datenschutz',
      terms: 'Nutzungsbedingungen',
    },
  },
}

function Footer() {
  const location = useLocation()
  const navigate = useNavigate()
  const { language } = useTranslation()
  const copy = FOOTER_TRANSLATIONS[language]

  const handleNavigateHome = (event) => {
    event.preventDefault()

    const performScroll = () => {
      requestAnimationFrame(() => {
        const target = document.querySelector('#hero')
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
        window.scrollTo({ top: 0, behavior: 'smooth' })
      })
    }

    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(performScroll, 120)
    } else {
      performScroll()
    }
  }

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link to="/" className="footer-logo" onClick={handleNavigateHome}>
            <span className="footer-logo-mark" aria-hidden="true">
              SS
            </span>
            <span className="footer-logo-name">SwissStack</span>
          </Link>
          <p className="brand-body">{copy.brandBody}</p>
        </div>

        <div className="footer-column">
          <p className="footer-heading">{copy.servicesHeading}</p>
          <ul>
            {SERVICE_LINKS.map((link) => (
              <li key={link.key}>
                <a href={link.href}>{copy.footerLinks[link.key]}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <p className="footer-heading">{copy.companyHeading}</p>
          <ul>
            {COMPANY_LINKS.map((link) => (
              <li key={link.key}>
                <a href={link.href}>{copy.footerLinks[link.key]}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <p className="footer-heading">{copy.subscribeHeading}</p>
          <p className="footer-subtext">{copy.subscribeCopy}</p>
          <form className="footer-form" onSubmit={(event) => event.preventDefault()}>
            <input type="email" placeholder={copy.emailPlaceholder} aria-label={copy.emailPlaceholder} />
            <button type="submit" aria-label={copy.submitAria}>
              ➔
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} SwissStack Inc. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#privacy">{copy.legal.privacy}</a>
          <a href="#terms">{copy.legal.terms}</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
