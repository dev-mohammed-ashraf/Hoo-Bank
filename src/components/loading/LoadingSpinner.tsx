import React from 'react'

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-screen space-x-2">
      <div className="w-3 h-3 bg-lightBlue rounded-full animate-bounce"></div>
      <div className="w-3 h-3 bg-lightBlue rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="w-3 h-3 bg-lightBlue rounded-full animate-bounce [animation-delay:-0.6s]"></div>
    </div>
  );
}

export default LoadingSpinner;