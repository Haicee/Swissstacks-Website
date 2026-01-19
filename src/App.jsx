import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/home'
import AboutUs from './pages/about-us'
import Services from './pages/services'
import Contact from './pages/contact'
import Portfolio from './pages/portfolio'
import { TranslationProvider } from './components/translation'
import './App.css'

function App() {
  return (
    <TranslationProvider>
      <div className="app-shell">
        {/* Navbar sits at the top so it stays sticky above every page section */}
        <Navbar />

        {/* Routes let us separate the landing and about experiences */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>

        {/* Footer anchors contact info + navigation on every page */}
        <Footer />
      </div>
    </TranslationProvider>
  )
}

export default App
