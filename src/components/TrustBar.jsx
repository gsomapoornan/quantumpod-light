import { ShieldCheck, Globe, Clock, Users, Lock, Award, Zap } from 'lucide-react'

const TRUST_ITEMS = [
  { icon: ShieldCheck, text: 'ISO 27001 Certified', accent: '#C00D55' },
  { icon: Lock,        text: 'SOC 2 Type II',       accent: '#003399' },
  { icon: Globe,       text: 'GDPR Compliant',       accent: '#1A5FC1' },
  { icon: Globe,       text: '40+ Countries',        accent: '#C00D55' },
  { icon: Users,       text: '500+ Engineers',       accent: '#003399' },
  { icon: Clock,       text: '99.99% Uptime SLA',    accent: '#1A5FC1' },
  { icon: Award,       text: 'Enterprise Ready',     accent: '#C00D55' },
  { icon: Zap,         text: '10ms P99 Latency',     accent: '#003399' },
]

export default function TrustBar() {
  return (
    <div style={{ background: '#fafbff', borderBottom: '1px solid rgba(0,51,153,0.08)' }}>
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center overflow-x-auto" style={{ gap: 0 }}>
        {TRUST_ITEMS.map((item, i) => {
          const Icon = item.icon
          return (
            <div key={i} className="flex items-center flex-shrink-0">
              {i > 0 && (
                <span style={{ width: '1px', height: '14px', background: 'rgba(0,51,153,0.12)', margin: '0 18px', flexShrink: 0 }} />
              )}
              <div className="flex items-center gap-1.5">
                <Icon size={11} style={{ color: item.accent, flexShrink: 0 }} strokeWidth={2.2} />
                <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.48rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#404040', whiteSpace: 'nowrap' }}>
                  {item.text}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
