import { ArrowRight, CheckCircle2, Globe, Zap, Users, Shield, Briefcase, Building2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function ITOutsourcingPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <section style={{ background: 'linear-gradient(135deg, #000a28 0%, #001040 50%, #000a28 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ height: '2px', background: 'linear-gradient(90deg, transparent 0%, #C00D55 20%, #003399 50%, #1A5FC1 80%, transparent 100%)', boxShadow: '0 0 12px rgba(0,51,153,0.5)' }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-14 py-16 lg:py-20 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span style={{ width: '20px', height: '1px', background: '#C00D55', flexShrink: 0 }} />
            <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.4rem', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C00D55' }}>Vertical</span>
            <span style={{ width: '20px', height: '1px', background: '#C00D55', flexShrink: 0 }} />
          </div>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', letterSpacing: '-0.02em', color: '#ffffff', lineHeight: 1.2, marginBottom: '16px' }}>
            IT Outsourcing
          </h1>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.95rem', fontWeight: 400, letterSpacing: '0em', lineHeight: 1.7, color: 'rgba(220,232,255,0.85)', maxWidth: '700px', margin: '0 auto' }}>
            Build High-Performing Teams with India's Trusted IT & Non-IT Recruitment Partner. Accelerate your business growth with exceptional talent—delivered faster, smarter, and at scale.
          </p>
        </div>
      </section>

      <section style={{ background: '#ffffff', position: 'relative' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-14 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span style={{ width: '20px', height: '1px', background: '#C00D55', flexShrink: 0 }} />
                <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.4rem', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C00D55' }}>Our Services</span>
              </div>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', letterSpacing: '-0.02em', color: '#003399', lineHeight: 1.2, marginBottom: '16px' }}>
                Comprehensive Recruitment Solutions
              </h2>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.95rem', fontWeight: 400, letterSpacing: '0em', lineHeight: 1.7, color: '#757575', marginBottom: '20px' }}>
                We offer end-to-end recruitment services tailored to your business needs:
              </p>
              <div className="space-y-3">
                {[
                  { icon: Briefcase, text: 'IT Outsourcing — Dedicated engineering teams embedded in your organization' },
                  { icon: Users, text: 'Permanent Recruitment — Long-term talent acquisition for core roles' },
                  { icon: Zap, text: 'Contract Staffing — Flexible workforce for project-based needs' },
                  { icon: Shield, text: 'Zero-Cost Fresher Hiring — Campus recruitment at no upfront cost' },
                  { icon: Globe, text: 'Payroll Support — Complete payroll management and compliance' },
                  { icon: Building2, text: 'Workforce Consulting — Strategic talent planning and optimization' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-8 h-8 flex-shrink-0 mt-0.5" style={{ background: '#C00D55', borderRadius: '50%' }}>
                      <item.icon size={14} style={{ color: '#ffffff' }} strokeWidth={2.5} />
                    </div>
                    <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.9rem', fontWeight: 500, color: '#404040', lineHeight: 1.5 }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <span style={{ width: '20px', height: '1px', background: '#C00D55', flexShrink: 0 }} />
                <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.4rem', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C00D55' }}>Industries & Hiring Models</span>
              </div>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', letterSpacing: '-0.02em', color: '#003399', lineHeight: 1.2, marginBottom: '16px' }}>
                Across Diverse Sectors
              </h2>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.95rem', fontWeight: 400, letterSpacing: '0em', lineHeight: 1.7, color: '#757575', marginBottom: '20px' }}>
                We serve clients across 11+ industries with flexible engagement models:
              </p>
              <div className="mb-6">
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.9rem', fontWeight: 600, color: '#003399', marginBottom: '12px' }}>Industries We Support</h3>
                <div className="flex flex-wrap gap-2">
                  {['IT', 'BFSI', 'Healthcare', 'Pharma', 'Manufacturing', 'Automotive', 'Construction', 'E-Commerce', 'FMCG', 'Real Estate', 'Hospitality'].map((ind, i) => (
                    <span key={i} style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.8rem', fontWeight: 500, color: '#404040', background: '#f5f8ff', padding: '6px 12px', borderRadius: '4px' }}>{ind}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.9rem', fontWeight: 600, color: '#003399', marginBottom: '12px' }}>Hiring Models</h3>
                <div className="grid grid-cols-2 gap-2">
                  {['Permanent Hiring', 'Contract Staffing', 'Contract-to-Hire (C2H)', 'Contract-to-Contract (C2C)', 'Project-Based Hiring', 'Zero-Cost Fresher Hiring', 'Bulk Hiring', 'Leadership Hiring'].map((model, i) => (
                    <div key={i} className="flex items-center gap-2 p-3" style={{ background: '#fafbff', border: '1px solid rgba(0,51,153,0.08)', borderRadius: '4px' }}>
                      <CheckCircle2 size={12} style={{ color: '#C00D55', flexShrink: 0 }} />
                      <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.8rem', fontWeight: 500, color: '#404040' }}>{model}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#f5f8ff', position: 'relative' }}>
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent 0%, #C00D55 20%, #003399 50%, #1A5FC1 80%, transparent 100%)' }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-14 py-16 lg:py-20">
          <div className="flex items-center gap-3 mb-4">
            <span style={{ width: '20px', height: '1px', background: '#C00D55', flexShrink: 0 }} />
            <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.4rem', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C00D55' }}>Our Hiring Approach</span>
          </div>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', letterSpacing: '-0.02em', color: '#003399', lineHeight: 1.2, marginBottom: '16px' }}>
            A Proven Recruitment Methodology
          </h2>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.95rem', fontWeight: 400, letterSpacing: '0em', lineHeight: 1.7, color: '#757575', maxWidth: '700px', marginBottom: '24px' }}>
            Our 10-step process ensures we deliver exceptional talent that drives your business forward:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['Requirement Discovery', 'Talent Strategy', 'Candidate Sourcing', 'AI + Recruiter Screening', 'Technical Assessment', 'Interview Coordination', 'Offer Management', 'Background Verification', 'Onboarding Support', 'Post-Joining Engagement'].map((step, i) => (
              <div key={i} className="text-center p-4" style={{ background: '#ffffff', border: '1px solid rgba(0,51,153,0.08)', borderRadius: '6px' }}>
                <div className="flex items-center justify-center w-8 h-8 mx-auto mb-2" style={{ background: '#C00D55', borderRadius: '50%' }}>
                  <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.7rem', fontWeight: 700, color: '#ffffff' }}>{i + 1}</span>
                </div>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.75rem', fontWeight: 600, color: '#003399', lineHeight: 1.3 }}>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#ffffff', position: 'relative' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-14 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span style={{ width: '20px', height: '1px', background: '#C00D55', flexShrink: 0 }} />
                <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.4rem', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C00D55' }}>Why QuantumPod is Different</span>
              </div>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', letterSpacing: '-0.02em', color: '#003399', lineHeight: 1.2, marginBottom: '16px' }}>
                The Recruitment Partner Built for Modern Businesses
              </h2>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.95rem', fontWeight: 400, letterSpacing: '0em', lineHeight: 1.7, color: '#757575', marginBottom: '20px' }}>
                From strategic leadership hiring to large-scale workforce deployments, we consistently deliver skilled professionals who drive productivity, innovation, and business growth.
              </p>
              <div className="space-y-3">
                {[
                  { icon: Globe, text: 'Supporting Clients Across 40+ Countries' },
                  { icon: Zap, text: 'Rapid Hiring Turnaround' },
                  { icon: Users, text: 'Dedicated Account Manager' },
                  { icon: Briefcase, text: 'Industry-Specific Recruiters' },
                  { icon: Shield, text: 'Large Pre-Screened Talent Pool' },
                  { icon: Building2, text: 'Outcome-Based SLAs' },
                ].map((item, i) => {
                  const Icon = item.icon
                  return (
                    <div key={i} className="flex items-center gap-3 p-3" style={{ background: '#fafbff', border: '1px solid rgba(0,51,153,0.08)', borderRadius: '6px' }}>
                      <div className="flex items-center justify-center w-8 h-8 flex-shrink-0" style={{ background: 'linear-gradient(135deg, #C00D55 0%, #003399 100%)', borderRadius: '6px' }}>
                        <Icon size={14} style={{ color: '#ffffff' }} strokeWidth={2} />
                      </div>
                      <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.85rem', fontWeight: 600, color: '#003399', lineHeight: 1.3 }}>{item.text}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <span style={{ width: '20px', height: '1px', background: '#C00D55', flexShrink: 0 }} />
                <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.4rem', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C00D55' }}>QuantumPod by the Numbers</span>
              </div>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', letterSpacing: '-0.02em', color: '#003399', lineHeight: 1.2, marginBottom: '16px' }}>
                Delivering Measurable Hiring Success
              </h2>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.95rem', fontWeight: 400, letterSpacing: '0em', lineHeight: 1.7, color: '#757575', marginBottom: '20px' }}>
                Our track record speaks for itself with measurable outcomes across every engagement. We consistently deliver results that exceed expectations through our commitment to quality, transparency, and exceptional service delivery.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '500+', label: 'Professionals Placed' },
                  { value: '40+', label: 'Countries Supported' },
                  { value: '35+', label: 'Industries Served' },
                  { value: '90-Day', label: 'Replacement Assurance' },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-4" style={{ background: '#f5f8ff', border: '1px solid rgba(0,51,153,0.08)', borderRadius: '6px' }}>
                    <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 900, color: '#C00D55', marginBottom: '6px' }}>{stat.value}</div>
                    <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.75rem', fontWeight: 600, color: '#003399', lineHeight: 1.3 }}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#ffffff', position: 'relative' }}>
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent 0%, #C00D55 20%, #003399 50%, #1A5FC1 80%, transparent 100%)' }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-14 py-16 lg:py-20 text-center">
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', letterSpacing: '-0.02em', color: '#003399', lineHeight: 1.2, marginBottom: '12px' }}>
            Ready to Build Your Dream Team?
          </h2>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.95rem', fontWeight: 400, letterSpacing: '0em', lineHeight: 1.7, color: '#757575', maxWidth: '500px', margin: '0 auto 24px' }}>
            Partner with QuantumPod and experience recruitment excellence at scale.
          </p>
          <Link to="/#contact" className="inline-flex items-center gap-2 transition-all duration-200 group" style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#ffffff', padding: '12px 24px', background: '#C00D55', border: '1.5px solid #C00D55', textDecoration: 'none' }} onMouseEnter={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#C00D55' }} onMouseLeave={e => { e.currentTarget.style.background = '#C00D55'; e.currentTarget.style.color = '#ffffff' }}>
            Get Started Today <ArrowRight size={12} />
          </Link>
        </div>
      </section>
    </div>
  )
}
