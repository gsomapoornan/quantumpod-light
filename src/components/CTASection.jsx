import { ArrowRight, Mail } from 'lucide-react'

export default function CTASection() {
  return (
    <section id="contact" style={{ background: '#f5f8ff', position: 'relative' }}>
      {/* Top gradient line */}
      <div style={{ height: '2px', background: 'linear-gradient(90deg, transparent 0%, #C00D55 20%, #003399 50%, #1A5FC1 80%, transparent 100%)', boxShadow: '0 0 12px rgba(0,51,153,0.3)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-14 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left — headline block */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span style={{ width: '28px', height: '2px', background: '#C00D55', flexShrink: 0 }} />
              <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.52rem', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C00D55' }}>
                Get In Touch
              </span>
            </div>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', letterSpacing: '-0.03em', color: '#003399', lineHeight: 1.1, marginBottom: '16px' }}>
              Ready to Decode<br />the Tech Future?
            </h2>
            <div style={{ width: '48px', height: '2px', background: 'linear-gradient(90deg, #C00D55, #003399)', marginBottom: '20px' }} />
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1rem', fontWeight: 400, letterSpacing: '0em', lineHeight: 1.75, color: '#757575', maxWidth: '420px' }}>
              Partner with QuantumPod Technologies and unlock the full potential of your technology investments — across outsourcing, infrastructure, and products.
            </p>
          </div>

          {/* Right — actions block */}
          <div className="flex flex-col gap-5">
            {/* Primary CTA */}
            <a
              href="mailto:hello@quantumpod.tech"
              className="inline-flex items-center gap-3 transition-all duration-200 group"
              style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#ffffff', padding: '16px 28px', background: '#C00D55', border: '1.5px solid #C00D55', textDecoration: 'none', width: 'fit-content' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#C00D55' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#C00D55'; e.currentTarget.style.color = '#ffffff' }}
            >
              <Mail size={13} />
              Start a Conversation
              <ArrowRight size={13} />
            </a>

            {/* Secondary CTA */}
            <a
              href="#services"
              className="inline-flex items-center gap-3 transition-all duration-200"
              style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#003399', padding: '16px 28px', background: 'transparent', border: '1.5px solid #003399', textDecoration: 'none', width: 'fit-content' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#003399'; e.currentTarget.style.color = '#ffffff' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#003399' }}
            >
              Explore Our Verticals
              <ArrowRight size={13} />
            </a>

            {/* Contact detail */}
            <p style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.46rem', fontWeight: 400, letterSpacing: '0.12em', color: '#9ca3af', marginTop: '4px' }}>
              hello@quantumpod.tech · Response within 24 hours
            </p>
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div style={{ height: '2px', background: 'linear-gradient(90deg, transparent 0%, #C00D55 20%, #003399 50%, #1A5FC1 80%, transparent 100%)' }} />
    </section>
  )
}
