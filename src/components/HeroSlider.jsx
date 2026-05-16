import { useState, useEffect, useRef, useCallback } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import logoImg from '../images/logo.png'
import outsourcingImg from '../images/IT outsourcing.jpg'
import servicesImg    from '../images/IT Services.jpg'
import productsImg    from '../images/IT products.jpg'

const SLIDES = [
  {
    id: 'outsourcing',
    image: outsourcingImg,
    label: 'IT Outsourcing',
    headline: 'Integrated Global Teams That Deliver',
    description: 'Outcome-driven engineering talent embedded in your organization — aligned to your KPIs, not timesheets. Elastic squads across 40+ countries.',
    cta: 'Explore Outsourcing',
    accent: '#003399',
  },
  {
    id: 'services',
    image: servicesImg,
    label: 'IT Services',
    headline: 'Infrastructure Built for Sovereignty',
    description: 'Enterprise-grade hybrid cloud, edge computing, and zero-trust security — delivering 99.99% uptime SLA for the most demanding environments.',
    cta: 'Explore IT Services',
    accent: '#C00D55',
  },
  {
    id: 'products',
    image: productsImg,
    label: 'IT Products',
    headline: 'SaaS Products That Scale Deterministically',
    description: 'API-first, SOC 2 certified SaaS products engineered for enterprise scale. Immutable audit trails. 10ms P99 latency. Built for 10K+ req/s.',
    cta: 'Explore Products',
    accent: '#003399',
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
          {/* Refined gradient — slight navy tint at bottom for brand cohesion */}
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,5,20,0.1) 35%, rgba(0,10,40,0.82) 100%)' }} />
          {/* Left edge crimson rule */}
          <div className="absolute inset-y-0 left-0 w-[3px]" style={{ background: '#C00D55' }} />
        </div>
      ))}

      {/* ── Vertical nav — right side, Orbitron ── */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-end gap-5">
        {SLIDES.map((s, i) => (
          <button key={s.id} onClick={() => goTo(i, i > active ? 'next' : 'prev')}
            className="flex items-center gap-2 transition-all duration-300">
            <span
              style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: '0.52rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: i === active ? '#ffffff' : 'rgba(255,255,255,0.3)',
                writingMode: 'vertical-rl',
                textOrientation: 'mixed',
                transform: 'rotate(180deg)',
                transition: 'color 0.3s ease',
              }}>
              {s.label}
            </span>
            <span
              className="flex-shrink-0 transition-all duration-300"
              style={{
                width: '2px',
                height: i === active ? '44px' : '14px',
                background: i === active ? '#C00D55' : 'rgba(255,255,255,0.2)',
                borderRadius: '1px',
              }} />
          </button>
        ))}
      </div>

      {/* ── Main content block — bottom left ── */}
      <div
        className="absolute bottom-0 left-0 z-20 px-8 lg:px-14 pb-10 lg:pb-14"
        style={{ maxWidth: 'min(680px, 65vw)' }}
      >
        {/* Category tag — left crimson rule, no blob */}
        <div
          className="flex items-center gap-3 mb-4"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.3s ease, transform 0.3s ease',
          }}>
          <span className="flex-shrink-0" style={{ width: '28px', height: '2px', background: '#C00D55' }} />
          <span
            style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: '0.6rem',
              fontWeight: 700,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#C00D55',
            }}>
            {slide.label}
          </span>
        </div>

        {/* Headline — white-to-ice-blue gradient, tech glow */}
        <h1
          className="leading-tight mb-4"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(1.6rem, 3.5vw, 3rem)',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            background: 'linear-gradient(135deg, #ffffff 0%, #e0ecff 45%, #a8c8ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 0 18px rgba(26,95,193,0.35))',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(18px)',
            transition: 'opacity 0.38s ease 0.06s, transform 0.38s ease 0.06s',
          }}>
          {slide.headline}
        </h1>

        {/* Thin rule divider */}
        <div
          className="mb-4"
          style={{
            width: '48px',
            height: '1px',
            background: 'rgba(255,255,255,0.35)',
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.3s ease 0.12s',
          }} />

        {/* Description */}
        <p
          className="leading-relaxed mb-7"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(0.88rem, 1.2vw, 1rem)',
            fontWeight: 400,
            color: 'rgba(200,220,255,0.85)',
            letterSpacing: '0.01em',
            lineHeight: 1.75,
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(14px)',
            transition: 'opacity 0.38s ease 0.12s, transform 0.38s ease 0.12s',
          }}>
          {slide.description}
        </p>

        {/* CTA + nav arrows */}
        <div
          className="flex items-center gap-5"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.38s ease 0.18s, transform 0.38s ease 0.18s',
          }}>
          {/* Sharp outlined CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 font-bold text-white text-xs tracking-widest uppercase transition-all duration-250 group"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              letterSpacing: '0.15em',
              fontSize: '0.62rem',
              padding: '10px 22px',
              border: '1.5px solid rgba(255,255,255,0.7)',
              background: 'transparent',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#C00D55'; e.currentTarget.style.borderColor = '#C00D55' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)' }}
          >
            {slide.cta}
            <ArrowRight size={12} />
          </a>

          {/* Thin separator */}
          <span style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.2)' }} />

          {/* Minimal prev/next — no circles */}
          <div className="flex items-center gap-1">
            <button
              onClick={prev}
              className="flex items-center justify-center transition-all duration-200"
              style={{ color: 'rgba(255,255,255,0.5)', padding: '6px' }}
              onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
            >
              <ChevronLeft size={20} strokeWidth={1.5} />
            </button>
            <button
              onClick={next}
              className="flex items-center justify-center transition-all duration-200"
              style={{ color: 'rgba(255,255,255,0.5)', padding: '6px' }}
              onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
            >
              <ChevronRight size={20} strokeWidth={1.5} />
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
