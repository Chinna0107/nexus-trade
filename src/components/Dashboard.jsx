import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaChartPie,
  FaFileSignature,
  FaFileInvoiceDollar,
  FaMoneyCheckAlt,
  FaFileContract,
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaUserShield,
  FaChevronRight,
  FaGlobe
} from 'react-icons/fa'
import { logout } from '../utils/auth'
import DashboardHome from './dashboard/DashboardHome'
import OfferLetterDoc from './dashboard/OfferLetterDoc'
import InvoiceDoc from './dashboard/InvoiceDoc'
import PaySlipDoc from './dashboard/PaySlipDoc'
import AppointmentLetterDoc from './dashboard/AppointmentLetterDoc'
import logo from '../assets/logo.jpeg'
import './Dashboard.css'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('home')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const navigate = useNavigate()

  const menuItems = [
    { id: 'home', label: 'Overview Home', icon: FaChartPie },
    { id: 'offer-letter', label: 'Offer Letter', icon: FaFileSignature },
    { id: 'invoice', label: 'Invoice Print', icon: FaFileInvoiceDollar },
    { id: 'pay-slip', label: 'Pay Slip', icon: FaMoneyCheckAlt },
    { id: 'appointment-letter', label: 'Appointment Contract', icon: FaFileContract },
  ]

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
    setSidebarOpen(false)
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <DashboardHome setTab={setActiveTab} />
      case 'offer-letter':
        return <OfferLetterDoc setTab={setActiveTab} />
      case 'invoice':
        return <InvoiceDoc setTab={setActiveTab} />
      case 'pay-slip':
        return <PaySlipDoc setTab={setActiveTab} />
      case 'appointment-letter':
        return <AppointmentLetterDoc setTab={setActiveTab} />
      default:
        return <DashboardHome setTab={setActiveTab} />
    }
  }

  return (
    <div className="dash-container">
      {/* Mobile Header Banner (no-print) */}
      <div className="dash-header-mobile no-print">
        <div className="dash-mobile-logo-wrap">
          <div className="dash-mobile-logo-frame">
            <img src={logo} alt="Trade Nexus Logo" />
          </div>
          <span className="dash-mobile-logo-text">Trade Nexus Admin</span>
        </div>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="dash-menu-toggle-btn"
        >
          {sidebarOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </button>
      </div>

      {/* Main sidebar overlay modal backdrop for mobile */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="dash-sidebar-backdrop no-print"
          />
        )}
      </AnimatePresence>

      {/* Left Navigation Sidebar container (no-print) */}
      <aside
        className={`dash-sidebar no-print ${
          sidebarOpen ? 'dash-sidebar-open' : 'dash-sidebar-closed'
        }`}
      >
        <div className="dash-sidebar-scroll-wrapper">
          {/* Sidebar header profile */}
          <div className="dash-profile-header">
            <div className="dash-profile-logo-frame">
              <img src={logo} alt="Trade Nexus Logo" />
            </div>
            <div className="dash-profile-details">
              <h3 className="dash-profile-title">Trade Nexus</h3>
              <span className="dash-profile-badge">
                <FaUserShield /> Chief Executive
              </span>
            </div>
          </div>

          {/* Navigation Links list */}
          <nav className="dash-nav-menu">
            <span className="dash-nav-section-title">
              Management Portal
            </span>
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = activeTab === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabChange(item.id)}
                  className={`dash-nav-btn ${isActive ? 'dash-nav-btn-active' : ''}`}
                >
                  <div className="dash-nav-btn-content">
                    <Icon className="dash-nav-btn-icon" />
                    <span>{item.label}</span>
                  </div>
                  {isActive && <FaChevronRight className="dash-nav-btn-arrow" />}
                </button>
              )
            })}
          </nav>
        </div>

        {/* Sidebar footer section with logout */}
        <div className="dash-sidebar-footer">
          <button
            onClick={() => navigate('/')}
            className="dash-action-btn-secondary"
          >
            <FaGlobe />
            <span>Return to Website</span>
          </button>
          <button
            onClick={handleLogout}
            className="dash-action-btn-danger"
          >
            <FaSignOutAlt />
            <span>Logout Session</span>
          </button>
        </div>
      </aside>

      {/* Main dashboard content canvas */}
      <main className="dash-main-canvas">
        {/* Glow ambient spots */}
        <div className="dash-ambient-glow-1 no-print" />
        <div className="dash-ambient-glow-2 no-print" />

        {/* Dynamic active subview */}
        <div className="dash-content-wrapper">
          {renderContent()}
        </div>
      </main>
    </div>
  )
}
