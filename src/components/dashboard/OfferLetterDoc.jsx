import { useState } from 'react'
import { FaPrint, FaChevronLeft, FaUndo, FaCheckCircle, FaUser, FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaSignature } from 'react-icons/fa'
import logo from '../../assets/logo.jpeg'
import offerSignature from '../../assets/sign2.png'
import { printDashboardDocument } from '../../utils/printDocument'
import './OfferLetterDoc.css'

export default function OfferLetterDoc({ setTab }) {
  const [candidateName, setCandidateName] = useState('Davood')
  const [designation, setDesignation] = useState('Business Development Executive')
  const [joiningDate, setJoiningDate] = useState('2026-05-26')
  const [workLocation, setWorkLocation] = useState('Bangalore')
  const [date, setDate] = useState('2026-05-25')
  const [hrManager, setHrManager] = useState('Ravi Kumar J')

  const formatDate = (dateStr) => {
    if (!dateStr) return ''
    const parts = dateStr.split('-')
    if (parts.length === 3) {
      return `${parts[2]}-${parts[1]}-${parts[0]}`
    }
    return dateStr
  }

  const handlePrint = () => {
    printDashboardDocument()
  }

  const handleReset = () => {
    setCandidateName('Davood')
    setDesignation('Business Development Executive')
    setJoiningDate('2026-05-26')
    setWorkLocation('Bangalore')
    setDate('2026-05-25')
    setHrManager('Ravi Kumar J')
  }

  return (
    <div className="creator-container">
      {/* Navigation Headers */}
      <div className="creator-header-row no-print">
        <div className="creator-title-wrap">
          <button
            onClick={() => setTab('home')}
            className="creator-back-btn"
          >
            <FaChevronLeft />
          </button>
          <div>
            <h1 className="creator-heading">Offer Letter Creator</h1>
            <p className="creator-subheading">Replicating design from src/assets/offerletter.jpeg</p>
          </div>
        </div>
        <div className="creator-actions">
          <button
            onClick={handleReset}
            className="creator-btn-reset"
          >
            <FaUndo /> Reset
          </button>
          <button
            onClick={handlePrint}
            className="creator-btn-print"
          >
            <FaPrint /> Print / Save PDF
          </button>
        </div>
      </div>

      <div className="creator-workspace-grid">
        {/* Input parameters panel (no-print) */}
        <div className="space-y-5 no-print">
          <div className="parameters-panel">
            <h3 className="parameters-panel-title">
              Letter Parameters
            </h3>

            {/* Candidate Name Input */}
            <div className="param-group">
              <label className="param-label">
                <FaUser /> Candidate Name
              </label>
              <input
                type="text"
                value={candidateName}
                onChange={(e) => setCandidateName(e.target.value)}
                className="param-input"
              />
            </div>

            {/* Designation Input */}
            <div className="param-group">
              <label className="param-label">
                <FaBriefcase /> Designation
              </label>
              <input
                type="text"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                className="param-input"
              />
            </div>

            {/* Dates Row */}
            <div className="param-grid-row">
              <div className="param-group">
                <label className="param-label">
                  <FaCalendarAlt /> Issue Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="param-input"
                />
              </div>
              <div className="param-group">
                <label className="param-label">
                  <FaCalendarAlt /> Joining Date
                </label>
                <input
                  type="date"
                  value={joiningDate}
                  onChange={(e) => setJoiningDate(e.target.value)}
                  className="param-input"
                />
              </div>
            </div>

            {/* Work Location Input */}
            <div className="param-group">
              <label className="param-label">
                <FaMapMarkerAlt /> Work Location
              </label>
              <input
                type="text"
                value={workLocation}
                onChange={(e) => setWorkLocation(e.target.value)}
                className="param-input"
              />
            </div>

            {/* HR Manager Input */}
            <div className="param-group">
              <label className="param-label">
                <FaSignature /> HR Manager Name
              </label>
              <input
                type="text"
                value={hrManager}
                onChange={(e) => setHrManager(e.target.value)}
                className="param-input"
              />
            </div>
          </div>

          {/* Quick instructions (no-print) */}
          <div className="instructions-card">
            <span className="instructions-card-header">
              <FaCheckCircle /> Pro-Tip for Printing
            </span>
            <p className="instructions-text">
              When printing or exporting as PDF, please enable **Background Graphics** and set margins to **None** or **Default** in the browser print configuration to ensure that the beautiful corporate banners, watermark, and footer design print correctly.
            </p>
          </div>
        </div>

        {/* Live A4 Print Preview Sheet */}
        <div className="preview-workspace no-print-container">
          <div
            id="print-sheet-offer"
            className="a4-page-frame"
          >
            {/* Top Right Decorative Geometric Accent (Exact matching shape styling) */}
            <div className="a4-top-geometric no-print-bg">
              <svg width="250" height="180" viewBox="0 0 250 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Outer teal slope */}
                <path d="M50 0 L250 160 L250 0 Z" fill="#248894" />
                {/* Main dark navy block */}
                <path d="M96 0 L250 126 L250 0 Z" fill="#07173d" />
                {/* Thin white divider */}
                <path d="M82 0 L250 139 L250 150 L70 0 Z" fill="#ffffff" />
              </svg>
            </div>

            {/* Large faint background watermark */}
            <div className="a4-watermark">
              TRADE NEXUS<br/>TRADE SMART
            </div>

            {/* Letter Content wrapper */}
            <div className="a4-content-wrap">
              {/* Header: Logo and Title */}
              <div>
                <div className="a4-logo-row">
                  <div className="a4-logo-wrap">
                    <img src={logo} alt="Trade Nexus Logo" />
                  </div>
                  <div className="a4-logo-text-block">
                    <h2 className="a4-logo-title">
                      TRADE NEXUS
                    </h2>
                    <span className="a4-logo-subtitle">
                      TRADE SMART
                    </span>
                  </div>
                </div>
                <div className="a4-header-line" />

                {/* Date and Subject */}
                <div className="a4-date-row">
                  <div>
                    {/* Empty placeholder to push date to right */}
                  </div>
                  <div>
                    Date: <span>{formatDate(date)}</span>
                  </div>
                </div>

                <div className="a4-subject-title">
                  <h1>
                    OFFER LETTER
                  </h1>
                  <div className="a4-subject-line" />
                </div>

                {/* Salutation & Body */}
                <div className="a4-letter-body">
                  <p>
                    Dear <span className="a4-candidate-highlight">{candidateName}</span>,
                  </p>
                  <p>
                    We are pleased to offer you the position of <span className="a4-role-highlight">{designation}</span> with <span className="a4-company-highlight">Trade Nexus Trade Smart</span>. We were highly impressed with your skills, experience, and enthusiasm during the selection process and believe that you will be a valuable addition to our team.
                  </p>

                  {/* Employment parameters table */}
                  <div className="a4-details-box">
                    <div className="a4-details-row">
                      <span className="a4-details-label">Designation</span>
                      <span className="a4-details-val">: <span className="a4-details-val-accent">{designation}</span></span>
                    </div>
                    <div className="a4-details-row">
                      <span className="a4-details-label">Joining Date</span>
                      <span className="a4-details-val">: {formatDate(joiningDate)}</span>
                    </div>
                    <div className="a4-details-row">
                      <span className="a4-details-label">Work Location</span>
                      <span className="a4-details-val">: {workLocation}</span>
                    </div>
                    <div className="a4-details-row">
                      <span className="a4-details-label">Company Name</span>
                      <span className="a4-details-val">: Trade Nexus Trade Smart</span>
                    </div>
                  </div>

                  <p>
                    You will be expected to perform all duties and responsibilities associated with your role diligently and to the best of your abilities. We are confident that your contribution will help us achieve our goals and drive continued success.
                  </p>

                  <p className="a4-terms-title">
                    Please note the following terms and conditions of your employment:
                  </p>
                  <ul className="a4-terms-list">
                    <li>Your employment will be governed by the company's policies and procedures.</li>
                    <li>You will be on probation for the first 6 months from your joining date.</li>
                    <li>Your performance will be reviewed periodically.</li>
                    <li>You are expected to maintain confidentiality of company information.</li>
                    <li>Other terms and conditions of your employment will be provided in the detailed appointment letter upon joining.</li>
                  </ul>

                  <p className="a4-letter-closing">
                    Kindly sign and return a copy of this offer letter as confirmation of your acceptance of the role and the terms mentioned above. We are pleased to welcome you to Trade Nexus Trade Smart and look forward to your valuable contribution to our continued growth.
                  </p>

                  {/* Signature & HR Details */}
<div className="a4-sign-off-section">
  {/* Warm regards in single line */}
  <div className="a4-closing-salute">
    Warm regards,
  </div>

  {/* Signature image below */}
  <div className="a4-signature-frame">
    <img
      src={offerSignature}
      alt="Ravi Kumar J signature"
    />
  </div>

  {/* Underline below signature */}
  <div className="a4-signature-underline" />

  {/* HR details */}
  <div className="a4-hr-meta">
    <div className="a4-hr-name">
      {hrManager}
    </div>

    <div className="a4-hr-title">
      HR Manager
    </div>

    <div className="a4-hr-comp">
      Trade Nexus Trade Smart
    </div>
  </div>
</div>
                </div>
              </div>
            </div>

            {/* Bottom Footer Accent Shape (Matching geometric slope) */}
            <div className="a4-bottom-geometric-bar no-print-bg">
              {/* Left Address Column */}
              <div className="a4-bottom-address-col">
                <div className="a4-pin-frame">
                  <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 0 C2.68 0, 0 2.68, 0 6 C0 10.5 6 15, 6 15 C6 15, 12 10.5, 12 6 C12 2.68, 9.32 0, 6 0 Z M6 8 C4.9 8, 4 7.1, 4 6 C4 4.9, 4.9 4, 6 4 C7.1 4, 8 4.9, 8 6 C8 7.1, 7.1 8, 6 8 Z" fill="#00d4ff" />
                  </svg>
                </div>
                <div className="a4-address-text">
                  Ravikumar jgeetga l -127. 14th cross 6th sector HSR Layout<br />
                  Bengaluru, 560102 Karnataka India
                </div>
              </div>

              {/* Bottom Slope Teal block */}
              <div className="a4-bottom-right-geometric">
                <svg width="275" height="92" viewBox="0 0 275 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 92 L95 0 L275 0 L275 92 Z" fill="#248894" />
                  {/* White thin separator */}
                  <path d="M-3 92 L88 0 L107 0 L16 92 Z" fill="#ffffff" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
