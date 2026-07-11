import { ArrowRight, Users, Server, Package, TrendingUp, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const VERTICALS = [
  {
    icon: Users,
    tag: 'Vertical 01',
    label: 'IT Outsourcing',
    headline: 'Global Teams. Measurable Outcomes.',
    desc: 'Outcome-driven engineering talent embedded directly in your organization. Elastic squads across 40+ countries, aligned to your KPIs—not timesheets.',
    metrics: ['40+ Countries', '500+ Engineers', 'Outcome-based SLA'],
    accent: '#C00D55',
    href: '/it-outsourcing',
  },
  {
    icon: Server,
    tag: 'Vertical 02',
    label: 'IT Services',
    headline: 'Infrastructure Built for Sovereignty.',
    desc: 'Enterprise-grade hybrid cloud, edge computing, and zero-trust security architecture. 99.99% uptime SLA for the most demanding regulated environments.',
    metrics: ['99.99% Uptime', 'Zero-Trust Security', 'Edge + Cloud'],
    accent: '#1A5FC1',
    href: '#services',
  },
  {
    icon: Package,
    tag: 'Vertical 03',
    label: 'IT Products',
    headline: 'SaaS That Scales Deterministically.',
    desc: 'API-first, SOC 2 certified SaaS products engineered for enterprise scale. Immutable audit trails. 10ms P99 latency. Built for 10,000+ requests per second.',
    metrics: ['SOC 2 Certified', '10ms P99 Latency', 'API-First'],
    accent: '#003399',
    href: '#products',
  },
  {
    icon: TrendingUp,
    tag: 'Vertical 04',
    label: 'Digital Marketing',
    headline: 'Brand Growth for the Digital Era.',
    desc: 'Full-funnel digital marketing — performance campaigns, strategic brand management, and influencer partnerships. Data-driven execution that converts audiences into measurable revenue.',
    metrics: ['Performance Marketing', 'Brand Management', 'Influencer Marketing'],
    accent: '#7C3AED',
    href: '#digital-marketing',
  },
]

export default function VerticalsSection() {
  return (
    <section id="services" style={{ background: '#ffffff', position: 'relative' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-14 py-20">

        {/* Section header */}
        <div className="flex items-start justify-between mb-14 flex-wrap gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span style={{ width: '28px', height: '2px', background: '#C00D55', flexShrink: 0 }} />
              <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.52rem', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C00D55' }}>
                What We Do
              </span>
            </div>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', letterSpacing: '-0.03em', color: '#003399', lineHeight: 1.1, maxWidth: '480px' }}>
              Four Verticals.<br />One Singular Vision.
            </h2>
          </div>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1rem', fontWeight: 400, letterSpacing: '0em', lineHeight: 1.7, color: '#757575', maxWidth: '340px', textAlign: 'justify', textAlignLast: 'left' }}>
            QuantumPod unifies outsourcing, infrastructure, product engineering, and digital marketing under one accountable partner — purpose-built for organizations operating at global scale.
          </p>
        </div>

        {/* Four vertical cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0" style={{ border: '1px solid rgba(0,51,153,0.1)' }}>
          {VERTICALS.map((v, i) => {
            const Icon = v.icon
            return (
              <div
                key={v.label}
                className="flex flex-col p-8 transition-all duration-300 group"
                style={{
                  borderRight: (i % 2 === 0) ? '1px solid rgba(0,51,153,0.1)' : 'none',
                  borderBottom: i < 2 ? '1px solid rgba(0,51,153,0.1)' : 'none',
                  borderTop: `3px solid ${v.accent}`,
                  position: 'relative',
                  background: '#ffffff',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#fafbff'}
                onMouseLeave={e => e.currentTarget.style.background = '#ffffff'}
              >
                {/* Icon + Label tag — accent box, label only (no "Vertical 0X" prefix) */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="flex items-center justify-center w-8 h-8" style={{ background: `${v.accent}12`, border: `1px solid ${v.accent}30` }}>
                    <Icon size={15} style={{ color: v.accent }} strokeWidth={1.8} />
                  </div>
                  <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.46rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: v.accent }}>
                    {v.label}
                  </span>
                </div>

                {/* Headline */}
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', letterSpacing: '-0.02em', color: '#003399', lineHeight: 1.2, marginBottom: '16px' }}>
                  {v.headline}
                </h3>

                {/* Divider */}
                <div style={{ width: '32px', height: '1px', background: v.accent, marginBottom: '16px', opacity: 0.5 }} />

                {/* Description */}
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.92rem', fontWeight: 400, letterSpacing: '0em', lineHeight: 1.7, color: '#757575', marginBottom: '20px', flexGrow: 1, textAlign: 'justify', textAlignLast: 'left' }}>
                  {v.desc}
                </p>

                {/* Metrics */}
                <div className="flex flex-col gap-2.5 mb-6">
                  {v.metrics.map(m => (
                    <div key={m} className="flex items-center gap-2">
                      <CheckCircle size={12} style={{ color: v.accent, flexShrink: 0 }} strokeWidth={2.5} />
                      <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#404040' }}>{m}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  to={v.href}
                  className="inline-flex items-center gap-2.5 transition-all duration-200"
                  style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: v.accent, textDecoration: 'none', borderBottom: `2px solid ${v.accent}40`, paddingBottom: '4px', paddingTop: '2px', width: 'fit-content' }}
                  onMouseEnter={e => { e.currentTarget.style.borderBottomColor = v.accent; e.currentTarget.style.paddingBottom = '6px' }}
                  onMouseLeave={e => { e.currentTarget.style.borderBottomColor = `${v.accent}40`; e.currentTarget.style.paddingBottom = '4px' }}
                >
                  Explore <ArrowRight size={12} strokeWidth={2.5} />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
