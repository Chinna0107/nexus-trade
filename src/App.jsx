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
import './App.css'

const pageTitles = {
  '/':           'Trade Nexus - Smart Trading Research Solutions',
  '/about':      'About Us | Trade Nexus',
  '/services':   'Our Services | Trade Nexus',
  '/pricing':    'Pricing Plans | Trade Nexus',
  '/contact':    'Contact Us | Trade Nexus',
  '/complaints': 'Submit a Complaint | Trade Nexus',
}

const pageRoutes = {
  home:       '/',
  about:      '/about',
  services:   '/services',
  pricing:    '/pricing',
  contact:    '/contact',
  complaints: '/complaints',
}

function AppContent() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    document.title = pageTitles[location.pathname] || 'Trade Nexus'
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  const handleNavigate = (page) => {
    navigate(pageRoutes[page] || '/')
  }

  return (
    <>
      <Header onNavigate={handleNavigate} />
      <Routes>
        <Route path="/"           element={<Home onNavigate={handleNavigate} />} />
        <Route path="/about"      element={<About />} />
        <Route path="/services"   element={<Services onNavigate={handleNavigate} />} />
        <Route path="/pricing"    element={<Pricing />} />
        <Route path="/contact"    element={<Contact />} />
        <Route path="/complaints" element={<Complaint />} />
        <Route path="*"           element={<Home onNavigate={handleNavigate} />} />
      </Routes>
      <Footer />
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
