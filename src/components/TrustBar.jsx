const TRUST_ITEMS = [
  'ISO 27001 Certified',
  'SOC 2 Type II',
  'GDPR Compliant',
  '40+ Countries',
  '500+ Engineers',
  '99.99% Uptime SLA',
  'Enterprise Ready',
]

export default function TrustBar() {
  return (
    <div className="border-y overflow-hidden" style={{ borderColor: '#e5e7eb', background: '#f8f9fc' }}>
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-6 overflow-x-auto scrollbar-hide">
        {TRUST_ITEMS.map((item, i) => (
          <div key={i} className="flex items-center gap-2 flex-shrink-0">
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#C00D55' }} />
            <span className="text-xs font-semibold whitespace-nowrap" style={{ color: '#404040' }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
