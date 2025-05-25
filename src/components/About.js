// // components/Rules.js
// import { useState } from 'react';

// const AboutButton = () => {
//   const [showrules, setShowRules] = useState(false);

//   const about = [
//   'About Track Honest',
//   'Welcome to Track Honest — your no-nonsense companion in the journey toward a healthier, stronger you.',
  
//   'Why We Exist',
//   'In a world full of filters, fake motivation, and fleeting trends, Track Honest is here to bring you real results through real effort.',
//   'Whether you skipped that junk food, powered through a workout, or just had a rough day and hit the “ugh” button — we help you track what matters. No guilt. No fake praise. Just tough love and true progress.',
  
//   'What You Can Do Here',
//   'Track Cravings: Log when you resist temptations or give in. Every decision counts.',
//   'Exercise Smarter: Celebrate your movement — whether it’s a quick walk or an intense workout.',
//   'Hydration Goals: Drink 8 cups and unlock progress.',
//   'Mental Breaks: Use our calm timer to pause, breathe, and reset.',
//   'Get Yelled At (Lovingly): Tap the “ugh” button for some aggressive motivation when you need a push.',
  
//   'Our Philosophy',
//   'We believe in small wins, messy progress, and showing up even when it’s hard.',
//   'Track Honest is a space where effort is respected, and honesty is everything. This isn’t about perfection. It’s about persistence.',
  
//   'Built by Real People, For Real People',
//   'We created Track Honest because we’ve been there — tired of unrealistic health goals and sugar-coated advice.',
//   'So we built a platform that’s bold, clean, and brutally supportive. Here, you’re not alone. You’re pushing forward — honestly.'
// ];

//   return (
//     <div style={{ position: 'fixed', right: '20px', top: '20px' }}>
//       <button 
//         onClick={() => setShowRules(!showrules)} 
//         style={{
//           padding: "10px 20px",
//           fontSize: "1rem",
//           backgroundColor: "#bbf7d0",
//           fontFamily: "Times New Roman",
//           fontSize: "1.2rem",
//           color: "#0c0a09",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer"
//         }}>
//         About
//       </button>
//       {showrules && (
//         <div style={{
//           marginTop: "10px",
//           padding: "10px",
//           backgroundColor: "#ddd6fe",
//           color: "#0c0a09",
//           borderRadius: "5px",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
//         }}>
//           <ul>
//             {about.map((rules, index) => (
//               <li key={index}>{rules}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AboutButton;
// components/Rules.js
import { useState } from 'react';

const AboutButton = () => {
  const [showRules, setShowRules] = useState(false);

  return (
    <div style={{ position: 'fixed', right: '20px', top: '20px' }}>
      <button
        onClick={() => setShowRules(!showRules)}
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
        ABOUT
      </button>

      {showRules && (
        <div style={{
          marginTop: "10px",
          padding: "20px",
          backgroundColor: "#ddd6fe",
          color: "#0c0a09",
          borderRadius: "5px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          maxWidth: "400px",
          fontFamily: "Georgia, serif"
        }}>
          <h2>About Track Honest</h2>
          <p>Welcome to Track Honest — your no-nonsense companion in the journey toward a healthier, stronger you.</p>
          <p>We know that choosing a salad over fries, pushing through one more rep, or resisting late-night cravings isn’t always easy. 
            That’s why Track Honest isn’t just another wellness tracker — it’s your bold, brutally honest accountability partner.</p>

          <h2>Why We Exist</h2>
          <p>In a world full of filters, fake motivation, and fleeting trends, Track Honest is here to bring you real results through real effort. 
            Whether you skipped that junk food, powered through a workout, or just had a rough day and hit the “ugh” button — we help you track what matters.</p>
          <p><strong>No guilt. No fake praise. Just tough love and true progress.</strong></p>

          <h2>What You Can Do Here</h2>
          <ul>
            <li><strong>Track Cravings:</strong> Log when you resist temptations or give in. Every decision counts.</li>
            <li><strong>Exercise Smarter:</strong> Celebrate your movement — whether it’s a quick walk or an intense workout.</li>
            <li><strong>Hydration Goals:</strong> Hit 8 cups and unlock progress.</li>
            <li><strong>Mental Breaks:</strong> Use our calm timer to pause, breathe, and reset.</li>
            <li><strong>Get Yelled At (Lovingly):</strong> Tap that “ugh” button for some aggressive motivation when you need a push.</li>
          </ul>

          <h2>Our Philosophy</h2>
          <p>We believe in small wins, messy progress, and showing up even when it is hard. Track Honest is a space where effort is respected, and honesty is everything.</p>
          <p>This isn’t about perfection. It’s about persistence.</p>

          <h2>Built by Real People, For Real People</h2>
          <p>We created Track Honest because we’ve been there — tired of unrealistic health goals and sugar-coated advice. So we built a platform that’s bold, clean, and brutally supportive. Here, you’re not alone. You’re pushing forward — honestly.</p>
        </div>
      )}
    </div>
  );
};

export default AboutButton;
