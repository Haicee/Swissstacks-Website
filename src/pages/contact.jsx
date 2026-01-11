import './contact.css'
import proxiesIcon from '../assets/proxy.png'
import securityIcon from '../assets/security.png'
import innovationIcon from '../assets/innovation.png'
import partnershipImage from '../assets/partnership.jpg'

function Contact() {
  return (
    <main className="contact-page">
      {/* Hero mirrors About layout for consistency */}
      <section className="contact-hero" id="contact">
        <div className="contact-hero__inner">
          <p className="contact-hero__pill">Get in Touch</p>
          <h1>
            Let&apos;s Start a <span>Conversation.</span>
          </h1>
          <p className="contact-hero__lede">
            Whether you have a question about our proxy networks, need IT support, or want to discuss a new design
            project, our team is ready to help.
          </p>
        </div>
      </section>

      {/* Dual column layout: form (left) and quick contact info (right) */}
      <section className="contact-main" id="contact">
        <div className="contact-form">
          <h2>Send us a message</h2>
          <p>Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
          <form>
            <div className="form-row">
              <label>
                <span>Full Name</span>
                <input type="text" placeholder="John Doe" />
              </label>
              <label>
                <span>Email Address</span>
                <input type="email" placeholder="john@example.com" />
              </label>
            </div>

            <label>
              <span>Subject</span>
              <select defaultValue="general">
                <option value="general">General Inquiry</option>
                <option value="sales">Sales</option>
                <option value="support">Support</option>
              </select>
            </label>

            <label>
              <span>Message</span>
              <textarea rows="5" placeholder="How can we help you today?" />
            </label>

            <button type="submit" className="contact-submit">
              Send Message
            </button>
          </form>
        </div>

        <div className="contact-details">
          <article className="contact-card">
            <span className="contact-card__icon">
              <img src={proxiesIcon} alt="Email icon" />
            </span>
            <h3>Email Us</h3>
            <p>For general inquiries</p>
            <a href="mailto:hello@swissstack.com">hello@swissstack.com</a>
          </article>

          <article className="contact-card">
            <span className="contact-card__icon">
              <img src={securityIcon} alt="Phone icon" />
            </span>
            <h3>Call Us</h3>
            <p>Mon-Fri from 8am to 5pm</p>
            <a href="tel:+41441234567">+41 44 123 45 67</a>
          </article>

          <article className="contact-card contact-card--map">
            <span className="contact-card__icon">
              <img src={innovationIcon} alt="Map icon" />
            </span>
            <h3>Visit Our Office</h3>
            <p>Bahnfofstrasse 10, 8001 Zurich, Switzerland</p>
            <iframe
              title="SwissStack Office Map"
              className="contact-card__map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2712.676664582121!2d8.539182576757394!3d47.37331050500449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aa0a65b5cd6b5%3A0x9a0f47779fba399a!2sBahnhofstrasse%2010%2C%208001%20Z%C3%BCrich%2C%20Switzerland!5e0!3m2!1sen!2sus!4v1705000000000!5m2!1sen!2sus"
              loading="lazy"
              allowFullScreen
            />
          </article>
        </div>
      </section>

      {/* Support CTA mirrors About join block */}
      <section className="contact-cta">
        <div className="contact-cta__card">
          <h2>Need immediate assistance?</h2>
          <p>
            Existing clients can log in to the Client Portal for priority support tickets and real-time status updates
            on services.
          </p>
          <div className="contact-cta__actions">
            <a href="" className="cta-btn cta-btn--primary">
              Login to Portal
            </a>
            <a href="" className="cta-btn cta-btn--ghost">
              View Knowledge Base
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
