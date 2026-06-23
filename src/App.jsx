import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroSlider from './components/HeroSlider'
import StatsBar from './components/StatsBar'
import VerticalsSection from './components/VerticalsSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import CareersPage from './pages/CareersPage'
import AdminPage from './pages/AdminPage'

/* ── Home page: scroll to hash section after router navigation (e.g. from /careers) ── */
function HomePage() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    /* Small delay lets the page fully render before scrolling */
    const id = hash.replace('#', '')
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 80)
    return () => clearTimeout(timer)
  }, [hash])

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <HeroSlider />
      <StatsBar />
      <VerticalsSection />
      <CTASection />
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/"            element={<HomePage />} />
      <Route path="/careers"     element={<CareersPage />} />
      <Route path="/admin/jobs"  element={<AdminPage />} />
    </Routes>
  )
}
