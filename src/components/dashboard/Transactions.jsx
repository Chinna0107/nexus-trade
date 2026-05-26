import { useCallback, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaCheckCircle, FaClock, FaTimesCircle,
  FaSearch, FaFilter, FaDownload, FaEye, FaTimes,
  FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaIdCard,
  FaReceipt, FaChartLine, FaCalendarAlt
} from 'react-icons/fa'
import { API_BASE_URL } from '../../config/env'

const API = API_BASE_URL

const STATUS_CONFIG = {
  paid:    { color: '#10b981', bg: 'rgba(16,185,129,0.12)', border: 'rgba(16,185,129,0.25)', icon: FaCheckCircle, label: 'Paid' },
  pending: { color: '#f59e0b', bg: 'rgba(245,158,11,0.12)', border: 'rgba(245,158,11,0.25)', icon: FaClock,       label: 'Pending' },
  failed:  { color: '#ef4444', bg: 'rgba(239,68,68,0.12)',  border: 'rgba(239,68,68,0.25)',  icon: FaTimesCircle, label: 'Failed' },
}

export default function Transactions() {
  const [transactions, setTransactions] = useState([])
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selected, setSelected] = useState(null)

  const loadStats = useCallback(async () => {
    try {
      const res = await fetch(`${API}/transactions/stats`)
      const data = await res.json()
      setStats(data)
    } catch {
      setStats(null)
    }
  }, [])

  const loadTransactions = useCallback(async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams()
      if (statusFilter !== 'all') params.append('status', statusFilter)
      if (search) params.append('search', search)
      const res = await fetch(`${API}/transactions?${params}`)
      const data = await res.json()
      setTransactions(Array.isArray(data) ? data : [])
    } catch {
      setTransactions([])
    } finally {
      setLoading(false)
    }
  }, [search, statusFilter])

  useEffect(() => {
    const timer = setTimeout(loadStats, 0)
    return () => clearTimeout(timer)
  }, [loadStats])

  useEffect(() => {
    const timer = setTimeout(() => loadTransactions(), 300)
    return () => clearTimeout(timer)
  }, [loadTransactions])

  const exportCSV = () => {
    const headers = ['Receipt ID', 'Name', 'Email', 'Phone', 'State', 'PAN', 'Plan', 'Duration', 'Amount', 'Status', 'Date']
    const rows = transactions.map(t => [
      t.receipt_id, t.customer_name, t.customer_email, t.customer_phone,
      t.customer_state, t.customer_pan, t.plan_category, t.plan_duration,
      t.amount, t.status, new Date(t.created_at).toLocaleDateString('en-IN')
    ])
    const csv = [headers, ...rows].map(r => r.join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url; a.download = `transactions_${Date.now()}.csv`; a.click()
  }

  return (
    <div className="tx-page">

      {/* ── HEADER ── */}
      <div className="tx-header">
        <div>
          <h2 className="tx-title">Transactions</h2>
          <p className="tx-subtitle">All customer payment records</p>
        </div>
        <button onClick={exportCSV} className="tx-export-btn">
          <FaDownload /> Export CSV
        </button>
      </div>

      {/* ── STATS ── */}
      {stats && (
        <div className="tx-stats-grid">
          {[
            { label: 'Total Transactions', value: stats.total,                    icon: FaReceipt,    color: '#00d4ff' },
            { label: 'Paid',               value: stats.paid,                     icon: FaCheckCircle,color: '#10b981' },
            { label: 'Pending',            value: stats.pending,                  icon: FaClock,      color: '#f59e0b' },
            { label: 'Total Revenue',      value: `₹${stats.revenue.toLocaleString('en-IN')}`, icon: FaChartLine, color: '#a78bfa' },
          ].map((s, i) => (
            <motion.div key={i} className="tx-stat-card" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
              <div className="tx-stat-icon" style={{ background: s.color + '18', color: s.color }}>
                <s.icon />
              </div>
              <div>
                <div className="tx-stat-value">{s.value}</div>
                <div className="tx-stat-label">{s.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* ── FILTERS ── */}
      <div className="tx-filters">
        <div className="tx-search-wrap">
          <FaSearch className="tx-search-icon" />
          <input
            type="text"
            placeholder="Search by name, email, phone or receipt ID..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="tx-search-input"
          />
        </div>
        <div className="tx-filter-tabs">
          <FaFilter className="tx-filter-icon" />
          {['all', 'paid', 'pending', 'failed'].map(s => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`tx-filter-tab ${statusFilter === s ? 'active' : ''}`}
              style={statusFilter === s && s !== 'all' ? { background: STATUS_CONFIG[s]?.bg, color: STATUS_CONFIG[s]?.color, borderColor: STATUS_CONFIG[s]?.border } : {}}
            >
              {s === 'all' ? 'All' : STATUS_CONFIG[s]?.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── TABLE ── */}
      <div className="tx-table-wrap">
        {loading ? (
          <div className="tx-loading">
            <div className="tx-spinner" />
            <p>Loading transactions...</p>
          </div>
        ) : transactions.length === 0 ? (
          <div className="tx-empty">
            <FaReceipt className="tx-empty-icon" />
            <p>No transactions found</p>
          </div>
        ) : (
          <table className="tx-table">
            <thead>
              <tr>
                <th>Receipt ID</th>
                <th>Customer</th>
                <th>Plan</th>
                <th>Duration</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence>
                {transactions.map((t, i) => {
                  const sc = STATUS_CONFIG[t.status] || STATUS_CONFIG.pending
                  const Icon = sc.icon
                  return (
                    <motion.tr
                      key={t.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.03 }}
                      className="tx-row"
                    >
                      <td><span className="tx-receipt-id">{t.receipt_id}</span></td>
                      <td>
                        <div className="tx-customer-cell">
                          <div className="tx-avatar">{t.customer_name[0]?.toUpperCase()}</div>
                          <div>
                            <div className="tx-customer-name">{t.customer_name}</div>
                            <div className="tx-customer-email">{t.customer_email}</div>
                          </div>
                        </div>
                      </td>
                      <td><span className="tx-plan">{t.plan_category}</span></td>
                      <td><span className="tx-duration">{t.plan_duration}</span></td>
                      <td><span className="tx-amount">₹{parseFloat(t.amount).toLocaleString('en-IN')}</span></td>
                      <td>
                        <span className="tx-status-badge" style={{ background: sc.bg, color: sc.color, border: `1px solid ${sc.border}` }}>
                          <Icon /> {sc.label}
                        </span>
                      </td>
                      <td>
                        <span className="tx-date">
                          <FaCalendarAlt />
                          {new Date(t.created_at).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                        </span>
                      </td>
                      <td>
                        <button className="tx-view-btn" onClick={() => setSelected(t)}>
                          <FaEye /> View
                        </button>
                      </td>
                    </motion.tr>
                  )
                })}
              </AnimatePresence>
            </tbody>
          </table>
        )}
      </div>

      {/* ── DETAIL MODAL ── */}
      <AnimatePresence>
        {selected && (
          <motion.div className="tx-modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}>
            <motion.div
              className="tx-modal"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={e => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="tx-modal-header">
                <div>
                  <div className="tx-modal-receipt">{selected.receipt_id}</div>
                  <h3 className="tx-modal-title">Transaction Details</h3>
                </div>
                <button className="tx-modal-close" onClick={() => setSelected(null)}><FaTimes /></button>
              </div>

              {/* Status Banner */}
              {(() => {
                const sc = STATUS_CONFIG[selected.status] || STATUS_CONFIG.pending
                const Icon = sc.icon
                return (
                  <div className="tx-modal-status-banner" style={{ background: sc.bg, borderColor: sc.border }}>
                    <Icon style={{ color: sc.color, fontSize: 22 }} />
                    <div>
                      <div style={{ color: sc.color, fontWeight: 700, fontSize: 15 }}>Payment {sc.label}</div>
                      <div style={{ color: sc.color, opacity: 0.7, fontSize: 12 }}>
                        {selected.razorpay_payment_id || 'Awaiting payment confirmation'}
                      </div>
                    </div>
                  </div>
                )
              })()}

              <div className="tx-modal-body">
                {/* Customer Info */}
                <div className="tx-modal-section">
                  <h4 className="tx-modal-section-title">Customer Details</h4>
                  <div className="tx-modal-info-grid">
                    {[
                      { icon: FaUser,          label: 'Full Name',    value: selected.customer_name },
                      { icon: FaEnvelope,      label: 'Email',        value: selected.customer_email },
                      { icon: FaPhone,         label: 'Phone',        value: `+91 ${selected.customer_phone}` },
                      { icon: FaMapMarkerAlt,  label: 'State',        value: selected.customer_state },
                      { icon: FaIdCard,        label: 'PAN Number',   value: selected.customer_pan, mono: true },
                    ].map((item, i) => (
                      <div key={i} className="tx-modal-info-item">
                        <div className="tx-modal-info-label"><item.icon /> {item.label}</div>
                        <div className={`tx-modal-info-value ${item.mono ? 'mono' : ''}`}>{item.value || '—'}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan Info */}
                <div className="tx-modal-section">
                  <h4 className="tx-modal-section-title">Subscription Details</h4>
                  <div className="tx-modal-plan-card">
                    <div className="tx-modal-plan-row">
                      <span>Plan Category</span>
                      <strong>{selected.plan_category}</strong>
                    </div>
                    <div className="tx-modal-plan-row">
                      <span>Duration</span>
                      <strong>{selected.plan_duration}</strong>
                    </div>
                    <div className="tx-modal-plan-row">
                      <span>Razorpay Order ID</span>
                      <strong className="mono">{selected.razorpay_order_id || '—'}</strong>
                    </div>
                    <div className="tx-modal-plan-row">
                      <span>Transaction Date</span>
                      <strong>{new Date(selected.created_at).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</strong>
                    </div>
                    <div className="tx-modal-plan-row total">
                      <span>Total Amount (incl. GST)</span>
                      <strong className="tx-modal-amount">₹{parseFloat(selected.amount).toLocaleString('en-IN')}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
