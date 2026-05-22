import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.jpeg'

const quickLinks = [
  { label: 'Home',        path: '/' },
  { label: 'About Us',    path: '/about' },
  { label: 'Services',    path: '/services' },
  { label: 'Pricing',     path: '/pricing' },
  { label: 'Contact',     path: '/contact' },
  { label: 'Complaints',  path: '/complaints' },
  { label: 'Admin Portal', path: '/login' },
]
const services = ['Stock Trading', 'Forex Trading', 'Commodity Trading', 'Portfolio Management', 'Market Analysis']

export default function Footer() {
  const navigate = useNavigate()
  return (
    <footer style={styles.footer}>
      <div style={styles.glow} />
      <div style={styles.inner}>

        <div style={styles.col}>
          <div style={styles.logoRow}>
            <div style={styles.logoImgWrap}>
              <img src={logo} alt="Trade Nexus" style={styles.logoImg} />
            </div>
            <h3 style={styles.brand}>Trade Nexus<span style={styles.accent}> - Trade Smart</span></h3>
          </div>
          <p style={styles.tagline}>Your trusted partner in smart trading and financial growth.</p>
          <div style={styles.socials}>
            {['𝕏', 'in', 'f', '▶'].map((icon, i) => (
              <a
                key={i}
                href="#"
                style={styles.socialIcon}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(0, 212, 255, 0.25)'
                  e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.6)'
                  e.currentTarget.style.transform = 'translateY(-3px)'
                  e.currentTarget.style.color = '#00d4ff'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(0, 212, 255, 0.08)'
                  e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.25)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.color = '#42b2bd'
                }}
              >{icon}</a>
            ))}
          </div>
        </div>

        <div style={styles.col}>
          <h4 style={styles.colTitle}>Quick Links</h4>
          <ul style={styles.list}>
            {quickLinks.map(link => (
              <li key={link.label}>
                <a
                  href={link.path}
                  style={styles.footerLink}
                  onClick={(e) => { e.preventDefault(); navigate(link.path); window.scrollTo({ top: 0, behavior: 'instant' }) }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#00d4ff'; e.currentTarget.style.paddingLeft = '6px' }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#9ca3af'; e.currentTarget.style.paddingLeft = '0' }}
                >
                  › {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div style={styles.col}>
          <h4 style={styles.colTitle}>Our Services</h4>
          <ul style={styles.list}>
            {services.map(s => (
              <li key={s}>
                <a href="#services" style={styles.footerLink}
                  onMouseEnter={e => { e.currentTarget.style.color = '#00d4ff'; e.currentTarget.style.paddingLeft = '6px' }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#9ca3af'; e.currentTarget.style.paddingLeft = '0' }}
                >
                  › {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div style={styles.col}>
          <h4 style={styles.colTitle}>Contact Us</h4>
          {[
            { icon: '📍', content: 'HSR Layout, 7th Sector,\nNear 5th Main Road,\nNear Reliance Digital,\nBangalore – 560102', isText: true },
            { icon: '📞', content: '+91 919483001083', href: 'tel:+91919483001083' },
            { icon: '✉️', content: 'info@tradenexustradesmart.com', href: 'mailto:info@tradenexustradesmart.com' },
          ].map((item, i) => (
            <div key={i} style={styles.contactItem}>
              <span style={styles.contactIcon}>{item.icon}</span>
              {item.isText ? (
                <p style={styles.contactText}>{item.content.split('\n').map((l, j) => <span key={j}>{l}<br /></span>)}</p>
              ) : (
                <a href={item.href} style={styles.footerLink}
                  onMouseEnter={e => { e.currentTarget.style.color = '#00d4ff' }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#9ca3af' }}
                >{item.content}</a>
              )}
            </div>
          ))}
        </div>

      </div>

      <div style={styles.divider} />
      <div style={styles.bottom}>
        <p style={styles.copy}>© {new Date().getFullYear()} Trade Nexus - Trade Smart. All rights reserved.</p>
        <div style={styles.bottomLinks}>
          {['Privacy Policy', 'Terms of Service', 'Disclaimer'].map(item => (
            <a key={item} href="#" style={styles.bottomLink}
              onMouseEnter={e => { e.currentTarget.style.color = '#00d4ff' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#6b7280' }}
            >{item}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    background: 'linear-gradient(180deg, #08111f 0%, #0a1525 50%, #08111f 100%)',
    color: '#d1d5db',
    position: 'relative',
    overflow: 'hidden',
    marginTop: 'auto',
    borderTop: '1px solid rgba(0, 212, 255, 0.1)',
  },
  glow: {
    position: 'absolute',
    top: '-100px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '800px',
    height: '250px',
    background: 'radial-gradient(ellipse, rgba(0, 212, 255, 0.08) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  inner: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '60px 24px 40px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '40px',
  },
  col: { display: 'flex', flexDirection: 'column', gap: '12px' },
  logoRow: { display: 'flex', alignItems: 'center', gap: '10px' },
  logoImgWrap: {
    width: '38px', height: '38px',
    borderRadius: '50%',
    padding: '2px',
    background: 'linear-gradient(135deg, #00d4ff, #42b2bd)',
    flexShrink: 0,
  },
  logoImg: { width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', display: 'block' },
  brand: { fontSize: '22px', fontWeight: '800', color: '#fff', margin: 0, letterSpacing: '0.5px' },
  accent: {
    background: 'linear-gradient(135deg, #00d4ff, #42b2bd)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  tagline: { fontSize: '13px', lineHeight: '1.6', color: '#9ca3af', margin: '8px 0' },
  socials: { display: 'flex', gap: '10px', marginTop: '4px' },
  socialIcon: {
    width: '38px', height: '38px',
    background: 'rgba(0, 212, 255, 0.08)',
    border: '1px solid rgba(0, 212, 255, 0.25)',
    borderRadius: '10px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: '#42b2bd', textDecoration: 'none', fontSize: '14px', fontWeight: '700',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  colTitle: {
    fontSize: '15px', fontWeight: '600', color: '#fff',
    margin: '0 0 16px', letterSpacing: '0.5px',
    borderBottom: '2px solid #00d4ff', paddingBottom: '10px', display: 'inline-block',
  },
  list: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' },
  footerLink: {
    color: '#9ca3af', textDecoration: 'none', fontSize: '13px',
    transition: 'all 0.2s ease', display: 'inline-block',
  },
  contactItem: { display: 'flex', gap: '10px', alignItems: 'flex-start' },
  contactIcon: { fontSize: '16px', marginTop: '2px', flexShrink: 0 },
  contactText: { fontSize: '13px', lineHeight: '1.7', color: '#9ca3af', margin: 0 },
  divider: {
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.2), transparent)',
    maxWidth: '1200px', margin: '0 auto', width: '100%',
  },
  bottom: {
    maxWidth: '1200px', margin: '0 auto',
    padding: '20px 24px',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    flexWrap: 'wrap', gap: '12px',
  },
  copy: { fontSize: '13px', color: '#6b7280', margin: 0 },
  bottomLinks: { display: 'flex', gap: '20px' },
  bottomLink: { fontSize: '12px', color: '#6b7280', textDecoration: 'none', transition: 'color 0.2s' },
}
