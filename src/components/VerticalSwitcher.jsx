import { useState, useEffect, useRef } from 'react'
import { Users, Server, Package, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react'
import outsourcingImg from '../images/IT outsourcing.jpg'
import servicesImg    from '../images/IT services.png'
import productsImg    from '../images/IT products.jpg'

const verticals = [
  {
    id: 'outsourcing',
    tab: 'IT Outsourcing',
    tagline: 'Outcome-Driven Scalability',
    icon: Users,
    image: outsourcingImg,
    imageAlt: 'Professional team collaborating — IT Outsourcing',
    imagePos: 'object-cover object-center',
    headline: 'Integrated Global Teams\nThat Deliver.',
    description: 'We embed world-class engineering talent into your organization — not as vendors, but as mission-aligned partners. Our outcome-driven model aligns every team to your KPIs, not timesheets.',
    pillars: [
      { title: 'Outcome-Driven Scalability' },
      { title: 'Integrated Global Teams' },
      { title: 'Zero-Friction Ramp' },
      { title: 'KPI-Aligned Delivery' },
    ],
    features: ['Elastic staffing', 'Sprint-aligned squads', '40+ country coverage', 'Real-time reporting'],
    badge: '99.4% Retention',
    metric: '500+ Engineers',
  },
  {
    id: 'services',
    tab: 'IT Services',
    tagline: 'Sovereign Infrastructure',
    icon: Server,
    image: servicesImg,
    imageAlt: 'IT infrastructure dashboard — IT Services',
    imagePos: 'object-cover object-center',
    headline: 'Infrastructure Built\nfor Sovereignty.',
    description: 'Enterprise-grade IT infrastructure designed for resilience and compliance. From hybrid cloud to edge computing, we deliver infrastructure that meets the highest standards.',
    pillars: [
      { title: 'Hybrid Cloud Architecture' },
      { title: 'Edge-Native Distribution' },
      { title: 'Zero-Trust Security' },
      { title: 'Compliance Automation' },
    ],
    features: ['24/7 NOC monitoring', 'ISO 27001 certified', 'Sub-10ms latency', 'Auto-scaling fabric'],
    badge: '99.99% Uptime SLA',
    metric: '200+ Deployments',
  },
  {
    id: 'products',
    tab: 'IT Products',
    tagline: 'Deterministic SaaS',
    icon: Package,
    image: productsImg,
    imageAlt: 'Software products — IT Products',
    imagePos: 'object-cover object-center',
    headline: 'SaaS Products That\nScale Deterministically.',
    description: 'Purpose-built SaaS products engineered for enterprise scale. Predictable performance, immutable audit trails, and API-first architecture for the most demanding deployments.',
    pillars: [
      { title: 'API-First Architecture' },
      { title: 'Immutable Audit Trail' },
      { title: 'White-Label Ready' },
      { title: 'Enterprise Integrations' },
    ],
    features: ['10ms P99 latency', 'SOC 2 Type II', 'Multi-tenant SaaS', '10K+ req/s capacity'],
    badge: '10ms P99 Latency',
    metric: '10K+ API req/s',
  },
]

const INTERVAL_MS = 4000

/* ─── Panel ─── */
function VerticalPanel({ v }) {
  return (
    <div className="rounded-2xl flex flex-col lg:grid lg:grid-cols-[38%_62%] lg:h-full lg:overflow-hidden"
      style={{ background: '#f8f9fc', border: '1px solid #e5e7eb', height: '100%' }}>

      {/* Mobile image */}
      <div className="lg:hidden w-full rounded-t-2xl overflow-hidden" style={{ aspectRatio: '16/9' }}>
        <img src={v.image} alt={v.imageAlt}
          style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
      </div>

      {/* Desktop image */}
      <div className="hidden lg:block relative overflow-hidden h-full rounded-l-2xl">
        <img src={v.image} alt={v.imageAlt}
          className={`absolute inset-0 w-full h-full ${v.imagePos}`} />
        {/* Right fade to card bg */}
        <div className="absolute inset-y-0 right-0 w-12"
          style={{ background: 'linear-gradient(to right,transparent,#f8f9fc)' }} />
        {/* Blue accent bar on left edge */}
        <div className="absolute inset-y-0 left-0 w-1 rounded-l-2xl" style={{ background: '#003399' }} />
      </div>

      {/* Text column */}
      <div className="flex flex-col justify-between p-4 lg:p-5 gap-3 lg:gap-0 lg:overflow-y-auto">

        <div>
          <h3 className="font-black leading-tight whitespace-pre-line mb-2"
            style={{ fontSize: 'clamp(0.95rem,1.8vw,1.4rem)', color: '#003399' }}>
            {v.headline}
          </h3>
          <p className="leading-relaxed line-clamp-2"
            style={{ fontSize: 'clamp(0.72rem,1.1vw,0.88rem)', color: '#757575' }}>
            {v.description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
          {v.pillars.map((p, i) => (
            <div key={i} className="flex items-start gap-1.5">
              <span className="mt-1 w-1 h-3 rounded-full flex-shrink-0" style={{ background: '#C00D55' }} />
              <h4 className="font-semibold leading-snug"
                style={{ fontSize: 'clamp(0.7rem,1.1vw,0.85rem)', color: '#404040' }}>{p.title}</h4>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-1">
          {v.features.map((f, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <CheckCircle2 size={10} style={{ color: '#003399', flexShrink: 0 }} />
              <span className="truncate" style={{ fontSize: 'clamp(0.65rem,1vw,0.78rem)', color: '#757575' }}>{f}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-2"
          style={{ borderTop: '1px solid #e5e7eb' }}>
          <div className="flex items-center gap-3">
            <div>
              <div className="font-bold" style={{ fontSize: 'clamp(0.65rem,1vw,0.82rem)', color: '#404040' }}>{v.badge}</div>
              <div style={{ fontSize: 'clamp(0.58rem,0.85vw,0.68rem)', color: '#757575' }}>Primary SLA</div>
            </div>
            <div className="w-px h-5" style={{ background: '#e5e7eb' }} />
            <div>
              <div className="font-bold" style={{ fontSize: 'clamp(0.65rem,1vw,0.82rem)', color: '#003399' }}>{v.metric}</div>
              <div style={{ fontSize: 'clamp(0.58rem,0.85vw,0.68rem)', color: '#757575' }}>Scale metric</div>
            </div>
          </div>
          <a href="#contact"
            className="group inline-flex items-center gap-1.5 font-bold rounded-lg text-white transition-all duration-200"
            style={{
              background: '#C00D55',
              fontSize: 'clamp(0.65rem,1vw,0.78rem)',
              padding: 'clamp(4px,0.5vw,6px) clamp(8px,1vw,12px)',
              boxShadow: '0 2px 8px rgba(192,13,85,0.25)',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#a00b47'}
            onMouseLeave={e => e.currentTarget.style.background = '#C00D55'}
          >
            Get Started
            <ArrowRight size={10} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </div>
  )
}

/* ─── Main component ─── */
export default function VerticalSwitcher({ embedded = false }) {
  const [active, setActive]   = useState(0)
  const [paused, setPaused]   = useState(false)
  const timerRef              = useRef(null)
  const pauseTimerRef         = useRef(null)
  const v                     = verticals[active]

  useEffect(() => {
    if (paused) { clearInterval(timerRef.current); return }
    timerRef.current = setInterval(() => setActive(a => (a + 1) % verticals.length), INTERVAL_MS)
    return () => clearInterval(timerRef.current)
  }, [paused])

  function handleTabClick(i) {
    setActive(i)
    setPaused(true)
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current)
    pauseTimerRef.current = setTimeout(() => setPaused(false), 8000)
  }
  function handleMouseEnter() { setPaused(true) }
  function handleMouseLeave() { setPaused(false) }

  return (
    <section
      id={embedded ? undefined : 'services'}
      className={`relative ${embedded ? 'h-full overflow-hidden' : 'py-20 bg-white'}`}
      style={embedded ? {} : { borderTop: '1px solid #e5e7eb' }}
    >
      {!embedded && (
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
            style={{ background: '#f0f4ff', color: '#003399' }}>
            Our Verticals
          </div>
          <h2 className="font-black leading-tight tracking-tight mb-3"
            style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: '#003399' }}>
            Three Verticals.{' '}
            <span style={{ color: '#C00D55' }}>One Vision.</span>
          </h2>
          <p className="max-w-xl mx-auto leading-relaxed" style={{ color: '#757575' }}>
            A fully integrated stack — from staffing to infrastructure to products — engineered for enterprise scale.
          </p>
        </div>
      )}

      <div className={`relative max-w-7xl mx-auto ${embedded ? 'pl-4 lg:pl-[42px] pr-6 h-full flex flex-col py-2' : 'px-6'}`}>

        {/* Switcher layout */}
        <div className={embedded
          ? 'flex-1 min-h-0 flex flex-col lg:flex-row gap-2'
          : 'grid grid-cols-1 lg:grid-cols-[198px_1fr] gap-6 items-start'
        }>

          {/* ── Mobile tab (embedded): single active + arrows ── */}
          {embedded && (
            <div className="lg:hidden flex-shrink-0 flex items-center gap-2">
              <button
                onClick={() => handleTabClick((active - 1 + verticals.length) % verticals.length)}
                className="w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-lg transition-all"
                style={{ background: '#f0f4ff', border: '1px solid #d1d9f0', color: '#003399' }}
              >
                <ChevronRight size={12} className="rotate-180" />
              </button>
              {(() => {
                const item = verticals[active]
                const TabIcon = item.icon
                return (
                  <div className="relative flex-1 overflow-hidden rounded-xl flex items-center gap-2 px-3 py-2"
                    style={{ background: '#f0f4ff', border: '1px solid #003399' }}>
                    <div className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(0,51,153,0.1)' }}>
                      <TabIcon size={12} style={{ color: '#003399' }} />
                    </div>
                    <div className="min-w-0 flex-1 text-center">
                      <div className="font-semibold leading-tight text-[0.75rem]" style={{ color: '#003399' }}>{item.tab}</div>
                      <div className="mt-0.5 text-[0.62rem]" style={{ color: '#C00D55' }}>{item.tagline}</div>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      {verticals.map((_, i) => (
                        <span key={i} className="block rounded-full transition-all"
                          style={{
                            width: i === active ? '12px' : '6px',
                            height: '6px',
                            background: i === active ? '#C00D55' : '#d1d5db',
                          }} />
                      ))}
                    </div>
                    {!paused && (
                      <span key={`${active}-${paused}`}
                        className="absolute bottom-0 left-0 h-[2px] rounded-full"
                        style={{ background: '#003399', animation: `progressBar ${INTERVAL_MS}ms linear forwards` }} />
                    )}
                  </div>
                )
              })()}
              <button
                onClick={() => handleTabClick((active + 1) % verticals.length)}
                className="w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-lg transition-all"
                style={{ background: '#f0f4ff', border: '1px solid #d1d9f0', color: '#003399' }}
              >
                <ChevronRight size={12} />
              </button>
            </div>
          )}

          {/* ── Desktop tabs (embedded) + all tabs (standalone) ── */}
          <div className={embedded
            ? 'hidden lg:flex lg:flex-col lg:gap-1.5 lg:w-[176px] lg:self-stretch lg:flex-shrink-0'
            : 'flex flex-col gap-2'
          }>
            {verticals.map((item, i) => {
              const TabIcon = item.icon
              const isActive = active === i
              return (
                <button key={item.id} onClick={() => handleTabClick(i)}
                  className="relative group overflow-hidden transition-all duration-200 rounded-xl flex items-center gap-2 px-3 py-2.5 text-left min-w-0"
                  style={{
                    background: isActive ? '#f0f4ff' : 'transparent',
                    border: isActive ? '1px solid #003399' : '1px solid #e5e7eb',
                  }}
                >
                  <div className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 transition-colors"
                    style={{ background: isActive ? 'rgba(0,51,153,0.1)' : '#f3f4f6' }}>
                    <TabIcon size={12} style={{ color: isActive ? '#003399' : '#9ca3af' }} />
                  </div>
                  <div className="block min-w-0 flex-1 overflow-hidden">
                    <div className="font-semibold leading-tight truncate text-[0.72rem]"
                      style={{ color: isActive ? '#003399' : '#6b7280' }}>
                      {item.tab}
                    </div>
                    <div className="mt-0.5 truncate text-[0.6rem]"
                      style={{ color: isActive ? '#C00D55' : '#9ca3af' }}>
                      {item.tagline}
                    </div>
                  </div>
                  {isActive && <ChevronRight size={10} style={{ color: '#003399' }} className="ml-auto flex-shrink-0" />}
                  {isActive && !paused && (
                    <span key={`${i}-${paused}`}
                      className="absolute bottom-0 left-0 h-[2px] rounded-full"
                      style={{ background: '#C00D55', animation: `progressBar ${INTERVAL_MS}ms linear forwards` }} />
                  )}
                </button>
              )
            })}
          </div>

          {/* ── Content panel ── */}
          <div key={v.id}
            className={`rounded-2xl animate-fade-in ${embedded ? 'flex-1 min-h-0 lg:overflow-hidden' : 'overflow-hidden'}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <VerticalPanel v={v} />
          </div>
        </div>
      </div>
    </section>
  )
}
