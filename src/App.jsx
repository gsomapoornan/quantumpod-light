import Navbar from './components/Navbar'
import HeroSlider from './components/HeroSlider'
import TrustBar from './components/TrustBar'
import StatsBar from './components/StatsBar'
import VerticalsSection from './components/VerticalsSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <HeroSlider />
      <TrustBar />
      <StatsBar />
      <VerticalsSection />
      <CTASection />
      <Footer />
    </div>
  )
}
