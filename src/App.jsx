import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import VerticalSwitcher from './components/VerticalSwitcher'
import StatsBar from './components/StatsBar'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <TrustBar />
      <VerticalSwitcher />
      <StatsBar />
      <CTASection />
      <Footer />
    </div>
  )
}
