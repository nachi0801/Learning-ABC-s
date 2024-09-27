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
  header: {
    fontSize: '2rem', // Font size for header text
    fontWeight: 'bold', // Bold text
    color: '#fff', // White text color
    marginBottom: '20px', // Margin below header
  },
  lessonContainer: {
    display: 'flex',
    flexDirection: 'column', // Stack lessons vertically
    gap: '20px', // Space between lesson cards
  },
  lessonCard: {
    backgroundColor: '#FFFFFF', // White background for each lesson card
    borderRadius: '20px', // Rounded corners
    padding: '20px', // Padding inside the card
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow
    display: 'flex', // Flexbox for layout
    flexDirection: 'column', // Stack items vertically
    alignItems: 'center', // Center items horizontally
    width: '250px', // Width of each lesson card
  },
  lessonImage: {
    marginBottom: '10px', // Space between image and the lesson text
  },
  lessonText: {
    fontSize: '1.5rem', // Font size for "Lesson" text
    fontWeight: 'bold', // Bold text
    color: '#333', // Dark text color
  },
};

const LessonPage = () => {
  return (
    <div style={styles.app}>
      {/* Page Header */}
      <h1 style={styles.header}>Select Lesson</h1>

      {/* Lesson content container */}
      <div style={styles.lessonContainer}>
        {/* First Lesson */}
        <div style={styles.lessonCard}>
          <Image
            src="/lesson-image1.png" // Path to the first lesson image
            alt="Lesson 1"
            width={100}
            height={100}
            style={styles.lessonImage}
          />
          <div style={styles.lessonText}>Lesson 1</div>
        </div>

        {/* Second Lesson */}
        <div style={styles.lessonCard}>
          <Image
            src="/lesson-image2.png" // Path to the second lesson image
            alt="Lesson 2"
            width={100}
            height={100}
            style={styles.lessonImage}
          />
          <div style={styles.lessonText}>Lesson 2</div>
        </div>

        {/* Third Lesson */}
        <div style={styles.lessonCard}>
          <Image
            src="/lesson-image3.png" // Path to the third lesson image
            alt="Lesson 3"
            width={100}
            height={100}
            style={styles.lessonImage}
          />
          <div style={styles.lessonText}>Lesson 3</div>
        </div>
      </div>
    </div>
  );
};

export default LessonPage;
