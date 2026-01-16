import { createContext, useContext, useState } from 'react'
import './translation.css'
import languageIcon from '../assets/language.png'

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'de', label: 'Deutsch' },
]

/**
 * Translation context for language switching
 */
const TranslationContext = createContext({
  language: 'de',
  toggleLanguage: () => {},
  setLanguage: () => {},
})

export function TranslationProvider({ children }) {
  const [language, setLanguage] = useState('de')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'de' : 'en'))
  }

  const toggleMenuVisibility = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const openMenu = () => setIsMenuOpen(true)
  const closeMenu = () => setIsMenuOpen(false)

  const handleContainerBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      closeMenu()
    }
  }

  const handleSelectLanguage = (code) => {
    setLanguage(code)
    closeMenu()
  }

  const currentLanguage = LANGUAGES.find((entry) => entry.code === language) ?? LANGUAGES[0]

  return (
    <TranslationContext.Provider value={{ language, toggleLanguage, setLanguage }}>
      {children}
      <div
        className={`language-switcher ${isMenuOpen ? 'language-switcher--open' : ''}`}
        onMouseEnter={openMenu}
        onMouseLeave={closeMenu}
        onFocus={openMenu}
        onBlur={handleContainerBlur}
      >
        <button
          type="button"
          className="language-toggle"
          onClick={toggleMenuVisibility}
          aria-label="Select language"
          aria-haspopup="menu"
          aria-expanded={isMenuOpen}
        >
          <img src={languageIcon} alt="" aria-hidden="true" />
          <span className="language-toggle__code">{currentLanguage.code.toUpperCase()}</span>
        </button>

        <ul className={`language-menu ${isMenuOpen ? 'language-menu--visible' : ''}`} role="menu" aria-label="Language options">
          {LANGUAGES.map((lang) => (
            <li key={lang.code}>
              <button
                type="button"
                className={`language-menu__item ${language === lang.code ? 'language-menu__item--active' : ''}`}
                onClick={() => handleSelectLanguage(lang.code)}
                role="menuitemradio"
                aria-checked={language === lang.code}
              >
                <span className="language-menu__label">{lang.label}</span>
                <span className="language-menu__code">{lang.code.toUpperCase()}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </TranslationContext.Provider>
  )
}

export function useTranslation() {
  return useContext(TranslationContext)
}
