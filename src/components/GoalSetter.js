// // import { useState, useEffect } from 'react';
// // import Confetti from 'react-confetti';
// // import { useWindowSize } from 'react-use';

// // const overlayStyles = {
// //   position: 'fixed',
// //   top: 0,
// //   right: 0,
// //   width: '100%',
// //   height: '100%',
// //   background: 'rgba(24, 24, 27, 0.95)',
// //   display: 'flex',
// //   justifyContent: 'center',
// //   alignItems: 'center',
// //   zIndex: 999,
// //   flexDirection: 'column',
// // };

// // const containerStyles = {
// //   padding: '30px',
// //   borderRadius: '20px',
// //   textAlign: 'center',
// //   background: 'transparent',
// //   color: '#facc15',
// // };

// // const formStyles = {
// //   display: 'flex',
// //   flexDirection: 'column',
// //   alignItems: 'center',
// // };

// // const inputStyles = {
// //   marginBottom: '20px',
// //   padding: '15px',
// //   width: '200px',
// //   fontSize: '1.2em',
// //   background: '#bbf7d0',
// //   border: 'none',
// //   borderRadius: '5px',
// // };

// // const buttonStyles = {
// //   padding: '15px 30px',
// //   fontSize: '1.2em',
// //   background: '#ddd6fe',
// //   border: 'none',
// //   borderRadius: '5px',
// //   cursor: 'pointer',
// // };

// // const displayContainer = {
// //   textAlign: 'center',
// //   marginTop: '30px',
// //   color: '#ff7fa6',
// // };

// // const goalNumberStyles = {
// //   fontSize: '3rem',
// //   margin: '10px 0',
// // };

// // const stepsCloserStyles = {
// //   fontSize: '2rem',
// //   color: '#f9e79f',
// // };

// // // const GoalSetter = ({ setGoal, goal, count, updateGoal }) => {
// // //   const [goalInput, setGoalInput] = useState('');
// // //   const { width, height } = useWindowSize(); // Get screen size for confetti
  

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     const num = parseInt(goalInput);
// // //     if (!isNaN(num)) {
// // //       updateGoal(num);
// // //     }
// // //   };

  

  
// // //   const showConfetti = goal !== null && count === goal;


// // //   if (goal === null) {
// // //     return (
// // //       <div style={overlayStyles}>
// // //         <div style={containerStyles}>
// // //           <h2 style={{ fontSize: '2em', color: 'white' }}>
// // //             How many steps closer do you want to be to your goal today?
// // //           </h2>
// // //           <form onSubmit={handleSubmit} style={formStyles}>
// // //             <input
// // //               type="number"
// // //               value={goalInput}
// // //               onChange={(e) => setGoalInput(e.target.value)}
// // //               placeholder="Enter a number"
// // //               style={inputStyles}
// // //             />
// // //             <button type="submit" style={buttonStyles}>SET GOAL</button>
// // //           </form>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div style={displayContainer}>
// // //       {showConfetti && <Confetti width={width} height={height} />}
// // //       <h1 style={{ fontSize: '2.5rem' }}>GOAL FOR TODAY!</h1>
// // //       <div style={goalNumberStyles}>{goal}</div>
// // //       <div style={stepsCloserStyles}>Steps Closer: {count}</div>
// // //     </div>
// // //   );
// // // };

// // const GoalSetter = ({ setGoal, goal, count, updateGoal }) => {
// //   const [goalInput, setGoalInput] = useState('');
// //   const [showConfetti, setShowConfetti] = useState(false);
// //   const { width, height } = useWindowSize();

// //   // Trigger confetti when count reaches goal
// //   useEffect(() => {
// //     if (goal !== null && count === goal) {
// //       setShowConfetti(true);
// //       const timer = setTimeout(() => {
// //         setShowConfetti(false);
// //       }, 10000); // 10 seconds

// //       return () => clearTimeout(timer);
// //     }
// //   }, [count, goal]);

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     const num = parseInt(goalInput);
// //     if (!isNaN(num)) {
// //       updateGoal(num);
// //     }
// //   };

