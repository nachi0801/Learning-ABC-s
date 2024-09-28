import React from 'react';

const UpdateSystem = () => {
  const appList = [
    { id: 1, title: "ABC Learning" },
    { id: 2, title: "Count & Play" },
    { id: 3, title: "Color Guess" },
  ];

  return (
    <div className="min-h-screen bg-yellow-400 flex flex-col"> {/* Yellow background */}
      {/* Navbar */}
      <nav className="bg-yellow-500 shadow-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Hamburger Icon */}
          <div className="text-3xl text-white cursor-pointer">☰</div>
          
          <h1 className="text-3xl font-bold text-white">Update System</h1>

          <div className="flex space-x-6">
            <button className="text-white text-xl">⚙️</button>
            <button className="text-white text-xl">💬</button>
          </div>
        </div>
      </nav>

      {/* Content Section */}
      <div className="container mx-auto mt-10">
        <div className="bg-white rounded-xl shadow-md p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Available Applications for Update</h2>

          {/* Application List */}
          {appList.map((app) => (
            <div
              key={app.id}
              className="flex items-center justify-between bg-gray-50 p-4 mb-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              {/* App Title */}
              <h3 className="text-lg font-semibold text-gray-700">{app.title}</h3>

              {/* Update Button */}
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Update
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpdateSystem;
