import { useState, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, ChevronDown, ArrowRight, Server, Package, Users, TrendingUp } from 'lucide-react'
import logoImg from '../images/logo.png'

const SERVICES = [
  {
    icon: Users,
    label: 'IT Outsourcing',
    tag: 'GLOBAL TALENT',
    desc: 'Outcome-driven engineering squads embedded in your org. Aligned to KPIs, not timesheets.',
    section: 'outsourcing',
    accent: '#C00D55',
  },
  {
    icon: Server,
    label: 'IT Services',
    tag: 'INFRASTRUCTURE',
    desc: 'Hybrid cloud, edge computing & zero-trust security. 99.99% uptime SLA guaranteed.',
    section: 'services',
    accent: '#1A5FC1',
  },
  {
    icon: Package,
    label: 'IT Products',
    tag: 'SAAS PLATFORM',
    desc: 'API-first, SOC 2 certified SaaS. 10ms P99 latency. Built for 10K+ req/s at enterprise scale.',
    section: 'products',
    accent: '#003399',
  },
  {
    icon: TrendingUp,
    label: 'Digital Marketing',
    tag: 'GROWTH ENGINE',
    desc: 'Performance marketing, brand management & influencer strategy. ROI-tracked, full-funnel execution.',
    section: 'digital-marketing',
    accent: '#7C3AED',
  },
]

const NAV_ITEMS = ['Home', 'About', 'Contact']

