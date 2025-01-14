import React from 'react';
import Link from 'next/link';
const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 to-black">
      <div className="text-center text-white p-12 bg-black bg-opacity-60 backdrop-blur-lg rounded-lg shadow-lg space-y-6">
        {/* Page Not Found Title */}
        <h1 className="text-5xl font-bold animate-pulse text-yellow-400">Oops! 404</h1>
        
        {/* Sub Text */}
        <p className="text-lg font-mono text-gray-300 animate-pulse">The page you&apos;re looking for is not here.</p>
        
        {/* Icon and Message */}
        <div className="flex justify-center items-center space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 text-yellow-400 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 17l-5 5m0 0l-5-5m5 5V3"
            />
          </svg>
        </div>

        {/* Button to Go Back */}
        <Link href={"/"}>
        <button className="mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold text-lg rounded-lg hover:bg-yellow-500 transition duration-300">
          Go Back
        </button>
        </Link>
       
      </div>
    </div>
  );
};

export default PageNotFound;
