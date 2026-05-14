import VerticalSwitcher from './VerticalSwitcher'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-white lg:overflow-hidden"
      style={{
        marginTop: '64px',
        height: 'calc(100dvh - 64px)',
        display: 'grid',
        gridTemplateRows: 'auto auto 1fr',
        overflow: 'hidden',
      }}
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#e5e7eb 1px,transparent 1px),linear-gradient(90deg,#e5e7eb 1px,transparent 1px)',
          backgroundSize: '40px 40px',
          opacity: 0.4,
        }} />

      {/* Blue top accent bar */}
      <div className="absolute top-0 inset-x-0 h-1" style={{ background: 'linear-gradient(90deg,#003399,#C00D55)' }} />

      {/* Soft blue glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(0,51,153,0.07) 0%,transparent 70%)' }} />
      <div className="absolute -top-20 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(192,13,85,0.05) 0%,transparent 70%)' }} />

      {/* ── Row 1 — Headline ── */}
      <div className="relative pl-4 lg:pl-[42px] pr-6 pt-6 pb-1">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-block h-0.5 w-8 rounded" style={{ background: '#C00D55' }} />
            <span className="text-[0.7rem] font-bold tracking-widest uppercase" style={{ color: '#C00D55' }}>
              Decode the Tech Future
            </span>
          </div>
          <h1 className="font-black leading-tight tracking-tight"
            style={{ fontSize: 'clamp(1.5rem,3.2vw,2.6rem)', color: '#003399' }}>
            Welcome to{' '}
            <span style={{ color: '#C00D55' }}>QuantumPod</span>
            <span style={{ color: '#404040' }}> Technologies</span>
          </h1>
        </div>
      </div>

      {/* ── Row 2 — Description ── */}
      <div className="relative pl-4 lg:pl-[42px] pr-6 pt-1 pb-3">
        <div className="w-full max-w-7xl mx-auto">
          <p className="leading-relaxed text-justify lg:text-left"
            style={{ fontSize: 'clamp(0.75rem,1.2vw,0.9rem)', color: '#757575' }}>
            We revolutionize business through high-impact technology. From outcome-centric outsourcing to sovereign IT infrastructure and deterministic SaaS—QuantumPod fuels the next evolution of industry leaders.{' '}
            <span className="font-semibold" style={{ color: '#003399' }}>Three distinct verticals. One singular vision.</span>{' '}
            We are the definitive unified partner for organizations operating at global scale.
          </p>
          {/* Brand divider */}
          <div className="mt-3 section-divider rounded-full" />
        </div>
      </div>

      {/* ── Row 3 — VerticalSwitcher ── */}
      <div className="relative min-h-0 lg:h-full lg:overflow-hidden">
        <VerticalSwitcher embedded />
      </div>
    </section>
  )
}
