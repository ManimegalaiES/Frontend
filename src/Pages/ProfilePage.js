// import React, { useState, useEffect, useContext } from "react";
// import axios from "axios";
// import { UserContext } from "../UserContext.js";

// const ProfilePage = () => {
//   const { userInfo } = useContext(UserContext);  // Getting userInfo from context
//   const [profile, setProfile] = useState(null);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchProfile = async () => {
//       if (!userInfo?.username) {
//         setError("Username is missing");
//         return;
//       }

//       try {
//         const response = await axios.get(
//           `http://localhost:4000/profile?username=${userInfo.username}`
//         );
//         setProfile(response.data);
//       } catch (err) {
//         console.error("Error fetching profile", err);
//         setError("Failed to load profile");
//       }
//     };

//     fetchProfile();
//   }, [userInfo]);

//   if (error) return <p style={{ color: "red" }}>{error}</p>;

//   return (
//     <div>
//       <h2>Profile</h2>
//       {profile ? (
//         <div>
//           <p><strong>Username:</strong> {profile.username}</p>
//           <p><strong>Total Blogs:</strong> {profile.totalBlogs}</p>
//           <p><strong>Total Subscribers:</strong> {profile.totalSubscribers}</p>
//           <button>Edit Profile</button>
//           <br></br>
//           {/* <button>Delete Profile</button>
//           <br></br>
//           <button>Logout</button>
//           <br></br> */}
//         </div>
//       ) : (
//         <p>Loading profile...</p>
//       )}
//     </div>
//   );
// };

// export default ProfilePage;


// import React, { useState, useEffect, useContext } from "react";
// import axios from "axios";
// import { UserContext } from "../UserContext.js";

// const ProfilePage = () => {
//   const { userInfo, setUserInfo } = useContext(UserContext); // Getting userInfo from context
//   const [profile, setProfile] = useState(null);
//   const [error, setError] = useState("");
//   const [isEditing, setIsEditing] = useState(false);  // State for showing the edit form
//   const [newUsername, setNewUsername] = useState("");  // For storing new username
//   const [newPassword, setNewPassword] = useState("");  // For storing new password
//   const [successMessage, setSuccessMessage] = useState("");  // For success message after profile update

//   useEffect(() => {
//     const fetchProfile = async () => {
//       if (!userInfo?.username) {
//         setError("Username is missing");
//         return;
//       }

//       try {
//         const response = await axios.get(
//           `http://localhost:4000/profile?username=${userInfo.username}`
//         );
//         setProfile(response.data);
//       } catch (err) {
//         console.error("Error fetching profile", err);
//         setError("Failed to load profile");
//       }
//     };

//     fetchProfile();
//   }, [userInfo]);

//   const handleEditProfile = async (e) => {
//     e.preventDefault();

//     if (!newUsername && !newPassword) {
//       setError("Please provide a new username or password to update");
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:4000/edit-profile", {
//         currentUsername: userInfo.username,
//         newUsername: newUsername || userInfo.username,
//         newPassword,
//       });

//       setSuccessMessage(response.data.message);  // Set success message after successful update

//       // Update the userInfo in the context if username was changed
//       if (newUsername) {
//         setUserInfo({ ...userInfo, username: newUsername });
//       }

//       setNewUsername("");
//       setNewPassword("");
//       setIsEditing(false);  // Hide the form after successful update
//     } catch (err) {
//       console.error("Error updating profile", err);
//       setError("Failed to update profile");
//     }
//   };

//   if (error) return <p style={{ color: "red" }}>{error}</p>;

//   return (
//     <div>
//       <h2>Profile</h2>
//       {profile ? (
//         <div>
//           <p><strong>Username:</strong> {profile.username}</p>
//           <p><strong>Total Blogs:</strong> {profile.totalBlogs}</p>
//           <p><strong>Total Subscribers:</strong> {profile.totalSubscribers}</p>

//           <button onClick={() => setIsEditing(true)}>Edit Profile</button>

