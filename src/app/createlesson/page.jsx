'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // For routing if needed
import Image from 'next/image'; // For image import if needed later

const CreateLesson = () => {
  const [title, setTitle] = useState('');
  const [rules, setRules] = useState('');

  const handleImageUpload = () => {
    // Handle image upload functionality here
    console.log('Insert Image clicked');
  };

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleRulesChange = (e) => setRules(e.target.value);

  const handleCreateLesson = () => {
    // Handle lesson creation functionality here
    console.log('Lesson Created with Title:', title, 'and Rules:', rules);
  };

  return (
    <div className="bg-yellow-300 h-screen flex justify-center items-center">
      <div className="bg-yellow-200 p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-4 text-white">Create Lesson</h1>

        {/* Insert Image Button */}
        <div className="mb-6 flex justify-center">
          <button
            onClick={handleImageUpload}
            className="bg-yellow-400 text-white py-2 px-6 rounded-lg shadow hover:bg-yellow-500 transition duration-200"
          >
            Insert Image
          </button>
        </div>

        {/* Set Title Input */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Set Title"
            value={title}
            onChange={handleTitleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
          />
          <button className="ml-2 bg-orange-500 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-600 transition duration-200">
            Edit
          </button>
        </div>

        {/* Set Rules & Guidelines Input */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Set Rules & Guidelines"
            value={rules}
            onChange={handleRulesChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
          />
        </div>

        {/* Create Lesson Button */}
        <div className="flex justify-center">
          <button
            onClick={handleCreateLesson}
            className="bg-orange-500 text-white py-2 px-6 rounded-lg shadow hover:bg-orange-600 transition duration-200"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateLesson;
