import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaEnvelope, FaLock, FaSignInAlt, FaInfoCircle, FaShieldAlt } from 'react-icons/fa'
import { login, isAuthenticated } from '../utils/auth'
import logo from '../assets/logo.jpeg'
import './Login.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    // Redirect if already authenticated
    if (isAuthenticated()) {
      navigate('/dashboard')
    }
  }, [navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    // Artificial delay for premium look & feel
    await new Promise((resolve) => setTimeout(resolve, 800))

    const success = login(email, password)
    setIsLoading(false)

    if (success) {
      navigate('/dashboard')
    } else {
      setError('Invalid admin credentials. Please check your email and password.')
    }
  }

  return (
    <div className="login-page">
      {/* Decorative Glow Elements */}
      <div className="ambient-glow-1" />
      <div className="ambient-glow-2" />

      {/* Main Split Container */}
      <div className="login-split-container">
        {/* Left Branding Panel */}
        <div className="login-left-panel">
          <div className="login-left-content">
            <motion.div
              initial={{ scale: 0.8, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 120, delay: 0.1 }}
              className="login-split-logo-frame"
            >
              <img src={logo} alt="Trade Nexus" className="login-split-logo-img" />
            </motion.div>
            <h1 className="login-split-brand-title">
              Trade Nexus <span className="login-title-accent">Portal</span>
            </h1>
            <p className="login-split-brand-subtitle">Security Clearance Required</p>
            <div className="login-brand-divider" />
            <p className="login-brand-description">
              Welcome to the Trade Nexus Administrative Portal. Access secure management consoles, generate official advisory reports, draft executive employment contracts, and process customer subscriptions.
            </p>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="login-right-panel">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="login-wrapper"
          >
            {/* Glassmorphic Login Form Card */}
            <div className="login-card">
              {/* Subtle light bar at the top */}
              <div className="login-card-highlight" />

              <h2 className="login-card-header">
                <FaShieldAlt />
                Admin Login
              </h2>

              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="login-error-banner"
                  >
                    <FaInfoCircle />
                    <span>{error}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="login-form">
                {/* Email Field */}
                <div className="login-field">
                  <label className="login-label">
                    Administrative Email
                  </label>
                  <div className="login-input-wrap">
                    <FaEnvelope className="login-input-icon" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ceo@tradenexustradesmart.com"
                      className="login-input"
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="login-field">
                  <label className="login-label">
                    Security Password
                  </label>
                  <div className="login-input-wrap">
                    <FaLock className="login-input-icon" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••••••"
                      className="login-input"
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={isLoading}
                  className="login-submit-btn"
                >
                  {isLoading ? (
                    <div className="login-spinner" />
                  ) : (
                    <>
                      Verify Credentials
                      <FaSignInAlt />
                    </>
                  )}
                </motion.button>
              </form>
            </div>

            {/* Static Credentials Guide (For Ease of Access/Review) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="credentials-guide"
            >
              <div className="credentials-guide-header">
                <FaInfoCircle />
                <span>Authorized Administrator Access Only</span>
              </div>
              {/* <div className="credentials-block">
                <div>
                  <span className="credentials-label">Email:</span> ceo@tradenexustradesmart.com
                </div>
                <div>
                  <span className="credentials-label">Passw:</span> Admin@tradesmart
                </div>
              </div> */}
            </motion.div>

            {/* Back Link to Home */}
            <div className="login-back-wrap">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault()
                  navigate('/')
                }}
                className="login-back-link"
              >
                ← Return to Main Website
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

