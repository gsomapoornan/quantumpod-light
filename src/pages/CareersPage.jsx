import { useState, useEffect } from 'react'
import { ArrowRight, MapPin, Briefcase, Building2, ChevronDown, ChevronUp, Users } from 'lucide-react'
import { supabase } from '../lib/supabase'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

/* ─── Type badge color map — falls back to brand navy ─── */
const TYPE_COLORS = {
  'Full-time':  { bg: '#e8f0fe', color: '#003399', border: '#003399' },
  'Part-time':  { bg: '#fff0f6', color: '#C00D55', border: '#C00D55' },
  'Contract':   { bg: '#f0f4ff', color: '#1A5FC1', border: '#1A5FC1' },
  'Internship': { bg: '#f5f0ff', color: '#7C3AED', border: '#7C3AED' },
}
const typeBadge = type => TYPE_COLORS[type] ?? { bg: '#f0f4ff', color: '#003399', border: '#003399' }

/* ─── Single expandable job card ─── */
function JobCard({ job }) {
  const [expanded, setExpanded] = useState(false)
  const badge = typeBadge(job.type)

  return (
    <div
      style={{
        border: '1px solid rgba(0,51,153,0.1)',
        borderTop: `3px solid ${badge.color}`,
        background: '#ffffff',
        transition: 'box-shadow 0.2s ease',
      }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,51,153,0.1)'}
      onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
    >
      {/* Card header — always visible */}
      <button
        className="w-full text-left px-6 py-5 flex items-start justify-between gap-4"
        onClick={() => setExpanded(v => !v)}
      >
        <div className="flex-1 min-w-0">
          {/* Title */}
          <h3 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
            color: '#003399',
            letterSpacing: '-0.01em',
            marginBottom: '10px',
          }}>
            {job.title}
          </h3>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Department */}
            <span className="flex items-center gap-1.5" style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: '0.48rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#757575',
            }}>
              <Building2 size={11} style={{ color: '#9ca3af' }} />
              {job.department}
            </span>

            <span style={{ width: '1px', height: '12px', background: 'rgba(0,51,153,0.15)' }} />

            {/* Location */}
            <span className="flex items-center gap-1.5" style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: '0.48rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#757575',
            }}>
              <MapPin size={11} style={{ color: '#9ca3af' }} />
              {job.location}
            </span>

            <span style={{ width: '1px', height: '12px', background: 'rgba(0,51,153,0.15)' }} />

            {/* Type badge */}
            <span style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: '0.44rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: badge.color,
              background: badge.bg,
              border: `1px solid ${badge.border}40`,
              padding: '3px 9px',
            }}>
              {job.type}
            </span>
          </div>
        </div>

        {/* Expand toggle */}
        <div className="flex items-center gap-2 flex-shrink-0 pt-1">
          <span style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: '0.44rem',
            fontWeight: 700,
            letterSpacing: '0.18em',
            color: badge.color,
          }}>
            {expanded ? 'CLOSE' : 'VIEW ROLE'}
          </span>
          {expanded
            ? <ChevronUp size={15} style={{ color: badge.color }} />
            : <ChevronDown size={15} style={{ color: badge.color }} />
          }
        </div>
      </button>

      {/* Expanded description */}
      {expanded && (
        <div style={{ borderTop: '1px solid rgba(0,51,153,0.08)' }}>
          <div className="px-6 py-5">
            {/* Left accent bar + description */}
            <div style={{
              borderLeft: `3px solid ${badge.color}`,
              paddingLeft: '16px',
              marginBottom: '20px',
            }}>
              <p style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.95rem',
                fontWeight: 400,
                lineHeight: 1.8,
                color: '#4b5563',
                whiteSpace: 'pre-line',
              }}>
                {job.description}
              </p>
            </div>

            {/* Apply CTA */}
            <a
              href={`mailto:info@qpodtech.com?subject=Application for ${encodeURIComponent(job.title)}`}
              className="inline-flex items-center gap-2.5 transition-all duration-200"
              style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: '0.55rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#ffffff',
                background: badge.color,
                border: `1.5px solid ${badge.color}`,
                padding: '10px 22px',
                textDecoration: 'none',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = badge.color }}
              onMouseLeave={e => { e.currentTarget.style.background = badge.color; e.currentTarget.style.color = '#ffffff' }}
            >
              Apply for this Role <ArrowRight size={12} />
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

/* ─── Empty state ─── */
function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="flex items-center justify-center w-16 h-16 mb-6" style={{
        background: '#f0f4ff',
        border: '1px solid rgba(0,51,153,0.15)',
      }}>
        <Users size={28} style={{ color: '#003399' }} strokeWidth={1.5} />
      </div>
      <h3 style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 700,
        fontSize: '1.3rem',
        color: '#003399',
        marginBottom: '10px',
      }}>
        No open positions right now
      </h3>
      <p style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: '0.95rem',
        color: '#9ca3af',
        maxWidth: '360px',
        lineHeight: 1.7,
      }}>
        We're always looking for exceptional talent. Send your profile to{' '}
        <a href="mailto:info@qpodtech.com" style={{ color: '#C00D55', textDecoration: 'none' }}>
          info@qpodtech.com
        </a>{' '}
        and we'll reach out when a role opens up.
      </p>
    </div>
  )
}

