/* eslint-disable react/no-unescaped-entities */



import Head from "next/head";
import { useState, useEffect } from "react";
import TipsButton from "../components/TipsButton";
import Rules from "../components/Rules";
import NameOverlay from "../components/NameOverlay";
import Image from "next/image";

export default function Home() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState(0);
  const [count, setCount] = useState(0);
  const [finalResult, setFinalResult] = useState(0);
  const [exercisedClicked, setExercisedClicked] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const [waterCups, setWaterCups] = useState(0);
  const [name, setName] = useState("");

  const colors = ["yellow", "blue", "red", "green", "pink", "orange", "purple"];

  const isSameDay = (dateString) => {
    const storedDate = new Date(dateString);
    const now = new Date();
    return (
      storedDate.getDate() === now.getDate() &&
      storedDate.getMonth() === now.getMonth() &&
      storedDate.getFullYear() === now.getFullYear()
    );
  };

  // Function to load data from local storage
  const loadDataFromLocalStorage = () => {
    const storedData = localStorage.getItem("trackHonestData");
    const storedDate = localStorage.getItem("trackHonestDate");

    if (storedData && storedDate && isSameDay(storedDate)) {
      const data = JSON.parse(storedData);
      setItems(data.items);
      setCount(data.count);
      setExercisedClicked(data.exercisedClicked);
    } else {
      // Clear local storage if it's a new day
      localStorage.removeItem("trackHonestData");
      localStorage.removeItem("trackHonestDate");
    }
  };

  const pageContentStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  };

  const nameDisplayStyles = {
    position: "fixed",
    bottom: "10px",
    left: "10px",
    background: "transparent",
    fontSize: "1.4rem",
    padding: "5px 10px",
    borderRadius: "5px",
  };

  // Function to save data to local storage
  const saveDataToLocalStorage = (items, count, exercisedClicked) => {
    const data = { items, count, exercisedClicked };
    localStorage.setItem("trackHonestData", JSON.stringify(data));
    localStorage.setItem("trackHonestDate", new Date().toISOString());
  };

  // useEffect(() => {
  //   loadDataFromLocalStorage();
  // }, []);

  useEffect(() => {
    saveDataToLocalStorage(items, count, exercisedClicked);
  }, [items, count, exercisedClicked]);

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    }
  }, []);

  useEffect(() => {
    if (name) {
      localStorage.setItem("name", name);
    }
  }, [name]);

  const startCountdown = () => {
    let currentCount = 10;
    const interval = setInterval(() => {
      currentCount--;
      if (currentCount >= 0) {
        setCountdown(currentCount);
      } else {
        clearInterval(interval);
        setCountdown(10); // Reset countdown after finishing
      }
    }, 1000);
  };


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
      setCount(count + 2);
      setExercisedClicked(true);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
    }
  };

  const handleReset = () => {
    setItems([]);
    setItemName("");
    setItemQuantity(0);
    setCount(0);
    setFinalResult(0);
    setExercisedClicked(false);
    setShowConfetti(false);
    setWaterCups(0);
    localStorage.removeItem("trackHonestData");
    localStorage.removeItem("trackHonestDate");
  };

  useEffect(() => {
    const totalQuantity = items.reduce(
      (total, item) => total + item.quantity,
      0
    );
    const result = count - totalQuantity;
    setFinalResult(result);
    
  }, [count, items]);

  useEffect(() => {
    if (waterCups === 8) {
      setCount(count + 1);
      setWaterCups(0);
    }
  }, [waterCups, count]);

  const phrases = [
    "You got this!",
    "Don't give up!",
    "Get over it!",
    "Walk away now!",
    "Stop making excuses!",
    "Get back to work!",
    "Failure is not an option!",
    "You're better than this!",
    "No pain, no gain!",
    "Toughen up!",
    "Keep going, no matter what!",
    "Push through the pain!",

  ];

  const handleUghhhButtonClick = () => {
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    const utterance = new SpeechSynthesisUtterance(randomPhrase);

    // Find a suitable voice (adjust to your preference)
    utterance.voice = window.speechSynthesis.getVoices().find(voice => voice.name === 'Google US English Male'); // Adjust voice as needed

    // Adjust parameters for assertive and scolding tone
    utterance.pitch = 0.4; // Higher pitch for urgency
    utterance.rate = 1.3; // Faster rate for assertiveness
    utterance.volume = 1.0; // Full volume for emphasis

    window.speechSynthesis.speak(utterance);
};





  return (
    <>
      <Head>
        <title>TrackHonest</title>
        <meta name="viewport" content="width=device-width, initial-scale=2.0" />
      </Head>
      <div>
        {!name && <NameOverlay setName={setName} />}
        {name && (
          <div style={pageContentStyles}>
            <p style={nameDisplayStyles}>Hello, {name}!</p>

            <style jsx global>{`
              body {
                background-color: #212121;
                color: #ffffff;
                margin: 0;
                font-family: "Times New Roman", Times, serif;
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
              }
              .container {
                max-width: 90%;
                width: 100%;
                padding: 20px;
                box-sizing: border-box;
                text-align: center;
                position: relative;
              }
              .input-container {
                display: flex;
                flex-wrap: wrap;
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
                flex-basis: 100%;
                max-width: 200px;
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
                color: #ffffff;
                border: none;
                border-radius: 5px;
                cursor: pointer;
              }
              .result {
                margin-top: 20px;
                font-size: 1.5rem;
                font-family: "Times New Roman", Times, serif;
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
                font-family: "Times New Roman", Times, serif;
                margin-left: 10px;
              }
              .exercised-button-container {
                position: fixed;
                bottom: 40px;
                right: 30px;
                display: flex;
                flex-direction: row;
                align-items: center;
              }
              .exercised-button {
                padding: 10px 20px;
                font-size: 1.2rem;
                background-color: #bbf7d0;
                color: #0c0a09;
                border: none;
                border-radius: 5px;
                cursor: pointer;
              }
              .exercised-button:disabled {
                background-color: #ccc;
                cursor: not-allowed;
              }

              .reset-button {
                margin-left: 10px;
                padding: 10px 20px;
                font-size: 1.2rem;
                background-color: #ff6b6b;
                color: #ffffff;
                border: none;
                border-radius: 5px;
                cursor: pointer;
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
              .countdown-container {
                margin-top: 20px;
                display: flex;
                flex-direction: column;
                align-items: center;
              }
              .countdown-container button {
                padding: 10px 20px;
                font-size: 1.2rem;
                background-color: #bbf7d0;
                color: #0c0a09;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                margin-top: 10px;
              }
              .countdown-container p {
                font-size: 2rem;
                font-weight: bold;
                margin-top: 10px;
              }
              .water-container {
                margin-top: 20px;
                display: flex;
                flex-direction: column;
                align-items: center;
              }
              .water-container button {
                padding: 10px 20px;
                font-size: 1.2rem;
                background-color: #bbf7d0;
                color: #0c0a09;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                margin-top: 10px;
              }
              .water-container p {
                font-size: 1.5rem;
                font-family: "Times New Roman", Times, serif;
                margin-top: 10px;
              }
              .name-display {
                position: fixed;
                bottom: 10px;
                left: 10px;
                font-size: 1.4rem;
                font-family: ""Liberation Mono", monospace;
                background-color: transparent; /* Set background to transparent */
                color: white; /* Set text color to white */
              }
            `}</style>
            
              <h1
                style={{
                  fontSize: "3rem",
                  fontFamily: "Times New Roman",
                  position: "absolute",
                  top: 3,
                  left: 24,
                }}
              >
                TRACK HONEST
              </h1>

              <div className="container">

              <div className="resist-container">
                <button onClick={handleButtonClick}>Resisted!</button>
                <p>{count} times</p>
              </div>

              <div className="input-container">
                <input
                  type="text"
                  placeholder="What did you eat?"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Quantity"
                  value={itemQuantity}
                  onChange={(e) => setItemQuantity(parseInt(e.target.value))}
                />
                <button onClick={handleAddItem}>Add</button>
              </div>
              <div className="item-list">
                {items.map((item, index) => (
                  <div key={index} className="item">
                    <span>{item.name}: </span>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleDeleteItem(index)}>
                      Delete
                    </button>
                  </div>
                ))}
              </div>
              <div className="result">
                <p>Steps Closer: {finalResult}</p>
              </div>

              {/* Water Intake Section */}
              <div className="water-container">
                <button onClick={() => setWaterCups(waterCups + 1)}>
                  Drank Water
                </button>
                <p>
                  {waterCups} {waterCups <= 1 ? "cup" : "cups"}{" "}
                </p>
              </div>

              {/* Countdown Timer Section */}
              <div className="countdown-container">
                <button onClick={startCountdown}>Play Breathe & Resist</button>
                {countdown > 0 && <p>{countdown}</p>}
                {countdown === 0 && <p>Time's up!</p>}
              </div>

              {/* UGHHH Button Section */}
              <div className="resist-container">
                <button onClick={handleUghhhButtonClick}>UGHHHHHH</button>
              </div>
            </div>

            {showConfetti && (
              <div className="confetti">
                {[...Array(100)].map((_, index) => (
                  <div
                    key={index}
                    className="confetti-piece"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      backgroundColor:
                        colors[Math.floor(Math.random() * colors.length)],
                      animationDelay: `${Math.random()}s`,
                    }}
                  ></div>
                ))}
              </div>
            )}

            <div className="exercised-button-container">
              <button
                className="exercised-button"
                onClick={handleExercisedButtonClick}
                disabled={exercisedClicked}
              >
                I exercised!
              </button>

              <button className="reset-button" onClick={handleReset}>
                Reset
              </button>
            </div>

            <TipsButton />
            <Rules />
          </div>
        )}
      </div>
    </>
  );
}





