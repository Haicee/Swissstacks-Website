import './services.css'
import 'animate.css'
import { useEffect } from 'react'
import { useTranslation } from '../components/translation'
import proxiesIcon from '../assets/latency.png'
import webIcon from '../assets/web.png'
import itIcon from '../assets/It.png'
import securityIcon from '../assets/secure.png'
import innovationIcon from '../assets/scalable.png'
import partnersIcon from '../assets/247.png'

const SERVICES_COPY = {
  en: {
    hero: {
      pill: 'Our Solutions',
      heading: 'Comprehensive',
      highlight: 'Digital Services.',
      lede:
        'From high-speed proxy networks to bespoke web development and managed IT, we build the foundation for your digital success.',
    },
    pillars: {
      eyebrow: 'Service Pillars',
      heading: 'Engineering-grade delivery across every layer.',
      body:
        'Select the pod that fits your roadmap. Each engagement includes hardened infrastructure, measurable SLAs, and direct access to specialists.',
    },
    cards: [
      {
        key: 'proxy',
        title: 'Proxy Infrastructure',
        body:
          'Access a global network of high-speed residential and datacenter proxies. Engineered for anonymity, speed, and 99.9% uptime reliability.',
        list: ['10M+ Residential IPs', 'Instant Rotation', 'Global Targeting'],
        link: 'Explore Proxies →',
      },
      {
        key: 'it',
        title: 'Managed IT Services',
        body:
          'End-to-end IT management for your enterprise. We handle security, maintenance, and helpdesk so you can focus on growth.',
        list: ['24/7 Monitoring', 'Cybersecurity Audits', 'Cloud Migration'],
        link: 'View IT Solutions →',
      },
      {
        key: 'web',
        title: 'Web Design & Dev',
        body:
          'Crafting stunning, responsive websites that convert. Our design team blends aesthetics with functionality for premium experiences.',
        list: ['UI/UX Design', 'Full-Stack Development', 'SEO Optimization'],
        link: 'See Portfolio →',
      },
    ],
    standard: {
      heading: 'The SwissStack Standard',
      body: 'Why leading companies trust our infrastructure and expertise.',
      features: [
        { title: 'Lightning Fast', body: 'Optimized low-latency network for real-time applications and rapid data collection.' },
        {
          title: 'Secure by Design',
          body: 'Enterprise-grade encryption, privacy-first protocols, and hardened infrastructure.',
        },
        { title: '24/7 Support', body: 'Dedicated technical teams ready for incident response, tuning, and proactive guidance.' },
        { title: 'Fully Scalable', body: 'Infrastructure that flexes with your workloads and growth targets without downtime.' },
      ],
    },
    cta: {
      heading: 'Ready to upgrade your infrastructure?',
      body: 'Contact our sales team today to get a custom quote tailored to your specific requirements.',
      button: 'Get Started',
    },
  },
  de: {
    hero: {
      pill: 'Unsere Lösungen',
      heading: 'Umfassende',
      highlight: 'digitale Services.',
      lede:
        'Von Highspeed-Proxy-Netzwerken über maßgeschneiderte Webentwicklung bis hin zu Managed IT – wir schaffen das Fundament für Ihren digitalen Erfolg.',
    },
    pillars: {
      eyebrow: 'Service-Säulen',
      heading: 'Engineering-Qualität in jeder Schicht.',
      body:
        'Wählen Sie das Modul, das zu Ihrem Fahrplan passt. Jedes Projekt bietet gehärtete Infrastruktur, messbare SLAs und direkten Zugriff auf Spezialisten.',
    },
    cards: [
      {
        key: 'proxy',
        title: 'Proxy-Infrastruktur',
        body:
          'Greifen Sie auf ein globales Netzwerk schneller Residential- und Datacenter-Proxies zu – optimiert für Anonymität, Geschwindigkeit und 99,9 % Verfügbarkeit.',
        list: ['10+ Mio. Residential IPs', 'Sofortige Rotation', 'Globale Zielwahl'],
        link: 'Proxies entdecken →',
      },
      {
        key: 'it',
        title: 'Managed-IT-Services',
        body:
          'Ganzheitliches IT-Management für Ihr Unternehmen. Wir übernehmen Sicherheit, Wartung und Helpdesk, damit Sie wachsen können.',
        list: ['24/7 Monitoring', 'Cybersecurity-Audits', 'Cloud-Migration'],
        link: 'IT-Lösungen ansehen →',
      },
      {
        key: 'web',
        title: 'Webdesign & Entwicklung',
        body:
          'Wir gestalten beeindruckende, responsive Websites, die konvertieren – mit perfekter Balance aus Ästhetik und Funktion.',
        list: ['UI/UX-Design', 'Full-Stack-Entwicklung', 'SEO-Optimierung'],
        link: 'Portfolio ansehen →',
      },
    ],
    standard: {
      heading: 'Der SwissStack-Standard',
      body: 'Warum führende Unternehmen unserer Infrastruktur und Expertise vertrauen.',
      features: [
        { title: 'Blitzschnell', body: 'Optimiertes Low-Latency-Netzwerk für Echtzeit-Anwendungen und Datenerfassung.' },
        {
          title: 'Sicher durch Design',
          body: 'Unternehmensweite Verschlüsselung, Privacy-first-Protokolle und gehärtete Systeme.',
        },
        { title: '24/7-Support', body: 'Dedizierte Technikteams für Incident Response, Tuning und proaktive Beratung.' },
        { title: 'Voll skalierbar', body: 'Infrastruktur, die mit Ihren Workloads und Wachstumszielen ohne Downtime mitwächst.' },
      ],
    },
    cta: {
      heading: 'Bereit für ein Infrastruktur-Upgrade?',
      body: 'Kontaktieren Sie unser Sales-Team für ein maßgeschneidertes Angebot.',
      button: 'Jetzt starten',
    },
  },
}

