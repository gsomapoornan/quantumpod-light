import { Mail, Phone, Globe } from 'lucide-react'
import logoImg from '../images/logo.png'

const LINKS = {
  Company:  ['About Us', 'Careers', 'Press', 'Contact'],
  Services: ['IT Outsourcing', 'IT Services', 'IT Products', 'Digital Marketing'],
  Legal:    ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
}

const linkStyle = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: '0.9rem',
  fontWeight: 400,
  letterSpacing: '0em',
  color: '#757575',
  textDecoration: 'none',
  display: 'block',
  padding: '4px 0',
  transition: 'color 0.2s ease',
}

export default function Footer() {
  return (
    <footer style={{ background: '#fafbff', position: 'relative' }}>
      {/* Top gradient separator */}
      <div style={{ height: '2px', background: 'linear-gradient(90deg, transparent 0%, #C00D55 20%, #003399 50%, #1A5FC1 80%, transparent 100%)', boxShadow: '0 0 10px rgba(0,51,153,0.25)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-14 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={logoImg} alt="QuantumPod Logo" style={{ height: '36px', width: 'auto', mixBlendMode: 'multiply' }} />
              <div>
                <div style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 900, fontSize: '0.75rem', letterSpacing: '0.06em', background: 'linear-gradient(135deg, #0A3F8A 0%, #1A5FC1 50%, #0A3F8A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  QUANTUMPOD
                </div>
                <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.4rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#9ca3af' }}>
                  Technologies
                </div>
              </div>
            </div>

            <div style={{ width: '32px', height: '2px', background: 'linear-gradient(90deg, #C00D55, #003399)', marginBottom: '14px' }} />

            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.85rem', fontWeight: 400, letterSpacing: '0em', lineHeight: 1.75, color: '#757575', textAlign: 'justify', textAlignLast: 'left' }}>
              Decode the Tech Future.<br />Four distinct verticals.<br />One singular vision.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([heading, items]) => (
            <div key={heading}>
              <div className="flex items-center gap-2 mb-5">
                <span style={{ width: '16px', height: '1.5px', background: '#C00D55', flexShrink: 0 }} />
                <h4 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.5rem', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#003399' }}>
                  {heading}
                </h4>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '2px' }}>
                {items.map(item => (
                  <li key={item}>
                    <a href="#"
                      style={linkStyle}
                      onMouseEnter={e => e.currentTarget.style.color = '#C00D55'}
                      onMouseLeave={e => e.currentTarget.style.color = '#757575'}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span style={{ width: '16px', height: '1.5px', background: '#C00D55', flexShrink: 0 }} />
              <h4 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.5rem', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#003399' }}>
                Contact
              </h4>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-2">
                <Mail size={12} style={{ color: '#C00D55', flexShrink: 0, marginTop: '2px' }} />
                <div className="flex flex-col gap-1">
                  <a href="mailto:info@qpodtech.com" style={{ ...linkStyle, padding: '0' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#C00D55'}
                    onMouseLeave={e => e.currentTarget.style.color = '#757575'}>info@qpodtech.com</a>
                  <a href="mailto:business@qpodtech.com" style={{ ...linkStyle, padding: '0' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#C00D55'}
                    onMouseLeave={e => e.currentTarget.style.color = '#757575'}>business@qpodtech.com</a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Phone size={12} style={{ color: '#003399', flexShrink: 0, marginTop: '2px' }} />
                <div className="flex flex-col gap-1">
                  <a href="tel:+919880289192" style={{ ...linkStyle, padding: '0' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#003399'}
                    onMouseLeave={e => e.currentTarget.style.color = '#757575'}>98802 89192</a>
                  <a href="tel:+917090000311" style={{ ...linkStyle, padding: '0' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#003399'}
                    onMouseLeave={e => e.currentTarget.style.color = '#757575'}>7090000311</a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Globe size={12} style={{ color: '#1A5FC1', flexShrink: 0, marginTop: '2px' }} />
                <div className="flex flex-col gap-1">
                  <a href="https://www.qpodtech.com" target="_blank" rel="noopener noreferrer" style={{ ...linkStyle, padding: '0' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#1A5FC1'}
                    onMouseLeave={e => e.currentTarget.style.color = '#757575'}>www.qpodtech.com</a>
                  <a href="https://www.mathisi.in" target="_blank" rel="noopener noreferrer" style={{ ...linkStyle, padding: '0' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#1A5FC1'}
                    onMouseLeave={e => e.currentTarget.style.color = '#757575'}>www.mathisi.in</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8" style={{ borderTop: '1px solid rgba(0,51,153,0.08)' }}>
          <p style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.44rem', fontWeight: 400, letterSpacing: '0.14em', color: '#9ca3af' }}>
            © {new Date().getFullYear()} QuantumPod Technologies. All rights reserved.
          </p>
          <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, #C00D55, #1A5FC1)' }} />
          <p style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.44rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#003399' }}>
            Decode the Tech Future
          </p>
        </div>
      </div>
    </footer>
  )
}
