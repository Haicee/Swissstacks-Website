import { createContext, useContext, useState } from 'react'
import './translation.css'
import languageIcon from '../assets/language.png'

const TranslationContext = createContext({
  language: 'en',
  toggleLanguage: () => {},
})

export function TranslationProvider({ children }) {
  const [language, setLanguage] = useState('en')

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'de' : 'en'))
  }

  const isEnglish = language === 'en'
  const nextLabel = isEnglish ? 'DE' : 'EN'
  const ariaLabel = isEnglish ? 'Switch to German' : 'Switch to English'

  return (
    <TranslationContext.Provider value={{ language, toggleLanguage }}>
      {children}
      <button type="button" className="language-toggle" onClick={toggleLanguage} aria-label={ariaLabel}>
        <img src={languageIcon} alt="" aria-hidden="true" />
        <span className="language-toggle__code">{nextLabel}</span>
      </button>
    </TranslationContext.Provider>
  )
}

export function useTranslation() {
  return useContext(TranslationContext)
}