const CORE_CARD_DELAY_STEP = 0.15
const STANDARD_CARD_DELAY_STEP = 0.1

function Services() {
  const { language } = useTranslation()
  const copy = SERVICES_COPY[language]

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
    <main className="services-page">
      <section className="services-hero" id="services">
        <div className="services-hero__inner">
          <p className="services-hero__pill scroll-fade" data-animate-in="animate__fadeIn" style={{ animationDelay: '0s' }}>
            {copy.hero.pill}
          </p>
          <h1 className="scroll-fade" data-animate-in="animate__fadeIn" style={{ animationDelay: '0.1s' }}>
            {copy.hero.heading} <span>{copy.hero.highlight}</span>
          </h1>
          <p className="services-hero__lede scroll-fade" data-animate-in="animate__fadeIn" style={{ animationDelay: '0.25s' }}>
            {copy.hero.lede}
          </p>
        </div>
      </section>

      <section className="services-core" id="solutions">
        <header className="services-core__intro scroll-fade" data-animate-in="animate__fadeInUp">
          <p className="services-core__eyebrow">{copy.pillars.eyebrow}</p>
          <h2>{copy.pillars.heading}</h2>
          <p>{copy.pillars.body}</p>
        </header>

        <div className="services-core__grid">
          {copy.cards.map((card, index) => (
            <article
              key={card.key}
              className="core-card scroll-rise"
              data-animate-in="animate__fadeInUp"
              style={{ animationDelay: `${index * CORE_CARD_DELAY_STEP}s` }}
            >
              <span className="core-card__icon">
                <img
                  src={[proxiesIcon, itIcon, webIcon][index]}
                  alt={
                    index === 0
                      ? 'Proxy infrastructure icon'
                      : index === 1
                      ? 'Managed IT icon'
                      : 'Web design icon'
                  }
                />
              </span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              <ul>
                {card.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a href={index === 0 ? '/services/proxies' : index === 1 ? '/services/it' : '/services/web'} className="core-card__link">
                {card.link}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="services-standard" id="standard">
        <div className="services-standard__intro scroll-fade" data-animate-in="animate__fadeIn">
          <h2>{copy.standard.heading}</h2>
          <p>{copy.standard.body}</p>
        </div>

        <div className="services-standard__grid">
          {copy.standard.features.map((feature, index) => (
            <article
              key={feature.title}
              className="standard-card scroll-rise"
              data-animate-in="animate__fadeInUp"
              style={{ animationDelay: `${index * STANDARD_CARD_DELAY_STEP}s` }}
            >
              <span className="standard-card__icon">
                <img
                  src={[proxiesIcon, securityIcon, partnersIcon, innovationIcon][index]}
                  alt={feature.title}
                />
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="services-cta" id="cta">
        <div className="services-cta__card scroll-fade" data-animate-in="animate__fadeInUp" style={{ animationDelay: '0.2s' }}>
          <h2>{copy.cta.heading}</h2>
          <p>{copy.cta.body}</p>
          <div className="services-cta__actions">
            <a href="/contact" className="cta-btn cta-btn--primary">
              {copy.cta.button}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Services
