import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './footer.css'
import './privacyModal.css'
import { useTranslation } from './translation'
import footerLogo from '../assets/Logo 2.png'

const SERVICE_LINKS = [
  { key: 'residential', path: '/services', hash: '#services' },
  { key: 'datacenter', path: '/services', hash: '#services' },
  { key: 'managed', path: '/services', hash: '#services' },
  { key: 'web', path: '/services', hash: '#services' },
]

const COMPANY_LINKS = [
  { key: 'about', path: '/about', hash: '#about' },
  { key: 'contact', path: '/contact', hash: '#contact' },
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
    privacyModal: {
      title: 'Privacy Policy',
      intro: 'We collect only what we need to operate SwissStack securely, and we never sell your information. Here is the short version of how we handle your data.',
      lastUpdated: 'Updated · January 2026',
      sections: [
        {
          heading: 'What We Collect',
          body: 'Account details that you provide (name, email, company), usage analytics to keep our infrastructure healthy, and diagnostic logs strictly for troubleshooting.',
        },
        {
          heading: 'How We Use It',
          body: 'To authenticate you, deliver contracted services, improve platform reliability, and contact you about critical product updates—not for ads.',
        },
        {
          heading: 'Your Controls',
          body: 'You can request exports or deletion at any time by emailing privacy@swissstack.com. We respond within 7 business days and honor all GDPR/CCPA rights.',
        },
      ],
    },
    termsModal: {
      title: 'Terms of Service',
      intro: 'These terms outline the rules for using SwissStack. By accessing the platform you agree to the obligations below.',
      lastUpdated: 'Effective · January 2026',
      sections: [
        {
          heading: 'Use of Platform',
          body: 'SwissStack is for business purposes. Reverse engineering or reselling services without consent is prohibited.',
        },
        {
          heading: 'Accounts & Security',
          body: 'You are responsible for safeguarding credentials and notifying us of any unauthorized access. We may suspend accounts that violate policy.',
        },
        {
          heading: 'Liability',
          body: 'SwissStack provides services “as is.” We limit liability to the fees paid in the last 12 months and disclaim indirect or consequential damages.',
        },
      ],
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
      managed: 'Managed IT',
      web: 'Webentwicklung',
      about: 'Über uns',
      contact: 'Kontakt',
    },
    legal: {
      privacy: 'Datenschutzrichtlinie',
      terms: 'Nutzungsbedingungen',
    },
    privacyModal: {
      title: 'Datenschutzrichtlinie',
      intro:
        'Wir erfassen nur die Daten, die für den sicheren Betrieb von SwissStack nötig sind, und verkaufen Ihre Informationen niemals. Hier ist die Kurzfassung.',
      lastUpdated: 'Aktualisiert · Januar 2026',
      sections: [
        {
          heading: 'Welche Daten wir sammeln',
          body: 'Kontodaten, die Sie bereitstellen (Name, E-Mail, Unternehmen), Nutzungsanalysen zur Stabilität der Infrastruktur und Protokolle ausschließlich zur Fehlerbehebung.',
        },
        {
          heading: 'Wie wir sie nutzen',
          body: 'Zur Authentifizierung, Bereitstellung der vereinbarten Services, Verbesserung der Zuverlässigkeit und Kommunikation wichtiger Produktupdates – niemals für Werbung.',
        },
        {
          heading: 'Ihre Rechte',
          body: 'Sie können jederzeit einen Export oder die Löschung anfordern: privacy@swissstack.com. Wir antworten innerhalb von 7 Werktagen und erfüllen alle GDPR/CCPA-Rechte.',
        },
      ],
    },
    termsModal: {
      title: 'Nutzungsbedingungen',
      intro: 'Diese Bedingungen regeln die Nutzung von SwissStack. Durch den Zugriff auf die Plattform stimmen Sie den folgenden Verpflichtungen zu.',
      lastUpdated: 'Gültig · Januar 2026',
      sections: [
        {
          heading: 'Nutzung der Plattform',
          body: 'SwissStack ist für geschäftliche Zwecke bestimmt. Reverse Engineering oder Wiederverkauf ohne Zustimmung ist untersagt.',
        },
        {
          heading: 'Konten & Sicherheit',
          body: 'Sie sind für die Sicherheit Ihrer Zugangsdaten verantwortlich und informieren uns bei unbefugtem Zugriff. Wir können Konten bei Verstößen sperren.',
        },
        {
          heading: 'Haftung',
          body: 'SwissStack stellt Dienste „wie besehen“ bereit. Unsere Haftung ist auf die Gebühren der letzten 12 Monate begrenzt; indirekte Schäden werden ausgeschlossen.',
        },
      ],
    },
  },
}

