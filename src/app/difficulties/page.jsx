import React from 'react';

const styles = {
  app: {
    backgroundColor: '#f9c74f', // Background color similar to the image
    minHeight: '100vh', // Full viewport height
    display: 'flex', // Flexbox for layout
    flexDirection: 'column', // Align vertically
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    padding: '20px',
    textAlign: 'center',
  },
  header: {
    fontSize: '2rem', // Font size for header
    fontWeight: 'bold', // Bold header text
    color: '#fff', // White color for text
    marginBottom: '20px', // Space between header and buttons
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Text shadow for styling
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column', // Stack buttons vertically
    gap: '20px', // Space between buttons
  },
  button: {
    width: '200px', // Set width of each button
    padding: '15px', // Padding inside the buttons
    borderRadius: '10px', // Rounded corners
    border: '2px solid black', // Black border around buttons
    fontSize: '1.5rem', // Larger text inside buttons
    fontWeight: 'bold', // Bold text
    cursor: 'pointer', // Change cursor on hover
  },
  easy: {
    backgroundColor: 'limegreen', // Green background for Easy
    color: '#000', // Black text color
  },
  normal: {
    backgroundColor: '#f4a261', // Orange background for Normal
    color: '#000', // Black text color
  },
  hard: {
    backgroundColor: '#e63946', // Red background for Hard
    color: '#fff', // White text color
  },
};

const SelectDifficulty = () => {
  return (
    <div style={styles.app}>
      {/* Page Header */}
      <h1 style={styles.header}>Select Difficulties</h1>

      {/* Difficulty buttons */}
      <div style={styles.buttonContainer}>
        <button style={{ ...styles.button, ...styles.easy }}>Easy</button>
        <button style={{ ...styles.button, ...styles.normal }}>Normal</button>
        <button style={{ ...styles.button, ...styles.hard }}>Hard</button>
      </div>
    </div>
  );
};

export default SelectDifficulty;
