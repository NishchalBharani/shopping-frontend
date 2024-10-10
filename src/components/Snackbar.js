// src/components/Snackbar.js
import React from 'react';

const Snackbar = ({ message, type, onClose }) => {
  return (
    <div
      className={`fixed bottom-4 left-4 p-4 rounded-md text-white transition-opacity duration-300 ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
      } ${message ? 'opacity-100' : 'opacity-0'}`}
    >
      {message}
      <button onClick={onClose} className="ml-4 text-white font-bold">
        &times;
      </button>
    </div>
  );
};

export default Snackbar;
