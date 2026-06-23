import { useState, useEffect, useCallback } from 'react'
import {
  LogOut, Plus, Trash2, Eye, EyeOff, Lock,
  CheckCircle2, XCircle, AlertCircle, Loader2, ChevronDown, ChevronUp,
} from 'lucide-react'
import { supabase } from '../lib/supabase'

/* ─── Hardcoded admin password — replace with Supabase Auth when ready ─── */
const ADMIN_PASSWORD = 'qpod@admin2024'

/* ─── Shared style tokens ─── */
const FONT_ORB  = "'Orbitron', sans-serif"
const FONT_SG   = "'Space Grotesk', sans-serif"
const NAVY      = '#003399'
const CRIMSON   = '#C00D55'
const BLUE      = '#1A5FC1'

/* ─── Minimal toast notification ─── */
function Toast({ msg, type }) {
  if (!msg) return null
  const colors = { success: '#003399', error: '#C00D55', info: '#1A5FC1' }
  const icons  = { success: CheckCircle2, error: XCircle, info: AlertCircle }
  const Icon   = icons[type] ?? AlertCircle
  return (
    <div style={{
      position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999,
      display: 'flex', alignItems: 'center', gap: '10px',
      background: '#ffffff',
      border: `1.5px solid ${colors[type]}`,
      padding: '12px 18px',
      boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
      fontFamily: FONT_SG, fontSize: '0.9rem', color: '#1f2937',
    }}>
      <Icon size={16} style={{ color: colors[type], flexShrink: 0 }} />
      {msg}
    </div>
  )
}

