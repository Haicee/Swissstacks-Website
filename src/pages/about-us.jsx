import './about-us.css'
import { useTranslation } from '../components/translation'

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
          icon: <img src="src/assets/security.png" alt="integrity and security icon" />,
        },
        {
          key: 'innovation',
          title: 'Innovation',
          description: 'We constantly explore new technologies that keep clients ahead of the curve.',
          icon: <img src="src/assets/innovation.png" alt="innovation icon" />,
        },
        {
          key: 'client',
          title: 'Client-Centric',
          description: 'Your success is our success. We build long-term partnerships, not just transactions.',
          icon: <img src="src/assets/partners.png" alt="client partnership icon" />,
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
          icon: <img src="src/assets/security.png" alt="Icon für Integrität und Sicherheit" />,
        },
        {
          key: 'innovation',
          title: 'Innovation',
          description: 'Wir erforschen kontinuierlich neue Technologien, die unsere Kunden an die Spitze bringen.',
          icon: <img src="src/assets/innovation.png" alt="Icon für Innovation" />,
        },
        {
          key: 'client',
          title: 'Kundenfokus',
          description: 'Ihr Erfolg ist unser Erfolg. Wir bauen langfristige Partnerschaften statt kurzfristiger Projekte.',
          icon: <img src="src/assets/partners.png" alt="Icon für Kundenfokus" />,
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

function AboutUs() {
  const { language } = useTranslation()
  const copy = ABOUT_COPY[language]
  return (
    <main className="about-page">
      <section className="about-hero" id="about">
        <div className="about-hero__inner">
          {/* Badge mirrors the design reference while differentiating from the home hero */}
          <p className="about-hero__pill">{copy.hero.eyebrow}</p>

          {/* Highlighted word dropped into a <span> so we can color it independently */}
          <h1>
            Empowering Digital <span>{copy.hero.highlight}</span>
          </h1>

          {/* Supporting paragraph */}
          <p className="about-hero__lede">{copy.hero.body}</p>
        </div>
      </section>

      {/* Mission block mirrors the security layout with centered content */}
      <section className="mission-section" id="mission">
        <div className="mission-content">
          <h2>{copy.mission.title}</h2>
          <p className="mission-lede">{copy.mission.description}</p>

          <ul className="mission-values">
            {copy.mission.values.map((value) => (
              <li key={value.key}>
                <span className="mission-icon" aria-hidden="true">
                  {value.icon}
                </span>
                <div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Journey timeline shows company evolution */}
      <section className="journey-section" id="journey">
        <div className="journey-intro">
          <h2>{copy.journey.title}</h2>
          <p className="journey-subtext">{copy.journey.subtext}</p>
        </div>

        <div className="journey-timeline">
          {copy.journey.steps.map((step) => {
            const copy = (
              <>
                <p className="journey-date">{step.eyebrow}</p>
                <h2 className="journey-title">{step.title}</h2>
                <p className="journey-description">{step.description}</p>
              </>
            )

            return (
              <article key={step.title} className={`journey-step journey-step--${step.alignment}`}>
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
        <div className="join-card">
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