//           {isEditing && (
//             <div>
//               <h3>Edit Profile</h3>
//               <form onSubmit={handleEditProfile}>
//                 <div>
//                   <label>New Username:</label>
//                   <input
//                     type="text"
//                     value={newUsername}
//                     onChange={(e) => setNewUsername(e.target.value)}
//                     placeholder="Enter new username"
//                   />
//                 </div>
//                 <div>
//                   <label>New Password:</label>
//                   <input
//                     type="password"
//                     value={newPassword}
//                     onChange={(e) => setNewPassword(e.target.value)}
//                     placeholder="Enter new password"
//                   />
//                 </div>
//                 <button type="submit">Update Profile</button>
//               </form>
//             </div>
//           )}

//           {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
//         </div>
//       ) : (
//         <p>Loading profile...</p>
//       )}
//     </div>
//   );
// };

// export default ProfilePage;



// import React, { useState, useEffect, useContext } from "react";
// import axios from "axios";
// import { UserContext } from "../UserContext.js";
// import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory

// const ProfilePage = () => {
//     const { userInfo, setUserInfo } = useContext(UserContext); // Getting userInfo from context
//     const [profile, setProfile] = useState(null);
//     const [error, setError] = useState("");
//     const [isEditing, setIsEditing] = useState(false);
//     const [newUsername, setNewUsername] = useState("");
//     const [newPassword, setNewPassword] = useState("");
//     const [successMessage, setSuccessMessage] = useState("");
//     const [deleteMessage, setDeleteMessage] = useState(""); // For delete profile message
//     const navigate = useNavigate(); // useNavigate hook for navigation

//     useEffect(() => {
//         const fetchProfile = async () => {
//             if (!userInfo?.username) {
//                 setError("Username is missing");
//                 return;
//             }
//             try {
//                 const response = await axios.get(
//                     `http://localhost:4000/profile?username=${userInfo.username}`
//                 );
//                 setProfile(response.data);
//             } catch (err) {
//                 console.error("Error fetching profile", err);
//                 setError("Failed to load profile");
//             }
//         };
//         fetchProfile();
//     }, [userInfo]);

//     const handleEditProfile = async (e) => {
//         e.preventDefault();
//         if (!newUsername && !newPassword) {
//             setError("Please provide a new username or password to update");
//             return;
//         }
//         try {
//             const response = await axios.post("http://localhost:4000/edit-profile", {
//                 currentUsername: userInfo.username,
//                 newUsername: newUsername || userInfo.username,
//                 newPassword,
//             });
//             setSuccessMessage(response.data.message);
//             if (newUsername) {
//                 setUserInfo({ ...userInfo, username: newUsername });
//             }
//             setNewUsername("");
//             setNewPassword("");
//             setIsEditing(false);
//         } catch (err) {
//             console.error("Error updating profile", err);
//             setError("Failed to update profile");
//         }
//     };

//     const handleDeleteProfile = async () => {
//         try {
//             const response = await axios.post("http://localhost:4000/delete-profile", {
//                 username: userInfo.username,
//             });
//             setDeleteMessage(response.data.message);
//             setUserInfo(null); // Clear the user context after deleting profile
//             navigate("/"); // Redirect to the homepage after deleting profile
//         } catch (err) {
//             console.error("Error deleting profile", err);
//             setDeleteMessage("Failed to delete profile");
//         }
//     };

//     const handleLogout = async () => {
//         try {
//            // await axios.post('http://localhost:4000/logout', {}, { withCredentials: true });
    
//             // Clear the user info from your application state (if applicable)
//             setUserInfo(null); // Reset the user state (you may use context or props)
    
//             // Redirect the user to the home page
//             navigate('/'); // Change this line to navigate to HomePage.js
//         } catch (err) {
//             console.error('Logout failed', err);
//         }
//     };
    

//     if (error) return <p style={{ color: "red" }}>{error}</p>;

