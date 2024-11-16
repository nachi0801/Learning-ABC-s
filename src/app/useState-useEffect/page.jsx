// src/app/useState-useEffect/page.jsx
"use client"; // Add this line at the very top

import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center text-black"> {/* Add text-black here */}
        <h1 className="text-2xl font-bold mb-4">Simple Counter</h1>
        <p className="text-xl mb-4">Current Count: {count}</p>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default App;
