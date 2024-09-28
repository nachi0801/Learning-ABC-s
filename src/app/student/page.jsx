import React from 'react';

const StudentRecord = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-yellow-300">
      {/* Navbar */}
      <nav className="w-full bg-yellow-500 shadow-lg flex justify-between items-center p-4">
        <h1 className="text-2xl text-white font-bold">Student Records</h1>
        <div className="flex space-x-4">
          <button className="text-white text-2xl">...</button>
          <button className="text-white text-2xl">⚙️</button>
        </div>
      </nav>

      {/* Content */}
      <div className="w-full max-w-4xl bg-yellow-200 shadow-lg rounded-lg mt-10 p-6">
        {/* Search Bar */}
        <div className="flex items-center mb-6">
          <input
            type="text"
            placeholder="Last Name starts with..."
            className="border-2 border-gray-300 p-2 rounded-md flex-grow"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left">Student ID</th>
                <th className="border p-2 text-left">Full Name</th>
                <th className="border p-2 text-left">Age</th>
                <th className="border p-2 text-left">E-mail</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="border p-2">22210587</td>
                <td className="border p-2">Col. Manuel J.</td>
                <td className="border p-2">2</td>
                <td className="border p-2">Cole@gmail.com</td>
              </tr>
              <tr className="border-b">
                <td className="border p-2">22320200</td>
                <td className="border p-2">Dacoco, Chan B.</td>
                <td className="border p-2">2</td>
                <td className="border p-2">Sabi@gmail.com</td>
              </tr>
              <tr className="border-b">
                <td className="border p-2">22210587</td>
                <td className="border p-2">Sabi, Amir Alden F.</td>
                <td className="border p-2">3</td>
                <td className="border p-2">Cban@gmail.com</td>
              </tr>
              <tr className="border-b">
                <td className="border p-2">22320200</td>
                <td className="border p-2">Labajo, Louie Jay S.</td>
                <td className="border p-2">4</td>
                <td className="border p-2">Jla@gmail.com</td>
              </tr>
              <tr className="border-b">
                <td className="border p-2">22210587</td>
                <td className="border p-2">De Castilla, Justin</td>
                <td className="border p-2">4</td>
                <td className="border p-2">Wisi@gmail.com</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between mt-6">
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
