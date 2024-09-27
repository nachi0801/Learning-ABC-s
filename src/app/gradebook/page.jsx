import React from 'react';

const GradeBook = () => {
  const students = [
    { name: 'Sali, Miko', grade: 'View Grade' },
    { name: 'Cole, Manuel', grade: 'View Grade' },
    { name: 'Dacoco, Chan', grade: 'View Grade' },
    { name: 'Labajo, Louie', grade: 'View Grade' },
    { name: 'Castilla, Justin', grade: 'View Grade' },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-yellow-500">
      <div className="w-full max-w-4xl bg-orange-400 rounded-xl p-8">
        <h1 className="text-4xl text-white font-bold text-center mb-10">Grade Book</h1>
        <div className="overflow-x-auto">
          <table className="w-full bg-orange-300 rounded-lg text-left">
            <thead>
              <tr className="border-b-2 border-white">
                <th className="text-left p-4 text-white">Name</th>
                <th className="text-left p-4 text-white">Grade</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index} className="border-b border-white">
                  <td className="p-4 text-white">{student.name}</td>
                  <td className="p-4 text-right">
                    <a href="#" className="text-white underline">{student.grade}</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div>
      <GradeBook />
    </div>
  );
}

export default App;
