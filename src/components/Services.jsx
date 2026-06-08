import { useEffect, useRef } from 'react'
import { 
  FaMoneyBillWave, 
  FaChartLine, 
  FaChartPie, 
  FaArrowUp,
  FaChartBar,
  FaLayerGroup,
  FaGem
} from 'react-icons/fa'
import './Services.css'

const services = [
  {
    id: 1,
    title: 'Stock Cash',
    icon: FaMoneyBillWave,
    description: 'Get expert recommendations for equity cash trading with high accuracy and timely delivery.',
    features: [
      'Daily intraday & delivery calls',
      'Technical & fundamental analysis',
      'Real-time market updates',
      'Risk management strategies'
    ]
  },
  {
    id: 2,
    title: 'Stock Options',
    icon: FaChartLine,
    description: 'Trade stock options with confidence using our data-driven insights and expert guidance.',
    features: [
      'Call & Put option strategies',
      'Strike price recommendations',
      'Expiry-based analysis',
      'Hedging strategies'
    ]
  },
  {
    id: 3,
    title: 'Index Options',
    icon: FaChartPie,
    description: 'Maximize returns with our index options trading recommendations for Nifty & Bank Nifty.',
    features: [
      'Nifty & Bank Nifty calls',
      'Intraday index strategies',
      'High probability setups',
      'Quick profit opportunities'
    ]
  },
  {
    id: 4,
    title: 'Stock Cash + Stock Options',
    icon: FaArrowUp,
    description: 'Comprehensive package combining equity cash and stock options for diversified trading.',
    features: [
      'Dual market exposure',
      'Balanced risk-reward ratio',
      'Multiple trading opportunities',
      'Portfolio diversification'
    ],
    premium: true
  },
  {
    id: 5,
    title: 'Stock Cash + Index Options',
    icon: FaChartBar,
    description: 'Perfect blend of equity cash trading and index options for optimal market coverage.',
    features: [
      'Equity + Index coverage',
      'Hedging opportunities',
      'Market-wide exposure',
      'Flexible trading strategies'
    ],
    premium: true
  },
  {
    id: 6,
    title: 'Stock Options + Index Options',
    icon: FaLayerGroup,
    description: 'Complete options trading package covering both stock and index derivatives.',
    features: [
      'Full options coverage',
      'Advanced option strategies',
      'Multiple expiry management',
      'Professional trading approach'
    ],
    premium: true
  },
  {
    id: 7,
    title: 'Stock Cash + Stock Options + Index Options',
    icon: FaGem,
    description: 'Ultimate all-inclusive package for serious traders seeking complete market coverage.',
    features: [
      'Complete market access',
      'Maximum profit potential',
      'All trading segments covered',
      'Premium support & guidance',
      'Priority recommendations',
      'Dedicated account manager'
    ],
    premium: true,
    featured: true
  }
]

export default function Services({ onNavigate }) {
  const observerRef = useRef(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.fade-in').forEach(el => {
      observerRef.current.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-content fade-in">
          <h1 className="services-hero-title">Our <span className="gradient-text">Services</span></h1>
          <p className="services-hero-subtitle">
            Choose the perfect trading package tailored to your investment goals and risk appetite
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section">
        <div className="services-container">
          <div className="services-grid">
            {services.map((service) => {
              const IconComponent = service.icon
              return (
                <div key={service.id} className="service-card fade-in">
                  {service.premium && <span className="premium-badge">POPULAR</span>}
                  
                  <div className="service-image">
                    <IconComponent className="service-icon-large" />
                  </div>

                  <div className="service-content">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>

                    <ul className="service-features">
                      {service.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>

                    <button className="service-button" onClick={() => onNavigate('contact')}>Get Started</button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta fade-in">
        <div className="services-container">
          <div className="cta-content">
            <h2 className="cta-title">Not Sure Which Service to Choose?</h2>
            <p className="cta-text">
              Our experts are here to help you select the perfect trading package based on your goals and experience level.
            </p>
            <div className="cta-buttons">
              <button onClick={() => onNavigate('contact')} className="cta-btn-primary">Talk to an Expert</button>
              <button onClick={() => onNavigate('pricing')} className="cta-btn-secondary">View Pricing</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
