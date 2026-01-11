import './services.css'
import partnershipImage from '../assets/partnership.jpg'
import proxiesIcon from '../assets/proxy.png'
import webIcon from '../assets/web.png'
import itIcon from '../assets/It.png'
import securityIcon from '../assets/security.png'
import innovationIcon from '../assets/innovation.png'
import partnersIcon from '../assets/partners.png'

function Services() {
  return (
    <main className="services-page">
      <section className="services-hero" id="services">
        <div className="services-hero__inner">
          <p className="services-hero__pill">Our Solutions</p>
          <h1>
            Comprehensive <span>Digital Services.</span>
          </h1>
          <p className="services-hero__lede">
            From high-speed proxy networks to bespoke web development and managed IT, we build the foundation for your
            digital success.
          </p>

        </div>
      </section>

      <section className="services-core" id="solutions">
        <header className="services-core__intro">
          <p className="services-core__eyebrow">Service Pillars</p>
          <h2>Engineering-grade delivery across every layer.</h2>
          <p>
            Select the pod that fits your roadmap. Each engagement includes hardened infrastructure, measurable SLAs,
            and direct access to specialists.
          </p>
        </header>

        <div className="services-core__grid">
          <article className="core-card">
            <span className="core-card__icon">
              <img src={proxiesIcon} alt="Proxy infrastructure icon" />
            </span>
            <h3>Proxy Infrastructure</h3>
            <p>
              Access a global network of high-speed residential and datacenter proxies. Engineered for anonymity, speed,
              and 99.9% uptime reliability.
            </p>
            <ul>
              <li>10M+ Residential IPs</li>
              <li>Instant Rotation</li>
              <li>Global Targeting</li>
            </ul>
            <a href="/services/proxies" className="core-card__link">
              Explore Proxies →
            </a>
          </article>

          <article className="core-card">
            <span className="core-card__icon">
              <img src={itIcon} alt="Managed IT icon" />
            </span>
            <h3>Managed IT Services</h3>
            <p>
              End-to-end IT management for your enterprise. We handle security, maintenance, and helpdesk so you can
              focus on growth.
            </p>
            <ul>
              <li>24/7 Monitoring</li>
              <li>Cybersecurity Audits</li>
              <li>Cloud Migration</li>
            </ul>
            <a href="/services/it" className="core-card__link">
              View IT Solutions →
            </a>
          </article>

          <article className="core-card">
            <span className="core-card__icon">
              <img src={webIcon} alt="Web design icon" />
            </span>
            <h3>Web Design & Dev</h3>
            <p>
              Crafting stunning, responsive websites that convert. Our design team blends aesthetics with functionality
              for premium experiences.
            </p>
            <ul>
              <li>UI/UX Design</li>
              <li>Full-Stack Development</li>
              <li>SEO Optimization</li>
            </ul>
            <a href="/services/web" className="core-card__link">
              See Portfolio →
            </a>
          </article>
        </div>
      </section>

      {/* SwissStack Standard feature row */}
      <section className="services-standard" id="standard">
        <div className="services-standard__intro">
          <h2>The SwissStack Standard</h2>
          <p>Why leading companies trust our infrastructure and expertise.</p>
        </div>

        <div className="services-standard__grid">
          <article className="standard-card">
            <span className="standard-card__icon">
              <img src={proxiesIcon} alt="Lightning fast icon" />
            </span>
            <h3>Lightning Fast</h3>
            <p>Optimized low-latency network for real-time applications and rapid data collection.</p>
          </article>

          <article className="standard-card">
            <span className="standard-card__icon">
              <img src={securityIcon} alt="Secure by design icon" />
            </span>
            <h3>Secure by Design</h3>
            <p>Enterprise-grade encryption, privacy-first protocols, and hardened infrastructure.</p>
          </article>

          <article className="standard-card">
            <span className="standard-card__icon">
              <img src={partnersIcon} alt="24/7 support icon" />
            </span>
            <h3>24/7 Support</h3>
            <p>Dedicated technical teams ready for incident response, tuning, and proactive guidance.</p>
          </article>

          <article className="standard-card">
            <span className="standard-card__icon">
              <img src={innovationIcon} alt="Fully scalable icon" />
            </span>
            <h3>Fully Scalable</h3>
            <p>Infrastructure that flexes with your workloads and growth targets without downtime.</p>
          </article>
        </div>
      </section>

      <section className="services-cta" id="cta">
        <div className="services-cta__card">
          <h2>Ready to upgrade your infrastructure?</h2>
          <p>Contact our sales team today to get a custom quote tailored to your specific requirements.</p>
          <div className="services-cta__actions">
            <a href="/contact" className="cta-btn cta-btn--primary">
              Get Started
            </a>
            <a href="/contact" className="cta-btn cta-btn--ghost">
              Contact Sales
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Services
