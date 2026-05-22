import { useState } from 'react'
import { FaPrint, FaChevronLeft, FaUndo, FaUser, FaBriefcase, FaCalendarAlt } from 'react-icons/fa'
import { printDashboardDocument } from '../../utils/printDocument'
import './PaySlipDoc.css'

export default function PaySlipDoc({ setTab }) {
  const [empName, setEmpName] = useState('Sujata K')
  const [empId, setEmpId] = useState('TN-084')
  const [designation, setDesignation] = useState('Research Analyst')
  const [department, setDepartment] = useState('Research & Analysis')
  const [monthYear, setMonthYear] = useState('May 2026')
  const [joiningDate, setJoiningDate] = useState('2025-04-14')
  const [bankName, setBankName] = useState('HDFC Bank')
  const [accountNo, setAccountNo] = useState('50100482930214')
  const [panNumber, setPanNumber] = useState('APIPK7839C')
  
  // Earnings state
  const [basic, setBasic] = useState(35000)
  const [hra, setHra] = useState(14000)
  const [incentives, setIncentives] = useState(8500)
  const [bonus, setBonus] = useState(2500)
  const [allowance, setAllowance] = useState(3000)
  
  // Deductions state
  const [pf, setPf] = useState(1800)
  const [pt, setPt] = useState(200)
  const [tds, setTds] = useState(1500)
  const [otherDeductions, setOtherDeductions] = useState(0)
  const [lopDays, setLopDays] = useState(0)

  // Word converter for Indian currency numbering format
  const priceToWords = (num) => {
    const a = ['', 'One ', 'Two ', 'Three ', 'Four ', 'Five ', 'Six ', 'Seven ', 'Eight ', 'Nine ', 'Ten ', 'Eleven ', 'Twelve ', 'Thirteen ', 'Fourteen ', 'Fifteen ', 'Sixteen ', 'Seventeen ', 'Eighteen ', 'Nineteen ']
    const b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']
    
    const regex = new RegExp(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/)
    
    const words = (n) => {
      if ((n = parseInt(n)) === 0) return ''
      let str = ''
      if (n > 99) return ''
      str += (n < 20) ? a[n] : (b[Math.floor(n / 10)] + ' ' + a[n % 10])
      return str
    }
    
    let n = num.toString().padStart(9, '0')
    let match = n.match(regex)
    if (!match) return ''
    
    let str = ''
    str += (parseInt(match[1]) !== 0) ? (words(match[1]) + 'Crore ') : ''
    str += (parseInt(match[2]) !== 0) ? (words(match[2]) + 'Lakh ') : ''
    str += (parseInt(match[3]) !== 0) ? (words(match[3]) + 'Thousand ') : ''
    str += (parseInt(match[4]) !== 0) ? (words(match[4]) + 'Hundred ') : ''
    str += (parseInt(match[5]) !== 0) ? (words(match[5]) + '') : ''
    
    return str.trim() ? str.trim() + ' Rupees Only' : 'Zero Rupees Only'
  }

  const handleReset = () => {
    setEmpName('Sujata K')
    setEmpId('TN-084')
    setDesignation('Research Analyst')
    setDepartment('Research & Analysis')
    setMonthYear('May 2026')
    setJoiningDate('2025-04-14')
    setBankName('HDFC Bank')
    setAccountNo('50100482930214')
    setPanNumber('APIPK7839C')
    setBasic(35000)
    setHra(14000)
    setIncentives(8500)
    setBonus(2500)
    setAllowance(3000)
    setPf(1800)
    setPt(200)
    setTds(1500)
    setOtherDeductions(0)
    setLopDays(0)
  }

  const handlePrint = () => {
    printDashboardDocument()
  }

  const getGross = () => basic + hra + incentives + bonus + allowance
  const getDeductions = () => pf + pt + tds + otherDeductions
  const getNetSalary = () => getGross() - getDeductions()

  const formatDate = (dateStr) => {
    if (!dateStr) return ''
    const parts = dateStr.split('-')
    if (parts.length === 3) {
      return `${parts[2]}-${parts[1]}-${parts[0]}`
    }
    return dateStr
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
            <h1 className="creator-heading">Pay Slip Generator</h1>
            <p className="creator-subheading">Generate compliance-ready itemized payslip receipts</p>
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
        {/* Form parameters (no-print) */}
        <div className="space-y-5 no-print">
          <div className="parameters-panel">
            <h3 className="parameters-panel-title">
              Employee Parameters
            </h3>

            {/* Row 1 */}
            <div className="param-grid-row">
              <div className="param-group">
                <label className="param-label">
                  <FaUser /> Employee Name
                </label>
                <input
                  type="text"
                  value={empName}
                  onChange={(e) => setEmpName(e.target.value)}
                  className="param-input"
                />
              </div>
              <div className="param-group">
                <label className="param-label">Employee ID</label>
                <input
                  type="text"
                  value={empId}
                  onChange={(e) => setEmpId(e.target.value)}
                  className="param-input"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="param-grid-row">
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
              <div className="param-group">
                <label className="param-label">Department</label>
                <input
                  type="text"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="param-input"
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="param-grid-row">
              <div className="param-group">
                <label className="param-label">
                  <FaCalendarAlt /> Pay Period Month
                </label>
                <input
                  type="text"
                  placeholder="e.g. May 2026"
                  value={monthYear}
                  onChange={(e) => setMonthYear(e.target.value)}
                  className="param-input"
                />
              </div>
              <div className="param-group">
                <label className="param-label">Loss of Pay Days</label>
                <input
                  type="number"
                  min="0"
                  value={lopDays}
                  onChange={(e) => setLopDays(Number(e.target.value))}
                  className="param-input"
                />
              </div>
            </div>

            {/* Row 4 */}
            <div className="param-grid-row">
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
              <div className="param-group">
                <label className="param-label">Bank Name</label>
                <input
                  type="text"
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                  className="param-input"
                />
              </div>
            </div>

            <div className="param-grid-row">
              <div className="param-group">
                <label className="param-label">Account Number</label>
                <input
                  type="text"
                  value={accountNo}
                  onChange={(e) => setAccountNo(e.target.value)}
                  className="param-input"
                />
              </div>
              <div className="param-group">
                <label className="param-label">PAN Number</label>
                <input
                  type="text"
                  value={panNumber}
                  onChange={(e) => setPanNumber(e.target.value)}
                  className="param-input"
                  style={{ textTransform: 'uppercase' }}
                />
              </div>
            </div>
          </div>

          {/* Core financial inputs */}
          <div className="parameters-panel">
            <h3 className="parameters-panel-title">
              Salary Breakdowns (INR)
            </h3>

            {/* Side-by-side columns of financial items */}
            <div className="param-financial-split">
              {/* Earnings column */}
              <div className="param-financial-col">
                <h4 className="param-financial-header-earn">Earnings</h4>
                <div className="param-group">
                  <label className="param-label">Basic Pay</label>
                  <input
                    type="number"
                    value={basic}
                    onChange={(e) => setBasic(Number(e.target.value))}
                    className="param-input"
                  />
                </div>
                <div className="param-group">
                  <label className="param-label">HRA</label>
                  <input
                    type="number"
                    value={hra}
                    onChange={(e) => setHra(Number(e.target.value))}
                    className="param-input"
                  />
                </div>
                <div className="param-group">
                  <label className="param-label">Incentives</label>
                  <input
                    type="number"
                    value={incentives}
                    onChange={(e) => setIncentives(Number(e.target.value))}
                    className="param-input"
                  />
                </div>
                <div className="param-group">
                  <label className="param-label">Bonus</label>
                  <input
                    type="number"
                    value={bonus}
                    onChange={(e) => setBonus(Number(e.target.value))}
                    className="param-input"
                  />
                </div>
                <div className="param-group">
                  <label className="param-label">Other Allowances</label>
                  <input
                    type="number"
                    value={allowance}
                    onChange={(e) => setAllowance(Number(e.target.value))}
                    className="param-input"
                  />
                </div>
              </div>

              {/* Deductions column */}
              <div className="param-financial-col">
                <h4 className="param-financial-header-deduct">Deductions</h4>
                <div className="param-group">
                  <label className="param-label">PF Contribution</label>
                  <input
                    type="number"
                    value={pf}
                    onChange={(e) => setPf(Number(e.target.value))}
                    className="param-input"
                  />
                </div>
                <div className="param-group">
                  <label className="param-label">Professional Tax</label>
                  <input
                    type="number"
                    value={pt}
                    onChange={(e) => setPt(Number(e.target.value))}
                    className="param-input"
                  />
                </div>
                <div className="param-group">
                  <label className="param-label">TDS / Income Tax</label>
                  <input
                    type="number"
                    value={tds}
                    onChange={(e) => setTds(Number(e.target.value))}
                    className="param-input"
                  />
                </div>
                <div className="param-group">
                  <label className="param-label">Other Deductions</label>
                  <input
                    type="number"
                    value={otherDeductions}
                    onChange={(e) => setOtherDeductions(Number(e.target.value))}
                    className="param-input"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live A4 Print Preview Sheet */}
        <div className="preview-workspace no-print-container">
          <div
            id="print-sheet-payslip"
            className="a4-page-frame reference-form-page payslip-reference-page"
          >
            <div className="reference-form-content">
              <h1 className="reference-company-title">TRADE NEXUS TRADE SMART</h1>
              <h2 className="reference-document-title">EMPLOYEE PAYSLIP FORMAT</h2>

              <div className="payslip-month-line">
                <strong>Salary Month:</strong> <span>{monthYear}</span>
              </div>

              <table className="reference-grid-table payslip-employee-table">
                <tbody>
                  <tr><th>Employee Name</th><td>{empName}</td></tr>
                  <tr><th>Employee ID</th><td>{empId}</td></tr>
                  <tr><th>Designation</th><td>{designation}</td></tr>
                  <tr><th>Department</th><td>{department}</td></tr>
                  <tr><th>Joining Date</th><td>{formatDate(joiningDate)}</td></tr>
                  <tr><th>Bank Name</th><td>{bankName}</td></tr>
                  <tr><th>Account Number</th><td>{accountNo}</td></tr>
                  <tr><th>PAN Number</th><td>{panNumber.toUpperCase()}</td></tr>
                </tbody>
              </table>

              <table className="reference-grid-table payslip-salary-table">
                <thead>
                  <tr>
                    <th>Earnings</th>
                    <th>Amount (₹)</th>
                    <th>Deductions</th>
                    <th>Amount (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Basic Salary</td>
                    <td>₹ {basic.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
                    <td>PF</td>
                    <td>₹ {pf.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
                  </tr>
                  <tr>
                    <td>HRA</td>
                    <td>₹ {hra.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
                    <td>Professional Tax</td>
                    <td>₹ {pt.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
                  </tr>
                  <tr>
                    <td>Incentives</td>
                    <td>₹ {incentives.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
                    <td>TDS</td>
                    <td>₹ {tds.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
                  </tr>
                  <tr>
                    <td>Bonus</td>
                    <td>₹ {bonus.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
                    <td>Other Deductions</td>
                    <td>₹ {otherDeductions.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
                  </tr>
                  <tr>
                    <td>Other Allowances</td>
                    <td>₹ {allowance.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Gross Salary</td>
                    <td>₹ {getGross().toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
                    <td>Total Deductions</td>
                    <td>₹ {getDeductions().toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
                  </tr>
                  <tr>
                    <td>Net Salary</td>
                    <td>₹ {getNetSalary().toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
                    <td>LOP Days</td>
                    <td>{lopDays}</td>
                  </tr>
                </tbody>
              </table>

              <div className="reference-detail-block payslip-note-block">
                <strong>Company Note:</strong>
                <span>This is a computer-generated payslip issued by Trade Nexus Trade Smart. All employees are requested to verify salary details carefully and contact the HR department for any clarification.</span>
                <span>Net salary in words: {priceToWords(getNetSalary())}</span>
              </div>

              <div className="reference-signature-row payslip-signature-row-ref">
                <div>
                  <strong>Employee Signature</strong>
                  <span />
                </div>
                <div>
                  <strong>HR Signature</strong>
                  <span />
                </div>
              </div>

              <div className="reference-footer-note">
                <strong>TRADE NEXUS TRADE SMART</strong>
                <span>Generated on: 22-05-2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
