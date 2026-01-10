import { useEffect } from 'react'
import './home.css'
import 'animate.css';

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

const SERVICE_ANIMATE_DELAYS = ['0s', '0.15s', '0.3s']
const ENTERPRISE_LIST = ['0s','0.15s', '0.3s']

function Home() {
  // for scroll animation
  useEffect(() => {
    const scrollItems = document.querySelectorAll('.scroll-fade, .scroll-rise')
    if (!scrollItems.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target
          const animateIn = target.dataset.animateIn || 'animate__fadeIn'
          const animateOut = target.dataset.animateOut || 'animate__fadeOut'
          target.classList.add('animate__animated')

          if (entry.isIntersecting) {
            target.classList.add('is-visible')
            target.classList.remove(animateOut)
            target.classList.add(animateIn)
          } else {
            target.classList.remove('is-visible')
            target.classList.remove(animateIn)
            target.classList.add(animateOut)
          }
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
      <section className="hero-section" id="hero">
      {/* Small pill highlights the solution tier at the top of the hero */}
      <div
        className="hero-content scroll-fade"
        data-animate-in="animate__fadeIn"
        data-animate-out="animate__fadeOut"
      >
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
        data-animate-in="animate__fadeIn"
        data-animate-out="animate__fadeOut"
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
        <header
          className="services-header scroll-fade"
          data-animate-in="animate__fadeIn"
          data-animate-out="animate__fadeOut"
        >
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
          {CORE_SERVICES.map((service, index) => (
            <article
              key={service.title}
              className="service-card scroll-rise"
              data-animate-in="animate__fadeInUp" /* for animation */
              data-animate-out="animate__fadeOutDown"
              style={{ animationDelay: SERVICE_ANIMATE_DELAYS[index] || '0s' }}
            >
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
          <div className="security-copy-header scroll-fade"
          data-animate-in="animate__fadeIn" /* for animation */
          data-animate-out="animate__fadeOutDown"
          >
          <h2 className="eyebrow">Enterprise-Grade Security & Performance</h2>
          <p className="security-lede">
            We don't just build websites; we build fortified digital fortresses. 
            Our infrastructure is designed for speed, resilience, and uncompromised security.
          </p>
          </div>

          <div className="enterpriselist">
          <ul className="security-list">
            <li>
              <span className="security-icon" aria-hidden="true">
                ✓
              </span>
              <div>
                <h3>DDOS Protection</h3>
                <p>Advanced mitigation strategies to keep your servers online.</p>
              </div>
            </li>

            <li className='sec1'>
              <span className="security-icon" aria-hidden="true">
                ✓
              </span>
              <div>
                <h3>Global CDN</h3>
                <p>Content delivery network spanning 50+ countries for low latency.</p>
              </div>
            </li>

            <li>
              <span className="security-icon" aria-hidden="true">
                ✓
              </span>
              <div>
                <h3>Dedicated Support</h3>
                <p>Real engineers available 24/7 to solve critical issues.</p>
              </div>
            </li>
          </ul>
          </div>
        </div>
      </section>

      {/* Upgrade CTA */}
      <section className="upgrade-section" aria-label="Upgrade CTA">
        <p className="upgrade-eyebrow animate__animated animate__bounce">Ready to Upgrade Your Tech Stack?</p>
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
