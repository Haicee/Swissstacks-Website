import { useEffect, useState } from 'react'
import './contact.css'
import 'animate.css'
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
    submitSending: 'Sending...',
    statusMessages: {
      success: 'Thanks for reaching out! We will respond shortly.',
      error: 'Unable to send your message. Please try again later.',
    },
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
    submitSending: 'Wird gesendet...',
    statusMessages: {
      success: 'Danke für deine Nachricht! Wir melden uns bald.',
      error: 'Nachricht konnte nicht gesendet werden. Versuche es später erneut.',
    },
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

const CONTACT_CARD_DELAY_STEP = 0.15

function Contact() {
  const { language } = useTranslation()
  const t = translations[language]
  const [status, setStatus] = useState('idle')

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

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    setStatus('loading')

    try {
      await fetch('https://silentforms.com/api/submit', {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      })

      setStatus('success')
      form.reset()
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  const statusMessage =
    status === 'success'
      ? t.statusMessages.success
      : status === 'error'
        ? t.statusMessages.error
        : null

  return (
    <main className="contact-page">
      {/* Hero mirrors About layout for consistency */}
      <section className="contact-hero" id="contact">
        <div className="contact-hero__inner">
          <p className="contact-hero__pill scroll-fade" data-animate-in="animate__fadeIn" style={{ animationDelay: '0s' }} id="contact-pill">
            {t.heroPill}
          </p>
          <h1 className="scroll-fade" data-animate-in="animate__fadeIn" style={{ animationDelay: '0.1s' }}>
            {t.heroHeading} <span>{t.heroHeadingAccent}</span>
          </h1>
          <p className="contact-hero__lede scroll-fade" data-animate-in="animate__fadeIn" style={{ animationDelay: '0.25s' }}>
            {t.heroLead}
          </p>
        </div>
      </section>

      {/* Dual column layout: form (left) and quick contact info (right) */}
      <section className="contact-main" id="contact-form">
        <div className="contact-form scroll-fade" data-animate-in="animate__fadeInLeft">
          <h2>{t.formTitle}</h2>
          <p>{t.formSubtitle}</p>
          <form
            action="https://silentforms.com/api/submit"
            method="POST"
            className="contact-form__body"
            onSubmit={handleSubmit}
          >
            <input
              type="hidden"
              name="accessKey"
              
              /* Access Key for SilentForms */
              value="212e7ed2941269d6c448935051fe1d0e12b972ef0dfa6cf55e199f85397ca48b"
            />
            <div className="form-row">
              <label>
                <span>{t.fields.nameLabel}</span>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder={t.fields.namePlaceholder}
                />
              </label>
              <label>
                <span>{t.fields.emailLabel}</span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={t.fields.emailPlaceholder}
                />
              </label>
            </div>

            <label>
              <span>{t.fields.subjectLabel}</span>
              <input
                type="text"
                name="subject"
                required
                placeholder={t.fields.subjectPlaceholder}
              />
            </label>

            <label>
              <span>{t.fields.messageLabel}</span>
              <textarea
                rows="5"
                name="message"
                required
                placeholder={t.fields.messagePlaceholder}
              />
            </label>

            <input
              type="text"
              name="honeypot"
              aria-hidden="true"
              tabIndex={-1}
              style={{ display: 'none' }}
            />

            <button
              type="submit"
              className="contact-submit"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? t.submitSending : t.submit}
            </button>
          </form>
          {statusMessage && (
            <p
              className={`contact-form__status contact-form__status--${status}`}
              aria-live="polite"
            >
              {statusMessage}
            </p>
          )}
        </div>

        <div className="contact-details scroll-rise" data-animate-in="animate__fadeInRight">
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
            <a href="tel:+41792657283">+41 79 265 72 83</a>
          </article>
        </div>
      </section>

    </main>
  )
}

export default Contact
