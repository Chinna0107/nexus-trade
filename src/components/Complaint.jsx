import { useState } from 'react'
import { FaExclamationTriangle, FaUser, FaEnvelope, FaPhone, FaListAlt, FaHeading, FaCommentDots, FaPaperPlane, FaClock, FaCheckCircle, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import './Complaint.css'

const WA_NUMBER = '918333909139'

export default function Complaint() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: '', subject: '', description: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = `*Complaint Submission — Trade Nexus*\n\n👤 *Name:* ${form.name}\n📧 *Email:* ${form.email}\n📞 *Phone:* ${form.phone || 'Not provided'}\n🏷️ *Type:* ${form.type}\n📌 *Subject:* ${form.subject}\n\n📝 *Description:*\n${form.description}`
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <div className="complaint-page">

      {/* HERO */}
      <section className="complaint-hero">
        <div className="complaint-hero-content">
          <div className="hero-icon-box">
            <FaExclamationTriangle />
          </div>
          <h1 className="complaint-hero-title">Submit a <span className="gradient-text">Complaint</span></h1>
          <p className="complaint-hero-subtitle">We take your feedback seriously. Fill out the form below and we'll address your concerns promptly.</p>
        </div>
      </section>

      <section className="complaint-section">
        <div className="complaint-container">
          <div className="complaint-layout">

            {/* FORM */}
            <div className="complaint-form-card">
              <h2 className="card-title">Complaint Details</h2>
              <form className="complaint-form" onSubmit={handleSubmit}>

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

                <div className="field-row">
                  <div className="field">
                    <label>Phone Number</label>
                    <div className="input-wrap">
                      <span className="field-icon"><FaPhone /></span>
                      <input name="phone" type="tel" placeholder="+91 00000 00000" value={form.phone} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="field">
                    <label>Complaint Type</label>
                    <div className="input-wrap select-wrap">
                      <span className="field-icon"><FaListAlt /></span>
                      <select name="type" required value={form.type} onChange={handleChange}>
                        <option value="" disabled>Select type</option>
                        <option value="Service Related">Service Related</option>
                        <option value="Billing Issue">Billing Issue</option>
                        <option value="Call/Message Not Received">Call/Message Not Received</option>
                        <option value="Refund Request">Refund Request</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="field">
                  <label>Subject</label>
                  <div className="input-wrap">
                    <span className="field-icon"><FaHeading /></span>
                    <input name="subject" type="text" placeholder="Brief subject of your complaint" required value={form.subject} onChange={handleChange} />
                  </div>
                </div>

                <div className="field">
                  <label>Description</label>
                  <div className="input-wrap textarea-wrap">
                    <span className="field-icon textarea-icon"><FaCommentDots /></span>
                    <textarea name="description" placeholder="Describe your complaint in detail..." rows="5" required value={form.description} onChange={handleChange}></textarea>
                  </div>
                </div>

                <div className="field">
                  <label>Attachments <span className="optional">(optional)</span></label>
                  <label className="file-drop">
                    <span className="file-drop-text">📎 Click to attach files (images, PDF, DOC)</span>
                    <input type="file" multiple accept="image/*,.pdf,.doc,.docx" />
                  </label>
                </div>

                <button type="submit" className="submit-btn whatsapp-btn">
                  <FaWhatsapp />
                  Submit via WhatsApp
                </button>
              </form>
            </div>

            {/* SIDEBAR */}
            <div className="complaint-sidebar">

              <div className="sidebar-card info-card">
                <h3 className="sidebar-title">What to Expect</h3>
                <div className="info-steps">
                  {[
                    { icon: <FaCheckCircle />, text: 'Complaint acknowledged within 24 hours' },
                    { icon: <FaClock />, text: 'Resolution in 7–14 business days' },
                    { icon: <FaCommentDots />, text: 'Updates sent to your email' },
                    { icon: <FaCheckCircle />, text: 'Keep reference number for follow-up' },
                  ].map((s, i) => (
                    <div className="info-step" key={i}>
                      <span className="step-icon">{s.icon}</span>
                      <span className="step-text">{s.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="sidebar-card urgent-card">
                <h3 className="sidebar-title urgent-title">Need Urgent Help?</h3>
                <div className="urgent-items">
                  <div className="urgent-item">
                    <span className="urgent-icon"><FaPhoneAlt /></span>
                    <div>
                      <span className="urgent-label">Call Us</span>
                      <a href="tel:+918333909139" className="urgent-value">+91 83339 09139</a>
                    </div>
                  </div>
                  <div className="urgent-item">
                    <span className="urgent-icon"><FaWhatsapp /></span>
                    <div>
                      <span className="urgent-label">WhatsApp</span>
                      <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noreferrer" className="urgent-value">+91 83339 09139</a>
                    </div>
                  </div>
                  <div className="urgent-item">
                    <span className="urgent-icon"><FaEnvelope /></span>
                    <div>
                      <span className="urgent-label">Email Us</span>
                      <a href="mailto:complaints@tradenexus.com" className="urgent-value">complaints@tradenexus.com</a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
