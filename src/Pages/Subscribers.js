// // import React, { useState, useEffect } from "react";

// // const Subscribers = () => {
// //   const [totalSubscribers, setTotalSubscribers] = useState(0);

// //   useEffect(() => {
// //     fetch("http://localhost:4000/total-subscribers")
// //       .then((res) => res.json())
// //       .then((data) => setTotalSubscribers(data.totalSubscribers))
// //       .catch((err) => console.error("Error fetching subscribers:", err));
// //   }, []);

// //   return (
// //     <div>
// //       <h2>Subscribers</h2>
// //       <p>Total Subscribers: {totalSubscribers}</p>
// //     </div>
// //   );
// // };

// // export default Subscribers;

// // import React, { useState, useEffect } from "react";
// // import '../CSS/Subscribers.css';  // Import the updated CSS

// // const Subscribers = () => {
// //   const [totalSubscribers, setTotalSubscribers] = useState(0);

// //   useEffect(() => {
// //     fetch("http://localhost:4000/total-subscribers")
// //       .then((res) => res.json())
// //       .then((data) => setTotalSubscribers(data.totalSubscribers))
// //       .catch((err) => console.error("Error fetching subscribers:", err));
// //   }, []);

// //   return (
// //     <div className="subscribersPage">
// //       <h2>Subscribers</h2>

      
// //         <p> {totalSubscribers}</p>
        
      
// //     </div>
// //   );
// // };

// // export default Subscribers;

// import React, { useState, useEffect } from "react";
// import '../CSS/Subscribers.css';

// const Subscribers = () => {
//   const [totalSubscribers, setTotalSubscribers] = useState(0);

//   // useEffect(() => {
//   //   fetch("http://localhost:4000/total-subscribers")
//   //     .then((res) => res.json())
//   //     .then((data) => {
//   //       if (data.totalSubscribers !== undefined) {
//   //         setTotalSubscribers(data.totalSubscribers);
//   //       } else {
//   //         console.error("Invalid response structure:", data);
//   //       }
//   //     })
//   //     .catch((err) => console.error("Error fetching subscribers:", err));
//   // }, []);

//   useEffect(() => {
//     fetch("http://localhost:4000/total-subscribers")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("Fetched Data:", data); // Debugging line
//         if (data.totalSubscribers !== undefined) {
//           setTotalSubscribers(data.totalSubscribers);
//         } else {
//           console.error("Invalid response structure:", data);
//         }
//       })
//       .catch((err) => console.error("Error fetching subscribers:", err));
//   }, []);
  

//   return (
//     <div className="subscribersPage">
//       <h2>Subscribers</h2>
//       <p>{totalSubscribers}</p>
//     </div>
//   );
// };

// export default Subscribers;
// import React, { useState, useContext } from "react";
// import { UserContext } from "../UserContext"; 
// //import '../CSS/Subscribe.css';

// const Subscribe = () => {
//   const [email, setEmail] = useState("");
//   const { setUserInfo } = useContext(UserContext); 

//   const handleSubscribe = async (e) => {
//     e.preventDefault();
  
//     if (!email.trim()) {
//       alert("Please enter an email address!");
//       return;
//     }
  
//     setUserInfo((prev) => ({
//       ...prev,
//       email, 
//     }));
  
//     try {
//       const response = await fetch("http://localhost:4000/subscribe", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       });
  
//       if (response.ok) {
//         alert("Subscription successful!");
//         setEmail(""); // Clear the email field
//       } else {
//         const data = await response.json();
//         alert(data.message);
//       }
//     } catch (error) {
//       alert("An error occurred while subscribing!");
//     }
  
  
//   };

//   return (
//     <div className="subscribe-container">
//       <h2>Subscribe to our Blog</h2>
//       <form onSubmit={handleSubscribe}>
//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <button type="submit">Subscribe</button>
//       </form>
//     </div>
//   );
// };

// export default Subscribe;


import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext"; 
import '../CSS/Subscribers.css';

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const { setUserInfo } = useContext(UserContext); 

  const handleSubscribe = async (e) => {
    e.preventDefault();
  
    if (!email.trim()) {
      alert("Please enter an email address!");
      return;
    }
  
    setUserInfo((prev) => ({
      ...prev,
      email, 
    }));
  
    try {
      const response = await fetch("http://localhost:4000/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
  
      if (response.ok) {
        alert("Subscription successful!");
        setEmail(""); // Clear the email field
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      alert("An error occurred while subscribing!");
    }
  };

  return (
    <div className="subscribe-container">
      <div className="subscribe-box">
        <h2 className="subscribe-title">📩 Stay Inspired!</h2>
        <p className="subscribe-text">Subscribe to Think & Ink for the latest blog updates.</p>
        <form onSubmit={handleSubscribe} className="subscribe-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="subscribe-input"
          />
          <button type="submit" className="subscribe-button">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
