// import { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { UserContext } from "../UserContext.js";

// export default function LoginPage() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const { setUserInfo } = useContext(UserContext); // UserContext to store user data
//   const navigate = useNavigate();

//   function register(e){
//     e.preventDefault();
//     navigate('/register');
//   }

//   async function login(ev) {
//     ev.preventDefault();

//     try {
//       const response = await fetch("http://localhost:4000/login", {
//         method: "POST",
//         body: JSON.stringify({ username, password }),
//         headers: { "Content-Type": "application/json" },
//       });

//       if (response.ok) {
//         const userInfo = await response.json();
//         setUserInfo(userInfo); // Set user info to context after login
//         alert("Login Successful");
//         navigate('/indexPage'); // Directly navigate to /indexPage
//       } else {
//         alert("Invalid username or password");
//       }
//     } catch (err) {
//       console.error("Error during login:", err);
//       alert("Login failed. Please try again.");
//     }
//   }

//   return (
//     <form className="login" onSubmit={login}>
//       <h1>Login</h1>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(ev) => setUsername(ev.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(ev) => setPassword(ev.target.value)}
//       />
//       <button type="submit">Login</button>
//       <h4>New to Blogging</h4> 
//       <button onClick={register}>Create New Account</button>
//     </form>
//   );
// }



// import { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { UserContext } from "../UserContext.js";

// export default function LoginPage() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const { setUserInfo } = useContext(UserContext); // Store user info globally
//   const navigate = useNavigate();

//   function register(e) {
//     e.preventDefault();
//     navigate("/register");
//   }

//   async function login(ev) {
//     ev.preventDefault();

//     try {
//       const response = await fetch("http://localhost:4000/login", {
//         method: "POST",
//         body: JSON.stringify({ username, password }),
//         headers: { "Content-Type": "application/json" },
//       });

//       if (response.ok) {
//         const userInfo = await response.json(); // Get user info from the backend
//         setUserInfo(userInfo); // Store in context
//         alert("Login Successful");
//         navigate("/indexPage"); // Navigate to the index page
//       } else {
//         alert("Invalid username or password");
//       }
//     } catch (err) {
//       console.error("Error during login:", err);
//       alert("Login failed. Please try again.");
//     }
//   }

//   return (
//     <form className="login" onSubmit={login}>
//       <h1>Login</h1>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(ev) => setUsername(ev.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(ev) => setPassword(ev.target.value)}
//       />
//       <button type="submit">Login</button>
//       <h4>New to Blogging</h4>
//       <button onClick={register}>Create New Account</button>
//     </form>
//   );
// }



import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext.js";
import { motion } from "framer-motion"; // Importing Framer Motion for animations
import "../CSS/LoginPage.css"; // Link to custom styles

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUserInfo } = useContext(UserContext); // Store user info globally
  const navigate = useNavigate();

  function register(e) {
    e.preventDefault();
    navigate("/register");
  }

  async function login(ev) {
    ev.preventDefault();

    try {
      const response = await fetch("https://blogbackend-lqcb.onrender.com/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        const userInfo = await response.json(); // Get user info from the backend
        setUserInfo(userInfo); // Store in context
        alert("Login Successful");
        navigate("/indexPage"); // Navigate to the index page
      } else {
        alert("Invalid username or password");
      }
    } catch (err) {
      console.error("Error during login:", err);
      alert("Login failed. Please try again.");
    }
  }

  return (
    <div className="div">
    <motion.form
      className="login-form"
      onSubmit={login}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="login-title"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        Login
      </motion.h1>

      <motion.input
        className="login-input"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(ev) => setUsername(ev.target.value)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      />

      <motion.input
        className="login-input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      />

      <motion.button
        className="login-button"
        type="submit"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        Login
      </motion.button>

      <motion.h4
        className="login-register-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        New to Blogging?
      </motion.h4>

      <motion.button
        className="create-account-button"
        onClick={register}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        Create New Account
      </motion.button>
    </motion.form>
    </div>
  );
}
