import React from 'react';

export default function TermsConditions() {
  return (
    <div style={styles.container}>
      <div style={styles.glowTop} />
      <div style={styles.glowBottom} />

      <div style={styles.content}>
        <div style={styles.header}>
          <h1 style={styles.title}>Terms & <span style={styles.accent}>Conditions</span></h1>
          <p style={styles.lastUpdated}>Last Updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div style={styles.card}>
          <section style={styles.section}>
            <h2 style={styles.heading}>1. Acceptance of Terms</h2>
            <p style={styles.text}>
              By accessing and using Trade Nexus, you accept and agree to be bound by the terms and provision of this agreement. 
              In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
            </p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.heading}>2. SEBI Registration & Services</h2>
            <p style={styles.text}>
              Trade Nexus acts as a SEBI Registered Research Analyst. The services provided by us involve recommendations and research reports 
              regarding the financial markets. While we strive for accuracy, stock market trading is subject to market risks, and we do not guarantee 
              assured returns. Past performance is not indicative of future results.
            </p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.heading}>3. User Obligations</h2>
            <ul style={styles.list}>
              <li style={styles.listItem}>You must be at least 18 years old to use our services.</li>
              <li style={styles.listItem}>You agree to provide true, accurate, current, and complete information during registration.</li>
              <li style={styles.listItem}>You are responsible for maintaining the confidentiality of your account and password.</li>
              <li style={styles.listItem}>You will not use the services for any illegal or unauthorized purpose.</li>
            </ul>
          </section>

          <section style={styles.section}>
            <h2 style={styles.heading}>4. Intellectual Property Rights</h2>
            <p style={styles.text}>
              All content on this site, including text, graphics, logos, and research reports, is the property of Trade Nexus and protected by copyright laws. 
              You may not reproduce, distribute, or transmit any part of this site without our prior written permission.
            </p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.heading}>5. Limitation of Liability</h2>
            <p style={styles.text}>
              Trade Nexus shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or the inability 
              to use the services, including but not limited to financial losses from trading decisions based on our recommendations.
            </p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.heading}>6. Contact Us</h2>
            <p style={styles.text}>
              If you have any questions about these Terms and Conditions, please contact us at:
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
