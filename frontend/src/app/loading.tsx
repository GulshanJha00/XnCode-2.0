import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-600">
      <div className="text-center text-white p-8 bg-black bg-opacity-50 backdrop-blur-lg rounded-lg shadow-xl space-y-6">
        {/* Loading Title */}
        <h1 className="text-4xl font-semibold animate-pulse text-yellow-300">XnCode is setting up!</h1>

        {/* Subtle Text Animation */}
        <p className="text-lg font-mono text-gray-300 animate-pulse">Please wait ....</p>

        {/* Animated Dots */}
        <div className="flex justify-center gap-1">
          <span className="dot bg-yellow-300 w-3 h-3 rounded-full animate-bounce animation-delay-200"></span>
          <span className="dot bg-yellow-300 w-3 h-3 rounded-full animate-bounce animation-delay-300"></span>
          <span className="dot bg-yellow-300 w-3 h-3 rounded-full animate-bounce animation-delay-400"></span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;