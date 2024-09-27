// src/app/exercise/page.jsx
import React from 'react';

const Exercise = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-yellow-500">
      <div className="w-full max-w-[500px] bg-orange-400 rounded-2xl p-8 shadow-lg"> {/* Adjusted dimensions and added shadow */}
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-3xl text-white">☰</div>
          <h1 className="text-3xl text-white font-bold">Exercise</h1>
          <div className="flex space-x-2">
            <div className="text-2xl text-white">💬</div>
            <div className="text-2xl text-white">⚙️</div>
          </div>
        </div>

        {/* Input Box */}
        <div className="bg-orange-300 rounded-lg p-6 relative mb-6 shadow-md"> {/* Added shadow for depth */}
          <textarea
            className="w-full h-40 bg-transparent border-none text-white placeholder-white focus:outline-none resize-none"
            placeholder="Add your Question..."
          />
          <div className="absolute top-4 right-4 text-white text-2xl cursor-pointer">➕</div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button className="bg-white text-orange-400 px-4 py-3 rounded hover:bg-gray-100 w-full mr-2">
            Set Date
          </button>
          <button className="bg-blue-500 text-white px-4 py-3 rounded hover:bg-blue-600 w-full">
            Post
          </button>
        </div>

      </div>
    </div>
  );
};

export default Exercise;
