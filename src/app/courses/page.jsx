import React from 'react';
import Image from 'next/image'; // Import Image component from Next.js


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
  logoContainer: {
    marginBottom: '20px',
  },
  lessonContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: '20px',
    padding: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '300px',
  },
  lessonImage: {
    marginBottom: '10px',
    width: '200px',  // Set a fixed width for the lesson image
    height: '200px', // Set a fixed height for the lesson image
    objectFit: 'cover', // Ensure the image scales properly within the container
  },
  lessonText: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#FF8C00',
    color: '#FFF',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '10px',
    fontSize: '1.2rem',
    cursor: 'pointer',
  },
};

const LessonPage = () => {
  return (
    <div style={styles.app}>
      {/* Logo at the top */}
      <div style={styles.logoContainer}>
        <img
          src="/logo.png" // Path to the logo image
          alt="ABC Logo"
          width={100}
          height={100}
        />
      </div>

      {/* Lesson content */}
      <div style={styles.lessonContainer}>
        {/* Lesson Image above the Lesson Text */}
        <img
          src="/lesson.png" // Path to the lesson image
          alt="Lesson"
          style={styles.lessonImage}
        />
        <div style={styles.lessonText}>Lesson</div>
        <button style={styles.button}>Select</button>
      </div>
    </div>
  );
};

export default LessonPage;
