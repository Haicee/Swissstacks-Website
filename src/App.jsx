import Navbar from './components/navbar'
import Home from './pages/home'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      {/* Navbar sits at the top so it stays sticky above every page section */}
      <Navbar />

      {/* Home wraps the hero + upcoming sections so we keep App lean */}
      <Home />
    </div>
  )
}

export default App
