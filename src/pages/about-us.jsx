import './about-us.css'
import 'animate.css'
import { useEffect } from 'react'
import { useTranslation } from '../components/translation'
import securityIcon from '../assets/security.png'
import innovationIcon from '../assets/innovation.png'
import partnersIcon from '../assets/partners.png'

const ABOUT_COPY = {
  en: {
    hero: {
      eyebrow: 'Who We Are',
      highlight: 'Transformation.',
      body:
        'SwissStack bridges the gap between complex infrastructure and seamless user experiences. We are architects of the modern web, dedicated to stability, speed, and security.',
    },
    mission: {
      title: 'Our Mission',
      description:
        'To provide businesses with the robust technological foundation they need to thrive in a digital-first world. We believe high-performance infrastructure should be accessible, secure, and effortlessly scalable.',
      values: [
        {
          key: 'integrity',
          title: 'Integrity & Security',
          description: 'Trust is our currency. We prioritize data privacy and system security above all else.',
          icon: <img src={securityIcon} alt="integrity and security icon" />,
        },
        {
          key: 'innovation',
          title: 'Innovation',
          description: 'We constantly explore new technologies that keep clients ahead of the curve.',
          icon: <img src={innovationIcon} alt="innovation icon" />,
        },
        {
          key: 'client',
          title: 'Client-Centric',
          description: 'Your success is our success. We build long-term partnerships, not just transactions.',
          icon: <img src={partnersIcon} alt="client partnership icon" />,
        },
      ],
    },
    journey: {
      title: 'Our Journey',
      subtext: 'From a small server room to a global infrastructure provider.',
      steps: [
        {
          eyebrow: '2023',
          title: 'Founding',
          description: 'SwissStack was established in Winterthur with a single vision: simplify enterprise proxy management.',
          alignment: 'left',
        },
        {
          eyebrow: 'Early 2024',
          title: 'Expansion to IT Services',
          description: 'Recognizing client needs, we expanded offerings to include full-scale managed IT services.',
          alignment: 'right',
        },
        {
          eyebrow: 'Today',
          title: 'Full Digital Partner',
          description: 'Serving clients globally with comprehensive web design, infrastructure, and security.',
          alignment: 'left',
        },
      ],
    },
    join: {
      title: 'Join SwissStack Today',
      body: "Whether you're looking for a career or a partner for your next digital project, we'd love to hear from you.",
      cta: 'Work With Us',
    },
  },
  de: {
    hero: {
      eyebrow: 'Wer wir sind',
      highlight: 'Transformation.',
      body:
        'SwissStack schlägt die Brücke zwischen komplexer Infrastruktur und nahtlosen Nutzererlebnissen. Wir sind Architekten des modernen Webs – fokussiert auf Stabilität, Geschwindigkeit und Sicherheit.',
    },
    mission: {
      title: 'Unsere Mission',
      description:
        'Unternehmen eine robuste technologische Grundlage zu bieten, damit sie in einer digital geprägten Welt florieren können. Hochperformante Infrastruktur soll zugänglich, sicher und mühelos skalierbar sein.',
      values: [
        {
          key: 'integrity',
          title: 'Integrität & Sicherheit',
          description: 'Vertrauen ist unsere Währung. Daten­schutz und Systemsicherheit haben höchste Priorität.',
          icon: <img src={securityIcon} alt="Icon für Integrität und Sicherheit" />,
        },
        {
          key: 'innovation',
          title: 'Innovation',
          description: 'Wir erforschen kontinuierlich neue Technologien, die unsere Kunden an die Spitze bringen.',
          icon: <img src={innovationIcon} alt="Icon für Innovation" />,
        },
        {
          key: 'client',
          title: 'Kundenfokus',
          description: 'Ihr Erfolg ist unser Erfolg. Wir bauen langfristige Partnerschaften statt kurzfristiger Projekte.',
          icon: <img src={partnersIcon} alt="Icon für Kundenfokus" />,
        },
      ],
    },
    journey: {
      title: 'Unsere Reise',
      subtext: 'Vom kleinen Serverraum zum globalen Infrastrukturpartner.',
      steps: [
        {
          eyebrow: '2023',
          title: 'Gründung',
          description: 'SwissStack entstand in Winterthur mit der Vision, Enterprise-Proxies zu vereinfachen.',
          alignment: 'left',
        },
        {
          eyebrow: 'Anfang 2024',
          title: 'Erweiterung um IT-Services',
          description: 'Auf Kundenwünsche reagierend ergänzten wir umfassende Managed-IT-Leistungen.',
          alignment: 'right',
        },
        {
          eyebrow: 'Heute',
          title: 'Digitaler Gesamtpartner',
          description: 'Wir betreuen Kunden weltweit mit Webdesign, Infrastruktur und Sicherheit aus einer Hand.',
          alignment: 'left',
        },
      ],
    },
    join: {
      title: 'Werden Sie Teil von SwissStack',
      body: 'Ob Karriere oder nächstes Digitalprojekt – wir freuen uns darauf, von Ihnen zu hören.',
      cta: 'Mit uns arbeiten',
    },
  },
}

