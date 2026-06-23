import { useState, useEffect, useRef, useCallback } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import outsourcingImg from '../images/IT outsourcing.jpg'
import servicesImg    from '../images/IT Services.jpg'
import productsImg    from '../images/IT products.jpg'

const SLIDES = [
  {
    id: 'outsourcing',
    image: outsourcingImg,
    label: 'IT Outsourcing',
    headline: `Integrated Global Teams
That Deliver.`,
    description: 'Outcome-driven engineering talent embedded in your organization — aligned to your KPIs, not timesheets. Elastic squads across 40+ countries.',
    cta: 'Explore Outsourcing',
    accent: '#1A5FC1',
  },
  {
    id: 'services',
    image: servicesImg,
    label: 'IT Services',
    headline: `Infrastructure Built
for Sovereignty.`,
    description: 'Enterprise-grade hybrid cloud, edge computing, and zero-trust security — delivering 99.99% uptime SLA for the most demanding environments.',
    cta: 'Explore IT Services',
    accent: '#C00D55',
  },
  {
    id: 'products',
    image: productsImg,
    label: 'IT Products',
    headline: `SaaS That Scales
Deterministically.`,
    description: 'API-first, SOC 2 certified SaaS products engineered for enterprise scale. Immutable audit trails. 10ms P99 latency. Built for 10K+ req/s.',
    cta: 'Explore Products',
    accent: '#003399',
  },
  {
    id: 'digital-marketing',
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1600&q=80',
    label: 'Digital Marketing',
    headline: `Brand Growth Engineered
for the Digital Era.`,
    description: 'Full-funnel digital marketing — from performance campaigns and brand management to influencer strategy. Data-driven execution that converts audiences into revenue.',
    cta: 'Explore Digital Marketing',
    accent: '#7C3AED',
  },
]

const INTERVAL_MS = 5000

