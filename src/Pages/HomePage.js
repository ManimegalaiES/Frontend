// import React from 'react'
// import {useNavigate} from 'react-router-dom';

// const HomePage = () => {

//     const navigate = useNavigate();

//     function getStarted(e){
//         e.preventDefault();
//         navigate('/login');
//     }
//   return (
//     <div>
//       <div>THINK AND INK</div>
//       <div>Welcome to Blogging</div>
//       <div>Blog you passion in your way</div>
//       <button onClick={getStarted}>Get Started</button>
//     </div>
//   )
// }

// export default HomePage


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import '../CSS/HomePage.css';  // Importing CSS

// const HomePage = () => {
//   const navigate = useNavigate();

//   const quotes = [
//     "Blogging is not about writing, it is about thinking and sharing.",
//     "Write what should not be forgotten.",
//     "Your words can change the world.",
//     "Blogging is the art of making your thoughts heard.",
//     "Creativity is intelligence having fun – let your blog reflect it!"
//   ];

//   const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [quotes.length]);

//   function getStarted(e) {
//     e.preventDefault();
//     navigate('/login');
//   }

//   return (
    
//     <div className="home-container">
//       <motion.h1
//         className="title"
//         initial={{ opacity: 0, scale: 0.5 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1, ease: "easeOut" }}
//       >
//         <motion.span
//           initial={{ x: -100 }}
//           animate={{ x: 0 }}
//           transition={{ type: "spring", stiffness: 100 }}
//           className="word"
//         >
//           THINK
//         </motion.span>
//         <motion.span
//           initial={{ x: 100 }}
//           animate={{ x: 0 }}
//           transition={{ type: "spring", stiffness: 100 }}
//           className="word"
//         >
//           &
//         </motion.span>
//         <motion.span
//           initial={{ y: 100 }}
//           animate={{ y: 0 }}
//           transition={{ type: "spring", stiffness: 100 }}
//           className="word"
//         >INK
//         </motion.span>
//       </motion.h1>
//       <h2 className="subtitle">Welcome to Blogging</h2>
//       <div className="quote-container">
//         <AnimatePresence mode="wait">
//           <motion.p
//             key={currentQuoteIndex}
//             className="quote"
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.5 }}
//           >
//             {quotes[currentQuoteIndex]}
//           </motion.p>
//         </AnimatePresence>
//       </div>
//       <button className="start-button" onClick={getStarted}>Get Started</button>
//     </div>
//   );
// };

// export default HomePage;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import '../CSS/HomePage.css';  // Importing CSS

const HomePage = () => {
  const navigate = useNavigate();

  const quotes = [
    "Blogging is not about writing, it is about thinking and sharing.",
    "Write what should not be forgotten.",
    "Your words can change the world.",
    "Blogging is the art of making your thoughts heard.",
    "Creativity is intelligence having fun – let your blog reflect it!"
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 3000);

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [quotes.length]);

  function getStarted(e) {
    e.preventDefault();
    navigate('/login');
  }

  return (
    <div className="home-container">
      {/* Video background */}
      <video className="background-video" autoPlay muted loop>
        <source src="/HomeVid.mp4" type="video/mp4" />
      </video>

      {/* Main Title */}
      <motion.h1
        className="title"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.span
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="word"
        >
          THINK
        </motion.span>
        <motion.span
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="word"
        >
          &
        </motion.span>
        <motion.span
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="word"
        >
          INK
        </motion.span>
      </motion.h1>

      {/* Subtitle */}
      <h2 className="subtitle">Welcome to Blogging</h2>

      {/* Quote Rotator */}
      <div className="quote-container">
        <AnimatePresence mode="wait">
          <motion.p
            key={currentQuoteIndex}
            className="quote"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            {quotes[currentQuoteIndex]}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Get Started Button */}
      <button className="get" onClick={getStarted}>Get Started</button>
    </div>
  );
};

export default HomePage;
