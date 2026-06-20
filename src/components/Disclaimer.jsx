import React from 'react';

export default function Disclaimer() {
  return (
    <div style={styles.container}>
      <div style={styles.glowTop} />
      <div style={styles.glowBottom} />

      <div style={styles.content}>
        <div style={styles.header}>
          <h1 style={styles.title}>Legal <span style={styles.accent}>Disclaimer</span></h1>
          <p style={styles.lastUpdated}>Last Updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div style={styles.card}>
          <section style={styles.section}>
            <h2 style={styles.heading}>1. Investment Risks</h2>
            <p style={styles.text}>
              Trading and investing in the stock market involves substantial risk of loss and is not suitable for every investor. 
              The valuation of stocks, options, and other financial instruments may fluctuate, and, as a result, clients may lose more than their original investment. 
              Trade Nexus does not guarantee any returns or profits.
            </p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.heading}>2. SEBI Disclosure</h2>
            <p style={styles.text}>
              Trade Nexus is a SEBI Registered Research Analyst. Our research recommendations are based on technical and fundamental analysis, 
              which involves inherent risks. All research reports and recommendations provided on this website are for educational and informational 
              purposes only. We do not provide execution services.
            </p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.heading}>3. Accuracy of Information</h2>
            <p style={styles.text}>
              While we make every effort to ensure the accuracy of the information provided, we cannot guarantee that the information is completely 
              error-free. The information and views expressed herein are believed to be reliable, but Trade Nexus makes no representation or 
              warranty regarding their accuracy or completeness.
            </p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.heading}>4. No Financial Advice</h2>
            <p style={styles.text}>
              The content on this website does not constitute personalized financial advice. Visitors and clients should consult with a qualified 
              financial advisor before making any investment decisions. Trade Nexus is not liable for any losses incurred as a result of relying 
              on the information provided.
            </p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.heading}>5. Contact Us</h2>
            <p style={styles.text}>
              If you have any questions about this disclaimer, please contact us at:
              <br/><br/>
              <strong>Email:</strong> info@tradenexustradesmart.com<br/>
              <strong>Phone:</strong> +91 919483001083<br/>
              <strong>Address:</strong> 4th Phase JP Nagar, Near Reliance digital, Bangalore – 560078
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: '#040b14',
    padding: '120px 24px 60px',
    position: 'relative',
    overflow: 'hidden',
    color: '#d1d5db',
    fontFamily: '"Inter", sans-serif',
  },
  glowTop: {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80vw',
    height: '400px',
    background: 'radial-gradient(ellipse, rgba(0, 212, 255, 0.1) 0%, transparent 60%)',
    pointerEvents: 'none',
  },
  glowBottom: {
    position: 'absolute',
    bottom: '-10%',
    right: '-10%',
    width: '600px',
    height: '600px',
    background: 'radial-gradient(circle, rgba(66, 178, 189, 0.05) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  content: {
    maxWidth: '900px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1,
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  title: {
    fontSize: '42px',
    fontWeight: '800',
    color: '#fff',
    margin: '0 0 16px 0',
    letterSpacing: '-0.5px',
  },
  accent: {
    background: 'linear-gradient(135deg, #00d4ff, #42b2bd)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  lastUpdated: {
    fontSize: '15px',
    color: '#9ca3af',
    margin: 0,
  },
  card: {
    background: 'rgba(10, 21, 37, 0.6)',
    border: '1px solid rgba(0, 212, 255, 0.1)',
    borderRadius: '20px',
    padding: '40px',
    backdropFilter: 'blur(10px)',
  },
  section: {
    marginBottom: '32px',
  },
  heading: {
    fontSize: '22px',
    fontWeight: '600',
    color: '#fff',
    marginBottom: '16px',
    borderBottom: '1px solid rgba(0, 212, 255, 0.1)',
    paddingBottom: '8px',
  },
  text: {
    fontSize: '16px',
    lineHeight: '1.7',
    color: '#9ca3af',
    margin: '0 0 16px 0',
  },
  list: {
    margin: '0 0 16px 0',
    paddingLeft: '24px',
    color: '#9ca3af',
  },
  listItem: {
    fontSize: '16px',
    lineHeight: '1.7',
    marginBottom: '8px',
  },
};
