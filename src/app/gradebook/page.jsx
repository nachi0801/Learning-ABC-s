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
    maxWidth: '1000px',
    backgroundColor: '#FFA500', // Orange background for the main box
    borderRadius: '20px',
    padding: '30px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Shadow for depth
  },
  table: {
    width: '100%',
    backgroundColor: '#FFB347',
    borderRadius: '10px',
    overflowX: 'auto',
  },
  tableHead: {
    backgroundColor: '#FF8C00',
    color: '#FFF',
    padding: '15px',
  },
  tableCell: {
    padding: '15px',
    color: '#FFF',
  },
  tableRow: {
    borderBottom: '2px solid white',
  },
  gradeLink: {
    color: '#FFF',
    textDecoration: 'underline',
  },
};

const GradeBook = () => {
  const students = [
    { name: 'Sali, Miko', grade: 'View Grade' },
    { name: 'Cole, Manuel', grade: 'View Grade' },
    { name: 'Dacoco, Chan', grade: 'View Grade' },
    { name: 'Labajo, Louie', grade: 'View Grade' },
    { name: 'Castilla, Justin', grade: 'View Grade' },
  ];

  return (
    <div>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.navbarTitle}>Grade Book</div>
        <div>
          <span style={styles.icon}>⚙️</span>
        </div>
      </nav>

      {/* Main Content */}
      <div style={styles.container}>
        <div style={styles.content}>
          {/* Table */}
          <div style={styles.table}>
            <table className="w-full bg-orange-300 rounded-lg text-left">
              <thead>
                <tr style={styles.tableRow}>
                  <th style={styles.tableHead}>Name</th>
                  <th style={styles.tableHead}>Grade</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={index} style={styles.tableRow}>
                    <td style={styles.tableCell}>{student.name}</td>
                    <td style={styles.tableCell} className="text-right">
                      <a href="#" style={styles.gradeLink}>
                        {student.grade}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradeBook;
