import asianPaintsLogo from '../images/asian-paints-logo-png_seeklogo-315813.png'
import ltInfotechLogo  from '../images/ltinfotech.jpg'
import nammaMetroLogo  from '../images/namma mtero logo.jpeg'

const CLIENTS = [
  { name: 'Asian Paints',  logo: asianPaintsLogo,  bg: '#ffffff' },
  { name: 'LTI Mindtree', logo: ltInfotechLogo,    bg: '#ffffff' },
  { name: 'Namma Metro',  logo: nammaMetroLogo,    bg: '#ffffff' },
]

/* Duplicate the list for seamless infinite marquee loop */
const MARQUEE = [...CLIENTS, ...CLIENTS, ...CLIENTS]

export default function StatsBar() {
  return (
    <section style={{ background: 'linear-gradient(135deg, #000a28 0%, #001040 60%, #000a28 100%)', position: 'relative', overflow: 'hidden' }}>
      {/* Top gradient line */}
      <div style={{ height: '2px', background: 'linear-gradient(90deg, transparent 0%, #C00D55 20%, #003399 50%, #1A5FC1 80%, transparent 100%)', boxShadow: '0 0 12px rgba(0,51,153,0.5)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-14 pt-8 pb-2">
        {/* Section header */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div className="flex items-center gap-3">
            <span style={{ width: '28px', height: '2px', background: '#C00D55', flexShrink: 0 }} />
            <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.52rem', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C00D55' }}>
              Trusted By
            </span>
          </div>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.82rem', color: 'rgba(180,212,255,0.5)', letterSpacing: '0.04em' }}>
            Powering enterprises across industries
          </p>
        </div>
      </div>

      {/* ── Infinite marquee strip ── */}
      <div style={{ position: 'relative', overflow: 'hidden', paddingBottom: '36px' }}>
        {/* Left + right fade masks */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
          background: 'linear-gradient(90deg, #000a28 0%, transparent 12%, transparent 88%, #000a28 100%)' }} />

        <div style={{
          display: 'flex',
          gap: '48px',
          animation: 'marquee 22s linear infinite',
          width: 'max-content',
        }}>
          {MARQUEE.map((c, i) => (
            <div key={i}
              className="flex items-center justify-center flex-shrink-0"
              style={{ height: '64px', padding: '0 16px', opacity: 0.8, transition: 'opacity 0.25s ease' }}
              onMouseEnter={e => e.currentTarget.style.opacity = '1'}
              onMouseLeave={e => e.currentTarget.style.opacity = '0.8'}
            >
              <img
                src={c.logo}
                alt={c.name}
                style={{
                  maxWidth: '140px',
                  maxHeight: '52px',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient line */}
      <div style={{ height: '2px', background: 'linear-gradient(90deg, transparent 0%, #C00D55 20%, #003399 50%, #1A5FC1 80%, transparent 100%)' }} />

      {/* Keyframe injected inline — avoids touching global CSS */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0) }
          100% { transform: translateX(-33.333%) }
        }
      `}</style>
    </section>
  )
}
