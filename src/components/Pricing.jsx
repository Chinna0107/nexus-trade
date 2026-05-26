import { useState } from 'react'
import { FaCheckCircle, FaTimes, FaSpinner, FaPrint, FaCreditCard, FaFileInvoice, FaArrowRight, FaArrowLeft, FaIdCard, FaPhone, FaEnvelope, FaUser, FaMapMarkerAlt } from 'react-icons/fa'
import logo from '../assets/logo.jpeg'
import { API_BASE_URL, RAZORPAY_KEY_ID } from '../config/env'
import './Pricing.css'

const pricingData = [
  {
    category: 'Stock cash',
    plans: [
      { duration: 'Monthly', price: '₹ 1/-' },
      { duration: 'Quarterly', price: '₹ 44500/-' },
      { duration: 'Half Yearly', price: '₹ 91800/-' },
      { duration: 'Yearly', price: '₹ 165000/-' },
    ]
  },
  {
    category: 'Stock Options',
    plans: [
      { duration: 'Monthly', price: '₹ 17000/-' },
      { duration: 'Quarterly', price: '₹ 44500/-' },
      { duration: 'Half Yearly', price: '₹ 91800/-' },
      { duration: 'Yearly', price: '₹ 165000/-' },
    ]
  },
  {
    category: 'Index Options',
    plans: [
      { duration: 'Monthly', price: '₹ 17000/-' },
      { duration: 'Quarterly', price: '₹ 44500/-' },
      { duration: 'Half Yearly', price: '₹ 91800/-' },
      { duration: 'Yearly', price: '₹ 165000/-' },
    ]
  },
  {
    category: 'Stock cash + Stock Options',
    plans: [
      { duration: 'Monthly', price: '₹ 27200/-' },
      { duration: 'Quarterly', price: '₹ 71200/-' },
      { duration: 'Half Yearly', price: '₹ 146000/-' },
      { duration: 'Yearly', price: '₹ 168000/-' },
    ],
    combo: true
  },
  {
    category: 'Stock cash + Index Options',
    plans: [
      { duration: 'Monthly', price: '₹ 27200/-' },
      { duration: 'Quarterly', price: '₹ 71200/-' },
      { duration: 'Half Yearly', price: '₹ 146000/-' },
      { duration: 'Yearly', price: '₹ 168000/-' },
    ],
    combo: true
  },
  {
    category: 'Stock Options + Index Options',
    plans: [
      { duration: 'Monthly', price: '₹ 27200/-' },
      { duration: 'Quarterly', price: '₹ 71200/-' },
      { duration: 'Half Yearly', price: '₹ 146000/-' },
      { duration: 'Yearly', price: '₹ 168000/-' },
    ],
    combo: true
  },
  {
    category: 'Stock cash + Stock Options + Index Options',
    plans: [
      { duration: 'Monthly', price: '₹ 40800/-' },
      { duration: 'Quarterly', price: '₹ 106800/-' },
      { duration: 'Half Yearly', price: '₹ 165000/-' },
      { duration: 'Yearly', price: '₹ 169000/-' },
    ],
    premium: true
  },
]

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", 
  "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", 
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", 
  "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", 
  "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Jammu and Kashmir", 
  "Ladakh", "Lakshadweep", "Puducherry"
]

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [selectedDuration, setSelectedDuration] = useState('Monthly')
  const [step, setStep] = useState(1)
  const [billingInfo, setBillingInfo] = useState({
    name: '',
    email: '',
    phone: '',
    state: '',
    pan: ''
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [paymentId, setPaymentId] = useState('')
  const [receiptId, setReceiptId] = useState('')
  const [txDate, setTxDate] = useState('')

  const handleOpenModal = (plan) => {
    setSelectedPlan(plan)
    setSelectedDuration('Monthly')
    setStep(1)
    setBillingInfo({
      name: '',
      email: '',
      phone: '',
      state: '',
      pan: ''
    })
    setErrors({})
    setPaymentId('')
    setReceiptId('')
    setTxDate('')
    setLoading(false)
  }

  const handleCloseModal = () => {
    setSelectedPlan(null)
  }

  const getSelectedPrice = () => {
    if (!selectedPlan) return ''
    const planDetails = selectedPlan.plans.find(p => p.duration === selectedDuration)
    return planDetails ? planDetails.price : ''
  }

  const handleNextStep = () => {
    if (step === 1) {
      setStep(2)
    }
  }

  const handlePrevStep = () => {
    if (step === 2) {
      setStep(1)
    }
  }

  const validateBilling = () => {
    const newErrors = {}
    if (!billingInfo.name.trim()) {
      newErrors.name = 'Full name is required'
    }

    if (!billingInfo.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(billingInfo.email)) {
      newErrors.email = 'Invalid email address'
    }

    const cleanPhone = billingInfo.phone.replace(/[^0-9]/g, '')
    if (!billingInfo.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (cleanPhone.length !== 10) {
      newErrors.phone = 'Phone must be a 10-digit number'
    }

    if (!billingInfo.state) {
      newErrors.state = 'Please select a state'
    }

    const cleanPan = billingInfo.pan.trim().toUpperCase()
    if (!billingInfo.pan.trim()) {
      newErrors.pan = 'PAN card number is required'
    } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(cleanPan)) {
      newErrors.pan = 'Invalid PAN format (e.g. ABCDE1234F)'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) { resolve(true); return }
      const script = document.createElement('script')
      script.src = 'https://checkout.razorpay.com/v1/checkout.js'
      script.onload = () => resolve(true)
      script.onerror = () => resolve(false)
      document.body.appendChild(script)
    })
  }

  const handlePayment = async () => {
    if (!validateBilling()) return

    if (!RAZORPAY_KEY_ID) {
      alert('Razorpay key is missing. Please restart the app after updating the .env file.')
      return
    }

    setLoading(true)

    const scriptLoaded = await loadRazorpayScript()
    if (!scriptLoaded) {
      alert('Razorpay failed to load. Check your internet connection.')
      setLoading(false)
      return
    }

    const rawPrice = getSelectedPrice()
    const numericPrice = parseInt(rawPrice.replace(/[^0-9]/g, ''), 10)

    try {
      // Step 1: Create order from backend
      const orderRes = await fetch(`${API_BASE_URL}/payment/create-order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: numericPrice,
          plan_category: selectedPlan.category,
          plan_duration: selectedDuration,
          customer: {
            name: billingInfo.name,
            email: billingInfo.email,
            phone: billingInfo.phone,
            state: billingInfo.state,
            pan: billingInfo.pan.toUpperCase(),
          },
        }),
      })
      const orderData = await orderRes.json()
      if (!orderRes.ok) throw new Error(orderData.error || 'Order creation failed')

      // Step 2: Open Razorpay checkout
      const options = {
        key: RAZORPAY_KEY_ID,
        amount: numericPrice * 100,
        currency: 'INR',
        name: 'Trade Nexus',
        description: `${selectedPlan.category} — ${selectedDuration}`,
        image: logo,
        order_id: orderData.order_id,
        handler: async function (response) {
          // Step 3: Verify payment on backend
          const verifyRes = await fetch(`${API_BASE_URL}/payment/verify`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          })
          const verifyData = await verifyRes.json()
          if (verifyData.success) {
            setPaymentId(response.razorpay_payment_id)
            setReceiptId(orderData.receipt_id)
            setTxDate(new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }))
            setStep(3)
          } else {
            alert('Payment verification failed. Please contact support.')
          }
          setLoading(false)
        },
        prefill: {
          name: billingInfo.name,
          email: billingInfo.email,
          contact: billingInfo.phone,
        },
        notes: { state: billingInfo.state, pan: billingInfo.pan.toUpperCase() },
        theme: { color: '#00d4ff' },
        modal: { ondismiss: () => setLoading(false) },
      }

      const rzp = new window.Razorpay(options)
      rzp.open()
    } catch (err) {
      console.error('Payment error:', err)
      alert(err.message || 'Payment failed. Please try again.')
      setLoading(false)
    }
  }

  const handlePrintReceipt = () => {
    window.print()
  }

  return (
    <div className="pricing-page">
      <section className="pricing-hero">
        <div className="pricing-hero-content">
          <h1 className="pricing-hero-title">Pricing <span className="gradient-text">Plan</span></h1>
          <p className="pricing-hero-subtitle">Note : Amount is inclusive of GST</p>
        </div>
      </section>

      <section className="pricing-section">
        <div className="pricing-container">
          <div className="pricing-grid">
            {pricingData.map((item, index) => (
              <div key={index} className={`pricing-card ${item.combo ? 'combo' : ''} ${item.premium ? 'premium' : ''}`}>
                <div className="pricing-header">
                  <h3>{item.category}</h3>
                  {item.premium && <span className="best-value">Best Value</span>}
                </div>
                <table className="pricing-table">
                  <thead>
                    <tr>
                      <th>Duration</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {item.plans.map((plan, i) => (
                      <tr key={i}>
                        <td>{plan.duration}</td>
                        <td className="price">{plan.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button 
                  onClick={() => handleOpenModal(item)}
                  className="subscribe-btn"
                >
                  Subscribe Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Modal Overlay */}
      {selectedPlan && (
        <div className="checkout-modal-backdrop no-print-modal-bg">
          <div className="checkout-modal-container glass-modal print-receipt-view">
            {/* Modal Header */}
            <div className="checkout-modal-header no-print">
              <div className="modal-title-wrap">
                <FaFileInvoice className="modal-icon-glow" />
                <div>
                  <h3>Subscribe to Plan</h3>
                  <p>{selectedPlan.category}</p>
                </div>
              </div>
              <button onClick={handleCloseModal} className="modal-close-btn" disabled={loading}>
                <FaTimes />
              </button>
            </div>

            {/* Modal Content */}
            <div className="checkout-modal-body">
              {/* Step indicator (only for steps 1 and 2) */}
              {step < 3 && (
                <div className="modal-steps-indicator no-print">
                  <div className={`step-dot ${step >= 1 ? 'active' : ''}`}>
                    <span>1</span>
                    <label>Duration</label>
                  </div>
                  <div className="step-connector-line">
                    <div className="connector-progress" style={{ width: step === 2 ? '100%' : '0%' }}></div>
                  </div>
                  <div className={`step-dot ${step >= 2 ? 'active' : ''}`}>
                    <span>2</span>
                    <label>Billing Info</label>
                  </div>
                </div>
              )}

              {/* Step 1: Select Duration */}
              {step === 1 && (
                <div className="modal-step-content duration-step no-print">
                  <h4 className="step-title">Select Subscription Duration</h4>
                  <div className="duration-options-list">
                    {selectedPlan.plans.map((p, idx) => (
                      <label 
                        key={idx} 
                        className={`duration-option-card ${selectedDuration === p.duration ? 'selected' : ''}`}
                      >
                        <input 
                          type="radio" 
                          name="plan-duration" 
                          value={p.duration}
                          checked={selectedDuration === p.duration}
                          onChange={() => setSelectedDuration(p.duration)}
                          className="hidden-radio"
                        />
                        <div className="duration-card-main">
                          <span className="duration-lbl">{p.duration}</span>
                          <span className="duration-val">{p.price}</span>
                        </div>
                        <div className="radio-custom-indicator"></div>
                      </label>
                    ))}
                  </div>

                  <div className="modal-summary-panel">
                    <div className="summary-row">
                      <span>Selected Category:</span>
                      <span className="summary-value">{selectedPlan.category}</span>
                    </div>
                    <div className="summary-row">
                      <span>Billing Frequency:</span>
                      <span className="summary-value">{selectedDuration}</span>
                    </div>
                    <div className="summary-row total-highlight">
                      <span>Amount Payable (incl. GST):</span>
                      <span className="summary-price">{getSelectedPrice()}</span>
                    </div>
                  </div>

                  <div className="modal-footer-actions">
                    <button onClick={handleCloseModal} className="btn-secondary" disabled={loading}>
                      Cancel
                    </button>
                    <button onClick={handleNextStep} className="btn-primary">
                      Next Details <FaArrowRight />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Billing Info */}
              {step === 2 && (
                <div className="modal-step-content billing-step no-print">
                  <h4 className="step-title">Verify Billing Information</h4>
                  
                  <div className="billing-form-grid">
                    <div className="form-group">
                      <label className="form-label"><FaUser /> Full Name</label>
                      <input 
                        type="text" 
                        placeholder="Enter full name" 
                        value={billingInfo.name}
                        onChange={(e) => setBillingInfo({...billingInfo, name: e.target.value})}
                        className={`form-input ${errors.name ? 'input-error' : ''}`}
                        disabled={loading}
                      />
                      {errors.name && <span className="error-text">{errors.name}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label"><FaEnvelope /> Email Address</label>
                      <input 
                        type="email" 
                        placeholder="Enter email address" 
                        value={billingInfo.email}
                        onChange={(e) => setBillingInfo({...billingInfo, email: e.target.value})}
                        className={`form-input ${errors.email ? 'input-error' : ''}`}
                        disabled={loading}
                      />
                      {errors.email && <span className="error-text">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label"><FaPhone /> Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="10-digit mobile number" 
                        value={billingInfo.phone}
                        onChange={(e) => setBillingInfo({...billingInfo, phone: e.target.value})}
                        className={`form-input ${errors.phone ? 'input-error' : ''}`}
                        disabled={loading}
                      />
                      {errors.phone && <span className="error-text">{errors.phone}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label"><FaMapMarkerAlt /> State</label>
                      <select 
                        value={billingInfo.state}
                        onChange={(e) => setBillingInfo({...billingInfo, state: e.target.value})}
                        className={`form-input ${errors.state ? 'input-error' : ''}`}
                        disabled={loading}
                      >
                        <option value="">Select billing state</option>
                        {indianStates.map((st, i) => (
                          <option key={i} value={st}>{st}</option>
                        ))}
                      </select>
                      {errors.state && <span className="error-text">{errors.state}</span>}
                    </div>

                    <div className="form-group full-width-field">
                      <label className="form-label"><FaIdCard /> PAN Number</label>
                      <input 
                        type="text" 
                        placeholder="10-character PAN (e.g. ABCDE1234F)" 
                        value={billingInfo.pan}
                        onChange={(e) => setBillingInfo({...billingInfo, pan: e.target.value.toUpperCase()})}
                        className={`form-input uppercase-input ${errors.pan ? 'input-error' : ''}`}
                        maxLength={10}
                        disabled={loading}
                      />
                      {errors.pan && <span className="error-text">{errors.pan}</span>}
                    </div>
                  </div>

                  <div className="price-sticky-footer">
                    <div className="sticky-price-info">
                      <span>Total Amount:</span>
                      <strong>{getSelectedPrice()}</strong>
                    </div>
                  </div>

                  <div className="modal-footer-actions">
                    <button onClick={handlePrevStep} className="btn-secondary" disabled={loading}>
                      <FaArrowLeft /> Back
                    </button>
                    <button onClick={handlePayment} className="btn-primary-glow btn-pay-now" disabled={loading}>
                      {loading ? (
                        <>
                          <FaSpinner className="spin" /> Processing Payment...
                        </>
                      ) : (
                        <>
                          <FaCreditCard /> Pay with Razorpay
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Success Receipt (Printable A4 / Standard Premium Document Card) */}
              {step === 3 && (
                <div className="receipt-view-wrapper">
                  <div className="receipt-card-frame">
                    <div className="receipt-success-banner no-print">
                      <FaCheckCircle className="check-success-glow" />
                      <h4>Payment Successful!</h4>
                      <p>Your subscription transaction has completed successfully.</p>
                    </div>

                    {/* Printable Receipt Block */}
                    <div className="receipt-document-block">
                      <div className="receipt-doc-header">
                        <div className="receipt-logo-wrap">
                          <img src={logo} alt="Trade Nexus" />
                        </div>
                        <div className="receipt-header-text">
                          <h5>TRADE NEXUS</h5>
                          <span>TRADE SMART | SEBI Registered Research Analyst</span>
                        </div>
                      </div>

                      <div className="receipt-divider"></div>

                      <div className="receipt-meta-grid">
                        <div className="meta-col">
                          <span className="meta-lbl">Receipt No:</span>
                          <span className="meta-val highlight-val">{receiptId}</span>
                        </div>
                        <div className="meta-col">
                          <span className="meta-lbl">Payment ID:</span>
                          <span className="meta-val">{paymentId}</span>
                        </div>
                        <div className="meta-col">
                          <span className="meta-lbl">Transaction Date:</span>
                          <span className="meta-val">{txDate}</span>
                        </div>
                        <div className="meta-col">
                          <span className="meta-lbl">Status:</span>
                          <span className="meta-val success-val">PAID (TEST MODE)</span>
                        </div>
                      </div>

                      <div className="receipt-divider"></div>

                      <div className="receipt-details-table">
                        <h6 className="table-sec-title">Subscription & Billing Summary</h6>
                        <table className="receipt-items-table">
                          <thead>
                            <tr>
                              <th>Description</th>
                              <th>Duration</th>
                              <th className="text-right">Total Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Description">
                                <div className="receipt-plan-cell">
                                  <strong className="plan-name-text">{selectedPlan.category}</strong>
                                  <span className="gst-disclosure">Includes SGST (9%) & CGST (9%)</span>
                                </div>
                              </td>
                              <td data-label="Duration">{selectedDuration}</td>
                              <td data-label="Total Amount" className="text-right bold-price">{getSelectedPrice()}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="receipt-divider"></div>

                      <div className="receipt-billing-details">
                        <h6 className="table-sec-title">Customer Billing Details</h6>
                        <div className="billing-info-grid">
                          <div className="info-item">
                            <span className="info-lbl">Customer Name:</span>
                            <span className="info-val">{billingInfo.name}</span>
                          </div>
                          <div className="info-item">
                            <span className="info-lbl">Email Address:</span>
                            <span className="info-val">{billingInfo.email}</span>
                          </div>
                          <div className="info-item">
                            <span className="info-lbl">Phone Number:</span>
                            <span className="info-val">+91 {billingInfo.phone}</span>
                          </div>
                          <div className="info-item">
                            <span className="info-lbl">State of Billing:</span>
                            <span className="info-val">{billingInfo.state}</span>
                          </div>
                          <div className="info-item full-width-info">
                            <span className="info-lbl">PAN Card Number:</span>
                            <span className="info-val pan-code-format">{billingInfo.pan.toUpperCase()}</span>
                          </div>
                        </div>
                      </div>

                      <div className="receipt-divider"></div>

                      <div className="receipt-footer-clause">
                        <p>This is a computer-generated test receipt and does not require a physical signature. Thank you for subscribing to Trade Nexus Research Services. For support, please contact us at support@tradenexustradesmart.com.</p>
                      </div>
                    </div>
                  </div>

                  <div className="modal-footer-actions no-print" style={{ marginTop: '24px' }}>
                    <button onClick={handlePrintReceipt} className="btn-secondary">
                      <FaPrint /> Print Receipt
                    </button>
                    <button onClick={handleCloseModal} className="btn-primary">
                      Done
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
