import { useEffect } from 'react'
import './home.css'

// Home groups together the hero and (eventually) other landing sections.
// Splitting it into its own component keeps App.jsx focused on layout only.
const HERO_STATS = [
  { value: '99.9%', label: 'Uptime Guarantee' },
  { value: '10k+', label: 'Active Proxies' },
  { value: '24/7', label: 'Expert Support' },
  { value: '500+', label: 'Clients Served' }
]

const CORE_SERVICES = [
  {
    icon: <img src="src/assets/proxy.png" alt="proxy" />,
    title: 'Premium Proxies',
    description: 'Secure, anonymous, and lightning-fast residentials and datacenter IPs for web scraping and privacy.',
    ctaLabel: 'View Plans',
    ctaHref: '#proxies'
  },
  {
    icon: <img src="src/assets/It.png" alt="it" />,
    title: 'Managed IT',
    description: 'End-to-end network management, cybersecurity auditing, and seamless cloud integration services.',
    ctaLabel: 'Explore IT',
    ctaHref: '#managed-it'
  },
  {
    icon: <img src="src/assets/web.png" alt="web" />,
    title: 'Web Design',
    description: 'Modern, responsive front-end development tailored to your brand identity with cutting-edge UI/UX.',
    ctaLabel: 'See Portfolio',
    ctaHref: '#web-design'
  }
]

const SECURITY_FEATURES = [
  {
    title: 'DDOS Protection',
    description: 'Advanced mitigation strategies to keep your servers online.'
  },
  {
    title: 'Global CDN',
    description: 'Content delivery network spanning 50+ countries for low latency.'
  },
  {
    title: 'Dedicated Support',
    description: 'Real engineers available 24/7 to solve critical issues.'
  }
]

function Home() {
  // for scroll animation
  useEffect(() => {
    const fadeItems = document.querySelectorAll('.scroll-fade')
    if (!fadeItems.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          } else {
            entry.target.classList.remove('is-visible')
          }
        })
      },
      { threshold: 0.3 }
    )

    fadeItems.forEach((item) => observer.observe(item))

    return () => {
      fadeItems.forEach((item) => observer.unobserve(item))
      observer.disconnect()
    }
  }, [])

  return (
    <main className="home-page" id="home">
      <section className="hero-section" id="hero">
      {/* Small pill highlights the solution tier at the top of the hero */}
      <div className="hero-content scroll-fade" style={{ '--scroll-delay': '0ms' }}>
        <p className="hero-pill">Enterprise-Grade Solutions</p>

        <h1>
          Reliable Infrastructure. <span>Stunning Design.</span>
        </h1>

        <p className="hero-subtext">
          Comprehensive tech solutions including high-speed proxies, managed IT, and custom web
          development designed for modern businesses.
        </p>

        {/* Primary hero CTA buttons */}
        <div className="hero-actions">
          <a className="btn btn-primary" href="#contact">
            Get Started
          </a>
          <a className="btn btn-secondary" href="#services">
            Learn More
          </a>
        </div>
      </div>

      {/* Stats strip mirrors the reference image */}
      <section
        className="hero-stats scroll-fade"
        aria-label="Company performance stats"
        style={{ '--scroll-delay': '120ms' }}  /* for animation delay */
      >
        {HERO_STATS.map((stat) => (
          <article key={stat.label} className="hero-stat">
            <p className="hero-stat__value">{stat.value}</p>
            <p className="hero-stat__label">{stat.label}</p>
          </article>
        ))}
      </section>
      </section>

      {/* Core services grid showcases main offerings */}
      <section className="services-wrapper">
        <div className="services-section" id="services">
        <header className="services-header">
          <div>
            <h2 className="eyebrow">Our Core Services</h2>
            <p className="services-lede">
              Scalable solutions tailored to grow with your technological needs.
            </p>
          </div>
          <a className="services-link" href="#all-services">
            View All Services →
          </a>
        </header>

        <div className="services-grid">
          {CORE_SERVICES.map((service) => (
            <article key={service.title} className="service-card">
              <div className="service-icon" aria-hidden="true">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href={service.ctaHref} className="service-cta">
                {service.ctaLabel} →
              </a>
            </article>
          ))}
        </div>
        </div>
      </section>

      {/* Enterprise-grade security block */}
      <section className="security-section" id="security">
        <div className="security-visual" aria-hidden="true">
          <div className="security-screen">
            <div className="security-chart security-chart--bars" />
            <div className="security-chart security-chart--dials">
              <span />
              <span />
            </div>
          </div>
        </div>

        <div className="security-copy">
          <h2 className="eyebrow">Enterprise-Grade Security & Performance</h2>
          <p className="security-lede">
            We don't just build websites; we build fortified digital fortresses. 
            Our infrastructure is designed for speed, resilience, and uncompromised security.
          </p>

          <ul className="security-list">
            {SECURITY_FEATURES.map((feature) => (
              <li key={feature.title}>
                <span className="security-icon" aria-hidden="true">
                  ✓
                </span>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Upgrade CTA */}
      <section className="upgrade-section" aria-label="Upgrade CTA">
        <p className="upgrade-eyebrow">Ready to Upgrade Your Tech Stack?</p>
        <p className="upgrade-subtext">
          Join hundreds of businesses that trust SwissStack for resilient infrastructure and premium support.
        </p>
        <div className="upgrade-actions">
          <a href="#start-trial" className="btn btn-primary">
            Start Free Trial
          </a>
          <a href="#contact-sales" className="btn btn-secondary upgrade-secondary">
            Contact Sales
          </a>
        </div>
      </section>
    </main>
  )
}

export default Home
