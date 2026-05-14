export default function CTASection() {
  return (
    <section id="contact" className="py-24 bg-white border-t" style={{ borderColor: '#e5e7eb' }}>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
          style={{ background: '#fff0f5', color: '#C00D55' }}>
          Get In Touch
        </div>
        <h2 className="font-black leading-tight tracking-tight mb-4"
          style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', color: '#003399' }}>
          Ready to{' '}
          <span style={{ color: '#C00D55' }}>Decode</span>
          {' '}the Tech Future?
        </h2>
        <p className="text-base leading-relaxed mb-8 max-w-xl mx-auto" style={{ color: '#757575' }}>
          Partner with QuantumPod Technologies and unlock the full potential of your technology investments across outsourcing, infrastructure, and products.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="mailto:hello@quantumpod.tech"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white text-base transition-all duration-200 shadow-lg hover:shadow-xl"
            style={{ background: '#C00D55' }}
            onMouseEnter={e => e.currentTarget.style.background = '#a00b47'}
            onMouseLeave={e => e.currentTarget.style.background = '#C00D55'}
          >
            Start a Conversation
          </a>
          <a href="#services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-base transition-all duration-200 border-2"
            style={{ color: '#003399', borderColor: '#003399' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#f0f4ff' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  )
}
