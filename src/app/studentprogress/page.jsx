import React from 'react';


const StudentProgress = () => {
  return (
    <div className="min-h-screen flex flex-col bg-orange-300">

      {/* Navbar */}
      <nav className="bg-yellow-500 p-4 flex justify-between items-center shadow-md">
        <div className="text-xl text-white font-bold">Student Progress</div>
        <div className="flex space-x-4">
          <button className="text-white">...</button>
          <button className="text-white">⚙️</button>
        </div>
      </nav>

      {/* Tabs */}
      <div className="bg-orange-400 p-4 flex justify-start space-x-6 text-white font-bold">
        <span className="cursor-pointer">Assessment</span>
        <span className="cursor-pointer">Today</span>
        <span className="cursor-pointer border-b-2 border-green-500">Weekly Progress</span>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex flex-col justify-center items-center text-white">
        <h2 className="text-2xl font-bold mb-4">Weekly Progress</h2>

        {/* Link to History */}
        <button className="mt-4 text-white underline">
          History Progress &gt;
        </button>
      </div>

    </div>
  );
};

function App() {
  return (
    <div className="App">
      <StudentProgress />
    </div>
  );
}

export default App;
