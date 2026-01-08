import './footer.css'

const SERVICE_LINKS = ['Residential Proxies', 'Datacenter Proxies', 'Managed IT', 'Web Development']
const COMPANY_LINKS = ['About Us', 'Careers', 'Blog', 'Contact']

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <span className="footer-logo-mark" aria-hidden="true">
              SS
            </span>
            <span className="footer-logo-name">SwissStack</span>
          </a>
          <p className="brand-body">
            Empowering businesses with resilient infrastructure and cutting-edge design since 2026.
          </p>
        </div>

        <div className="footer-column">
          <p className="footer-heading">Services</p>
          <ul>
            {SERVICE_LINKS.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}>{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <p className="footer-heading">Company</p>
          <ul>
            {COMPANY_LINKS.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}>{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <p className="footer-heading">Subscribe</p>
          <p className="footer-subtext">Latest tech news and updates</p>
          <form className="footer-form" onSubmit={(event) => event.preventDefault()}>
            <input type="email" placeholder="Email address" aria-label="Email address" />
            <button type="submit" aria-label="Submit email">
             ➔
            </button>
          </form>
          <form className="footer-form" onSubmit={(event) => event.preventDefault()}>
            <input type="whatsapp" placeholder="Whatsapp Number" aria-label="Whatsapp Number" />
            <button type="submit" aria-label="Submit whatsapp">
             ➔
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} SwissStack Inc. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
