import './portfolio.css'
import 'animate.css'
import { useEffect } from 'react'
import { useTranslation } from '../components/translation'

const PROJECT_ANIMATION_BASE_DELAY = 0.15

const PORTFOLIO_COPY = {
  en: {
    hero: {
      eyebrow: 'Our Work',
      heading: 'Where Infrastructure Meets Imagination',
      highlight: 'Momentum.',
      body:
        'Every launch pairs bulletproof infrastructure with design systems that help our clients stand out. Explore a sample of the products, platforms, and brand sites we have delivered end to end.',
      metrics: [
        { key: 'industries', label: 'Industries Served', value: '12+' },
        { key: 'nps', label: 'Average NPS', value: '72' },
        { key: 'launch', label: 'Average Launch Window', value: '6 Weeks' },
      ],
    },
    gallery: {
      eyebrow: 'Successful Projects',
      title: 'Recent launches & transformations',
      description:
        'From high-volume SaaS platforms to boutique brand websites, each engagement is engineered for measurable impact. Dive into a few highlights below.',
      categories: ['Infrastructure', 'Web Experience', 'Product'],
      projects: [
        {
          id: 'freight-cloud',
          category: 'Infrastructure',
          title: 'Nordic Freight Cloud',
          description:
            'Hybrid cloud control plane delivering live shipment telemetry, consolidated analytics, and automated compliance tooling.',
          tags: ['Kubernetes', 'Telemetry', 'Zero Downtime'],
          results: [
            { label: 'Latency', value: '-43%' },
            { label: 'Regions', value: '5' },
          ],
        },
        {
          id: 'atelier-aurelia',
          category: 'Web Experience',
          title: 'Atelier Aurelia',
          description:
            'Luxury atelier site featuring immersive storytelling, editorial video, and a bespoke CMS for collection launches.',
          tags: ['Headless CMS', '3D Motion', 'Shopify'],
          results: [
            { label: 'Conversion', value: '+28%' },
            { label: 'Bounce Rate', value: '-35%' },
          ],
        },
        {
          id: 'helvetia-care',
          category: 'Product',
          title: 'Helvetia Care Portal',
          description:
            'Patient-first telehealth platform combining secure identity, scheduling, and AI triage for Swiss clinics.',
          tags: ['AI Triage', 'Secure Messaging', 'Design System'],
          results: [
            { label: 'Uptime', value: '99.98%' },
            { label: 'Active Clinics', value: '32' },
          ],
        },
        {
          id: 'alpenbank',
          category: 'Product',
          title: 'AlpenBank Private',
          description:
            'Mobile wealth dashboard with biometric auth, personalized insights, and multilingual reporting for UHNW clients.',
          tags: ['Fintech', 'Mobile', 'Localization'],
          results: [
            { label: 'Session Time', value: '+2.3x' },
            { label: 'Languages', value: '4' },
          ],
        },
      ],
    },
  },
  de: {
    hero: {
      eyebrow: 'Ausgewählte Arbeiten',
      heading: 'Wo Infrastruktur auf Vorstellungskraft trifft',
      highlight: 'Momentum.',
      body:
        'Jeder Launch kombiniert ausfallsichere Infrastruktur mit Designsystemen, die unsere Kunden sichtbar machen. Entdecken Sie eine Auswahl der End-to-End-Projekte, Plattformen und Markenauftritte.',
      metrics: [
        { key: 'industries', label: 'Bediente Branchen', value: '12+' },
        { key: 'nps', label: 'durchschnittlicher NPS', value: '72' },
        { key: 'launch', label: 'durchschnittliche Launch', value: '6 Wochen' },
      ],
    },
    gallery: {
      eyebrow: 'Case-Study-Archiv',
      title: 'Aktuelle Launches & Transformationen',
      description:
        'Von skalierenden SaaS-Plattformen bis zu Boutique-Websites – jedes Projekt wird für messbaren Impact gebaut. Hier ein Auszug unserer Highlights.',
      categories: ['Infrastruktur', 'Web Experience', 'Produkt'],
      projects: [
        {
          id: 'freight-cloud',
          category: 'Infrastruktur',
          title: 'Nordic Freight Cloud',
          description:
            'Hybrid-Cloud-Steuerungsebene mit Live-Telemetrie, konsolidierten Analytics und automatisierter Compliance.',
          tags: ['Kubernetes', 'Telemetrie', 'Zero Downtime'],
          results: [
            { label: 'Latenz', value: '-43%' },
            { label: 'Regionen', value: '5' },
          ],
        },
        {
          id: 'atelier-aurelia',
          category: 'Web Experience',
          title: 'Atelier Aurelia',
          description:
            'Luxus-Atelier-Website mit immersivem Storytelling, Editorial-Video und maßgeschneidertem CMS für Kollektionen.',
          tags: ['Headless CMS', '3D Motion', 'Shopify'],
          results: [
            { label: 'Conversion', value: '+28%' },
            { label: 'Absprungrate', value: '-35%' },
          ],
        },
        {
          id: 'helvetia-care',
          category: 'Produkt',
          title: 'Helvetia Care Portal',
          description:
            'Telemedizin-Plattform mit sicherer Identität, Terminplanung und KI-Triage für Schweizer Kliniken.',
          tags: ['KI-Triage', 'Sichere Nachrichten', 'Design System'],
          results: [
            { label: 'Verfügbarkeit', value: '99,98%' },
            { label: 'Kliniken', value: '32' },
          ],
        },
        {
          id: 'alpenbank',
          category: 'Produkt',
          title: 'AlpenBank Private',
          description:
            'Mobiles Vermögens-Dashboard mit biometrischer Authentifizierung, Insights und mehrsprachigem Reporting.',
          tags: ['Fintech', 'Mobil', 'Lokalisierung'],
          results: [
            { label: 'Sitzungsdauer', value: '+2,3x' },
            { label: 'Sprachen', value: '4' },
          ],
        },
      ],
    },
  },
}

