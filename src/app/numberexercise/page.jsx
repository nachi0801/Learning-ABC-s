import React from 'react';
import Image from 'next/image';

const App = () => {
  return (
    <div className="bg-gradient-to-b from-orange-500 to-orange-200 min-h-screen flex items-center justify-center">
      <div className="w-80 text-center">
        {/* Logo */}
        <div className="flex justify-center items-center mb-8">
          <Image
            src="/logo.png" // Path to your logo file in the public directory
            alt="ABC Logo"
            width={150} // Adjust width
            height={150} // Adjust height
            className="rounded-full object-contain shadow-lg"
          />
        </div>
        {/* Buttons */}
        <div className="space-y-4">
          <button className="bg-purple-600 text-white py-3 px-6 rounded-full w-full shadow-lg">
            Number Exercise #1
          </button>
          <button className="bg-yellow-400 text-gray-700 py-3 px-6 rounded-full w-full shadow-lg">
            Number Exercise #2
          </button>
          <button className="bg-yellow-400 text-gray-700 py-3 px-6 rounded-full w-full shadow-lg">
            Number Exercise #3
          </button>
          <button className="bg-yellow-400 text-gray-700 py-3 px-6 rounded-full w-full shadow-lg">
            Number Exercise #4
          </button>
          <button className="bg-yellow-400 text-gray-700 py-3 px-6 rounded-full w-full shadow-lg">
            Number Exercise #5
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
