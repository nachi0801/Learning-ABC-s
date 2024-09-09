import React from 'react';
import Image from 'next/image'; // Import Image component from Next.js

const styles = {
  app: {
    backgroundColor: '#f9c74f', // Yellow background color
    minHeight: '100vh', // Full viewport height
    display: 'flex', // Use flexbox
    flexDirection: 'column', // Vertical alignment
    justifyContent: 'center', // Center items vertically
    alignItems: 'center', // Center items horizontally
    padding: '20px', // Padding around the content
    textAlign: 'center', // Center align text
  },
  logoContainer: {
    marginBottom: '20px', // Space between logo and the rest of the content
  },
  lessonContainer: {
    backgroundColor: '#FFFFFF', // White background for the lesson box
    borderRadius: '20px', // Rounded corners
    padding: '20px', // Padding inside the box
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow
    display: 'flex', // Flexbox for layout
    flexDirection: 'column', // Stack items vertically
    alignItems: 'center', // Center items horizontally
    width: '300px', // Width of the lesson container
  },
  lessonImage: {
    marginBottom: '10px', // Space between image and the lesson text
  },
  lessonText: {
    fontSize: '1.5rem', // Font size for "Lesson" text
    fontWeight: 'bold', // Bold text
    color: '#333', // Dark text color
    marginBottom: '20px', // Space between the text and the button
  },
  button: {
    backgroundColor: '#FF8C00', // Orange button background
    color: '#FFF', // White text
    border: 'none', // Remove border
    padding: '10px 20px', // Padding for the button
    borderRadius: '10px', // Rounded corners for the button
    fontSize: '1.2rem', // Larger font size
  },
};

const LessonPage = () => {
  return (
    <div style={styles.app}>
      {/* Logo at the top */}
      <div style={styles.logoContainer}>
        <Image 
          src="/logo.png" // Path to the logo image
          alt="ABC Logo"
          width={100}
          height={100}
        />
      </div>

      {/* Lesson content */}
      <div style={styles.lessonContainer}>
        <Image 
          src="/lesson-image.png" // Path to the lesson image
          alt="Lesson"
          width={150}
          height={150}
          style={styles.lessonImage}
        />
        <div style={styles.lessonText}>Lesson</div>
        <button style={styles.button}>Select</button>
      </div>
    </div>
  );
};

export default LessonPage;
