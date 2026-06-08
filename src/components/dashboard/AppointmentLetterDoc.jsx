import { useState } from 'react'
import { FaPrint, FaChevronLeft, FaUndo, FaCheckCircle, FaUser, FaBriefcase, FaCalendarAlt, FaMoneyBillWave } from 'react-icons/fa'
import logo from '../../assets/logo.jpeg'
import { printDashboardDocument } from '../../utils/printDocument'
import './AppointmentLetterDoc.css'

export default function AppointmentLetterDoc({ setTab }) {
  const [candidateName, setCandidateName] = useState('Rohan Sharma')
  const [designation, setDesignation] = useState('Senior Research Analyst')
  const [joiningDate, setJoiningDate] = useState('2026-06-01')
  const [annualCtc, setAnnualCtc] = useState(600000)
  const [probationMonths, setProbationMonths] = useState(6)
  const [date, setDate] = useState('2026-05-22')
  const [hrManager, setHrManager] = useState('E Suchithra')

  const handleReset = () => {
    setCandidateName('Rohan Sharma')
    setDesignation('Senior Research Analyst')
    setJoiningDate('2026-06-01')
    setAnnualCtc(600000)
    setProbationMonths(6)
    setDate('2026-05-22')
    setHrManager('E Suchithra')
  }

  const handlePrint = () => {
    printDashboardDocument()
  }

  const formatDate = (dateStr) => {
    if (!dateStr) return ''
    const parts = dateStr.split('-')
    if (parts.length === 3) {
      return `${parts[2]}-${parts[1]}-${parts[0]}`
    }
    return dateStr
  }

  // Auto CTC calculations for a highly structured corporate table
  const monthlyCtc = Math.round(annualCtc / 12)
  const basic = Math.round(monthlyCtc * 0.50) // 50% basic
  const hra = Math.round(monthlyCtc * 0.20)  // 20% hra
  const conveyance = 1600                     // Fixed conveyance
  const pf = 1800                             // Fixed PF contribution
  const allowance = monthlyCtc - (basic + hra + conveyance + pf) // balancing special allowance
  const appointmentRef = `TN/APPT/${date ? new Date(date).getFullYear() : '2026'}/${candidateName
    .replace(/[^a-zA-Z]/g, '')
    .slice(0, 3)
    .toUpperCase()
    .padEnd(3, 'X')}${String(Math.abs(annualCtc)).slice(-3).padStart(3, '0')}`

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
            <h1 className="creator-heading">Appointment Letter Creator</h1>
            <p className="creator-subheading">Generate executive employment contracts and salary sheets</p>
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
        {/* Form controls (no-print) */}
        <div className="no-print">
          <div className="parameters-panel">
            <h3 className="parameters-panel-title">
              Contract Specifications
            </h3>

            {/* Candidate name */}
            <div className="param-group">
              <label className="param-label">
                <FaUser /> Employee Name
              </label>
              <input
                type="text"
                value={candidateName}
                onChange={(e) => setCandidateName(e.target.value)}
                className="param-input"
              />
            </div>

            {/* Designation */}
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

            {/* CTC Input */}
            <div className="param-group">
              <label className="param-label">
                <FaMoneyBillWave /> Annual CTC (₹)
              </label>
              <input
                type="number"
                value={annualCtc}
                onChange={(e) => setAnnualCtc(Number(e.target.value))}
                className="param-input"
              />
            </div>

            {/* Row 2 */}
            <div className="param-grid-row">
              <div className="param-group">
                <label className="param-label">
                  <FaCalendarAlt /> Contract Date
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

            {/* Probation Months */}
            <div className="param-group">
              <label className="param-label">Probation Period (Months)</label>
              <input
                type="number"
                min="0"
                value={probationMonths}
                onChange={(e) => setProbationMonths(Number(e.target.value))}
                className="param-input"
              />
            </div>

            {/* HR Manager Name */}
            <div className="param-group">
              <label className="param-label">HR Manager Name</label>
              <input
                type="text"
                value={hrManager}
                onChange={(e) => setHrManager(e.target.value)}
                className="param-input"
              />
            </div>
          </div>

          <div className="instructions-card no-print">
            <div className="instructions-card-header">
              <FaCheckCircle /> Compensation Breakdown
            </div>
            <span className="instructions-text">
              Automatically breaks down annual CTC into monthly basic pay, HRA, Conveyance, PF and Special Allowances in the contract preview table.
            </span>
          </div>
        </div>

        {/* Live A4 Print Preview Sheet */}
        <div className="preview-workspace no-print-container">
          <div className="a4-pages-container">
            {/* PAGE 1 */}
            <div
              id="print-sheet-appointment-p1"
              className="a4-page-frame"
            >
              {/* Watermark Logo */}
              <div className="a4-watermark">
                <img src={logo} alt="Trade Nexus" />
              </div>

              <div className="a4-content-wrap">
                {/* Header Info */}
                <div>
                  <div className="a4-logo-row">
                    <div className="a4-logo-wrap">
                      <img src={logo} alt="Trade Nexus" />
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

                  {/* Subtitle Date */}
                  <div className="a4-date-row">
                    <div>Ref: {appointmentRef}</div>
                    <div>Date: <span>{formatDate(date)}</span></div>
                  </div>

                  {/* Subject Block */}
                  <div className="a4-subject-block">
                    <div className="a4-recipient-address">
                      To,<br />
                      <span className="a4-bold-text">{candidateName}</span>,<br />
                      Bangalore, India
                    </div>
                    <h3 className="a4-subject-title">
                      Subject: Appointment Letter for the post of {designation}
                    </h3>
                  </div>

                  {/* Core Contract Body text - Page 1 */}
                  <div className="a4-letter-body">
                    <p>Dear <span className="a4-bold-text">{candidateName}</span>,</p>
                    <p>
                      With reference to your application and subsequent interview you had with us, we are pleased to appoint you as <span className="a4-role-highlight">{designation}</span> in <span className="a4-bold-text">Trade Nexus Trade Smart</span> on the following terms and conditions:
                    </p>

                    <div className="a4-clause-list">
                      <div className="a4-clause-item">
                        <span className="a4-clause-title">1. Commencement of Service</span>
                        <p className="a4-clause-desc">Your appointment will be effective from your date of joining which is <span className="a4-bold-text">{formatDate(joiningDate)}</span>. Your primary work location will be in <span className="a4-bold-text">Bangalore</span>.</p>
                      </div>

                      <div className="a4-clause-item">
                        <span className="a4-clause-title">2. Probation & Confirmation</span>
                        <p className="a4-clause-desc">You will be on a probation period of <span className="a4-bold-text">{probationMonths} months</span> from the date of joining. The probation period may be extended or shortened at the sole discretion of the management. Upon successful completion of your probation, your services will be confirmed in writing.</p>
                      </div>

                      <div className="a4-clause-item">
                        <span className="a4-clause-title">3. Job Duties & Guidelines</span>
                        <p className="a4-clause-desc">You will perform all duties, services and responsibilities required of your role and behave professionally at all times. You shall dedicate your full work hours and best efforts to the company and must not engage in any other business activities or employment without prior written approval.</p>
                      </div>

                      <div className="a4-clause-item">
                        <span className="a4-clause-title">4. Professional Conduct & Compliance</span>
                        <p className="a4-clause-desc">You are expected to follow company policies, research desk protocols, client communication standards, information security practices and all applicable regulatory guidelines. Any client-facing advice, report, or market communication must be issued only through approved internal processes.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Page 1 Footer indicator */}
                <div className="a4-page-number-footer">Page 1 of 2</div>
              </div>
            </div>

            {/* PAGE 2 */}
            <div
              id="print-sheet-appointment-p2"
              className="a4-page-frame"
            >
              {/* Watermark Logo */}
              <div className="a4-watermark">
                <img src={logo} alt="Trade Nexus" />
              </div>

              <div className="a4-content-wrap">
                <div>
                  {/* Simplified Header for Page 2 */}
                  <div className="a4-logo-row">
                    <div className="a4-logo-wrap">
                      <img src={logo} alt="Trade Nexus" />
                    </div>
                    <div className="a4-logo-text-block">
                      <h2 className="a4-logo-title" style={{ fontSize: '18px' }}>
                        TRADE NEXUS
                      </h2>
                      <span className="a4-logo-subtitle" style={{ fontSize: '9px' }}>
                        APPOINTMENT CONTRACT (CONTD.)
                      </span>
                    </div>
                  </div>
                  <div className="a4-header-line" style={{ marginBottom: '16px' }} />

                  {/* Core Contract Body text - Page 2 */}
                  <div className="a4-letter-body">
                    <div className="a4-clause-list">
                      <div className="a4-clause-item">
                        <span className="a4-clause-title">5. Remuneration & Compensation Schedule</span>
                        <p className="a4-clause-desc">Your Annualized Cost to Company (CTC) will be <span className="a4-bold-text">₹ {annualCtc.toLocaleString('en-IN')}</span> (Rupees {annualCtc.toLocaleString('en-IN')} Only). The itemized salary breakdown structure is detailed in the table below:</p>

                        {/* Salary breakdown table */}
                        <table className="a4-salary-table">
                          <thead>
                            <tr className="text-center">
                              <th>Salary Component</th>
                              <th className="text-right">Monthly (₹)</th>
                              <th className="text-right">Annualized (₹)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="font-semibold">Basic Salary</td>
                              <td className="text-right font-bold">{basic.toLocaleString('en-IN')}</td>
                              <td className="text-right">{(basic * 12).toLocaleString('en-IN')}</td>
                            </tr>
                            <tr>
                              <td className="font-semibold">House Rent Allowance (HRA)</td>
                              <td className="text-right font-bold">{hra.toLocaleString('en-IN')}</td>
                              <td className="text-right">{(hra * 12).toLocaleString('en-IN')}</td>
                            </tr>
                            <tr>
                              <td className="font-semibold">Conveyance Allowance</td>
                              <td className="text-right font-bold">{conveyance.toLocaleString('en-IN')}</td>
                              <td className="text-right">{(conveyance * 12).toLocaleString('en-IN')}</td>
                            </tr>
                            <tr>
                              <td className="font-semibold">Provident Fund (PF) Contribution</td>
                              <td className="text-right font-bold">{pf.toLocaleString('en-IN')}</td>
                              <td className="text-right">{(pf * 12).toLocaleString('en-IN')}</td>
                            </tr>
                            <tr>
                              <td className="font-semibold">Special Allowance</td>
                              <td className="text-right font-bold">{allowance.toLocaleString('en-IN')}</td>
                              <td className="text-right">{(allowance * 12).toLocaleString('en-IN')}</td>
                            </tr>
                            <tr className="total-row">
                              <td>Total Gross Salary (CTC)</td>
                              <td className="text-right font-bold">{monthlyCtc.toLocaleString('en-IN')}</td>
                              <td className="text-right">{(annualCtc).toLocaleString('en-IN')}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="a4-clause-item">
                        <span className="a4-clause-title">6. Confidentiality, Data & Company Property</span>
                        <p className="a4-clause-desc">You shall maintain strict confidentiality of business plans, client data, strategies, reports, credentials, internal tools and financial information during and after employment. All documents, systems access, devices and proprietary material issued to you remain the property of Trade Nexus Trade Smart and must be returned on request or separation.</p>
                      </div>

                      <div className="a4-clause-item">
                        <span className="a4-clause-title">7. Separation & Notice Period</span>
                        <p className="a4-clause-desc">During probation, either party can terminate the employment contract with <span className="a4-bold-text">30 days</span> prior written notice. Post confirmation, the notice period will be <span className="a4-bold-text">60 days</span> or equivalent gross basic salary in lieu thereof.</p>
                      </div>
                    </div>

                    <p style={{ marginTop: '8px' }}>
                      Please sign and return the duplicate copy of this letter as a token of your receipt and formal acceptance of the appointment terms. Your appointment remains subject to successful verification of submitted documents, identity details, prior employment records where applicable and completion of onboarding formalities. We welcome you to the Trade Nexus family and wish you a highly rewarding career.
                    </p>
                  </div>
                </div>

                {/* Signatures */}
                <div>
                  <div className="a4-sign-off-section">
                    <div className="a4-signature-col">
                      <div className="a4-sig-label">For Trade Nexus</div>
                      <div className="a4-sig-space" />
                      <div className="a4-sig-name">{hrManager}</div>
                      <div className="a4-sig-title">HR Manager</div>
                    </div>
                    <div className="a4-signature-col text-center">
                      <div className="a4-sig-label">Acknowledged & Accepted</div>
                      <div className="a4-sig-space" />
                      <div className="a4-sig-line" />
                      <div className="a4-sig-title">Candidate Signature & Date</div>
                    </div>
                  </div>
                  <div className="a4-page-number-footer" style={{ marginTop: '16px' }}>Page 2 of 2</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