/* ─── Department filter chip ─── */
function FilterChip({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily: "'Orbitron', sans-serif",
        fontSize: '0.46rem',
        fontWeight: 700,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        padding: '6px 14px',
        border: active ? '1.5px solid #003399' : '1px solid rgba(0,51,153,0.2)',
        background: active ? '#003399' : 'transparent',
        color: active ? '#ffffff' : '#757575',
        cursor: 'pointer',
        transition: 'all 0.15s ease',
      }}
    >
      {label}
    </button>
  )
}

/* ─── Main CareersPage ─── */
export default function CareersPage() {
  const [jobs, setJobs]           = useState([])
  const [loading, setLoading]     = useState(true)
  const [error, setError]         = useState(null)
  const [activeFilter, setFilter] = useState('All')

  useEffect(() => {
    async function fetchJobs() {
      setLoading(true)
      /* Fetch only active jobs, ordered newest first */
      const { data, error } = await supabase
        .from('jobs')
        .select('id, title, location, type, department, description, created_at')
        .eq('is_active', true)
        .order('created_at', { ascending: false })

      if (error) {
        setError(error.message)
      } else {
        setJobs(data ?? [])
      }
      setLoading(false)
    }
    fetchJobs()
  }, [])

  /* Build unique department list for filter chips */
  const departments = ['All', ...Array.from(new Set(jobs.map(j => j.department).filter(Boolean)))]

  const filtered = activeFilter === 'All'
    ? jobs
    : jobs.filter(j => j.department === activeFilter)

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* ── Hero banner ── */}
      <div style={{ marginTop: '64px', background: 'linear-gradient(135deg, #001240 0%, #003399 50%, #0A3F8A 100%)', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative grid lines */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        {/* Left accent rule */}
        <div className="absolute inset-y-0 left-0 w-1" style={{ background: 'linear-gradient(to bottom, #C00D5500, #C00D55, #C00D5500)' }} />

        <div className="max-w-7xl mx-auto px-6 lg:px-14 py-20 lg:py-28 relative">
          <div className="flex items-center gap-3 mb-5">
            <span style={{ width: '28px', height: '2px', background: '#C00D55', flexShrink: 0 }} />
            <span style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: '0.52rem',
              fontWeight: 700,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#C00D55',
            }}>
              Join The Team
            </span>
          </div>
          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3.4rem)',
            color: '#ffffff',
            letterSpacing: '-0.025em',
            lineHeight: 1.1,
            marginBottom: '16px',
            textShadow: '0 2px 20px rgba(0,0,0,0.3)',
          }}>
            Build the Future<br />
            <span style={{ color: '#C00D55' }}>with QuantumPod.</span>
          </h1>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '1rem',
            color: 'rgba(200,220,255,0.85)',
            lineHeight: 1.75,
            maxWidth: '480px',
          }}>
            We're a team of engineers, strategists, and builders working on the world's most complex technology challenges. Find your role below.
          </p>
        </div>
      </div>

      {/* ── Job listings ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-14 py-16">

        {/* Department filters */}
        {!loading && jobs.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-10">
            {departments.map(d => (
              <FilterChip
                key={d}
                label={d}
                active={activeFilter === d}
                onClick={() => setFilter(d)}
              />
            ))}
          </div>
        )}

        {/* States */}
        {loading && (
          <div className="flex justify-center py-24">
            <div style={{
              width: '36px', height: '36px',
              border: '3px solid rgba(0,51,153,0.15)',
              borderTop: '3px solid #003399',
              borderRadius: '50%',
              animation: 'spin 0.8s linear infinite',
            }} />
          </div>
        )}

        {error && (
          <div className="py-12 text-center" style={{
            fontFamily: "'Space Grotesk', sans-serif",
            color: '#C00D55',
            fontSize: '0.9rem',
          }}>
            Failed to load jobs: {error}
          </div>
        )}

        {!loading && !error && filtered.length === 0 && <EmptyState />}

        {/* Job cards grid */}
        {!loading && !error && filtered.length > 0 && (
          <div className="flex flex-col gap-4">
            {/* Results count */}
            <p style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: '0.46rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#9ca3af',
              marginBottom: '4px',
            }}>
              {filtered.length} open position{filtered.length !== 1 ? 's' : ''}
              {activeFilter !== 'All' ? ` · ${activeFilter}` : ''}
            </p>
            {filtered.map(job => <JobCard key={job.id} job={job} />)}
          </div>
        )}
      </div>

      {/* Inline keyframe for spinner — avoids adding to global CSS */}
      <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>

      <Footer />
    </div>
  )
}
