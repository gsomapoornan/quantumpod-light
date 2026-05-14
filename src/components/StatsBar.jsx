const STATS = [
  { value: '500+',   label: 'Engineers Deployed' },
  { value: '40+',    label: 'Countries Covered' },
  { value: '99.99%', label: 'Uptime Guaranteed' },
  { value: '10ms',   label: 'P99 API Latency' },
  { value: '200+',   label: 'Enterprise Clients' },
  { value: '3',      label: 'Unified Verticals' },
]

export default function StatsBar() {
  return (
    <section className="py-16 border-t" style={{ background: '#003399', borderColor: '#003399' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
          {STATS.map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-black leading-none mb-1"
                style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', color: '#ffffff' }}>
                {s.value}
              </div>
              <div className="text-xs font-medium tracking-wide uppercase"
                style={{ color: 'rgba(255,255,255,0.6)' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
