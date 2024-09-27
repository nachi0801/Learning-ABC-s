import React from 'react';

const UpdateSystem = () => {
  const appList = [
    { id: 1, title: "ABC Learning" },
    { id: 2, title: "Count & Play" },
    { id: 3, title: "Color Guess" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-400">
      <div className="w-80 bg-yellow-200 p-6 rounded-2xl shadow-lg">
        {/* Menu Icon */}
        <div className="absolute top-5 left-5">
          <div className="flex flex-col gap-1">
            <div className="w-6 h-1 bg-black"></div>
            <div className="w-6 h-1 bg-black"></div>
            <div className="w-6 h-1 bg-black"></div>
          </div>
        </div>

        {/* Header */}
        <h1 className="text-2xl text-center font-bold text-black mb-6">Update System</h1>

        {/* Application List */}
        {appList.map((app) => (
          <div
            key={app.id}
            className="flex items-center justify-between bg-yellow-100 p-3 mb-3 rounded-lg shadow-md"
          >
            {/* App Title */}
            <div className="ml-4 flex-grow">
              <h2 className="font-bold text-md text-black">{app.title}</h2>
            </div>

            {/* Update Button */}
            <button className="bg-orange-600 text-white px-3 py-1 rounded-md hover:bg-orange-700">
              Update
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpdateSystem;
