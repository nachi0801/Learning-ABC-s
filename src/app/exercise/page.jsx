import React from 'react';

const styles = {
  navbar: {
    backgroundColor: '#FFA500', // Orange background for the navbar
    padding: '15px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Add some shadow for depth
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000, // Ensure it's above the main content
  },
  navbarTitle: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#FFF',
  },
  icon: {
    fontSize: '1.8rem',
    color: '#FFF',
    marginLeft: '15px',
    cursor: 'pointer',
  },
  container: {
    backgroundColor: '#F9C74F', // Light yellow background for the page
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '80px', // Space for the fixed navbar
  },
  content: {
    width: '100%',
    maxWidth: '600px',
    backgroundColor: '#FFA500', // Orange background for the main box
    borderRadius: '20px',
    padding: '30px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Shadow for depth
  },
  textareaContainer: {
    position: 'relative',
    marginBottom: '20px',
  },
  textarea: {
    width: '100%',
    height: '150px',
    borderRadius: '10px',
    padding: '15px',
    border: 'none',
    backgroundColor: '#FFB347',
    color: '#FFF',
    fontSize: '1.1rem',
    resize: 'none',
  },
  addIcon: {
    position: 'absolute',
    top: '10px',
    right: '15px',
    fontSize: '2rem',
    color: '#FFF',
    cursor: 'pointer',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    padding: '12px 25px',
    fontSize: '1.2rem',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
    width: '48%',
  },
  setDateButton: {
    backgroundColor: '#FFF',
    color: '#FF4500',
    transition: 'background-color 0.3s',
  },
  postButton: {
    backgroundColor: '#007BFF',
    color: '#FFF',
    transition: 'background-color 0.3s',
  },
};

const ExercisePage = () => {
  return (
    <div>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.icon}>☰</div>
        <div style={styles.navbarTitle}>Exercise</div>
        <div>
          <span style={styles.icon}>💬</span>
          <span style={styles.icon}>⚙️</span>
        </div>
      </nav>

      {/* Main Content */}
      <div style={styles.container}>
        <div style={styles.content}>
          {/* Textarea */}
          <div style={styles.textareaContainer}>
            <textarea
              style={styles.textarea}
              placeholder="Add your Question..."
            ></textarea>
            <div style={styles.addIcon}>➕</div>
          </div>

          {/* Buttons */}
          <div style={styles.buttonContainer}>
            <button style={{ ...styles.button, ...styles.setDateButton }}>Set Date</button>
            <button style={{ ...styles.button, ...styles.postButton }}>Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExercisePage;
