import React from 'react';
import { FaSpinner } from 'react-icons/fa'; // Import the FaSpinner icon

const LoadingAnimation = ({ loading, text = '' }) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen space-y-4">
      {loading ? (
        <div className="flex justify-center items-center">
          {/* Rotating spinner */}
          <FaSpinner className="text-white text-4xl animate-spin" />
        </div>
      ) : (
        <span className="text-white">{text}</span>
      )}
    </div>
  );
};

export default LoadingAnimation;
