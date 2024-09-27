'use client';

import React from 'react';
import { useRouter } from 'next/navigation'; // For routing
import Image from 'next/image'; // For importing images

const LearnAlphabet = () => {
  const router = useRouter(); // Initialize router for navigation

  const handleLogin = () => {
    router.push('/login'); // Redirect to the login page
  };

  const handleSignup = () => {
    router.push('/signup'); // Redirect to the signup page
  };

  return (
    <div className="bg-yellow-100 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/logo.png" // Make sure the path to the logo is correct
            alt="Learning ABC Logo"
            width={150} // Adjust size as needed
            height={150} // Adjust size as needed
            className="object-contain" // Keep the logo aspect ratio
          />
        </div>
        <h1 className="text-2xl font-bold mb-6 text-orange-600 text-center">Let's Learn Alphabet</h1>

        <div className="space-y-4">
          <button
            onClick={handleLogin}
            className="w-full bg-orange-500 text-white font-bold py-2 px-4 rounded-md shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            Login
          </button>
          <button
            onClick={handleSignup}
            className="w-full bg-gray-300 text-gray-800 py-2 px-4 rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearnAlphabet;
