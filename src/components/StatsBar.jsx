const STATS = [
  { value: '500+',   label: 'Engineers Deployed' },
  { value: '40+',    label: 'Countries Covered' },
  { value: '99.99%', label: 'Uptime Guaranteed' },
  { value: '10ms',   label: 'P99 API Latency' },
  { value: '200+',   label: 'Enterprise Clients' },
  { value: '3',      label: 'Unified Verticals' },
]

const gradientNum = {
  fontFamily: "'Orbitron', sans-serif",
  fontWeight: 800,
  fontSize: 'clamp(1.8rem, 3.2vw, 2.8rem)',
  letterSpacing: '-0.01em',
  lineHeight: 1,
  marginBottom: '8px',
  background: 'linear-gradient(135deg, #ffffff 0%, #e0ecff 45%, #a8c8ff 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  filter: 'drop-shadow(0 0 12px rgba(26,95,193,0.3))',
}

export default function StatsBar() {
  return (
    <section style={{ background: 'linear-gradient(135deg, #000a28 0%, #001040 60%, #000a28 100%)', position: 'relative' }}>
      {/* Top gradient line */}
      <div style={{ height: '2px', background: 'linear-gradient(90deg, transparent 0%, #C00D55 20%, #003399 50%, #1A5FC1 80%, transparent 100%)', boxShadow: '0 0 12px rgba(0,51,153,0.5)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-14 py-14">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-12">
          <span style={{ width: '28px', height: '2px', background: '#C00D55', flexShrink: 0 }} />
          <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.52rem', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C00D55' }}>
            By The Numbers
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-8 gap-y-10">
          {STATS.map((s, i) => (
            <div key={i} style={{ borderLeft: '2px solid rgba(192,13,85,0.35)', paddingLeft: '16px' }}>
              <div style={gradientNum}>{s.value}</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(180,212,255,0.7)', lineHeight: 1.6 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient line */}
      <div style={{ height: '2px', background: 'linear-gradient(90deg, transparent 0%, #C00D55 20%, #003399 50%, #1A5FC1 80%, transparent 100%)' }} />
    </section>
  )
}