const MISSION_VALUE_BASE_DELAY = 0.2
const MISSION_VALUE_DELAY_STEP = 0.15
const JOURNEY_STEP_BASE_DELAY = 0.15

function AboutUs() {
  const { language } = useTranslation()
  const copy = ABOUT_COPY[language]

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
    <main className="about-page">
      <section className="about-hero" id="about">
        <div className="about-hero__inner">
          {/* Badge mirrors the design reference while differentiating from the home hero */}
          <p
            className="about-hero__pill scroll-fade"
            data-animate-in="animate__fadeIn"
            style={{ animationDelay: '0.1s' }}
          >
            {copy.hero.eyebrow}
          </p>

          {/* Highlighted word dropped into a <span> so we can color it independently */}
          <h1
            className="scroll-fade"
            data-animate-in="animate__fadeIn"
            style={{ animationDelay: '0.2s' }}
          >
            Empowering Digital <span>{copy.hero.highlight}</span>
          </h1>

          {/* Supporting paragraph */}
          <p
            className="about-hero__lede scroll-fade"
            data-animate-in="animate__fadeIn"
            style={{ animationDelay: '0.35s' }}
          >
            {copy.hero.body}
          </p>
        </div>
      </section>

      {/* Mission block mirrors the security layout with centered content */}
      <section className="mission-section" id="mission">
        <div className="mission-content">
          <h2 className="scroll-fade" data-animate-in="animate__fadeIn" style={{ animationDelay: '0s' }}>
            {copy.mission.title}
          </h2>
          <p
            className="mission-lede scroll-fade"
            style={{ animationDelay: '0.1s' }}
            data-animate-in="animate__fadeIn"
          >
            {copy.mission.description}
          </p>

          <ul className="mission-values">
            {copy.mission.values.map((value, index) => {
              const animationClass =
                index % 2 === 0 ? 'animate__slideInLeft' : 'animate__slideInRight'
              const animationDelay = `${MISSION_VALUE_BASE_DELAY + index * MISSION_VALUE_DELAY_STEP}s`
              return (
                <li
                  key={value.key}
                  className="scroll-rise"
                  data-animate-in={animationClass}
                  style={{ animationDelay }}
                >
                  <span className="mission-icon" aria-hidden="true">
                    {value.icon}
                  </span>
                  <div>
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* Journey timeline shows company evolution */}
      <section className="journey-section" id="journey">
        <div className="journey-intro scroll-fade" data-animate-in="animate__zoomIn">
          <h2>{copy.journey.title}</h2>
          <p className="journey-subtext">{copy.journey.subtext}</p>
        </div>

        <div className="journey-timeline">
          {copy.journey.steps.map((step, index) => {
            const copy = (
              <>
                <p className="journey-date">{step.eyebrow}</p>
                <h2 className="journey-title">{step.title}</h2>
                <p className="journey-description">{step.description}</p>
              </>
            )

            return (
              <article
                key={step.title}
                className={`journey-step journey-step--${step.alignment} scroll-fade`}
                data-animate-in="animate__zoomIn"
                style={{ animationDelay: `${JOURNEY_STEP_BASE_DELAY * (index + 1)}s` }}
              >
                <div className="journey-content journey-content--left">
                  {step.alignment === 'left' && copy}
                </div>
                <div className="journey-marker" aria-hidden="true">
                  <span />
                </div>
                <div className="journey-content journey-content--right">
                  {step.alignment === 'right' && copy}
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* Join CTA mirrors the design reference */}
      <section className="join-section" id="join">
        <div className="join-card scroll-fade" data-animate-in="animate__fadeInUp" style={{ animationDelay: '0.25s' }}>
          <h2>{copy.join.title}</h2>
          <p>{copy.join.body}</p>
          <div className="join-actions">
            <a href="/contact" className="join-btn join-btn--primary">
              {copy.join.cta}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutUs
