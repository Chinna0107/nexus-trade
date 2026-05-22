import { motion } from 'framer-motion'
import { FaFileSignature, FaFileInvoiceDollar, FaMoneyCheckAlt, FaFileContract, FaFolderPlus, FaUsers } from 'react-icons/fa'
import './DashboardHome.css'

export default function DashboardHome({ setTab }) {
  const stats = [
    { label: 'Documents Issued', value: '1,284', icon: FaFileSignature, themeClass: 'dash-stat-emerald' },
    { label: 'Active Invoices', value: '47', icon: FaFileInvoiceDollar, themeClass: 'dash-stat-sky' },
    { label: 'Payroll Disbursed', value: '₹18,45,000', icon: FaMoneyCheckAlt, themeClass: 'dash-stat-amber' },
    { label: 'Personnel Count', value: '142', icon: FaUsers, themeClass: 'dash-stat-violet' },
  ]

  const templates = [
    { id: 'offer-letter', label: 'Offer Letter', desc: 'Generate official Trade Nexus offer letters matching candidate profiles.', icon: FaFileSignature, themeClass: 'dash-tpl-sky' },
    { id: 'invoice', label: 'Invoice Print', desc: 'Create itemized GST-compliant invoices for professional research orders.', icon: FaFileInvoiceDollar, themeClass: 'dash-tpl-emerald' },
    { id: 'pay-slip', label: 'Pay Slip', desc: 'Calculate payroll details and generate structured salary payslips.', icon: FaMoneyCheckAlt, themeClass: 'dash-tpl-amber' },
    { id: 'appointment-letter', label: 'Appointment Letter', desc: 'Formulate detailed multi-clause contracts and compensation schedules.', icon: FaFileContract, themeClass: 'dash-tpl-violet' },
  ]

  return (
    <div className="dash-home-container">
      {/* Welcome banner */}
      <div className="dash-welcome-row">
        <div>
          <h1 className="dash-welcome-title">Welcome back, Admin</h1>
          <p className="dash-welcome-subtitle">Manage documents, billing, and credentials from your executive center.</p>
        </div>
        <div className="dash-status-tag">
          System Status: <span className="dash-status-indicator">● Active</span>
        </div>
      </div>

      {/* Grid statistics cards */}
      <div className="dash-stats-grid">
        {stats.map((stat, i) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="dash-stat-card"
            >
              <div>
                <span className="dash-stat-label">{stat.label}</span>
                <h3 className="dash-stat-val">{stat.value}</h3>
              </div>
              <div className={`dash-stat-icon-frame ${stat.themeClass}`}>
                <Icon />
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Templates shortcuts section */}
      <div>
        <h2 className="dash-section-title">
          <FaFolderPlus /> Document Generating Workspaces
        </h2>
        <div className="dash-templates-grid">
          {templates.map((tpl, i) => {
            const Icon = tpl.icon
            return (
              <motion.div
                key={tpl.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15 + i * 0.05 }}
                whileHover={{ y: -3 }}
                className="dash-template-card"
              >
                <div className="dash-template-body">
                  <div className="dash-template-header">
                    <div className={`dash-template-icon ${tpl.themeClass}`}>
                      <Icon />
                    </div>
                    <h3 className="dash-template-card-title">{tpl.label}</h3>
                  </div>
                  <p className="dash-template-desc">{tpl.desc}</p>
                </div>
                <div className="dash-template-footer">
                  <span className="dash-template-footer-label">A4 Ready Layout</span>
                  <button
                    onClick={() => setTab(tpl.id)}
                    className="dash-template-btn"
                  >
                    Open Workspace →
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* System activity & recent docs */}
      <div className="dash-activity-card">
        <h3 className="dash-activity-title">Recent Audit Activity</h3>
        <div className="dash-activity-list">
          {[
            { action: 'Offer Letter Generated', name: 'Davood (BDE)', time: '2 mins ago', icon: FaFileSignature, status: 'Completed' },
            { action: 'Invoice Issued', name: 'INV-2026-042 (10,500 INR)', time: '24 mins ago', icon: FaFileInvoiceDollar, status: 'Completed' },
            { action: 'Pay Slip Disbursed', name: 'P-9923 (Sujata K)', time: '1 hour ago', icon: FaMoneyCheckAlt, status: 'Approved' },
            { action: 'Appointment Letter Compiled', name: 'Rohan Sharma (Research Analyst)', time: '4 hours ago', icon: FaFileContract, status: 'Completed' },
          ].map((act, idx) => {
            const Icon = act.icon
            return (
              <div key={idx} className="dash-activity-row">
                <div className="dash-activity-details">
                  <div className="dash-activity-icon-wrap">
                    <Icon />
                  </div>
                  <div className="dash-activity-text-wrap">
                    <h4 className="dash-activity-action">{act.action}</h4>
                    <span className="dash-activity-target">{act.name}</span>
                  </div>
                </div>
                <div className="dash-activity-meta">
                  <span className="dash-activity-time">{act.time}</span>
                  <span className="dash-activity-status">
                    {act.status}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

