import { useState } from 'react'
import logo from '../assets/logo.jpeg'
import { FaTimes, FaBars } from 'react-icons/fa'
import './Header.css'

const navItems = ['Home', 'About Us', 'Services', 'Pricing', 'Contact', 'Complaints']

const navMap = {
  'Home': 'home', 'About Us': 'about', 'Services': 'services',
  'Pricing': 'pricing', 'Contact': 'contact', 'Complaints': 'complaints'
}

export default function Header({ onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = (item) => {
    onNavigate(navMap[item])
    setMenuOpen(false)
  }

  return (
    <>
      <header className="header">
        <div className="header-inner">

          {/* LOGO */}
          <div className="logo-wrap" onClick={() => handleNavClick('Home')}>
            <div className="logo-img-wrap">
              <img src={logo} alt="Trade Nexus Trade Smart" className="logo-img" />
            </div>
            <span className="logo-text">
              Trade Nexus<span className="logo-accent"> - Trade Smart</span>
            </span>
          </div>

          {/* DESKTOP NAV */}
          <nav className="desktop-nav">
            {navItems.map(item => (
              <a
                key={item}
                href="#"
                className="nav-link"
                onClick={(e) => { e.preventDefault(); handleNavClick(item) }}
              >
                {item}
              </a>
            ))}
            <button className="nav-cta" onClick={() => handleNavClick('Contact')}>
              Get Started
            </button>
          </nav>

          {/* HAMBURGER */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen
              ? <FaTimes style={{ color: '#00d4ff', fontSize: '20px' }} />
              : <>
                  <span className="bar" />
                  <span className="bar" />
                  <span className="bar" />
                </>
            }
          </button>

        </div>
      </header>

      {/* MOBILE MENU — outside header to avoid stacking context issues */}
      {menuOpen && (
        <div className="mobile-menu">
          {navItems.map(item => (
            <a
              key={item}
              href="#"
              className="mobile-nav-link"
              onClick={(e) => { e.preventDefault(); handleNavClick(item) }}
            >
              {item}
            </a>
          ))}
          <button className="mobile-nav-cta" onClick={() => handleNavClick('Contact')}>
            Get Started
          </button>
        </div>
      )}

      {/* OVERLAY */}
      {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)} />}
    </>
  )
}
