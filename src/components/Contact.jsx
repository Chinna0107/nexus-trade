import { useState } from 'react'
import { FaPhone, FaEnvelope, FaClock, FaUser, FaComment, FaMapMarkerAlt, FaPaperPlane, FaWhatsapp } from 'react-icons/fa'
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
          <h1 className="contact-hero-title">Get In <span className="gradient-text">Touch</span></h1>
          <p className="contact-hero-subtitle">Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-grid">

            {/* FORM */}
            <div className="contact-form-wrapper">
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

            {/* INFO */}
            <div className="contact-details-wrapper">
              <h2 className="card-title">Contact Information</h2>
              <div className="contact-info-list">
                {[
                  {
                    icon: <FaMapMarkerAlt />,
                    label: 'Address',
                    content: 'HSR Layout, 7th Sector, Near 5th Main Road, Near Reliance Digital, Bangalore – 560102',
                  },
                  {
                    icon: <FaPhone />,
                    label: 'Phone',
                    content: '+91 919483001083',
                    href: 'tel:+91919483001083',
                  },
                  {
                    icon: <FaWhatsapp />,
                    label: 'WhatsApp',
                    content: '+91 919483001083',
                    href: `https://wa.me/${WA_NUMBER}`,
                  },
                  {
                    icon: <FaEnvelope />,
                    label: 'Email',
                    content: 'info@tradenexus.com',
                    href: 'mailto:info@tradenexus.com',
                  },
                  {
                    icon: <FaClock />,
                    label: 'Business Hours',
                    content: 'Mon – Sat: 9:00 AM – 7:00 PM\nSunday: Closed',
                  },
                ].map((item, i) => (
                  <div className="info-item" key={i}>
                    <div className="info-icon-box">{item.icon}</div>
                    <div className="info-text">
                      <span className="info-label">{item.label}</span>
                      {item.href
                        ? <a href={item.href} target={item.href.startsWith('https') ? '_blank' : undefined} rel="noreferrer" className="info-value link">{item.content}</a>
                        : <span className="info-value">{item.content}</span>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* MAP */}
          <div className="map-wrapper">
            <h2 className="card-title">Find Us</h2>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5749999999996!2d77.6442858!3d12.9250063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14f8a2e1f%3A0x700d5f9b3c5e5c5e!2sHSR%20Layout%2C%20Bangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%" height="400"
                style={{ border: 0 }}
                allowFullScreen="" loading="lazy"
                title="Location Map"
              />
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
