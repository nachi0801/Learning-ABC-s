import React from 'react';

const styles = {
  app: {
    backgroundColor: '#f9c74f', // Background color similar to the image
    minHeight: '100vh', // Full viewport height
    display: 'flex', // Use flexbox for layout
    flexDirection: 'column', // Align items vertically
    justifyContent: 'center', // Center items vertically
    alignItems: 'center', // Center items horizontally
    padding: '20px',
    textAlign: 'center',
  },
  header: {
    fontSize: '2.5rem', // Font size for title
    fontWeight: 'bold', // Bold text
    marginBottom: '30px', // Space between title and buttons
    color: '#000', // Black text for title
  },
  colorText: {
    color: 'red', // Red for "Color"
  },
  matchingText: {
    color: 'blue', // Blue for "Matching"
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column', // Stack buttons vertically
    gap: '20px', // Space between buttons
  },
  button: {
    width: '200px', // Set width for buttons
    padding: '15px', // Padding inside buttons
    borderRadius: '10px', // Rounded corners
    border: '2px solid black', // Border around buttons
    fontSize: '1.5rem', // Font size for text inside buttons
    fontWeight: 'bold', // Bold text
    cursor: 'pointer', // Pointer cursor on hover
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Shadow for buttons
    textShadow: '2px 2px 2px rgba(0, 0, 0, 0.3)', // Text shadow for better visibility
  },
  difficultyButton: {
    backgroundColor: 'limegreen', // Green background for difficulty button
    color: '#000', // Black text color
  },
  playButton: {
    backgroundColor: '#f4a261', // Orange background for play button
    color: '#00BFFF', // Blue text color
  },
  howToPlayButton: {
    backgroundColor: '#f9c74f', // Yellow background for how to play button
    color: '#FFD700', // Gold text color
  },
};

const ColorMatchingUI = () => {
  return (
    <div style={styles.app}>
      {/* Title with two colors */}
      <h1 style={styles.header}>
        <span style={styles.colorText}>Color</span> <span style={styles.matchingText}>Matching</span>
      </h1>

      {/* Buttons for difficulty, play, and how to play */}
      <div style={styles.buttonContainer}>
        <button style={{ ...styles.button, ...styles.difficultyButton }}>Easy</button>
        <button style={{ ...styles.button, ...styles.playButton }}>Play</button>
        <button style={{ ...styles.button, ...styles.howToPlayButton }}>How to Play</button>
      </div>
    </div>
  );
};

export default ColorMatchingUI;
