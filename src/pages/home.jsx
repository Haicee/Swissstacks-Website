import { useEffect } from 'react'
import './home.css'
import 'animate.css'
import { useTranslation } from '../components/translation'
import { useNavigate } from 'react-router-dom'

const HERO_STATS = [
  { key: 'uptime', value: '99.9%' },
  { key: 'support', value: '24/7' },
  { key: 'clients', value: '50+' },
]

const CORE_SERVICES = [
  {
    key: 'proxies',
    icon: <img src="src/assets/proxy.png" alt="proxy" />,
    ctaHref: '#proxies',
  },
  {
    key: 'it',
    icon: <img src="src/assets/It.png" alt="managed it" />,
    ctaHref: '#managed-it',
  },
  {
    key: 'web',
    icon: <img src="src/assets/web.png" alt="web" />,
    ctaHref: '#web-design',
  },
]

const SECURITY_FEATURES = ['ddos', 'cdn', 'support']
const SERVICE_ANIMATE_DELAYS = ['0s', '0.15s', '0.3s']
const SECURITY_ANIMATE_DELAYS = ['0s', '0.2s', '0.4s']

const HOME_COPY = {
  en: {
    hero: {
      pill: 'Enterprise-Grade Solutions',
      heading: 'Reliable Infrastructure.',
      highlight: ' Stunning Design.',
      subtext:
        'Comprehensive tech solutions including high-speed proxies, managed IT, and custom web development designed for modern businesses.',
      primaryCta: 'Get Started',
      secondaryCta: 'Learn More',
    },
    stats: {
      uptime: 'Uptime Guarantee',
      support: 'Expert Support',
      clients: 'Successful Projects',
    },
    services: {
      eyebrow: 'Our Core Services',
      lede: 'Scalable solutions tailored to grow with your technological needs.',
      link: 'View All Services →',
      cards: {
        proxies: {
          title: 'Premium Proxies',
          description:
            'Secure, anonymous, and lightning-fast residential and datacenter IPs for web scraping and privacy.',
          cta: 'View Plans →',
        },
        it: {
          title: 'Managed IT',
          description:
            'End-to-end network management, cybersecurity auditing, and seamless cloud integration services.',
          cta: 'Explore IT →',
        },
        web: {
          title: 'Web Design',
          description:
            'Modern, responsive front-end development tailored to your brand identity with cutting-edge UI/UX.',
          cta: 'See Portfolio →',
        },
      },
    },
    security: {
      heading: 'Enterprise-Grade Security & Performance',
      lede:
        "We don't just build websites; we build fortified digital fortresses. Our infrastructure is designed for speed, resilience, and uncompromised security.",
      items: {
        ddos: {
          title: 'DDOS Protection',
          body: 'Advanced mitigation strategies to keep your servers online.',
        },
        cdn: {
          title: 'Global CDN',
          body: 'Content delivery network spanning 50+ countries for low latency.',
        },
        support: {
          title: 'Dedicated Support',
          body: 'Real engineers available 24/7 to solve critical issues.',
        },
      },
    },
    upgrade: {
      eyebrow: 'Ready to Upgrade Your Tech Stack?',
      subtext: 'Join hundreds of businesses that trust SwissStack for resilient infrastructure and premium support.',
      cta: 'Contact Sales',
    },
  },
  de: {
    hero: {
      pill: 'Enterprise-Lösungen',
      heading: 'Zuverlässige Infrastruktur.',
      highlight: 'Beeindruckendes Design.',
      subtext:
        'Umfassende Technologielösungen mit Highspeed-Proxies, Managed IT und maßgeschneiderter Webentwicklung für moderne Unternehmen.',
      primaryCta: 'Jetzt starten',
      secondaryCta: 'Mehr erfahren',
    },
    stats: {
      uptime: 'Verfügbarkeitsgarantie',
      support: 'Experten-Support',
      clients: 'Erfolgreiches Projekte',
    },
    services: {
      eyebrow: 'Unsere Kernleistungen',
      lede: 'Skalierbare Lösungen, die mit Ihren technologischen Anforderungen wachsen.',
      link: 'Alle Services anzeigen →',
      cards: {
        proxies: {
          title: 'Premium-Proxys',
          description:
            'Sichere, anonyme und blitzschnelle Residential- und Datacenter-IP-Adressen für Scraping und Datenschutz.',
          cta: 'Pläne ansehen →',
        },
        it: {
          title: 'Managed IT',
          description:
            'Ganzheitliches Netzwerkmanagement, Cybersecurity-Audits und nahtlose Cloud-Integration.',
          cta: 'IT entdecken →',
        },
        web: {
          title: 'Webdesign',
          description:
            'Moderne, responsive Frontends, die Ihre Markenidentität mit erstklassigem UI/UX verbinden.',
          cta: 'Portfolio ansehen →',
        },
      },
    },
    security: {
      heading: 'Sicherheit & Performance auf Enterprise-Niveau',
      lede:
        'Wir bauen nicht nur Websites, sondern digitale Festungen. Unsere Infrastruktur ist auf Geschwindigkeit, Resilienz und kompromisslose Sicherheit ausgelegt.',
      items: {
        ddos: {
          title: 'DDOS-Schutz',
          body: 'Erweiterte Abwehrstrategien halten Ihre Server online.',
        },
        cdn: {
          title: 'Globales CDN',
          body: 'Content-Delivery-Netzwerk in über 50 Ländern für geringe Latenzen.',
        },
        support: {
          title: 'Dedizierter Support',
          body: 'Echte Ingenieure stehen 24/7 zur Problemlösung bereit.',
        },
      },
    },
    upgrade: {
      eyebrow: 'Bereit für ein Upgrade?',
      subtext: 'Schließen Sie sich den Unternehmen an, die SwissStack für resiliente Infrastruktur und Premium-Support vertrauen.',
      cta: 'Vertrieb kontaktieren',
    },
  },
}

