// components/Rules.js
import { useState } from 'react';

const RulesButton = () => {
  const [showrules, setShowRules] = useState(false);

  const rules = [
    'Everytime you resist eating something unhealthy, press the button',
    'Everytime you eat something unhealthy, write what you wrote and how much',
    'It will then calculate and tell you how many steps closer you are to your goal',
    'If you exercise that day, click the I exercised button',
    'REMEMBER: DONT CHEAT YOURSELF, YOU GOT THIS!'
    
  ];

  return (
    <div style={{ position: 'fixed', right: '20px', top: '72px' }}>
      <button 
        onClick={() => setShowRules(!showrules)} 
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
        Rules
      </button>
      {showrules && (
        <div style={{
          marginTop: "10px",
          padding: "10px",
          backgroundColor: "#ddd6fe",
          color: "#0c0a09",
          borderRadius: "5px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
        }}>
          <ul>
            {rules.map((rules, index) => (
              <li key={index}>{rules}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RulesButton;
