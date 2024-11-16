import React from 'react';
import Image from 'next/image';

const App = () => {
  return (
    <div className="bg-gradient-to-b from-orange-500 to-orange-200 min-h-screen flex flex-col items-center">
      {/* Top Bar */}
      <div className="w-full flex justify-between items-center px-4 py-2">
        {/* Menu Icon */}
        <div className="w-6 h-6 flex flex-col justify-between">
          <div className="h-1 w-full bg-black"></div>
          <div className="h-1 w-full bg-black"></div>
          <div className="h-1 w-full bg-black"></div>
        </div>
      </div>

      {/* Logo */}
      <div className="mt-6">
        <Image
          src="/logo.png" // Replace with your logo path
          alt="ABC Logo"
          width={120}
          height={120}
          className="rounded-full object-contain shadow-lg"
        />
      </div>

      {/* Title */}
      <h1 className="mt-8 text-black text-2xl font-bold">Activate a lesson</h1>

      {/* Toggle Options */}
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between w-48">
          <span className="text-black font-medium">Colors</span>
          <button className="w-10 h-5 bg-gray-300 rounded-full flex items-center p-1">
            <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
          </button>
        </div>
        <div className="flex items-center justify-between w-48">
          <span className="text-black font-medium">Numbers</span>
          <button className="w-10 h-5 bg-gray-300 rounded-full flex items-center p-1">
            <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
          </button>
        </div>
        <div className="flex items-center justify-between w-48">
          <span className="text-black font-medium">Alphabet</span>
          <button className="w-10 h-5 bg-gray-300 rounded-full flex items-center p-1">
            <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
