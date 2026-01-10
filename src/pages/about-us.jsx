import partnershipImage from '../assets/partnership.jpg'
import './about-us.css'
import prof1 from '../assets/prof1-sample.jpg'
import prof2 from '../assets/prof2-sample.jpg'
import prof3 from '../assets/prof3-sample.jpg'

// Simple object so copy tweaks stay centralized.
const ABOUT_COPY = {
  eyebrow: 'Who We Are',
  highlight: 'Transformation.',
  body:
    'SwissStack bridges the gap between complex infrastructure and seamless user experiences. We are architects of the modern web, dedicated to stability, speed, and security.'
}

const MISSION_COPY = {
  title: 'Our Mission',
  description:
    'To provide businesses with the robust technological foundation they need to thrive in a digital-first world. We believe the high-performance infrastructure should be accessible, secure, adn effortlessly scalable.',
  values: [
    {
      icon: <img src="src/assets/security.png" alt="security" />,
      title: 'Integrity & Security',
      description: 'Trust is our currency. We prioritize data privacy and system security above all else.'
    },
    {
      icon: <img src="src/assets/innovation.png" alt="innovation" />,
      title: 'Innovation',
      description: 'We constantly explore new technologies that keep clients ahead of the curve.'
    },
    {
      icon: <img src="src/assets/partners.png" alt="client-centric" />,
      title: 'Client-Centric',
      description: 'Your success is our success. We build long-term partnerships, not just transactions.'
    }
  ]
}

const JOURNEY_INTRO = {
  title: 'Our Journey',
  subtext: 'From a small server room to a global infrastructure provider.'
}

const JOURNEY_STEPS = [
  {
    eyebrow: '2023',
    title: 'Founding',
    description: 'SwissStack was established with a single vision: simplify enterprise proxy management.',
    alignment: 'left'
  },
  {
    eyebrow: 'Early 2024',
    title: 'Expansion to IT Services',
    description: 'Recognizing client needs, we expanded offerings to include full-scale managed IT services.',
    alignment: 'right'
  },
  {
    eyebrow: 'Today',
    title: 'Full Digital Partner',
    description: 'Serving 500+ clients globally with comprehensive web design, infrastructure, and security.',
    alignment: 'left'
  }
]

const LEADERSHIP_TEAM = [
  {
    name: 'Alexander Weber (Sample)',
    role: 'Founder & CEO',
    bio: 'Former network architect with 15+ years in datacenter management. Passionate about scalable infrastructure.',
    portrait: prof1,
  },
  {
    name: 'Elena Rodriguez (Sample)',
    role: 'Chief Technology Officer',
    bio: 'Cybersecurity expert and full-stack lead driving innovation strategy and security protocols.',
    portrait: prof2,
  },
  {
    name: 'Marcus Chen (Sample)',
    role: 'Head of Design',
    bio: 'Award-winning product designer crafting intuitive digital experiences that convert.',
    portrait: prof3,
  },
]

function AboutUs() {
  return (
    <main className="about-page">
      <section className="about-hero" id="about">
        <div className="about-hero__inner">
          {/* Badge mirrors the design reference while differentiating from the home hero */}
          <p className="about-hero__pill">{ABOUT_COPY.eyebrow}</p>

          {/* Highlighted word dropped into a <span> so we can color it independently */}
          <h1>
            Empowering Digital <span>{ABOUT_COPY.highlight}</span>
          </h1>

          {/* Supporting paragraph */}
          <p className="about-hero__lede">{ABOUT_COPY.body}</p>
        </div>
      </section>

      {/* Mission block mirrors the reference layout (visual left, copy right) */}
      <section className="mission-section" id="mission">
        <div className="mission-visual" aria-hidden="true">
          <img src={partnershipImage} alt="SwissStack team greeting enterprise partners" />
          <div className="mission-visual__glow" />
        </div>

        <div className="mission-content">
          <h2>{MISSION_COPY.title}</h2>
          <p className="mission-lede">{MISSION_COPY.description}</p>

          <ul className="mission-values">
            {MISSION_COPY.values.map((value) => (
              <li key={value.title}>
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
          <h2>{JOURNEY_INTRO.title}</h2>
          <p className="journey-subtext">{JOURNEY_INTRO.subtext}</p>
        </div>

        <div className="journey-timeline">
          {JOURNEY_STEPS.map((step) => {
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

      {/* Leadership grid introduces the core team */}
      <section className="leadership-section" id="leadership">
        <p className="leadership-eyebrow">Leadership</p>
        <h2>Meet the Minds Behind SwissStack</h2>

        <div className="leadership-grid">
          {LEADERSHIP_TEAM.map((leader) => (
            <article key={leader.name} className="leader-card">
              <div className="leader-avatar">
                <img src={leader.portrait} alt={`${leader.name} portrait`} />
              </div>
              <h3>{leader.name}</h3>
              <p className="leader-role">{leader.role}</p>
              <p className="leader-bio">{leader.bio}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Join CTA mirrors the design reference */}
      <section className="join-section" id="join">
        <div className="join-card">
          <h2>Join the SwissStack Family</h2>
          <p>
            Whether you're looking for a career or a partner for your next digital project, we'd love to hear
            from you.
          </p>
          <div className="join-actions">
            <a href="/contact" className="join-btn join-btn--primary">
              Work With Us
            </a>
            <a href="/careers" className="join-btn join-btn--ghost">
              View Careers
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutUs
