import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Complaint from './components/Complaint'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsConditions from './components/TermsConditions'
import RefundPolicy from './components/RefundPolicy'
import Disclaimer from './components/Disclaimer'
import './App.css'

const pageTitles = {
  '/':           'Trade Nexus - Smart Trading Research Solutions | SEBI Registered',
  '/about':      'About Us | Trade Nexus - SEBI Registered Research Analyst',
  '/services':   'Our Services | Stock Cash, Options & Index Trading | Trade Nexus',
  '/pricing':    'Pricing Plans | Affordable Trading Packages | Trade Nexus',
  '/contact':    'Contact Us | Trade Nexus - Get in Touch',
  '/complaints': 'Submit a Complaint | Trade Nexus',
  '/login':      'Admin Login | Trade Nexus',
  '/dashboard':  'Admin Dashboard | Trade Nexus - Trade Smart',
  '/privacy-policy': 'Privacy Policy | Trade Nexus',
  '/terms-conditions': 'Terms & Conditions | Trade Nexus',
  '/refund-policy': 'Refund & Cancellation Policy | Trade Nexus',
  '/disclaimer': 'Legal Disclaimer | Trade Nexus',
}

const pageDescriptions = {
  '/':           'Trade Nexus is a SEBI registered research analyst providing high-accuracy stock market recommendations in Equity, Derivatives and Index Options for NSE & BSE traders.',
  '/about':      'Learn about Trade Nexus — a SEBI registered financial market research company providing intraday and delivery calls in Stock cash and F&O.',
  '/services':   'Explore Trade Nexus services: Stock Cash, Stock Options, Index Options and combo packages for intraday and delivery trading.',
  '/pricing':    'View Trade Nexus pricing plans for Stock Cash, Stock Options and Index Options — monthly, quarterly, half-yearly and yearly packages.',
  '/contact':    'Contact Trade Nexus for stock market research and trading recommendations. Reach us via WhatsApp, phone or email.',
  '/complaints': 'Submit a complaint to Trade Nexus. We acknowledge all complaints within 24 hours and resolve within 7-14 business days.',
  '/login':      'Secure administration login for Trade Nexus.',
  '/dashboard':  'Trade Nexus administration and document portal.',
  '/privacy-policy': 'Privacy Policy of Trade Nexus - Learn how we collect, use, and protect your data.',
  '/terms-conditions': 'Terms and Conditions for using Trade Nexus research services and platform.',
  '/refund-policy': 'Refund and Cancellation Policy for Trade Nexus subscriptions and services.',
  '/disclaimer': 'Legal and SEBI regulatory disclaimer for Trade Nexus research recommendations.',
}

const pageRoutes = {
  home:       '/',
  about:      '/about',
  services:   '/services',
  pricing:    '/pricing',
  contact:    '/contact',
  complaints: '/complaints',
  login:      '/login',
  dashboard:  '/dashboard',
  privacyPolicy: '/privacy-policy',
  termsConditions: '/terms-conditions',
  refundPolicy: '/refund-policy',
  disclaimer: '/disclaimer',
}

function AppContent() {
  const navigate = useNavigate()
  const location = useLocation()

  const isAdminRoute = location.pathname === '/login' || location.pathname === '/dashboard'

  useEffect(() => {
    document.title = pageTitles[location.pathname] || 'Trade Nexus'
    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', pageDescriptions[location.pathname] || pageDescriptions['/'])
    // Update canonical
    let canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) canonical.setAttribute('href', `https://tradenexustradesmart.com${location.pathname}`)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  const handleNavigate = (page) => {
    navigate(pageRoutes[page] || '/')
  }

  return (
    <>
      {!isAdminRoute && <Header onNavigate={handleNavigate} />}
      <Routes>
        <Route path="/"           element={<Home onNavigate={handleNavigate} />} />
        <Route path="/about"      element={<About />} />
        <Route path="/services"   element={<Services onNavigate={handleNavigate} />} />
        <Route path="/pricing"    element={<Pricing />} />
        <Route path="/contact"    element={<Contact />} />
        <Route path="/complaints" element={<Complaint />} />
        <Route path="/login"      element={<Login />} />
        <Route path="/dashboard"  element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="*"           element={<Home onNavigate={handleNavigate} />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}
