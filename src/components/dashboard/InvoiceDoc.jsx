import { useState } from 'react'
import { FaPrint, FaChevronLeft, FaUndo, FaPlus, FaTrash, FaCheckCircle, FaUser, FaFileInvoiceDollar, FaCalendarAlt } from 'react-icons/fa'
import { printDashboardDocument } from '../../utils/printDocument'
import logo from '../../assets/logo.jpeg'
import './InvoiceDoc.css'

export default function InvoiceDoc({ setTab }) {
  const [invoiceNo, setInvoiceNo] = useState('TN/2026/042')
  const [invoiceDate, setInvoiceDate] = useState('2026-05-22')
  const [dueDate, setDueDate] = useState('2026-06-06')
  const [clientName, setClientName] = useState('Devendra Joshi')
  const [clientPhone, setClientPhone] = useState('+91 98765 43210')
  const [serviceType, setServiceType] = useState('Premium Research Advisory')
  const [registrationId, setRegistrationId] = useState('TN-RG-2026-042')
  const [profitSharingPercentage, setProfitSharingPercentage] = useState('20%')
  const [profitSettlementCycle, setProfitSettlementCycle] = useState('Monthly')
  const [paymentTransferMode, setPaymentTransferMode] = useState('Bank Transfer / UPI')
  const [items, setItems] = useState([
    { desc: 'Service Registration Fee', qty: 1, rate: 5000 },
    { desc: 'Documentation Charges', qty: 1, rate: 1500 },
    { desc: 'Profit Sharing Contribution', qty: 1, rate: 10000 },
    { desc: 'Other Charges', qty: 1, rate: 0 }
  ])

  // Word converter for Indian currency numbering format
  const priceToWords = (num) => {
    const a = ['', 'One ', 'Two ', 'Three ', 'Four ', 'Five ', 'Six ', 'Seven ', 'Eight ', 'Nine ', 'Ten ', 'Eleven ', 'Twelve ', 'Thirteen ', 'Fourteen ', 'Fifteen ', 'Sixteen ', 'Seventeen ', 'Eighteen ', 'Nineteen ']
    const b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']
    
    const regex = new RegExp(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/)
    
    const words = (n) => {
      if ((n = parseInt(n)) === 0) return ''
      let str = ''
      if (n > 99) return '' // fallback for simplicity
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

  const handleAddItem = () => {
    setItems([...items, { desc: '', qty: 1, rate: 0 }])
  }

  const handleRemoveItem = (index) => {
    if (items.length === 1) return
    setItems(items.filter((_, i) => i !== index))
  }

  const handleItemChange = (index, field, value) => {
    const newItems = [...items]
    if (field === 'qty' || field === 'rate') {
      newItems[index][field] = Number(value)
    } else {
      newItems[index][field] = value
    }
    setItems(newItems)
  }

  const handleReset = () => {
    setInvoiceNo('TN/2026/042')
    setInvoiceDate('2026-05-22')
    setDueDate('2026-06-06')
    setClientName('Devendra Joshi')
    setClientPhone('+91 98765 43210')
    setServiceType('Premium Research Advisory')
    setRegistrationId('TN-RG-2026-042')
    setProfitSharingPercentage('20%')
    setProfitSettlementCycle('Monthly')
    setPaymentTransferMode('Bank Transfer / UPI')
    setItems([
      { desc: 'Service Registration Fee', qty: 1, rate: 5000 },
      { desc: 'Documentation Charges', qty: 1, rate: 1500 },
      { desc: 'Profit Sharing Contribution', qty: 1, rate: 10000 },
      { desc: 'Other Charges', qty: 1, rate: 0 }
    ])
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

  const getSubtotal = () => items.reduce((sum, item) => sum + (item.qty * item.rate), 0)
  const cgst = getSubtotal() * 0.09
  const sgst = getSubtotal() * 0.09
  const grandTotal = getSubtotal() + cgst + sgst

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
            <h1 className="creator-heading">Invoice Builder & Print</h1>
            <p className="creator-subheading">Generate GST-compliant itemized advisory service invoices</p>
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
        <div className="space-y-5 no-print">
          <div className="parameters-panel">
            <h3 className="parameters-panel-title">
              Invoice Core Details
            </h3>

            {/* Invoice Number */}
            <div className="param-group">
              <label className="param-label">
                <FaFileInvoiceDollar /> Invoice Number
              </label>
              <input
                type="text"
                value={invoiceNo}
                onChange={(e) => setInvoiceNo(e.target.value)}
                className="param-input"
              />
            </div>

            {/* Dates */}
            <div className="param-grid-row">
              <div className="param-group">
                <label className="param-label">
                  <FaCalendarAlt /> Invoice Date
                </label>
                <input
                  type="date"
                  value={invoiceDate}
                  onChange={(e) => setInvoiceDate(e.target.value)}
                  className="param-input"
                />
              </div>
              <div className="param-group">
                <label className="param-label">
                  <FaCalendarAlt /> Due Date
                </label>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="param-input"
                />
              </div>
            </div>

            <h3 className="parameters-panel-title" style={{ marginTop: '12px' }}>
              Client & Service
            </h3>

            {/* Client Name */}
            <div className="param-group">
              <label className="param-label">
                <FaUser /> Client Name
              </label>
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="param-input"
              />
            </div>

            <div className="param-grid-row">
              <div className="param-group">
                <label className="param-label">Phone Number</label>
                <input
                  type="text"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="param-input"
                />
              </div>
              <div className="param-group">
                <label className="param-label">Registration ID</label>
                <input
                  type="text"
                  value={registrationId}
                  onChange={(e) => setRegistrationId(e.target.value)}
                  className="param-input"
                />
              </div>
            </div>

            <div className="param-group">
              <label className="param-label">Service Type</label>
              <input
                type="text"
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
                className="param-input"
              />
            </div>

            <h3 className="parameters-panel-title" style={{ marginTop: '12px' }}>
              Profit Sharing Details
            </h3>

            <div className="param-grid-row">
              <div className="param-group">
                <label className="param-label">Profit Sharing %</label>
                <input
                  type="text"
                  value={profitSharingPercentage}
                  onChange={(e) => setProfitSharingPercentage(e.target.value)}
                  className="param-input"
                />
              </div>
              <div className="param-group">
                <label className="param-label">Settlement Cycle</label>
                <input
                  type="text"
                  value={profitSettlementCycle}
                  onChange={(e) => setProfitSettlementCycle(e.target.value)}
                  className="param-input"
                />
              </div>
            </div>

            <div className="param-group">
              <label className="param-label">Payment Transfer Mode</label>
              <input
                type="text"
                value={paymentTransferMode}
                onChange={(e) => setPaymentTransferMode(e.target.value)}
                className="param-input"
              />
            </div>
          </div>

          {/* Interactive invoice items builder */}
          <div className="invoice-item-builder">
            <div className="invoice-builder-header">
              <h3 className="invoice-builder-title">
                Itemized Orders
              </h3>
              <button
                onClick={handleAddItem}
                className="invoice-add-item-btn"
              >
                <FaPlus className="text-[9px]" /> Add Item
              </button>
            </div>

            <div className="invoice-items-stack">
              {items.map((item, index) => (
                <div key={index} className="invoice-item-card">
                  <div className="invoice-item-card-row">
                    <span className="invoice-item-index">Item #{index + 1}</span>
                    {items.length > 1 && (
                      <button
                        onClick={() => handleRemoveItem(index)}
                        className="invoice-item-remove-btn"
                        title="Delete item"
                      >
                        <FaTrash className="text-xs" />
                      </button>
                    )}
                  </div>
                  <input
                    type="text"
                    placeholder="Description (e.g. Research Advisory)"
                    value={item.desc}
                    onChange={(e) => handleItemChange(index, 'desc', e.target.value)}
                    className="invoice-item-input-desc"
                    required
                  />
                  <div className="invoice-item-vals-row">
                    <div className="invoice-item-val-col">
                      <label>Qty</label>
                      <input
                        type="number"
                        min="1"
                        value={item.qty}
                        onChange={(e) => handleItemChange(index, 'qty', e.target.value)}
                        className="invoice-item-val-input"
                      />
                    </div>
                    <div className="invoice-item-val-col">
                      <label>Unit Rate (₹)</label>
                      <input
                        type="number"
                        min="0"
                        value={item.rate}
                        onChange={(e) => handleItemChange(index, 'rate', e.target.value)}
                        className="invoice-item-val-input"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="instructions-card">
            <span className="instructions-card-header">
              <FaCheckCircle /> Calculated GST Info
            </span>
            <p className="instructions-text">
              Automatic calculated SGST/CGST breakdown at 18% (9% each).
            </p>
          </div>
        </div>

        {/* Live A4 Print Preview Sheet */}
        <div className="preview-workspace no-print-container">
          <div
            id="print-sheet-invoice"
            className="a4-page-frame reference-form-page invoice-reference-page"
          >
            <div className="reference-form-content">
              <div className="invoice-doc-header">
                <div className="invoice-doc-logo-wrap">
                  <img src={logo} alt="Trade Nexus" className="invoice-doc-logo" />
                </div>
                <div className="invoice-doc-brand">
                  <h1 className="invoice-doc-brand-name">TRADE NEXUS</h1>
                  <span className="invoice-doc-brand-sub">TRADE SMART</span>
                  <span className="invoice-doc-sebi">SEBI Reg: INH200008024</span>
                </div>
                <div className="invoice-doc-title-col">
                  <h2 className="invoice-doc-title">INVOICE</h2>
                  <span className="invoice-doc-no">#{invoiceNo}</span>
                  <span className="invoice-doc-date">{formatDate(invoiceDate)}</span>
                </div>
              </div>
              <div className="invoice-doc-divider" />

              <table className="reference-grid-table invoice-meta-table">
                <tbody>
                  <tr>
                    <th>Client Name</th>
                    <td>{clientName}</td>
                    <th>Phone Number</th>
                    <td>{clientPhone}</td>
                  </tr>
                  <tr>
                    <th>Service Type</th>
                    <td>{serviceType}</td>
                    <th>Registration ID</th>
                    <td>{registrationId}</td>
                  </tr>
                </tbody>
              </table>

              <table className="reference-grid-table invoice-items-table-ref">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Service Description</th>
                    <th>Amount (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.desc || 'Other Charges'}</td>
                      <td>₹ {(item.qty * item.rate).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="reference-detail-block">
                <strong>Profit Sharing Details:</strong>
                <span>Profit sharing percentage: {profitSharingPercentage}</span>
                <span>Profit settlement cycle: {profitSettlementCycle}</span>
                <span>Payment transfer mode: {paymentTransferMode}</span>
                <span>Terms agreed between company and client/applicant.</span>
              </div>

              <table className="reference-grid-table invoice-total-table">
                <tbody>
                  <tr>
                    <th>Subtotal</th>
                    <td>₹ {getSubtotal().toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
                  </tr>
                  <tr>
                    <th>GST</th>
                    <td>₹ {(cgst + sgst).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
                  </tr>
                  <tr className="reference-total-row">
                    <th>Total Amount</th>
                    <td>₹ {grandTotal.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
                  </tr>
                </tbody>
              </table>

              <div className="reference-detail-block reference-terms-block">
                <strong>Terms & Conditions:</strong>
                <span>Service registration is subject to company approval.</span>
                <span>Profit sharing terms are confidential and mutually agreed.</span>
                <span>This invoice is computer-generated and valid without signature.</span>
                <span>Amount in words: {priceToWords(Math.round(grandTotal))}</span>
              </div>

              <div className="reference-signature-row">
                <div>
                  <strong>Client Signature</strong>
                  <span />
                </div>
                <div>
                  <strong>Authorized HR Signature</strong>
                  <span />
                </div>
              </div>

              <div className="reference-footer-note">
                <strong>TRADE NEXUS TRADE SMART</strong>
                <span>Thank you for choosing our services.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
