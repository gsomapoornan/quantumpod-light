import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home',       href: '#home' },
  { label: 'Services',   href: '#services' },
  { label: 'About',      href: '#about' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white border-b border-gray-200 shadow-sm" style={{ height: '64px' }}>
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5">
          <div className="flex items-center gap-0.5 leading-none">
            <span className="text-[1.35rem] font-black tracking-tight" style={{ color: '#003399' }}>QUANTUM</span>
            <span className="text-[1.35rem] font-black tracking-tight" style={{ color: '#C00D55' }}>POD</span>
          </div>
          <div className="h-5 w-px bg-gray-300" />
          <span className="text-[0.65rem] font-semibold tracking-widest uppercase" style={{ color: '#757575' }}>Technologies</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href}
              className="px-4 py-2 text-sm font-medium rounded-md transition-colors"
              style={{ color: '#404040' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#003399'; e.currentTarget.style.background = '#f0f4ff' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#404040'; e.currentTarget.style.background = 'transparent' }}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact"
            className="ml-3 px-5 py-2 text-sm font-bold rounded-lg text-white transition-all duration-200 shadow-sm hover:shadow-md"
            style={{ background: '#C00D55' }}
            onMouseEnter={e => e.currentTarget.style.background = '#a00b47'}
            onMouseLeave={e => e.currentTarget.style.background = '#C00D55'}
          >
            Get Started
          </a>
        </nav>

        {/* Mobile burger */}
        <button className="lg:hidden p-2 rounded-md" onClick={() => setOpen(!open)}
          style={{ color: '#404040' }}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden absolute top-16 inset-x-0 bg-white border-b border-gray-200 shadow-lg px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              className="px-3 py-2.5 text-sm font-medium rounded-md"
              style={{ color: '#404040' }}>
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}
            className="mt-2 px-4 py-2.5 text-sm font-bold rounded-lg text-white text-center"
            style={{ background: '#C00D55' }}>
            Get Started
          </a>
        </div>
      )}
    </header>
  )
}
