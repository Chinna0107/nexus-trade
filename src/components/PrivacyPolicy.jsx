import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div style={styles.container}>
      <div style={styles.glowTop} />
      <div style={styles.glowBottom} />

      <div style={styles.content}>
        <div style={styles.header}>
          <h1 style={styles.title}>Privacy <span style={styles.accent}>Policy</span></h1>
          <p style={styles.lastUpdated}>Last Updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div style={styles.card}>
          <section style={styles.section}>
            <h2 style={styles.heading}>1. Introduction</h2>
            <p style={styles.text}>
              Welcome to Trade Nexus. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you as to how we look after your personal data when you visit our website 
              and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.heading}>2. Data We Collect</h2>
            <p style={styles.text}>
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul style={styles.list}>
              <li style={styles.listItem}><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
              <li style={styles.listItem}><strong>Contact Data:</strong> includes billing address, email address and telephone numbers.</li>
              <li style={styles.listItem}><strong>Financial Data:</strong> includes bank account and payment card details (processed securely by our payment gateways).</li>
              <li style={styles.listItem}><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version.</li>
            </ul>
          </section>

          <section style={styles.section}>
            <h2 style={styles.heading}>3. How We Use Your Data</h2>
            <p style={styles.text}>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul style={styles.list}>
              <li style={styles.listItem}>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., providing our research services).</li>
              <li style={styles.listItem}>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li style={styles.listItem}>Where we need to comply with a legal or regulatory obligation, such as SEBI regulations.</li>
            </ul>
          </section>

          <section style={styles.section}>
            <h2 style={styles.heading}>4. Data Security</h2>
            <p style={styles.text}>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.heading}>5. Your Legal Rights</h2>
            <p style={styles.text}>
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.
            </p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.heading}>6. Contact Us</h2>
            <p style={styles.text}>
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
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
