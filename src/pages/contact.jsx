import './contact.css'
import emailIcon from '../assets/email.png'
import callIcon from '../assets/call.png'
import { useTranslation } from '../components/translation'

const translations = {
  en: {
    heroPill: 'Get in Touch',
    heroHeading: "Let's Start a",
    heroHeadingAccent: 'Conversation.',
    heroLead:
      'Whether you have a question about our proxy networks, need IT support, or want to discuss a new design project, our team is ready to help.',
    formTitle: 'Send us a message',
    formSubtitle: "Fill out the form below and we'll get back to you within 24 hours.",
    fields: {
      nameLabel: 'Full Name',
      namePlaceholder: 'Alexander Smith',
      emailLabel: 'Email Address',
      emailPlaceholder: 'smith@example.com',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'Enter subject',
      messageLabel: 'Message',
      messagePlaceholder: 'How can we help you today?',
    },
    submit: 'Send Message',
    cards: {
      emailTitle: 'Email Us',
      emailSubtitle: 'For general inquiries',
      callTitle: 'Call Us',
      callSubtitle: 'Mon-Fri from 8am to 5pm',
    },
    toggleLabel: 'DE',
    toggleAria: 'Switch to German',
  },
  de: {
    heroPill: 'Kontakt aufnehmen',
    heroHeading: 'Lass uns ein',
    heroHeadingAccent: 'Gespräch beginnen.',
    heroLead:
      'Egal, ob du Fragen zu unseren Proxy-Netzwerken hast, IT-Support benötigst oder ein neues Designprojekt besprechen möchtest – unser Team ist bereit zu helfen.',
    formTitle: 'Schick uns eine Nachricht',
    formSubtitle: 'Fülle das Formular aus und wir melden uns innerhalb von 24 Stunden.',
    fields: {
      nameLabel: 'Vollständiger Name',
      namePlaceholder: 'Alexander Schmidt',
      emailLabel: 'E-Mail-Adresse',
      emailPlaceholder: 'schmidt@example.com',
      subjectLabel: 'Betreff',
      subjectPlaceholder: 'Betreff eingeben',
      messageLabel: 'Nachricht',
      messagePlaceholder: 'Wie können wir dir helfen?',
    },
    submit: 'Nachricht senden',
    cards: {
      emailTitle: 'Schreib uns',
      emailSubtitle: 'Für allgemeine Anfragen',
      callTitle: 'Ruf uns an',
      callSubtitle: 'Mo-Fr von 8 bis 17 Uhr',
    },
    toggleLabel: 'EN',
    toggleAria: 'Switch to English',
  },
}

function Contact() {
  const { language } = useTranslation()
  const t = translations[language]

  return (
    <main className="contact-page">
      {/* Hero mirrors About layout for consistency */}
      <section className="contact-hero" id="contact">
        <div className="contact-hero__inner">
          <p className="contact-hero__pill">{t.heroPill}</p>
          <h1>
            {t.heroHeading} <span>{t.heroHeadingAccent}</span>
          </h1>
          <p className="contact-hero__lede">{t.heroLead}</p>
        </div>
      </section>

      {/* Dual column layout: form (left) and quick contact info (right) */}
      <section className="contact-main" id="contact">
        <div className="contact-form">
          <h2>{t.formTitle}</h2>
          <p>{t.formSubtitle}</p>
          <form>
            <div className="form-row">
              <label>
                <span>{t.fields.nameLabel}</span>
                <input type="text" placeholder={t.fields.namePlaceholder} />
              </label>
              <label>
                <span>{t.fields.emailLabel}</span>
                <input type="email" placeholder={t.fields.emailPlaceholder} />
              </label>
            </div>

            <label>
              <span>{t.fields.subjectLabel}</span>
              <input type="text" placeholder={t.fields.subjectPlaceholder} />
            </label>

            <label>
              <span>{t.fields.messageLabel}</span>
              <textarea rows="5" placeholder={t.fields.messagePlaceholder} />
            </label>

            <button type="submit" className="contact-submit">
              {t.submit}
            </button>
          </form>
        </div>

        <div className="contact-details">
          <article className="contact-card">
            <span className="contact-card__icon">
              <img src={emailIcon} alt="Email icon" />
            </span>
            <h3>{t.cards.emailTitle}</h3>
            <p>{t.cards.emailSubtitle}</p>
            <a href="mailto:hello@swissstack.com">hello@swissstack.com</a>
          </article>

          <article className="contact-card">
            <span className="contact-card__icon">
              <img src={callIcon} alt="Phone icon" />
            </span>
            <h3>{t.cards.callTitle}</h3>
            <p>{t.cards.callSubtitle}</p>
            <a href="tel:+41441234567">+41 44 123 45 67</a>
          </article>
        </div>
      </section>

    </main>
  )
}

export default Contact
