import React from 'react';

const Experience = () => {
  return (
    <div style={styles.card}>
      <div style={styles.badgeContainer}>
        <img
          src="/images/foundever.png" // Replace with the actual image URL
          alt="Foundever Badge"
          style={styles.badge}
        />
      </div>
      <div style={styles.content}>
        <h3 style={styles.companyName}>Foundever<sup>®</sup></h3>
        <p style={styles.duration}>September 2025 - Present</p>
        <p style={styles.role}><strong>Customer Service Professional</strong></p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '400px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  badgeContainer: {
    backgroundColor: '#4A55A2',
    padding: '10px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    width: '60px',
    height: '60px',
    objectFit: 'contain',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
  companyName: {
    margin: '0',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333',
  },
  duration: {
    margin: '5px 0',
    fontSize: '0.9rem',
    color: '#666',
  },
  role: {
    margin: '5px 0',
    fontSize: '1rem',
    color: '#333',
  },
};

export default Experience;
