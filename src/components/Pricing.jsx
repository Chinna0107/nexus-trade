import './Pricing.css'

const pricingData = [
  {
    category: 'Stock cash',
    plans: [
      { duration: 'Monthly', price: '₹ 17000/-' },
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

export default function Pricing() {
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
                <button className="subscribe-btn">Subscribe Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}