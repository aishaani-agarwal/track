// components/AlertMessage.js
import React from 'react';

const AlertMessage = ({ message }) => {
  return (
    <div className="alert">
      {message}
      <style jsx>{`
        .alert {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          padding: 20px;
          background-color: #ffdddd;
          color: #900;
          border: 1px solid #900;
          border-radius: 5px;
          font-family: 'Times New Roman', Times, serif;
          font-size: 1.5rem;
          z-index: 1000; /* Ensure it's on top of other elements */
        }
      `}</style>
    </div>
  );
};

export default AlertMessage;