// //   if (goal === null) {
// //     return (
// //       <div style={overlayStyles}>
// //         <div style={containerStyles}>
// //           <h2 style={{ fontSize: '2em', color: 'white' }}>
// //             How many steps closer do you want to be to your goal today?
// //           </h2>
// //           <form onSubmit={handleSubmit} style={formStyles}>
// //             <input
// //               type="number"
// //               value={goalInput}
// //               onChange={(e) => setGoalInput(e.target.value)}
// //               placeholder="Enter a number"
// //               style={inputStyles}
// //             />
// //             <button type="submit" style={buttonStyles}>SET GOAL</button>
// //           </form>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div style={displayContainer}>
// //       {showConfetti && <Confetti width={width} height={height} />}
// //       <h1 style={{ fontSize: '2.5rem' }}>GOAL FOR TODAY!</h1>
// //       <div style={goalNumberStyles}>{goal}</div>
// //       <div style={stepsCloserStyles}>Steps Closer: {count}</div>
// //     </div>
// //   );
// // };

// // export default GoalSetter;


// import { useState, useEffect } from 'react';
// import Confetti from 'react-confetti';
// import { useWindowSize } from 'react-use';
// import { FaWalking } from 'react-icons/fa';

// const GoalSetter = ({ setGoal, goal, count, updateGoal }) => {
//   const [goalInput, setGoalInput] = useState('');
//   const [showConfetti, setShowConfetti] = useState(false);
//   const { width, height } = useWindowSize();


  // useEffect(() => {
  //   if (goal !== null && count === goal) {
  //     setShowConfetti(true);
  //     const timer = setTimeout(() => setShowConfetti(false), 10000);
  //     return () => clearTimeout(timer);
  //   }
  // }, [count, goal]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const num = parseInt(goalInput);
//     if (!isNaN(num)) {
//       updateGoal(num);
//     }
//   };

//   const progressPercentage = goal ? Math.min((count / goal) * 100, 100) : 0;

//   if (goal === null) {
//     return (
//       <div style={overlayStyles}>
//         <div style={containerStyles}>
//           <h2 style={{ fontSize: '2em', color: 'white' }}>
//             How many steps closer do you want to be to your goal today?
//           </h2>
//           <form onSubmit={handleSubmit} style={formStyles}>
//             <input
//               type="number"
//               value={goalInput}
//               onChange={(e) => setGoalInput(e.target.value)}
//               placeholder="Enter a number"
//               style={inputStyles}
//             />
//             <button type="submit" style={buttonStyles}>SET GOAL</button>
//           </form>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div style={progressContainer}>
//       {showConfetti && <Confetti width={width} height={height} />}
//       <div style={cardStyle}>
//         <div style={headerRow}>
//           <FaWalking style={{ color: '#a855f7', fontSize: '1.5rem' }} />
//           <span style={labelStyle}>steps closer</span>
//           <span style={goalCountStyle}>{count}/{goal}</span>
//         </div>
//         <div style={progressBarWrapper}>
//           <div style={{ ...progressBar, width: `${progressPercentage}%` }}></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Styles

// const overlayStyles = {
//   position: 'fixed',
//   top: 0,
//   right: 0,
//   width: '100%',
//   height: '100%',
//   background: 'rgba(24, 24, 27, 0.95)',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   zIndex: 999,
//   flexDirection: 'column',
// };

// const containerStyles = {
//   padding: '30px',
//   borderRadius: '20px',
//   textAlign: 'center',
//   background: 'transparent',
//   color: '#facc15',
// };

// const formStyles = {
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
// };

// const inputStyles = {
//   marginBottom: '20px',
//   padding: '15px',
//   width: '200px',
//   fontSize: '1.2em',
//   background: '#bbf7d0',
//   border: 'none',
//   borderRadius: '5px',
// };

// const buttonStyles = {
//   padding: '15px 30px',
//   fontSize: '1.2em',
//   background: '#ddd6fe',
//   border: 'none',
//   borderRadius: '5px',
//   cursor: 'pointer',
// };

// const progressContainer = {
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   padding: '20px',
//   marginTop: '30px',
// };