function Home() {
  const { language } = useTranslation()
  const copy = HOME_COPY[language]
  const navigate = useNavigate()

  const handleHeroNavigate = (event, path, hash) => {
    if (event) {
      event.preventDefault()
    }
    navigate(path)
    if (hash) {
      setTimeout(() => {
        const target = document.querySelector(hash)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 150)
    }
  }

  useEffect(() => {
    const scrollItems = document.querySelectorAll('.scroll-fade, .scroll-rise')
    if (!scrollItems.length) return

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          const target = entry.target
          if (!entry.isIntersecting || target.dataset.animated === 'true') return

          const animateIn = target.dataset.animateIn || 'animate__fadeIn'
          const animateOut = target.dataset.animateOut
          target.classList.add('animate__animated', 'is-visible', animateIn)
          if (animateOut) {
            target.classList.remove(animateOut)
          }

          target.dataset.animated = 'true'

          target.addEventListener(
            'animationend',
            () => {
              target.classList.remove(animateIn)
            },
            { once: true }
          )

          obs.unobserve(target)
        })
      },
      { threshold: 0.3 }
    )

    scrollItems.forEach((item) => observer.observe(item))

    return () => {
      scrollItems.forEach((item) => observer.unobserve(item))
      observer.disconnect()
    }
  }, [])

  return (
    <main className="home-page" id="home">
      <section className="home-hero" id="hero">
        <div className="home-hero__inner">
          <div className="hero-content scroll-fade" data-animate-in="animate__fadeIn" data-animate-out="animate__fadeOut">
            <p className="hero-pill">{copy.hero.pill}</p>

            <h1 className="hero-heading scroll-fade" data-animate-in="animate__fadeIn" style={{ animationDelay: '0.2s' }}>
              <span className="hero-heading__primary">{copy.hero.heading}</span>
              <span className="hero-heading__highlight">{copy.hero.highlight}</span>
            </h1>

            <p className="hero-subtext">{copy.hero.subtext}</p>

            <div className="hero-actions">
              <a
                className="btn btn-primary"
                href="/contact#contact"
                onClick={(event) => handleHeroNavigate(event, '/contact', '#contact')}
              >
                {copy.hero.primaryCta}
              </a>
              <a
                className="btn btn-secondary"
                href="/about#about"
                onClick={(event) => handleHeroNavigate(event, '/about', '#about')}
              >
                {copy.hero.secondaryCta}
              </a>
            </div>
          </div>

          <section
            className="hero-stats home-hero__stats scroll-fade"
            aria-label="Company performance stats"
            data-animate-in="animate__fadeIn"
            data-animate-out="animate__fadeOut"
          >
            {HERO_STATS.map((stat) => (
              <article key={stat.key} className="hero-stat">
                <p className="hero-stat__value">{stat.value}</p>
                <p className="hero-stat__label">{copy.stats[stat.key]}</p>
              </article>
            ))}
          </section>
        </div>
      </section>

      <section className="home-services" id="services">
        <div className="home-services__container">
          <header className="services-header scroll-fade" data-animate-in="animate__fadeIn" data-animate-out="animate__fadeOut">
            <div>
              <h2 className="eyebrow">{copy.services.eyebrow}</h2>
              <p className="services-lede">{copy.services.lede}</p>
            </div>
            <a
              className="services-link"
              href="/services#services"
              onClick={(event) => handleHeroNavigate(event, '/services', '#services')}
            >
              {copy.services.link}
            </a>
          </header>

          <div className="services-grid">
            {CORE_SERVICES.map((service, index) => {
              const cardCopy = copy.services.cards[service.key]
              return (
                <article
                  key={service.key}
                  className="service-card scroll-rise"
                  data-animate-in="animate__fadeInUp"
                  data-animate-out="animate__fadeOutDown"
                  style={{ animationDelay: SERVICE_ANIMATE_DELAYS[index] || '0s' }}
                >
                  <div className="service-icon" aria-hidden="true">
                    {service.icon}
                  </div>
                  <h3>{cardCopy.title}</h3>
                  <p>{cardCopy.description}</p>

                  {/* For CTA
                  <a href={service.ctaHref} className="service-cta">
                    {cardCopy.cta}
                  </a>
                  */}
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="home-security" id="security">
        <div className="home-security__inner">
          <div className="security-copy">
            <div className="security-copy-header scroll-fade" data-animate-in="animate__fadeIn" data-animate-out="animate__fadeOutDown">
              <h2 className="eyebrow">{copy.security.heading}</h2>
              <p className="security-lede">{copy.security.lede}</p>
            </div>

            <div className="enterpriselist">
              <ul className="security-list">
                {SECURITY_FEATURES.map((feature, index) => {
                  const item = copy.security.items[feature]
                  return (
                    <li
                      key={feature}
                      className={`scroll-rise${index === 1 ? ' sec1' : ''}`}
                      data-animate-in="animate__backInRight"
                      style={{ animationDelay: SECURITY_ANIMATE_DELAYS[index] || '0s' }}
                    >
                      <span className="security-icon" aria-hidden="true">
                        ✓
                      </span>
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="home-upgrade" aria-label="Upgrade CTA">
        <div
          className="home-upgrade__card scroll-fade"
          data-animate-in="animate__fadeInUp"
          data-animate-out="animate__fadeOutDown"
          style={{ animationDelay: '0.25s' }}
        >
          <p className="upgrade-eyebrow">{copy.upgrade.eyebrow}</p>
          <p className="upgrade-subtext">{copy.upgrade.subtext}</p>
          <div className="upgrade-actions">
            <a
              className="btn btn-primary"
              href="/contact#contact-pill"
              onClick={(event) => handleHeroNavigate(event, '/contact', '#contact')}
            >
              {copy.upgrade.cta}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
