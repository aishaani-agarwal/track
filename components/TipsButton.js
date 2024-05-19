// components/TipsButton.js
import { useState } from 'react';

const TipsButton = () => {
  const [showTips, setShowTips] = useState(false);

  const tips = [
    'Drinks tons of water',
    'Count till 3 like its a dramatic movie',
    'Suck it up cause you need to prove people wrong',
    
  ];

  return (
    <div style={{ position: 'fixed', right: '20px', top: '20px' }}>
      <button 
        onClick={() => setShowTips(!showTips)} 
        style={{
          padding: "10px 20px",
          fontSize: "1rem",
          backgroundColor: "#bbf7d0",
          fontFamily: "Times New Roman",
          fontSize: "1.2rem",
          color: "#0c0a09",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}>
        Tips to Resist
      </button>
      {showTips && (
        <div style={{
          marginTop: "10px",
          padding: "10px",
          backgroundColor: "#ddd6fe",
          color: "#0c0a09",
          borderRadius: "5px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
        }}>
          <ul>
            {tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TipsButton;