function Portfolio() {
  const { language } = useTranslation()
  const copy = PORTFOLIO_COPY[language] || PORTFOLIO_COPY.en

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
    <main className="portfolio-page">
      <section className="portfolio-hero" id="portfolio">
        <div className="portfolio-hero__inner">
          <p className="portfolio-hero__pill scroll-fade" data-animate-in="animate__fadeIn" style={{ animationDelay: '0.05s' }}>
            {copy.hero.eyebrow}
          </p>
          <h1 className="scroll-fade" data-animate-in="animate__fadeIn" style={{ animationDelay: '0.15s' }}>
            {copy.hero.heading} <span>{copy.hero.highlight}</span>
          </h1>
          <p className="portfolio-hero__lede scroll-fade" data-animate-in="animate__fadeIn" style={{ animationDelay: '0.3s' }}>
            {copy.hero.body}
          </p>

          <div className="portfolio-hero__meta">
            {copy.hero.metrics.map((metric, index) => (
              <div
                key={metric.key}
                className="portfolio-metric scroll-rise"
                data-animate-in="animate__fadeInUp"
                style={{ animationDelay: `${0.35 + index * 0.1}s` }}
              >
                <p className="portfolio-metric__value">{metric.value}</p>
                <p className="portfolio-metric__label">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-gallery" id="portfolio-projects">
        <div className="portfolio-gallery__header scroll-fade" data-animate-in="animate__fadeInUp">
          <div>
            <p className="portfolio-eyebrow">{copy.gallery.eyebrow}</p>
            <h2>{copy.gallery.title}</h2>
            <p className="portfolio-gallery__lede">{copy.gallery.description}</p>
          </div>

          <div className="portfolio-gallery__filters" aria-label="Project categories">
            {copy.gallery.categories.map((category) => (
              <span key={category} className="portfolio-filter-chip">
                {category}
              </span>
            ))}
          </div>
        </div>

        <div className="portfolio-projects">
          {copy.gallery.projects.map((project, index) => (
            <article
              key={project.id}
              className="project-card scroll-rise"
              data-animate-in="animate__fadeInUp"
              style={{ animationDelay: `${PROJECT_ANIMATION_BASE_DELAY * (index + 1)}s` }}
            >
              <div className="project-card__badge">{project.category}</div>
              <h3>{project.title}</h3>
              <p className="project-card__description">{project.description}</p>

              <ul className="project-card__tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>

              <div className="project-card__results">
                {project.results.map((result) => (
                  <div key={result.label} className="project-result">
                    <p className="project-result__value">{result.value}</p>
                    <p className="project-result__label">{result.label}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Portfolio
