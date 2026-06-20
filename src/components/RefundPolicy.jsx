import React from 'react';

export default function RefundPolicy() {
  return (
    <div style={styles.container}>
      <div style={styles.glowTop} />
      <div style={styles.glowBottom} />

      <div style={styles.content}>
        <div style={styles.header}>
          <h1 style={styles.title}>Refund & <span style={styles.accent}>Cancellation</span></h1>
          <p style={styles.lastUpdated}>Last Updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div style={styles.card}>
          <section style={styles.section}>
            <h2 style={styles.heading}>1. General Policy</h2>
            <p style={styles.text}>
              At Trade Nexus, we strive to ensure that our clients are satisfied with our research services. 
              However, due to the nature of the financial markets and our service delivery, we have a strict 
              cancellation and refund policy.
            </p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.heading}>2. No Refund Policy</h2>
            <p style={styles.text}>
              All sales are final. Because Trade Nexus provides immediate access to research, analysis, and recommendations 
              upon successful payment, we do not offer refunds, cancellations, or transfers of subscriptions under any circumstances.
            </p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.heading}>3. Subscription Cancellations</h2>
            <p style={styles.text}>
              You may cancel your subscription at any time to prevent future billing. However, cancelling a subscription 
              does not initiate a refund for any previous charges. You will continue to have access to the services until 
              the end of your current billing period.
            </p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.heading}>4. Dispute Resolution</h2>
            <p style={styles.text}>
              If you believe there has been an error in billing or an unauthorized charge, please contact our support team 
              immediately. We will review your claim and, if an error on our part is confirmed, we will correct the billing. 
              Filing a chargeback with your bank or credit card company without first contacting us may result in immediate 
              suspension of your account.
            </p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.heading}>5. Contact Us</h2>
            <p style={styles.text}>
              If you have any questions about our refund and cancellation policy, please contact us at:
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
