// src/app/courses/page.jsx

import React from 'react';
import Image from 'next/image'; // Import Image component for logo


const styles = {
  app: {
    backgroundColor: '#f9c74f',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    textAlign: 'center',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '30px',
  },
  logoContainer: {
    marginRight: '10px', // Adjust space between logo and "Courses" text
  },
  headerText: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  lessonContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    alignItems: 'center', // Center the lesson items horizontally
  },
  lessonItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: '20px',
    padding: '20px',
    width: '250px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s',
    textAlign: 'center',
  },
  lessonItemHover: {
    transform: 'scale(1.05)',
  },
  icon: {
    height: '100px',
    width: '100px',
    margin: '0 auto 10px', // Center the icon and add some space below it
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  colorGuessIcon: {
    backgroundImage: 'url("/path-to-color-guess-icon.png")', // Replace with your icon path
  },
  countingNumbersIcon: {
    backgroundImage: 'url("/path-to-counting-numbers-icon.png")', // Replace with your icon path
  },
  learningABCIcon: {
    backgroundImage: 'url("/path-to-learning-abc-icon.png")', // Replace with your icon path
  },
};

const CoursesPage = () => {
  return (
    <div style={styles.app}>
      {/* Header with Logo and Text */}
      <div style={styles.header}>
        <div style={styles.logoContainer}>
          <Image
            src="/logo.png" // Ensure this path is correct
            alt="Logo"
            width={100} // Adjust size of the logo
            height={100}
          />
        </div>
        <h1 style={styles.headerText}>Courses</h1>
      </div>

      {/* Lessons Section */}
      <div style={styles.lessonContainer}>
        <div style={styles.lessonItem}>
          <div style={{ ...styles.icon, ...styles.colorGuessIcon }}></div>
          <h2>Color Guess</h2>
        </div>
        <div style={styles.lessonItem}>
          <div style={{ ...styles.icon, ...styles.countingNumbersIcon }}></div>
          <h2>Counting Numbers</h2>
        </div>
        <div style={styles.lessonItem}>
          <div style={{ ...styles.icon, ...styles.learningABCIcon }}></div>
          <h2>Learning ABC</h2>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
