const LINKS = {
  Company:  ['About Us', 'Careers', 'Press', 'Contact'],
  Services: ['IT Outsourcing', 'IT Services', 'IT Products'],
  Legal:    ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
}

export default function Footer() {
  return (
    <footer className="border-t" style={{ background: '#f8f9fc', borderColor: '#e5e7eb' }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-1 mb-2">
              <span className="text-xl font-black tracking-tight" style={{ color: '#003399' }}>QUANTUM</span>
              <span className="text-xl font-black tracking-tight" style={{ color: '#C00D55' }}>POD</span>
            </div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#757575' }}>
              Technologies
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#757575' }}>
              Decode the Tech Future. Three distinct verticals. One singular vision.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#003399' }}>
                {heading}
              </h4>
              <ul className="space-y-2">
                {items.map(item => (
                  <li key={item}>
                    <a href="#" className="text-sm transition-colors"
                      style={{ color: '#757575' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#C00D55'}
                      onMouseLeave={e => e.currentTarget.style.color = '#757575'}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 border-t"
          style={{ borderColor: '#e5e7eb' }}>
          <p className="text-xs" style={{ color: '#9ca3af' }}>
            © {new Date().getFullYear()} QuantumPod Technologies. All rights reserved.
          </p>
          <div className="section-divider w-24 rounded-full" />
          <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#003399' }}>
            Decode the Tech Future
          </p>
        </div>
      </div>
    </footer>
  )
}
