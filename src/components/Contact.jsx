import { useState } from 'react'
import { FaPhone, FaEnvelope, FaClock, FaUser, FaComment, FaMapMarkerAlt, FaWhatsapp, FaCheckCircle, FaHeadset, FaRegClock } from 'react-icons/fa'
import './Contact.css'

const WA_NUMBER = '919483001083'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = `*New Contact Message — Trade Nexus*\n\n👤 *Name:* ${form.name}\n📧 *Email:* ${form.email}\n📞 *Phone:* ${form.phone || 'Not provided'}\n\n💬 *Message:*\n${form.message}`
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <div className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <div className="contact-hero-icon">
            <FaHeadset />
          </div>
          <h1 className="contact-hero-title">Get In <span className="gradient-text">Touch</span></h1>
          <p className="contact-hero-subtitle">Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-layout">

            {/* FORM */}
            <div className="contact-form-card">
              <h2 className="card-title">Send us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>

                <div className="field-row">
                  <div className="field">
                    <label>Full Name</label>
                    <div className="input-wrap">
                      <span className="field-icon"><FaUser /></span>
                      <input name="name" type="text" placeholder="Your full name" required value={form.name} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="field">
                    <label>Email Address</label>
                    <div className="input-wrap">
                      <span className="field-icon"><FaEnvelope /></span>
                      <input name="email" type="email" placeholder="you@example.com" required value={form.email} onChange={handleChange} />
                    </div>
                  </div>
                </div>

                <div className="field">
                  <label>Phone Number</label>
                  <div className="input-wrap">
                    <span className="field-icon"><FaPhone /></span>
                    <input name="phone" type="tel" placeholder="+91 00000 00000" value={form.phone} onChange={handleChange} />
                  </div>
                </div>

                <div className="field">
                  <label>Message</label>
                  <div className="input-wrap textarea-wrap">
                    <span className="field-icon textarea-icon"><FaComment /></span>
                    <textarea name="message" placeholder="Write your message here..." rows="5" required value={form.message} onChange={handleChange}></textarea>
                  </div>
                </div>

                <button type="submit" className="submit-btn whatsapp-btn">
                  <FaWhatsapp />
                  Send via WhatsApp
                </button>
              </form>
            </div>

            {/* SIDEBAR */}
            <div className="contact-sidebar">

              {/* <div className="sidebar-card info-card">
                <h3 className="sidebar-title">What to Expect</h3>
                <div className="info-steps">
                  {[
                    { icon: <FaCheckCircle />, text: 'Message acknowledged within 2 hours' },
                    { icon: <FaRegClock />, text: 'Full response within 1 business day' },
                    { icon: <FaComment />, text: 'Updates sent to your email or WhatsApp' },
                    { icon: <FaCheckCircle />, text: 'Our team is available Mon–Sat, 9AM–7PM' },
                  ].map((s, i) => (
                    <div className="info-step" key={i}>
                      <span className="step-icon">{s.icon}</span>
                      <span className="step-text">{s.text}</span>
                    </div>
                  ))}
                </div>
              </div> */}

              <div className="sidebar-card contact-reach-card">
                <h3 className="sidebar-title reach-title">Reach Us Directly</h3>
                <div className="reach-items">
                  {[
                    { icon: <FaPhone />, label: 'Call Us', value: '+91 94830 01083', href: 'tel:+919483001083' },
                    { icon: <FaWhatsapp />, label: 'WhatsApp', value: '+91 94830 01083', href: `https://wa.me/${WA_NUMBER}` },
                    { icon: <FaEnvelope />, label: 'Email', value: 'info@tradenexustradesmart.com', href: 'mailto:info@tradenexustradesmart.com' },
                    { icon: <FaMapMarkerAlt />, label: 'Address', value: '4th Phase JP Nagar  – 560078', isText: true },
                    { icon: <FaClock />, label: 'Hours', value: 'Mon–Sat: 9:00 AM – 7:00 PM' },
                  ].map((item, i) => (
                    <div className="reach-item" key={i}>
                      <span className="reach-icon">{item.icon}</span>
                      <div>
                        <span className="reach-label">{item.label}</span>
                        {item.href
                          ? <a href={item.href} target={item.href.startsWith('https') ? '_blank' : undefined} rel="noreferrer" className="reach-value link">{item.value}</a>
                          : <span className="reach-value">{item.value}</span>
                        }
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* MAP */}
          <div className="map-wrapper">
            <h2 className="card-title">Find Us</h2>
            <div className="map-container">
             <iframe
  src="https://www.google.com/maps?q=4th%20Phase%20JP%20Nagar%2C%20Near%20Reliance%20Digital%2C%20Bangalore%20560078&output=embed"
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  title="Location Map"
/>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