// const cardStyle = {
//   background: '#f9fafb',
//   borderRadius: '20px',
//   boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
//   padding: '20px 25px',
//   width: '300px',
// };

// const headerRow = {
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'space-between',
//   marginBottom: '12px',
// };

// const labelStyle = {
//   fontWeight: 500,
//   color: '#6b7280',
//   fontSize: '1.1rem',
//   marginLeft: '10px',
//   flexGrow: 1,
// };

// const goalCountStyle = {
//   fontWeight: 700,
//   color: '#9333ea',
// };

// const progressBarWrapper = {
//   height: '10px',
//   background: '#e5e7eb',
//   borderRadius: '10px',
//   overflow: 'hidden',
// };

// const progressBar = {
//   height: '100%',
//   background: 'linear-gradient(to right, #a78bfa, #38bdf8)',
// };

// export default GoalSetter;


import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { FaWalking } from 'react-icons/fa';

const GoalSetter = ({ setGoal, goal, count, updateGoal }) => {
  const [goalInput, setGoalInput] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);
  const [unhealthyCount, setUnhealthyCount] = useState(0);
  const { width, height } = useWindowSize();

  const score = count - unhealthyCount;
  const progressPercentage = goal ? Math.max(Math.min((score / goal) * 100, 100), 0) : 0;

    useEffect(() => {
    if (goal !== null && count === goal) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 10000);
      return () => clearTimeout(timer);
    }
  }, [count, goal]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const num = parseInt(goalInput);
    if (!isNaN(num)) {
      updateGoal(num);
    }
  };

  const handleUnhealthyClick = () => {
    setUnhealthyCount(prev => prev + 1);
  };

  if (goal === null) {
    return (
      <div style={overlayStyles}>
        <div style={containerStyles}>
          <h2 style={{ fontSize: '2em', color: 'white' }}>
            How many steps closer do you want to be to your goal today?
          </h2>
          <form onSubmit={handleSubmit} style={formStyles}>
            <input
              type="number"
              value={goalInput}
              onChange={(e) => setGoalInput(e.target.value)}
              placeholder="Enter a number"
              style={inputStyles}
            />
            <button type="submit" style={buttonStyles}>SET GOAL</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={progressContainer}>
      {showConfetti && <Confetti width={width} height={height} />}
      <div style={cardStyle}>
        <div style={headerRow}>
          <FaWalking style={{ color: '#a855f7', fontSize: '1.5rem' }} />
          <span style={labelStyle}>steps closer</span>
          <span style={goalCountStyle}>{score}/{goal}</span>
        </div>
        <div style={progressBarWrapper}>
          <div style={{ ...progressBar, width: `${progressPercentage}%` }}></div>
        </div>
   
      </div>
    </div>
  );
};

// Styles

const overlayStyles = {
  position: 'fixed',
  top: 0,
  right: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(24, 24, 27, 0.95)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 999,
  flexDirection: 'column',
};

const containerStyles = {
  padding: '30px',
  borderRadius: '20px',
  textAlign: 'center',
  background: 'transparent',
  color: '#facc15',
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

const progressContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  marginTop: '30px',
};

const cardStyle = {
  background: '#f9fafb',
  borderRadius: '20px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  padding: '20px 25px',
  width: '300px',
};

const headerRow = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '12px',
};

const labelStyle = {
  fontWeight: 500,
  color: '#6b7280',
  fontSize: '1.1rem',
  marginLeft: '10px',
  flexGrow: 1,
};

const goalCountStyle = {
  fontWeight: 700,
  color: '#9333ea',
};

const progressBarWrapper = {
  height: '10px',
  background: '#e5e7eb',
  borderRadius: '10px',
  overflow: 'hidden',
};

const progressBar = {
  height: '100%',
  background: 'linear-gradient(to right, #a78bfa, #38bdf8)',
};

const unhealthyButtonStyle = {
  marginTop: '15px',
  padding: '10px 20px',
  fontSize: '1em',
  background: '#fecaca',
  color: '#b91c1c',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontWeight: 600,
};

export default GoalSetter;