function Footer() {
  const location = useLocation()
  const navigate = useNavigate()
  const { language } = useTranslation()
  const copy = FOOTER_TRANSLATIONS[language]
  const [showPrivacy, setShowPrivacy] = useState(false)
  const [showTerms, setShowTerms] = useState(false)

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

  const handleFooterLinkNavigation = (event, path, hash) => {
    event.preventDefault()

    const scrollToHash = () => {
      if (hash) {
        const target = document.querySelector(hash)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }

    if (location.pathname !== path) {
      navigate(path)
      setTimeout(scrollToHash, 150)
    } else {
      scrollToHash()
    }
  }

  const openPrivacy = (event) => {
    event.preventDefault()
    setShowPrivacy(true)
  }

  const closePrivacy = () => {
    setShowPrivacy(false)
  }

  const openTerms = (event) => {
    event.preventDefault()
    setShowTerms(true)
  }

  const closeTerms = () => {
    setShowTerms(false)
  }

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link to="/" className="footer-logo" onClick={handleNavigateHome}>
            <img className="footer-logo-mark" src={footerLogo} alt="SwissStack logo" />
            <span className="footer-logo-name">SwissStack</span>
          </Link>
          <p className="brand-body">{copy.brandBody}</p>
        </div>

        <div className="footer-column">
          <p className="footer-heading">{copy.servicesHeading}</p>
          <ul>
            {SERVICE_LINKS.map((link) => (
              <li key={link.key}>
                <a
                  href={`${link.path}${link.hash ?? ''}`}
                  onClick={(event) => handleFooterLinkNavigation(event, link.path, link.hash)}
                >
                  {copy.footerLinks[link.key]}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <p className="footer-heading">{copy.companyHeading}</p>
          <ul>
            {COMPANY_LINKS.map((link) => (
              <li key={link.key}>
                <a
                  href={`${link.path}${link.hash ?? ''}`}
                  onClick={(event) => handleFooterLinkNavigation(event, link.path, link.hash)}
                >
                  {copy.footerLinks[link.key]}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <p className="footer-heading">{copy.subscribeHeading}</p>
          <p className="footer-subtext">{copy.subscribeCopy}</p>
          
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} SwissStack Inc. All rights reserved.</p>
        <div className="footer-bottom-links">
          <button type="button" className="legal-trigger" onClick={openPrivacy}>
            {copy.legal.privacy}
          </button>
          <button type="button" className="legal-trigger" onClick={openTerms}>
            {copy.legal.terms}
          </button>
        </div>
      </div>

      {showPrivacy && (
        <div className="legal-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="privacy-modal-title" onClick={closePrivacy}>
          <div className="legal-modal" onClick={(event) => event.stopPropagation()}>
            <header className="legal-modal__header">
              <p className="legal-modal__eyebrow">{copy.privacyModal.lastUpdated}</p>
              <h3 id="privacy-modal-title">{copy.privacyModal.title}</h3>
              <p className="legal-modal__intro">{copy.privacyModal.intro}</p>
              <button type="button" className="legal-modal__close" onClick={closePrivacy} aria-label="Close privacy policy">
                ×
              </button>
            </header>
            <div className="legal-modal__body">
              {copy.privacyModal.sections.map((section) => (
                <section key={section.heading}>
                  <h4>{section.heading}</h4>
                  <p>{section.body}</p>
                </section>
              ))}
            </div>
          </div>
        </div>
      )}

      {showTerms && (
        <div className="legal-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="terms-modal-title" onClick={closeTerms}>
          <div className="legal-modal" onClick={(event) => event.stopPropagation()}>
            <header className="legal-modal__header">
              <p className="legal-modal__eyebrow">{copy.termsModal.lastUpdated}</p>
              <h3 id="terms-modal-title">{copy.termsModal.title}</h3>
              <p className="legal-modal__intro">{copy.termsModal.intro}</p>
              <button type="button" className="legal-modal__close" onClick={closeTerms} aria-label="Close terms of service">
                ×
              </button>
            </header>
            <div className="legal-modal__body">
              {copy.termsModal.sections.map((section) => (
                <section key={section.heading}>
                  <h4>{section.heading}</h4>
                  <p>{section.body}</p>
                </section>
              ))}
            </div>
          </div>
        </div>
      )}
    </footer>
  )
}

export default Footer