/* ─── Login screen ─── */
function LoginScreen({ onLogin }) {
  const [pw, setPw]     = useState('')
  const [err, setErr]   = useState('')
  const [show, setShow] = useState(false)

  const submit = e => {
    e.preventDefault()
    if (pw === ADMIN_PASSWORD) {
      /* Store session flag so refresh keeps admin logged in during the tab session */
      sessionStorage.setItem('qpod_admin', '1')
      onLogin()
    } else {
      setErr('Incorrect password.')
      setPw('')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: '#f5f8ff' }}>
      <div style={{
        background: '#ffffff',
        border: '1px solid rgba(0,51,153,0.12)',
        borderTop: `3px solid ${CRIMSON}`,
        padding: '48px 40px',
        width: '100%',
        maxWidth: '400px',
        boxShadow: '0 20px 60px rgba(0,20,80,0.1)',
      }}>
        {/* Header */}
        <div className="flex items-center gap-2 mb-8">
          <Lock size={18} style={{ color: CRIMSON }} />
          <div>
            <p style={{ fontFamily: FONT_ORB, fontSize: '0.52rem', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: CRIMSON }}>
              Admin Portal
            </p>
            <p style={{ fontFamily: FONT_ORB, fontSize: '0.9rem', fontWeight: 800, color: NAVY, letterSpacing: '0.04em' }}>
              QuantumPod Jobs
            </p>
          </div>
        </div>

        <form onSubmit={submit} className="flex flex-col gap-4">
          <div className="relative">
            <input
              type={show ? 'text' : 'password'}
              value={pw}
              onChange={e => { setPw(e.target.value); setErr('') }}
              placeholder="Enter admin password"
              autoFocus
              style={{
                width: '100%', boxSizing: 'border-box',
                fontFamily: FONT_SG, fontSize: '0.95rem',
                padding: '11px 42px 11px 14px',
                border: err ? `1.5px solid ${CRIMSON}` : '1.5px solid rgba(0,51,153,0.2)',
                outline: 'none', background: '#fafbff', color: '#1f2937',
              }}
            />
            <button type="button" onClick={() => setShow(s => !s)}
              style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af', padding: 0 }}>
              {show ? <EyeOff size={15} /> : <Eye size={15} />}
            </button>
          </div>

          {err && (
            <p style={{ fontFamily: FONT_SG, fontSize: '0.82rem', color: CRIMSON }}>
              {err}
            </p>
          )}

          <button type="submit" style={{
            fontFamily: FONT_ORB, fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.2em',
            textTransform: 'uppercase', color: '#ffffff', background: NAVY,
            border: `1.5px solid ${NAVY}`, padding: '12px', cursor: 'pointer',
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = NAVY }}
            onMouseLeave={e => { e.currentTarget.style.background = NAVY; e.currentTarget.style.color = '#ffffff' }}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

/* ─── New job form ─── */
const BLANK_JOB = { title: '', department: '', location: '', type: 'Full-time', description: '' }
const JOB_TYPES = ['Full-time', 'Part-time', 'Contract', 'Internship']

function NewJobForm({ onCreated, onCancel }) {
  const [form, setForm]     = useState(BLANK_JOB)
  const [saving, setSaving] = useState(false)
  const [error, setError]   = useState(null)

  const set = field => e => setForm(f => ({ ...f, [field]: e.target.value }))

  const submit = async e => {
    e.preventDefault()
    if (!form.title.trim() || !form.department.trim() || !form.location.trim()) {
      setError('Title, department, and location are required.')
      return
    }
    setSaving(true)
    setError(null)
    const { data, error } = await supabase
      .from('jobs')
      .insert([{ ...form, is_active: true }])
      .select()
      .single()

    if (error) {
      setError(error.message)
    } else {
      onCreated(data)
    }
    setSaving(false)
  }

  const inputStyle = {
    fontFamily: FONT_SG, fontSize: '0.9rem', color: '#1f2937',
    padding: '9px 12px', width: '100%', boxSizing: 'border-box',
    border: '1px solid rgba(0,51,153,0.2)', background: '#fafbff', outline: 'none',
  }
  const labelStyle = {
    fontFamily: FONT_ORB, fontSize: '0.44rem', fontWeight: 700,
    letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6b7280',
    display: 'block', marginBottom: '5px',
  }

  return (
    <div style={{
      background: '#f5f8ff',
      border: '1px solid rgba(0,51,153,0.12)',
      borderLeft: `3px solid ${NAVY}`,
      padding: '24px',
      marginBottom: '24px',
    }}>
      <p style={{ fontFamily: FONT_ORB, fontSize: '0.7rem', fontWeight: 800, color: NAVY, letterSpacing: '0.04em', marginBottom: '20px' }}>
        Post a New Job
      </p>

      <form onSubmit={submit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <div>
            <label style={labelStyle}>Job Title *</label>
            <input style={inputStyle} value={form.title} onChange={set('title')} placeholder="e.g. Senior React Developer" />
          </div>
          <div>
            <label style={labelStyle}>Department *</label>
            <input style={inputStyle} value={form.department} onChange={set('department')} placeholder="e.g. Engineering" />
          </div>
          <div>
            <label style={labelStyle}>Location *</label>
            <input style={inputStyle} value={form.location} onChange={set('location')} placeholder="e.g. Remote / Bangalore" />
          </div>
          <div>
            <label style={labelStyle}>Employment Type</label>
            <select style={{ ...inputStyle, cursor: 'pointer' }} value={form.type} onChange={set('type')}>
              {JOB_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
        </div>

        <div className="mb-5">
          <label style={labelStyle}>Job Description</label>
          <textarea
            style={{ ...inputStyle, resize: 'vertical', minHeight: '120px', lineHeight: 1.7 }}
            value={form.description}
            onChange={set('description')}
            placeholder="Describe the role, responsibilities, and requirements..."
          />
        </div>

        {error && (
          <p style={{ fontFamily: FONT_SG, fontSize: '0.84rem', color: CRIMSON, marginBottom: '12px' }}>
            {error}
          </p>
        )}

        <div className="flex items-center gap-3">
          <button type="submit" disabled={saving}
            className="inline-flex items-center gap-2"
            style={{
              fontFamily: FONT_ORB, fontSize: '0.5rem', fontWeight: 700, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: '#ffffff', background: NAVY,
              border: `1.5px solid ${NAVY}`, padding: '10px 20px', cursor: saving ? 'not-allowed' : 'pointer',
              opacity: saving ? 0.7 : 1,
            }}>
            {saving ? <Loader2 size={12} style={{ animation: 'spin 0.8s linear infinite' }} /> : <Plus size={12} />}
            {saving ? 'Posting...' : 'Post Job'}
          </button>
          <button type="button" onClick={onCancel}
            style={{
              fontFamily: FONT_ORB, fontSize: '0.5rem', fontWeight: 700, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: '#6b7280', background: 'transparent',
              border: '1px solid rgba(0,0,0,0.15)', padding: '10px 20px', cursor: 'pointer',
            }}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

/* ─── Job row in the admin table ─── */
function JobRow({ job, onToggle, onDelete }) {
  const [expanded, setExpanded] = useState(false)
  const [toggling, setToggling] = useState(false)
  const [deleting, setDeleting] = useState(false)

  const handleToggle = async () => {
    setToggling(true)
    await onToggle(job)
    setToggling(false)
  }

  const handleDelete = async () => {
    if (!confirm(`Delete "${job.title}"? This cannot be undone.`)) return
    setDeleting(true)
    await onDelete(job.id)
    /* row disappears — no need to reset state */
  }

  const badgeBg = job.is_active ? '#e8f5e9' : '#fafafa'
  const badgeColor = job.is_active ? '#15803d' : '#9ca3af'

  return (
    <>
      <tr style={{ borderBottom: '1px solid rgba(0,51,153,0.06)', background: expanded ? '#f5f8ff' : '#ffffff' }}>
        {/* Title */}
        <td style={{ padding: '14px 16px' }}>
          <button onClick={() => setExpanded(v => !v)}
            className="flex items-center gap-1.5 text-left"
            style={{ fontFamily: FONT_SG, fontWeight: 600, fontSize: '0.95rem', color: NAVY, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            {expanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
            {job.title}
          </button>
        </td>

        {/* Department */}
        <td style={{ padding: '14px 16px', fontFamily: FONT_SG, fontSize: '0.85rem', color: '#6b7280' }}>
          {job.department}
        </td>

        {/* Location */}
        <td style={{ padding: '14px 16px', fontFamily: FONT_SG, fontSize: '0.85rem', color: '#6b7280' }}>
          {job.location}
        </td>

        {/* Type */}
        <td style={{ padding: '14px 16px', fontFamily: FONT_SG, fontSize: '0.85rem', color: '#6b7280' }}>
          {job.type}
        </td>

        {/* Status badge */}
        <td style={{ padding: '14px 16px' }}>
          <span style={{
            fontFamily: FONT_ORB, fontSize: '0.42rem', fontWeight: 700,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            background: badgeBg, color: badgeColor,
            border: `1px solid ${badgeColor}40`,
            padding: '3px 9px',
          }}>
            {job.is_active ? 'Active' : 'Inactive'}
          </span>
        </td>

        {/* Actions */}
        <td style={{ padding: '14px 16px' }}>
          <div className="flex items-center gap-2">
            {/* Toggle active/inactive */}
            <button onClick={handleToggle} disabled={toggling}
              title={job.is_active ? 'Deactivate' : 'Activate'}
              style={{
                background: 'none', border: 'none', cursor: toggling ? 'not-allowed' : 'pointer',
                color: job.is_active ? '#9ca3af' : '#15803d', padding: '4px',
                opacity: toggling ? 0.5 : 1,
              }}>
              {toggling
                ? <Loader2 size={15} style={{ animation: 'spin 0.8s linear infinite' }} />
                : job.is_active ? <EyeOff size={15} /> : <Eye size={15} />
              }
            </button>

            {/* Delete */}
            <button onClick={handleDelete} disabled={deleting}
              title="Delete permanently"
              style={{
                background: 'none', border: 'none', cursor: deleting ? 'not-allowed' : 'pointer',
                color: CRIMSON, padding: '4px',
                opacity: deleting ? 0.5 : 1,
              }}>
              {deleting
                ? <Loader2 size={15} style={{ animation: 'spin 0.8s linear infinite' }} />
                : <Trash2 size={15} />
              }
            </button>
          </div>
        </td>
      </tr>

      {/* Expanded description row */}
      {expanded && (
        <tr style={{ background: '#f5f8ff' }}>
          <td colSpan={6} style={{ padding: '0 16px 16px 40px' }}>
            <p style={{
              fontFamily: FONT_SG, fontSize: '0.9rem', color: '#4b5563',
              lineHeight: 1.75, whiteSpace: 'pre-line',
              borderLeft: `3px solid ${NAVY}`, paddingLeft: '14px',
            }}>
              {job.description || <em style={{ color: '#9ca3af' }}>No description provided.</em>}
            </p>
          </td>
        </tr>
      )}
    </>
  )
}

/* ─── Main AdminPage ─── */
export default function AdminPage() {
  const [authed, setAuthed]   = useState(() => sessionStorage.getItem('qpod_admin') === '1')
  const [jobs, setJobs]       = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [toast, setToast]     = useState({ msg: '', type: 'success' })
  const [search, setSearch]   = useState('')

  const notify = (msg, type = 'success') => {
    setToast({ msg, type })
    setTimeout(() => setToast({ msg: '', type: 'success' }), 3500)
  }

  /* Fetch ALL jobs (active + inactive) for admin view */
  const fetchJobs = useCallback(async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('jobs')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      notify(error.message, 'error')
    } else {
      setJobs(data ?? [])
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    if (authed) fetchJobs()
  }, [authed, fetchJobs])

  /* Toggle is_active for a job — optimistic UI update */
  const handleToggle = async job => {
    const newVal = !job.is_active
    /* Optimistic update */
    setJobs(prev => prev.map(j => j.id === job.id ? { ...j, is_active: newVal } : j))

    const { error } = await supabase
      .from('jobs')
      .update({ is_active: newVal })
      .eq('id', job.id)

    if (error) {
      /* Rollback on failure */
      setJobs(prev => prev.map(j => j.id === job.id ? { ...j, is_active: job.is_active } : j))
      notify(error.message, 'error')
    } else {
      notify(`"${job.title}" marked ${newVal ? 'active' : 'inactive'}.`)
    }
  }

  /* Delete a job — optimistic removal */
  const handleDelete = async id => {
    const removed = jobs.find(j => j.id === id)
    setJobs(prev => prev.filter(j => j.id !== id))

    const { error } = await supabase.from('jobs').delete().eq('id', id)

    if (error) {
      setJobs(prev => [removed, ...prev]) /* Rollback */
      notify(error.message, 'error')
    } else {
      notify(`"${removed?.title}" deleted.`, 'success')
    }
  }

  /* Add newly created job to top of list without refetch */
  const handleCreated = job => {
    setJobs(prev => [job, ...prev])
    setShowForm(false)
    notify(`"${job.title}" posted successfully!`)
  }

  const filtered = jobs.filter(j =>
    `${j.title} ${j.department} ${j.location}`.toLowerCase().includes(search.toLowerCase())
  )

  const logout = () => {
    sessionStorage.removeItem('qpod_admin')
    setAuthed(false)
  }

  if (!authed) return <LoginScreen onLogin={() => setAuthed(true)} />

  return (
    <div className="min-h-screen" style={{ background: '#f5f8ff', fontFamily: FONT_SG }}>
      <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
      <Toast msg={toast.msg} type={toast.type} />

      {/* Admin topbar */}
      <header style={{
        background: '#ffffff',
        borderBottom: '1px solid rgba(0,51,153,0.1)',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}>
        <div className="flex items-center gap-3">
          <Lock size={14} style={{ color: CRIMSON }} />
          <span style={{ fontFamily: FONT_ORB, fontSize: '0.52rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: NAVY }}>
            QP Admin
          </span>
          <span style={{ width: '1px', height: '16px', background: 'rgba(0,51,153,0.15)' }} />
          <span style={{ fontFamily: FONT_ORB, fontSize: '0.48rem', letterSpacing: '0.15em', color: '#9ca3af' }}>
            Jobs Management
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Link to public careers page */}
          <a href="/careers" target="_blank" rel="noopener noreferrer"
            style={{
              fontFamily: FONT_ORB, fontSize: '0.46rem', fontWeight: 700, letterSpacing: '0.16em',
              textTransform: 'uppercase', color: BLUE, textDecoration: 'none',
            }}>
            View Public Page ↗
          </a>
          <button onClick={logout}
            className="flex items-center gap-1.5"
            style={{
              fontFamily: FONT_ORB, fontSize: '0.46rem', fontWeight: 700, letterSpacing: '0.16em',
              textTransform: 'uppercase', color: '#6b7280', background: 'none',
              border: '1px solid rgba(0,0,0,0.12)', padding: '6px 12px', cursor: 'pointer',
            }}>
            <LogOut size={11} /> Sign out
          </button>
        </div>
      </header>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 24px' }}>

        {/* Page heading + stats */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
          <div>
            <h1 style={{ fontFamily: FONT_ORB, fontSize: '1.2rem', fontWeight: 800, color: NAVY, letterSpacing: '0.02em', marginBottom: '4px' }}>
              Job Postings
            </h1>
            <p style={{ fontFamily: FONT_SG, fontSize: '0.9rem', color: '#6b7280' }}>
              {jobs.length} total · {jobs.filter(j => j.is_active).length} active
            </p>
          </div>

          <button
            onClick={() => setShowForm(v => !v)}
            className="inline-flex items-center gap-2"
            style={{
              fontFamily: FONT_ORB, fontSize: '0.52rem', fontWeight: 700, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: '#ffffff', background: showForm ? '#6b7280' : NAVY,
              border: `1.5px solid ${showForm ? '#6b7280' : NAVY}`, padding: '11px 22px', cursor: 'pointer',
              transition: 'all 0.2s',
            }}>
            <Plus size={13} />
            {showForm ? 'Cancel' : 'Post New Job'}
          </button>
        </div>

        {/* New job form */}
        {showForm && (
          <NewJobForm
            onCreated={handleCreated}
            onCancel={() => setShowForm(false)}
          />
        )}

        {/* Search */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by title, department, or location..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              fontFamily: FONT_SG, fontSize: '0.9rem', color: '#1f2937',
              padding: '9px 14px', width: '100%', maxWidth: '380px', boxSizing: 'border-box',
              border: '1px solid rgba(0,51,153,0.18)', background: '#ffffff', outline: 'none',
            }}
          />
        </div>

        {/* Jobs table */}
        <div style={{
          background: '#ffffff',
          border: '1px solid rgba(0,51,153,0.1)',
          overflow: 'hidden',
        }}>
          {loading ? (
            <div className="flex justify-center py-16">
              <Loader2 size={28} style={{ color: NAVY, animation: 'spin 0.8s linear infinite' }} />
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-16 text-center" style={{ fontFamily: FONT_SG, color: '#9ca3af', fontSize: '0.95rem' }}>
              {search ? 'No jobs match your search.' : 'No jobs yet — post your first one above.'}
            </div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#f5f8ff', borderBottom: '2px solid rgba(0,51,153,0.1)' }}>
                    {['Title', 'Department', 'Location', 'Type', 'Status', 'Actions'].map(h => (
                      <th key={h} style={{
                        padding: '11px 16px', textAlign: 'left',
                        fontFamily: FONT_ORB, fontSize: '0.44rem', fontWeight: 700,
                        letterSpacing: '0.22em', textTransform: 'uppercase', color: '#6b7280',
                      }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.map(job => (
                    <JobRow
                      key={job.id}
                      job={job}
                      onToggle={handleToggle}
                      onDelete={handleDelete}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
