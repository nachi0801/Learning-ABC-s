// src/app/teacher/page.jsx
'use client'; // Ensure this component is client-side

import React from 'react';
import Image from 'next/image'; // Import Image component for logo

// Inline styles for simplicity
const styles = {
    app: {
        backgroundColor: '#FEFCE8', // Light yellow background
        minHeight: '100vh', // Full viewport height
        display: 'flex', // Flexbox for layout
        flexDirection: 'column', // Vertical layout for main content
        margin: 0,
        padding: 0,
        fontFamily: 'Arial, sans-serif',
    },
    appHeader: {
        backgroundColor: '#FFA500', // Orange header background
        color: 'white',
        padding: '10px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between', // Space between logo and nav items
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)', // Subtle shadow
        position: 'fixed', // Fix navbar to the top
        width: '100%',
        top: 0,
        left: 0,
        zIndex: 1000,
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '20px',
    },
    headerText: {
        fontSize: '1.8rem', // Font size for header text
        fontWeight: 'bold',
        color: '#FFFFFF', // White text color
        margin: 0,
    },
    nav: {
        listStyleType: 'none',
        padding: '0',
        margin: '0', // Remove default margin and padding
        display: 'flex', // Horizontal layout for nav
        gap: '15px',
    },
    navItem: {
        margin: '0', // No margin between nav items
    },
    navLink: {
        color: '#FFFFFF', // White color for links
        textDecoration: 'none',
        fontSize: '1rem', // Font size for links
        padding: '8px 12px', // Padding around the link text
        borderRadius: '4px', // Slightly rounded corners
        transition: 'background-color 0.3s, color 0.3s', // Smooth transition on hover
    },
    navLinkHover: {
        backgroundColor: '#FF8C00', // Darker orange for hover
        color: '#FFFFFF', // White text on hover
    },
    main: {
        marginTop: '80px', // Adjusted margin to account for fixed navbar
        padding: '20px',
        flexGrow: 1, // Allow the main section to grow and fill available space
    },
    section: {
        margin: '15px auto', // Margin around sections
        padding: '15px', // Padding inside sections
        maxWidth: '800px', // Center the content with max width
        backgroundColor: '#FFFFFF', // White background for sections
        borderRadius: '5px', // Subtle rounding of corners
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)', // Very subtle shadow
    },
    sectionTitle: {
        fontSize: '1.8rem', // Font size for section titles
        color: '#FFA500', // Orange color for section titles
        margin: '0 0 10px 0',
    },
    sectionContent: {
        fontSize: '1rem', // Font size for section content
        color: '#333333',
        lineHeight: '1.5', // Improve readability
    },
};

const TeacherPage = () => {
    return (
        <div style={styles.app}>
            {/* Navbar */}
            <header style={styles.appHeader}>
                <div style={styles.logoContainer}>
                    <Image
                        src="/logo.png" 
                        alt="Logo"
                        width={50}
                        height={50}
                    />
                    <h1 style={styles.headerText}>Teacher Dashboard</h1>
                </div>
                <nav>
                    <ul style={styles.nav}>
                        <li style={styles.navItem}>
                            <a href="#courses" style={styles.navLink}>Courses</a>
                        </li>
                        <li style={styles.navItem}>
                            <a href="#students" style={styles.navLink}>Students</a>
                        </li>
                        <li style={styles.navItem}>
                            <a href="#profile" style={styles.navLink}>Profile</a>
                        </li>
                    </ul>
                </nav>
            </header>

            {/* Main Content */}
            <main style={styles.main}>
                <section id="courses" style={styles.section}>
                    <h2 style={styles.sectionTitle}>Courses</h2>
                    <p style={styles.sectionContent}>Manage your courses here. You can add, edit, or remove courses from this section.</p>
                </section>
                <section id="students" style={styles.section}>
                    <h2 style={styles.sectionTitle}>Students</h2>
                    <p style={styles.sectionContent}>View and manage student information. Check their progress and performance.</p>
                </section>
                <section id="profile" style={styles.section}>
                    <h2 style={styles.sectionTitle}>Profile</h2>
                    <p style={styles.sectionContent}>Update your profile information. Keep your contact details and preferences up to date.</p>
                </section>
            </main>
        </div>
    );
};

export default TeacherPage;