//     return (
//         <div>
//             <h2>Profile</h2>
//             {profile ? (
//                 <div>
//                     <p><strong>Username:</strong> {profile.username}</p>
//                     <p><strong>Total Blogs:</strong> {profile.totalBlogs}</p>
//                     <p><strong>Total Subscribers:</strong> {profile.totalSubscribers}</p>
//                     <button onClick={() => setIsEditing(true)}>Edit Profile</button>
//                     {isEditing && (
//                         <div>
//                             <h3>Edit Profile</h3>
//                             <form onSubmit={handleEditProfile}>
//                                 <div>
//                                     <label>New Username:</label>
//                                     <input
//                                         type="text"
//                                         value={newUsername}
//                                         onChange={(e) => setNewUsername(e.target.value)}
//                                         placeholder="Enter new username"
//                                     />
//                                 </div>
//                                 <div>
//                                     <label>New Password:</label>
//                                     <input
//                                         type="password"
//                                         value={newPassword}
//                                         onChange={(e) => setNewPassword(e.target.value)}
//                                         placeholder="Enter new password"
//                                     />
//                                 </div>
//                                 <button type="submit">Update Profile</button>
//                             </form>
//                         </div>
//                     )}
//                     {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
//                     {deleteMessage && <p style={{ color: "red" }}>{deleteMessage}</p>}

//                     <button onClick={handleDeleteProfile}>Delete Profile</button>
//                     <button onClick={handleLogout}>Logout</button>
//                 </div>
//             ) : (
//                 <p>Loading profile...</p>
//             )}
//         </div>
//     );
// };

// export default ProfilePage;



import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../UserContext.js";
import { useNavigate } from "react-router-dom";
import styles from '../CSS/ProfilePage.module.css'; // Importing CSS module

const ProfilePage = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [deleteMessage, setDeleteMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      if (!userInfo?.username) {
        setError("Username is missing");
        return;
      }
      try {
        const response = await axios.get(
          `http://localhost:4000/profile?username=${userInfo.username}`
        );
        setProfile(response.data);
      } catch (err) {
        console.error("Error fetching profile", err);
        setError("Failed to load profile");
      }
    };
    fetchProfile();
  }, [userInfo]);

  const handleEditProfile = async (e) => {
    e.preventDefault();
    if (!newUsername && !newPassword) {
      setError("Please provide a new username or password to update");
      return;
    }
    try {
      const response = await axios.post("http://localhost:4000/edit-profile", {
        currentUsername: userInfo.username,
        newUsername: newUsername || userInfo.username,
        newPassword,
      });
      setSuccessMessage(response.data.message);
      if (newUsername) {
        setUserInfo({ ...userInfo, username: newUsername });
      }
      setNewUsername("");
      setNewPassword("");
      setIsEditing(false);
    } catch (err) {
      console.error("Error updating profile", err);
      setError("Failed to update profile");
    }
  };

  const handleDeleteProfile = async () => {
    try {
      const response = await axios.post("http://localhost:4000/delete-profile", {
        username: userInfo.username,
      });
      setDeleteMessage(response.data.message);
      setUserInfo(null);
      navigate("/");
    } catch (err) {
      console.error("Error deleting profile", err);
      setDeleteMessage("Failed to delete profile");
    }
  };

  const handleLogout = async () => {
    try {
      setUserInfo(null);
      navigate("/");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <div className="div">
    <div className={styles.profilePageContainer}>
      <h2> My Profile</h2>
      {profile ? (
        <div>
          <div className={styles.profileInfo}>
            <p><strong>Username:</strong> {profile.username}</p>
            <p><strong>Total Blogs:</strong> {profile.totalBlogs}</p>
            <p><strong>Total Subscribers:</strong> {profile.totalSubscribers}</p>
          </div>

          <div className={styles.buttonsContainer}>
            <button onClick={() => setIsEditing(true)}>Edit Profile</button>
            <button onClick={handleDeleteProfile}>Delete Profile</button>
            <button onClick={handleLogout}>Logout</button>
          </div>

          {isEditing && (
            <div className={styles.editProfileForm}>
              <h3>Edit Profile</h3>
              <form onSubmit={handleEditProfile}>
                <div>
                  <label>New Username:</label>
                  <input
                    type="text"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                    placeholder="Enter new username"
                  />
                </div>
                <div>
                  <label>New Password:</label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter new password"
                  />
                </div>
                <button type="submit">Update Profile</button>
              </form>
            </div>
          )}

          {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
          {deleteMessage && <p className={styles.deleteMessage}>{deleteMessage}</p>}

        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
    </div>
  );
};

export default ProfilePage;
