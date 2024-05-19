import Head from "next/head";
import { useState, useEffect, useCallback } from "react";
import TipsButton from "../components/TipsButton";
import Rules from "../components/Rules";

export default function Home() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState(0);
  const [count, setCount] = useState(0);
  const [finalResult, setFinalResult] = useState(0);
  const [exercisedClicked, setExercisedClicked] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const colors = ["yellow", "blue", "red", "green", "pink", "orange", "purple"];

  const handleAddItem = () => {
    if (itemName && itemQuantity > 0) {
      setItems([...items, { name: itemName, quantity: itemQuantity }]);
      setItemName("");
      setItemQuantity(0);
    }
  };

  const handleDeleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  const handleExercisedButtonClick = () => {
    if (!exercisedClicked) {
      setCount(count + 2); // Increment count by 2 when exercised button is clicked
      setExercisedClicked(true); // Update exercisedClicked state to true
      setShowConfetti(true); // Show confetti animation
      setTimeout(() => setShowConfetti(false), 5000); // Hide confetti after 5 seconds
    }
  };

  const calculateTotalQuantity = useCallback(() => {
    return items.reduce((total, item) => total + item.quantity, 0);
  }, [items]);

  useEffect(() => {
    const totalQuantity = calculateTotalQuantity();
    const result = count - totalQuantity;
    setFinalResult(result);
    if (result < 0) {
      setTimeout(() => {
        alert("You got this, oh and by the way vegetables don't count because they are good for you!");
      }, 0);
    }
  }, [count, items, calculateTotalQuantity]);


  return (
    <>
      <Head>
        <title>TrackHonest</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <style jsx global>{`
        body {
          background-color: #212121;
          color: #FFFFFF;
          margin: 0;
          font-family: 'Times New Roman', Times, serif;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }
        .container {
          max-width: 90%; /* Adjust width as per your design */
          width: 100%;
          padding: 20px;
          box-sizing: border-box;
          text-align: center;
          position: relative;
        }
        .input-container {
          display: flex;
          flex-wrap: wrap; /* Ensure items wrap on smaller screens */
          justify-content: space-around;
          align-items: center;
          margin-bottom: 10px;
        }
        .input-container input {
          flex: 1;
          padding: 10px;
          font-size: 1rem;
          border-radius: 5px;
          border: 1px solid #ccc;
          margin: 5px;
        }
        .input-container button {
          flex-basis: 100%; /* Ensure button spans full width */
          max-width: 200px; /* Adjust width as needed */
          padding: 10px 20px;
          font-size: 1rem;
          background-color: #bbf7d0;
          color: #0c0a09;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          margin: 5px;
        }
        .item-list {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .item {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        }
        .item span {
          padding-right: 10px;
        }
        .item button {
          padding: 5px 10px;
          font-size: 0.8rem;
          margin-left: 10px;
          background-color: #ff6b6b;
          color: #FFFFFF;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .result {
          margin-top: 20px;
          font-size: 1.5rem;
          font-family: 'Times New Roman', Times, serif;
        }
        .resist-container {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 10px 0;
        }
        .resist-container button {
          padding: 10px 20px;
          font-size: 1.3rem;
          background-color: #bbf7d0;
          color: #0c0a09;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .resist-container p {
          font-size: 1.5rem;
          font-family: 'Times New Roman', Times, serif;
          margin-left: 10px;
        }
        .exercised-button {
          padding: 10px 20px;
          font-size: 1.2rem;
          background-color: #bbf7d0;
          position: fixed;
          bottom: 40px;
          right: 30px;
          color: #0c0a09;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .exercised-button:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }
        .confetti {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1000;
        }
        @keyframes confetti-fall {
          0% {
            transform: translateY(-100vh) rotateZ(0deg);
            opacity: 10;
          }
          100% {
            transform: translateY(100vh) rotateZ(360deg);
            opacity: 10;
          }
        }
        .confetti-piece {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          animation: confetti-fall 3s linear infinite;
        }
      `}</style>
      <div className="container">
        <h1 style={{ fontSize: "3rem", fontFamily: "Times New Roman" }}>TRACK HONEST</h1>
        
        <div className="resist-container">
          <button onClick={handleButtonClick}>
            Resisted!
          </button>
          <p>{count} times</p>
        </div>

        <div className="input-container">
          <input
            type="text"
            placeholder="Item Name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Quantity"
            value={itemQuantity}
            onChange={(e) => setItemQuantity(parseInt(e.target.value))}
          />
          <button onClick={handleAddItem}>
            Add
          </button>
        </div>
        <div className="item-list">
          {items.map((item, index) => (
            <div key={index} className="item">
              <span>{item.name}</span>
              <span>{item.quantity}</span>
              <button onClick={() => handleDeleteItem(index)}>Delete</button>
            </div>
          ))}
        </div>
        <div className="result">
          <p>Final score: {finalResult}</p>
        </div>
      </div>

      {/* Confetti Animation */}
      {showConfetti && (
        <div className="confetti">
          {[...Array(100)].map((_, index) => (
            <div
              key={index}
              className="confetti-piece"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                animationDelay: `${Math.random()}s`,
              }}
            ></div>
          ))}
        </div>
      )}

      <button
        className="exercised-button"
        onClick={handleExercisedButtonClick}
        disabled={exercisedClicked}
      >
        I exercised!
      </button>

      <TipsButton />
      <Rules/>
    </>
  );
}
