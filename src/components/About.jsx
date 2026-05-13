import { useEffect, useRef } from 'react'
import { FaEye, FaHeart, FaLightbulb, FaChartLine, FaShieldAlt, FaTrophy } from 'react-icons/fa'
import './About.css'

export default function About() {
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
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content fade-in">
          <h1 className="about-hero-title">About <span className="gradient-text">Trade Nexus</span></h1>
          <p className="about-hero-subtitle">Empowering traders with data-driven insights and expert market analysis</p>
        </div>
      </section>

      {/* Who Are We */}
      <section className="about-section">
        <div className="about-container split-layout">
          <div className="about-image fade-in">
            <div className="image-wrapper">
              <div className="floating-shape shape-1"></div>
              <div className="floating-shape shape-2"></div>
              <div className="image-content">
                <FaChartLine className="large-icon" />
              </div>
            </div>
          </div>
          <div className="about-content fade-in">
            <h2 className="about-title">Who Are We?</h2>
            <p className="about-text">
              <strong>Trade Nexus</strong> is a financial market research group. We generate intraday as well as delivery calls in Stock cash and F&O in NSE & BSE, Commodities including bullions, metals & commodities traded in MCX and NCDEX. Our calling facility is a very effective system which ensures the instant message delivery without any loss of time, so the clients get sufficient time to execute their trades in order to fetch maximum Profits.
            </p>
            <p className="about-text">
              To ensure effective solutions for our customers, our experienced team has conceptualized and deployed technological tools that have been custom-built to analyze markets incisively and holistically.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values & Vision */}
      <section className="about-section values-vision-section">
        <div className="about-container">
          <div className="values-vision-grid">
            <div className="value-card fade-in">
              <div className="value-icon-wrapper">
                <FaHeart className="value-icon" />
              </div>
              <h3 className="value-title">Our Values</h3>
              <p className="value-text">
                Our vision is to provide our clients with wide-ranging, secured and finest financial reports to achieve sustained growth. We aim to do this by being responsive towards our clients and strive relentlessly to improve. We at Trade Nexus want to be worthy of our customer's trust and provide them with the finest Stock and Commodity market recommendation.
              </p>
            </div>

            <div className="value-card fade-in">
              <div className="value-icon-wrapper">
                <FaEye className="value-icon" />
              </div>
              <h3 className="value-title">Our Vision</h3>
              <p className="value-text">
                We Endeavour to be valued as leader in client satisfaction & profitability. We work hard continuously to enhance our reputation for accessibility, professionalism, analysis & depth & quality of our long term consultative relationship with clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Provide - Our Expertise */}
      <section className="about-section expertise-section">
        <div className="about-container">
          <h2 className="section-title-center fade-in">What We Provide</h2>
          <div className="expertise-grid">
            <div className="expertise-card fade-in">
              <div className="expertise-icon-box">
                <FaLightbulb />
              </div>
              <h3>Our Expertise</h3>
              <p>All our intraday trading recommendations are based on technical analysis of the market with appropriations made at market fundamentals and its risk reward ratio. All our services are reliable, transparent and committed to the delight of our customers.</p>
            </div>

            <div className="expertise-card fade-in">
              <div className="expertise-icon-box">
                <FaTrophy />
              </div>
              <h3>Best Investment Plans</h3>
              <p>We always focus on the stand for best share market recommendation provider. Here we offer the most excellent research report and recommendation, which are backed up by our teams of enjoyment, diligent and sharp individuals who thrive to give out exquisite.</p>
            </div>

            <div className="expertise-card fade-in">
              <div className="expertise-icon-box">
                <FaShieldAlt />
              </div>
              <h3>Minimum Risk, More Profit</h3>
              <p>We always work hard so that you can acquire more profit. Your investment arranges will remain in the hands of the perfect business sector recommendation supplier to make quick money prudently. Be without stress as we study the business sector for you, so that you can play safe in the risky stock market.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section fade-in">
        <div className="about-container">
          <div className="cta-box">
            <h2>Ready to Start Your Trading Journey?</h2>
            <p>Join thousands of satisfied clients who trust Trade Nexus for their trading success</p>
            <button className="cta-button">Get Started Today</button>
          </div>
        </div>
      </section>
    </div>
  )
}
