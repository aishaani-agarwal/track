// components/NameOverlay.js
import { useState } from 'react';

const overlayStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(24, 24, 27)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const containerStyles = {
  padding: '40px',
  borderRadius: '20px',
  textAlign: 'center',
};

const formStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const inputStyles = {
  marginBottom: '20px',
  padding: '15px',
  width: '200px',
  fontSize: '1.2em',
  background: '#bbf7d0',
  border: 'none',
  borderRadius: '5px',
};

const buttonStyles = {
  padding: '15px 30px',
  fontSize: '1.2em',
  background: '#ddd6fe',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const NameOverlay = ({ setName }) => {
  const [nameInput, setNameInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameInput.trim()) {
      setName(nameInput);
    }
  };

  return (
    <div style={overlayStyles}>
      <div style={containerStyles}>
        <h2 style={{ color: 'white', fontSize: '2em' }}>What is your name?</h2>
        <form onSubmit={handleSubmit} style={formStyles}>
          <input
            type="text"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            placeholder="Enter your name"
            style={inputStyles}
          />
          <button type="submit" style={buttonStyles}>GO!</button>
        </form>
      </div>
    </div>
  );
};

export default NameOverlay;
