import React from 'react';

const StudentRecord = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-yellow-300 p-4">
      <div className="bg-yellow-200 shadow-lg rounded-lg w-full max-w-md">
        {/* Header */}
        <div className="p-4 flex justify-between items-center bg-yellow-500 rounded-t-lg">
          <h1 className="text-xl font-bold text-white">Students Record</h1>
          <div className="flex space-x-2">
            <button className="text-white">...</button>
            <button className="text-white">⚙️</button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="p-4 flex items-center">
          <input
            type="text"
            placeholder="Last Name start with..."
            className="border-2 border-gray-300 p-2 rounded-md flex-grow"
          />
          <button className="ml-2 bg-blue-500 text-white p-2 rounded-md">
            🔍
          </button>
        </div>

        {/* Table */}
        <div className="p-4">
          <table className="w-full table-auto border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-400 p-2 text-left">Student ID</th>
                <th className="border border-gray-400 p-2 text-left">Full Name</th>
                <th className="border border-gray-400 p-2 text-left">Age</th>
                <th className="border border-gray-400 p-2 text-left">E-mail</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 p-2">22210587</td>
                <td className="border border-gray-400 p-2">Col. Manuel J.</td>
                <td className="border border-gray-400 p-2">2</td>
                <td className="border border-gray-400 p-2">Cole@gmail.com</td>
              </tr>
              <tr>
                <td className="border border-gray-400 p-2">22320200</td>
                <td className="border border-gray-400 p-2">Dacoco, Chan B.</td>
                <td className="border border-gray-400 p-2">2</td>
                <td className="border border-gray-400 p-2">Sabi@gmail.com</td>
              </tr>
              <tr>
                <td className="border border-gray-400 p-2">22210587</td>
                <td className="border border-gray-400 p-2">Sabi, Amir Alden F.</td>
                <td className="border border-gray-400 p-2">3</td>
                <td className="border border-gray-400 p-2">Cban@gmail.com</td>
              </tr>
              <tr>
                <td className="border border-gray-400 p-2">22320200</td>
                <td className="border border-gray-400 p-2">Labajo, Louie Jay S.</td>
                <td className="border border-gray-400 p-2">4</td>
                <td className="border border-gray-400 p-2">Jla@gmail.com</td>
              </tr>
              <tr>
                <td className="border border-gray-400 p-2">22210587</td>
                <td className="border border-gray-400 p-2">De Castilla, Justin</td>
                <td className="border border-gray-400 p-2">4</td>
                <td className="border border-gray-400 p-2">Wisi@gmail.com</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between p-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded-md">Add</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md">Remove</button>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <StudentRecord />
    </div>
  );
}

export default App;