const navLinkStyle = {
  fontFamily: "'Orbitron', sans-serif",
  fontSize: '0.58rem',
  fontWeight: 700,
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: '#003399',
  padding: '6px 14px',
  position: 'relative',
  transition: 'color 0.2s ease',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null)
  const closeTimer = useRef(null)
  const location   = useLocation()
  const navigate   = useNavigate()

  const openServices = () => { clearTimeout(closeTimer.current); setServicesOpen(true) }
  const closeServices = () => { closeTimer.current = setTimeout(() => setServicesOpen(false), 120) }

  /* Navigate to a hash section — scrolls in-page when on '/', navigates to '/#section' from other routes */
  const goToSection = (section, extras = {}) => e => {
    e.preventDefault()
    const { closeMobile = false, closeDropdown = false } = extras
    if (closeMobile)   setMobileOpen(false)
    if (closeDropdown) setServicesOpen(false)
    if (location.pathname === '/') {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(`/#${section}`)
    }
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white" style={{ height: '64px' }}>
      {/* Tech gradient separator */}
      <div className="absolute bottom-0 inset-x-0" style={{ height: '2px', background: 'linear-gradient(90deg, transparent 0%, #C00D55 20%, #003399 50%, #1A5FC1 80%, transparent 100%)', boxShadow: '0 0 12px 1px rgba(0,51,153,0.45), 0 0 4px rgba(192,13,85,0.35)' }} />

      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

        {/* Logo */}
        <a href="/#home" onClick={goToSection('home')} className="flex items-center gap-2">
          <img src={logoImg} alt="QuantumPod Logo" className="h-8 w-auto" style={{ mixBlendMode: 'multiply' }} />
          <span className="uppercase leading-none" style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 900, fontSize: '1.05rem', background: 'linear-gradient(135deg, #0A3F8A 0%, #1A5FC1 45%, #3a7bd5 70%, #0A3F8A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', letterSpacing: '0.06em' }}>
            QUANTUMPOD
          </span>
          <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.48rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#9ca3af' }}>Technologies</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0">

          {/* Home */}
          <a href="/#home" onClick={goToSection('home')}
            style={{ ...navLinkStyle, color: hoveredItem === 'Home' ? '#C00D55' : '#003399' }}
            onMouseEnter={() => setHoveredItem('Home')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            Home
            {hoveredItem === 'Home' && <span className="absolute bottom-0 left-3 right-3 h-[2px]" style={{ background: '#C00D55' }} />}
          </a>

          {/* Services with dropdown — dropdown is positioned relative to the full header to avoid viewport overflow */}
          <div className="static" onMouseEnter={openServices} onMouseLeave={closeServices}>
            <button
              style={{ ...navLinkStyle, color: servicesOpen || hoveredItem === 'Services' ? '#C00D55' : '#003399', display: 'inline-flex', alignItems: 'center', gap: '5px' }}
              onMouseEnter={() => setHoveredItem('Services')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              Services
              <ChevronDown size={10} strokeWidth={2.5} style={{ transition: 'transform 0.2s', transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
              {(servicesOpen || hoveredItem === 'Services') && <span className="absolute bottom-0 left-3 right-3 h-[2px]" style={{ background: '#C00D55' }} />}
            </button>

            {/* ── Mega dropdown ── */}
            {servicesOpen && (
              <div
                className="fixed z-50"
                style={{
                  top: '64px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 'min(880px, 98vw)',
                  background: '#ffffff',
                  border: '1px solid rgba(0,51,153,0.1)',
                  borderTop: '2px solid transparent',
                  borderImage: 'linear-gradient(90deg, #C00D55, #003399, #1A5FC1) 1',
                  boxShadow: '0 20px 60px rgba(0,20,80,0.12), 0 4px 16px rgba(0,51,153,0.08)',
                  padding: '0',
                  overflow: 'hidden',
                }}
              >
                {/* Dropdown header */}
                <div className="px-6 py-4 flex items-center justify-between" style={{ borderBottom: '1px solid rgba(0,51,153,0.07)', background: '#f5f8ff' }}>
                  <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.52rem', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#003399' }}>
                    Our Verticals
                  </span>
                  <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.48rem', letterSpacing: '0.2em', color: '#757575' }}>
                    Four verticals · One vision
                  </span>
                </div>

                {/* Service cards */}
                <div className="grid grid-cols-4 gap-0">
                  {SERVICES.map((s, i) => {
                    const Icon = s.icon
                    return (
                      <a
                        key={s.label}
                        href={`/#${s.section}`}
                        className="group flex flex-col gap-3 px-5 py-5 transition-all duration-200"
                        style={{
                          borderRight: i < 3 ? '1px solid rgba(0,51,153,0.08)' : 'none',
                          textDecoration: 'none',
                          background: 'transparent',
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,51,153,0.04)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                        onClick={goToSection(s.section, { closeDropdown: true })}
                      >
                        {/* Icon + tag row */}
                        <div className="flex items-center gap-2">
                          <div className="flex items-center justify-center w-7 h-7 flex-shrink-0" style={{ background: `${s.accent}22`, border: `1px solid ${s.accent}55` }}>
                            <Icon size={13} style={{ color: s.accent }} strokeWidth={1.8} />
                          </div>
                          <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.42rem', fontWeight: 700, letterSpacing: '0.22em', color: s.accent }}>
                            {s.tag}
                          </span>
                        </div>

                        {/* Label */}
                        <div>
                          <p style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.04em', color: '#003399', marginBottom: '6px', lineHeight: 1.3 }}>
                            {s.label}
                          </p>
                          <p style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.5rem', fontWeight: 400, letterSpacing: '0.05em', lineHeight: 1.9, color: '#757575' }}>
                            {s.desc}
                          </p>
                        </div>

                        {/* Explore link */}
                        <div className="flex items-center gap-1.5 mt-auto" style={{ color: s.accent }}>
                          <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.48rem', fontWeight: 700, letterSpacing: '0.2em' }}>Explore</span>
                          <ArrowRight size={10} strokeWidth={2} />
                        </div>
                      </a>
                    )
                  })}
                </div>

                {/* Dropdown footer */}
                <div className="px-6 py-3 flex items-center justify-between" style={{ borderTop: '1px solid rgba(0,51,153,0.07)', background: '#f5f8ff' }}>
                  <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.45rem', letterSpacing: '0.15em', color: '#9ca3af' }}>
                    QuantumPod Technologies · Unified Digital Partner
                  </span>
                  <a href="/#contact" onClick={goToSection('contact', { closeDropdown: true })}
                    className="inline-flex items-center gap-1.5"
                    style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.48rem', fontWeight: 700, letterSpacing: '0.18em', color: '#C00D55', textDecoration: 'none' }}>
                    Talk to us <ArrowRight size={9} />
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* About + Contact */}
          {NAV_ITEMS.filter(n => n !== 'Home').map(label => (
            <a key={label} href={`/#${label.toLowerCase()}`}
              onClick={goToSection(label.toLowerCase())}
              style={{ ...navLinkStyle, color: hoveredItem === label ? '#C00D55' : '#003399' }}
              onMouseEnter={() => setHoveredItem(label)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {label}
              {hoveredItem === label && <span className="absolute bottom-0 left-3 right-3 h-[2px]" style={{ background: '#C00D55' }} />}
            </a>
          ))}

          {/* Careers */}
          <Link to="/careers"
            style={{ ...navLinkStyle, color: hoveredItem === 'Careers' ? '#C00D55' : '#003399', textDecoration: 'none', position: 'relative' }}
            onMouseEnter={() => setHoveredItem('Careers')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            Careers
            {hoveredItem === 'Careers' && <span className="absolute bottom-0 left-3 right-3 h-[2px]" style={{ background: '#C00D55' }} />}
          </Link>

          {/* CTA */}
          <a href="/#contact" onClick={goToSection('contact')}
            className="ml-4 inline-flex items-center gap-2"
            style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#ffffff', padding: '9px 20px', background: '#C00D55', border: '1.5px solid #C00D55', textDecoration: 'none', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#C00D55' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#C00D55'; e.currentTarget.style.color = '#ffffff' }}
          >
            Get Started <ArrowRight size={11} />
          </a>
        </nav>

        {/* Mobile burger */}
        <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} style={{ color: '#003399' }}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-16 inset-x-0 shadow-lg px-6 py-5 flex flex-col gap-1" style={{ background: '#ffffff', borderTop: '1px solid rgba(0,51,153,0.1)' }}>
          {['Home', 'About', 'Contact'].map(label => (
            <a key={label} href={`/#${label.toLowerCase()}`}
              onClick={goToSection(label.toLowerCase(), { closeMobile: true })}
              style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#003399', padding: '10px 0', borderBottom: '1px solid rgba(0,51,153,0.07)', textDecoration: 'none', display: 'block' }}>
              {label}
            </a>
          ))}
          <Link to="/careers" onClick={() => setMobileOpen(false)}
            style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#003399', padding: '10px 0', borderBottom: '1px solid rgba(0,51,153,0.07)', textDecoration: 'none', display: 'block' }}>
            Careers
          </Link>
          <div className="pl-3 mt-1 flex flex-col gap-0.5">
          {SERVICES.map(s => (
            <a key={s.label} href={`/#${s.section}`}
              onClick={goToSection(s.section, { closeMobile: true })}
              style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.52rem', fontWeight: 600, letterSpacing: '0.16em', color: s.accent, padding: '7px 0', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '12px', height: '1.5px', background: s.accent, flexShrink: 0 }} />{s.label}
            </a>
          ))}
          </div>
          <a href="/#contact" onClick={goToSection('contact', { closeMobile: true })}
            className="mt-3 text-center inline-flex items-center justify-center gap-2"
            style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.18em', color: '#ffffff', padding: '11px', background: '#C00D55', textDecoration: 'none' }}>
            Get Started <ArrowRight size={11} />
          </a>
        </div>
      )}
    </header>
  )
}