export default function HeroSlider() {
  const [active, setActive]     = useState(0)
  const [paused, setPaused]     = useState(false)
  const [animDir, setAnimDir]   = useState('next') // 'next' | 'prev'
  const [visible, setVisible]   = useState(true)
  const timerRef                = useRef(null)
  const slide                   = SLIDES[active]

  const goTo = useCallback((idx, dir = 'next') => {
    setAnimDir(dir)
    setVisible(false)
    setTimeout(() => {
      setActive(idx)
      setVisible(true)
    }, 220)
  }, [])

  const next = useCallback(() => goTo((active + 1) % SLIDES.length, 'next'), [active, goTo])
  const prev = useCallback(() => goTo((active - 1 + SLIDES.length) % SLIDES.length, 'prev'), [active, goTo])

  useEffect(() => {
    if (paused) { clearInterval(timerRef.current); return }
    timerRef.current = setInterval(next, INTERVAL_MS)
    return () => clearInterval(timerRef.current)
  }, [paused, next])

  return (
    <section
      id="home"
      className="relative overflow-hidden cursor-pointer"
      style={{ marginTop: '64px', height: 'calc(100dvh - 64px)' }}
      onClick={() => setPaused(p => !p)}
    >

      {/* ── Background images (all preloaded, only active is visible) ── */}
      {SLIDES.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === active ? 1 : 0, zIndex: 0 }}
        >
          <img
            src={s.image}
            alt={s.label}
            className="w-full h-full object-cover object-center"
          />
          {/* Strong multi-stop overlay — image stays vivid top, text always legible bottom */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to bottom, rgba(0,8,30,0.18) 0%, rgba(0,8,30,0.22) 30%, rgba(0,8,30,0.55) 58%, rgba(0,8,30,0.88) 80%, rgba(0,5,20,0.97) 100%)'
          }} />
          {/* Left edge accent rule — per slide color */}
          <div className="absolute inset-y-0 left-0 w-[4px]" style={{ background: `linear-gradient(to bottom, ${s.accent}00, ${s.accent}, ${s.accent}00)` }} />
        </div>
      ))}

      {/* ── Main content block — bottom left ── */}
      <div
        className="absolute bottom-0 left-0 right-0 lg:right-auto z-20 px-8 lg:px-14 pb-12 lg:pb-16"
        style={{ maxWidth: 'min(760px, 72vw)', width: '100%' }}
      >
        {/* Label tag — solid accent pill box, title only */}
        <div
          className="inline-flex items-center mb-5"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.3s ease, transform 0.3s ease',
          }}>
          <div className="inline-flex items-center px-3 py-1.5" style={{
            background: slide.accent,
            borderLeft: '3px solid rgba(255,255,255,0.5)',
          }}>
            <span style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: '0.52rem',
              fontWeight: 700,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: '#ffffff',
            }}>{slide.label}</span>
          </div>
        </div>

        {/* Headline — large, bold, white with strong text-shadow for legibility over any image */}
        <h1
          className="mb-5"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(2rem, 4.2vw, 3.6rem)',
            letterSpacing: '-0.025em',
            lineHeight: 1.08,
            color: '#ffffff',
            whiteSpace: 'pre-line',
            textShadow: '0 2px 4px rgba(0,0,0,0.5), 0 8px 32px rgba(0,0,0,0.4)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(18px)',
            transition: 'opacity 0.38s ease 0.06s, transform 0.38s ease 0.06s',
          }}>
          {slide.headline}
        </h1>
        {/* Description card — frosted glass with left accent border */}
        <div
          className="mb-6"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(14px)',
            transition: 'opacity 0.38s ease 0.12s, transform 0.38s ease 0.12s',
          }}>
          <div style={{
            background: 'rgba(0,8,30,0.55)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderLeft: `3px solid ${slide.accent}`,
            padding: '14px 18px',
            marginBottom: '14px',
          }}>
            <p style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(0.88rem, 1.15vw, 1rem)',
              fontWeight: 400,
              color: 'rgba(220,232,255,0.92)',
              letterSpacing: '0.01em',
              lineHeight: 1.75,
              margin: 0,
              textAlign: 'justify',
              textAlignLast: 'left',
            }}>
              {slide.description}
            </p>
          </div>

        </div>

        {/* CTA + nav arrows */}
        <div
          className="flex items-center gap-5"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.38s ease 0.18s, transform 0.38s ease 0.18s',
          }}>
          {/* Solid accent CTA */}
          <a
            href="#contact"
            onClick={e => e.stopPropagation()}
            className="inline-flex items-center gap-2.5 font-bold transition-all duration-200 group"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              letterSpacing: '0.14em',
              fontSize: '0.58rem',
              padding: '11px 24px',
              background: slide.accent,
              border: `1.5px solid ${slide.accent}`,
              color: '#ffffff',
              textDecoration: 'none',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#ffffff' }}
            onMouseLeave={e => { e.currentTarget.style.background = slide.accent; e.currentTarget.style.color = '#ffffff' }}
          >
            {slide.cta}
            <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* Thin separator */}
          <span style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.18)' }} />

          {/* prev/next */}
          <div className="flex items-center gap-1">
            <button
              onClick={e => { e.stopPropagation(); prev() }}
              className="flex items-center justify-center transition-all duration-200"
              style={{ color: 'rgba(255,255,255,0.45)', padding: '6px', border: '1px solid rgba(255,255,255,0.15)' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.borderColor = slide.accent }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)' }}
            >
              <ChevronLeft size={18} strokeWidth={2} />
            </button>
            <button
              onClick={e => { e.stopPropagation(); next() }}
              className="flex items-center justify-center transition-all duration-200"
              style={{ color: 'rgba(255,255,255,0.45)', padding: '6px', border: '1px solid rgba(255,255,255,0.15)' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.borderColor = slide.accent }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)' }}
            >
              <ChevronRight size={18} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      {/* ── Bottom progress line (full width, no dots) ── */}
      <div className="absolute bottom-0 inset-x-0 z-20" style={{ height: '3px', background: 'rgba(255,255,255,0.12)' }}>
        {!paused && (
          <div
            key={`${active}-${paused}`}
            style={{
              height: '100%',
              background: '#C00D55',
              animation: `progressBar ${INTERVAL_MS}ms linear forwards`,
            }}
          />
        )}
      </div>
    </section>
  )
}
