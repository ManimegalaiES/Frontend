// // import React, { useEffect, useState } from "react";
// // import Header from "./Header.js";

// // const IndexPage = () => {
// //   const [blogs, setBlogs] = useState([]); // State to store all blogs

// //   useEffect(() => {
// //     fetchBlogs();
// //   }, []);

// //   async function fetchBlogs() {
// //     try {
// //       const response = await fetch("http://localhost:4000/all-blogs");
// //       if (response.ok) {
// //         const allBlogs = await response.json();
// //         setBlogs(allBlogs);
// //       } else {
// //         console.error("Failed to fetch blogs");
// //       }
// //     } catch (err) {
// //       console.error("Error fetching blogs:", err);
// //     }
// //   }

// //   return (
// //     <div className="indexPage">
// //       <Header />
// //       <h1>Welcome to the Blog Platform!</h1>
// //       <div className="blogs">
// //         {blogs.length > 0 ? (
// //           blogs.map((blog) => (
// //             <div key={blog._id} className="blog-card">
// //               <h2>{blog.blogName}</h2>
// //               <p><strong>Author:</strong> {blog.author}</p>
// //               <p><strong>Theme:</strong> {blog.theme}</p>
// //               <p>{blog.information}</p>
// //               {blog.url && (
// //                 <p>
// //                   <strong>URL:</strong>{" "}
// //                   <a href={blog.url} target="_blank" rel="noopener noreferrer">
// //                     {blog.url}
// //                   </a>
// //                 </p>
// //               )}
// //             </div>
// //           ))
// //         ) : (
// //           <p>No blogs available. Be the first to create one!</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default IndexPage;

// // import React, { useEffect, useState, useContext } from "react";
// // import Header from "./Header.js";
// // import { UserContext } from "../UserContext.js"; // Import user context

// // const IndexPage = () => {
// //   const [blogs, setBlogs] = useState([]); // Store all blogs
// //   const { userInfo } = useContext(UserContext); // Get logged-in user

// //   useEffect(() => {
// //     fetchBlogs();
// //   }, []);

// //   async function fetchBlogs() {
// //     try {
// //       const response = await fetch("http://localhost:4000/all-blogs");
// //       if (response.ok) {
// //         const allBlogs = await response.json();
// //         setBlogs(allBlogs);
// //       } else {
// //         console.error("Failed to fetch blogs");
// //       }
// //     } catch (err) {
// //       console.error("Error fetching blogs:", err);
// //     }
// //   }

// //   async function handleSubscription(blogId) {
// //     try {
// //       const response = await fetch("http://localhost:4000/toggle-subscribe", {
// //         method: "POST",
// //         body: JSON.stringify({ blogId, username: userInfo?.username }),
// //         headers: { "Content-Type": "application/json" },
// //       });

// //       if (response.ok) {
// //         const updatedData = await response.json();
// //         setBlogs(blogs.map(blog => 
// //           blog._id === blogId ? { ...blog, subscribers: updatedData.subscribers } : blog
// //         ));
// //       }
// //     } catch (err) {
// //       console.error("Subscription error:", err);
// //     }
// //   }

// //   return (
// //     <div className="indexPage">
// //       <Header />
// //       <h1>Welcome to the Blog Platform!</h1>
// //       <div className="blogs">
// //         {blogs.length > 0 ? (
// //           blogs.map((blog) => {
// //             const isSubscribed = blog.subscribers.includes(userInfo?.username);

// //             return (
// //               <div key={blog._id} className="blog-card">
// //                 <h2>{blog.blogName}</h2>
// //                 <p><strong>Author:</strong> {blog.author}</p>
// //                 <p><strong>Theme:</strong> {blog.theme}</p>
// //                 <p>{blog.information}</p>
// //                 {blog.url && (
// //                   <p>
// //                     <strong>URL:</strong>{" "}
// //                     <a href={blog.url} target="_blank" rel="noopener noreferrer">
// //                       {blog.url}
// //                     </a>
// //                   </p>
// //                 )}
// //                 <button onClick={() => handleSubscription(blog._id)}>
// //                   {isSubscribed ? "Unsubscribe" : "Subscribe"}
// //                 </button>
// //               </div>
// //             );
// //           })
// //         ) : (
// //           <p>No blogs available. Be the first to create one!</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default IndexPage;


// // import React, { useEffect, useState, useContext } from 'react';
// // import Header from './Header.js';
// // import { UserContext } from '../UserContext.js';

// // const IndexPage = () => {
// //   const [blogs, setBlogs] = useState([]);
// //   const { userInfo } = useContext(UserContext);

// //   useEffect(() => {
// //     fetch("http://localhost:4000/all-blogs")
// //       .then(response => response.json())
// //       .then(data => setBlogs(data))
// //       .catch(error => console.error("Error fetching blogs:", error));
// //   }, []);

// //   const toggleSubscribe = async (blogId) => {
// //     try {
// //       const response = await fetch("http://localhost:4000/toggle-subscribe", {
// //         method: "POST",
// //         body: JSON.stringify({ blogId, username: userInfo?.username }),
// //         headers: { "Content-Type": "application/json" },
// //       });

// //       if (response.ok) {
// //         const updatedBlog = await response.json();
// //         setBlogs(blogs.map(blog => 
// //           blog._id === blogId ? { ...blog, subscribers: updatedBlog.subscribers } : blog
// //         ));
// //       } else {
// //         alert("Failed to update subscription");
// //       }
// //     } catch (err) {
// //       console.error("Error toggling subscription:", err);
// //     }
// //   };

// //   return (
// //     <div className="indexPage">
// //       <Header />
// //       <h1>Welcome to the Blog Platform!</h1>
// //       <div className="blog-list">
// //         {blogs.map((blog) => (
// //           <div key={blog._id} className="blog-card">
// //             <h2>{blog.blogName}</h2>
// //             <p><strong>Author:</strong> {blog.author}</p>
// //             <p><strong>Theme:</strong> {blog.theme}</p>
// //             <p>{blog.information}</p>

// //             {/* Show Subscribe button only if logged-in user is NOT the author */}
// //             {userInfo?.username !== blog.author && (
// //               <button 
// //                 onClick={() => toggleSubscribe(blog._id)}
// //                 className={blog.subscribers.includes(userInfo?.username) ? "unsubscribe" : "subscribe"}
// //               >
// //                 {blog.subscribers.includes(userInfo?.username) ? "Unsubscribe" : "Subscribe"}
// //               </button>
// //             )}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default IndexPage;

// // import React, { useEffect, useState, useContext } from 'react';
// // import Header from './Header.js';
// // import { UserContext } from '../UserContext.js';

// // const IndexPage = () => {
// //   const [blogs, setBlogs] = useState([]);
// //   const { userInfo } = useContext(UserContext);

// //   useEffect(() => {
// //     fetch("http://localhost:4000/all-blogs")
// //       .then(response => response.json())
// //       .then(data => setBlogs(data))
// //       .catch(error => console.error("Error fetching blogs:", error));
// //   }, []);

// //   const toggleSubscribe = async (author) => {
// //     try {
// //       const response = await fetch("http://localhost:4000/toggle-subscribe", {
// //         method: "POST",
// //         body: JSON.stringify({ author, username: userInfo?.username }),
// //         headers: { "Content-Type": "application/json" },
// //       });

// //       if (response.ok) {
// //         const updatedData = await response.json();

// //         // Update UI for all blogs of the same author
// //         setBlogs(blogs.map(blog => 
// //           blog.author === author 
// //             ? { ...blog, subscribers: updatedData.subscribers }
// //             : blog
// //         ));
// //       } else {
// //         alert("Failed to update subscription");
// //       }
// //     } catch (err) {
// //       console.error("Error toggling subscription:", err);
// //     }
// //   };

// //   return (
// //     <div className="indexPage">
// //       <Header />
// //       <h1>Welcome to the Blog Platform!</h1>
// //       <div className="blog-list">
// //         {blogs.map((blog) => (
// //           <div key={blog._id} className="blog-card">
// //             <h2>{blog.blogName}</h2>
// //             <p><strong>Author:</strong> {blog.author}</p>
// //             <p><strong>Theme:</strong> {blog.theme}</p>
// //             <p>{blog.information}</p>

// //             {/* Show Subscribe button only if logged-in user is NOT the author */}
// //             {userInfo?.username !== blog.author && (
// //               <button 
// //                 onClick={() => toggleSubscribe(blog.author)}
// //                 className={blog.subscribers.includes(userInfo?.username) ? "unsubscribe" : "subscribe"}
// //               >
// //                 {blog.subscribers.includes(userInfo?.username) ? "Unsubscribe" : "Subscribe"}
// //               </button>
// //             )}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default IndexPage;


// // import React, { useEffect, useState, useContext } from 'react';
// // import Header from './Header.js';
// // import { UserContext } from '../UserContext.js';

// // const IndexPage = () => {
// //   const [blogs, setBlogs] = useState([]);
// //   const { userInfo } = useContext(UserContext);
// //   const [commentInputs, setCommentInputs] = useState({}); 

// //   useEffect(() => {
// //     fetch("http://localhost:4000/all-blogs")
// //       .then(response => response.json())
// //       .then(data => setBlogs(data))
// //       .catch(error => console.error("Error fetching blogs:", error));
// //   }, []);

// //   const toggleSubscribe = async (author) => {
// //     try {
// //       const response = await fetch("http://localhost:4000/toggle-subscribe", {
// //         method: "POST",
// //         body: JSON.stringify({ author, username: userInfo?.username }),
// //         headers: { "Content-Type": "application/json" },
// //       });

// //       if (response.ok) {
// //         const updatedData = await response.json();

// //         setBlogs(blogs.map(blog => 
// //           blog.author === author 
// //             ? { ...blog, subscribers: updatedData.subscribers }
// //             : blog
// //         ));
// //       } else {
// //         alert("Failed to update subscription");
// //       }
// //     } catch (err) {
// //       console.error("Error toggling subscription:", err);
// //     }
// //   };

// //   const addComment = async (blogId) => {
// //     if (!commentInputs[blogId]?.trim()) return; // Prevent empty comments

// //     try {
// //       const response = await fetch("http://localhost:4000/add-comment", {
// //         method: "POST",
// //         body: JSON.stringify({ 
// //           blogId, 
// //           username: userInfo?.username, 
// //           text: commentInputs[blogId] 
// //         }),
// //         headers: { "Content-Type": "application/json" },
// //       });

// //       if (response.ok) {
// //         const updatedData = await response.json();
        
// //         // Update UI to display new comments
// //         setBlogs(blogs.map(blog => 
// //           blog._id === blogId 
// //             ? { ...blog, comments: updatedData.comments } 
// //             : blog
// //         ));

// //         // Clear input field after commenting
// //         setCommentInputs({ ...commentInputs, [blogId]: "" });
// //       }
// //     } catch (err) {
// //       console.error("Error adding comment:", err);
// //     }
// //   };

// //   return (
// //     <div className="indexPage">
// //       <Header />
// //       <h1>Welcome to the Blog Platform!</h1>
// //       <div className="blog-list">
// //         {blogs.map((blog) => (
// //           <div key={blog._id} className="blog-card">
// //             <h2>{blog.blogName}</h2>
// //             <p><strong>Author:</strong> {blog.author}</p>
// //             <p><strong>Theme:</strong> {blog.theme}</p>
// //             <p>{blog.information}</p>

// //             {/* Show Subscribe button only if logged-in user is NOT the author */}
// //             {userInfo?.username !== blog.author && (
// //               <button 
// //                 onClick={() => toggleSubscribe(blog.author)}
// //                 className={blog.subscribers.includes(userInfo?.username) ? "unsubscribe" : "subscribe"}
// //               >
// //                 {blog.subscribers.includes(userInfo?.username) ? "Unsubscribe" : "Subscribe"}
// //               </button>
// //             )}

// //             {/* Add Comment Section (Only if user is not the author) */}
// //             {userInfo?.username !== blog.author && (
// //               <div className="comment-section">
// //                 <input
// //                   type="text"
// //                   placeholder="Add a comment..."
// //                   value={commentInputs[blog._id] || ""}
// //                   onChange={(e) => setCommentInputs({ ...commentInputs, [blog._id]: e.target.value })}
// //                 />
// //                 <button onClick={() => addComment(blog._id)}>Post</button>
// //               </div>
// //             )}
       
// //             {/* Display Comments */}
// //             <div className="comments-list">
// //               View comments :
// //               {blog.comments.map((comment, index) => (
// //                 <p key={index}>
// //                   <strong>{comment.username}:</strong> {comment.text}
// //                 </p>
// //               ))}
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default IndexPage;


// import React, { useEffect, useState, useContext } from "react";
// import Header from "./Header.js";
// import Profile from "./Profile.js"; // 
// import { UserContext } from "../UserContext.js";

// const IndexPage = () => {
//   const [blogs, setBlogs] = useState([]);
//   const { userInfo } = useContext(UserContext);  // Getting userInfo from context
//   const [commentInputs, setCommentInputs] = useState({});

//   useEffect(() => {
//     fetch("http://localhost:4000/all-blogs")
//       .then((response) => response.json())
//       .then((data) => setBlogs(data))
//       .catch((error) => console.error("Error fetching blogs:", error));
//   }, []);

//   const toggleSubscribe = async (author) => {
//     try {
//       const response = await fetch("http://localhost:4000/toggle-subscribe", {
//         method: "POST",
//         body: JSON.stringify({ author, username: userInfo?.username }),
//         headers: { "Content-Type": "application/json" },
//       });

//       if (response.ok) {
//         const updatedData = await response.json();
//         setBlogs(blogs.map(blog =>
//           blog.author === author ? { ...blog, subscribers: updatedData.subscribers } : blog
//         ));
//       } else {
//         alert("Failed to update subscription");
//       }
//     } catch (err) {
//       console.error("Error toggling subscription:", err);
//     }
//   };

//   const addComment = async (blogId) => {
//     if (!commentInputs[blogId]?.trim()) return;

//     try {
//       const response = await fetch("http://localhost:4000/add-comment", {
//         method: "POST",
//         body: JSON.stringify({
//           blogId,
//           username: userInfo?.username,
//           text: commentInputs[blogId],
//         }),
//         headers: { "Content-Type": "application/json" },
//       });

//       if (response.ok) {
//         const updatedData = await response.json();
//         setBlogs(blogs.map(blog =>
//           blog._id === blogId ? { ...blog, comments: updatedData.comments } : blog
//         ));
//         setCommentInputs({ ...commentInputs, [blogId]: "" });
//       }
//     } catch (err) {
//       console.error("Error adding comment:", err);
//     }
//   };

//   return (
//     <div className="indexPage">
//       <Header />
//       <h1>Welcome to the Blog Platform!</h1>

//       {/* Show Profile Section only if userInfo exists */}
//       {userInfo && userInfo.username && (
//         <Profile username={userInfo.username} /> // Pass the username to Profile.js
//       )}

//       <div className="blog-list">
//         {blogs.map((blog) => (
//           <div key={blog._id} className="blog-card">
//             <h2>{blog.blogName}</h2>
//             <p><strong>Author:</strong> {blog.author}</p>
//             <p><strong>Theme:</strong> {blog.theme}</p>
//             <p>{blog.information}</p>

//             {/* Show Subscribe button only if logged-in user is NOT the author */}
//             {userInfo?.username !== blog.author && (
//               <button
//                 onClick={() => toggleSubscribe(blog.author)}
//                 className={blog.subscribers.includes(userInfo?.username) ? "unsubscribe" : "subscribe"}
//               >
//                 {blog.subscribers.includes(userInfo?.username) ? "Unsubscribe" : "Subscribe"}
//               </button>
//             )}

//             {/* Add Comment Section (Only if user is not the author) */}
//             {userInfo?.username !== blog.author && (
//               <div className="comment-section">
//                 <input
//                   type="text"
//                   placeholder="Add a comment..."
//                   value={commentInputs[blog._id] || ""}
//                   onChange={(e) => setCommentInputs({ ...commentInputs, [blog._id]: e.target.value })}
//                 />
//                 <button onClick={() => addComment(blog._id)}>Post</button>
//               </div>
//             )}

//             <div className="comments-list">
//               View comments :
//               {blog.comments.map((comment, index) => (
//                 <p key={index}>
//                   <strong>{comment.username}:</strong> {comment.text}
//                 </p>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default IndexPage;


// import React, { useEffect, useState, useContext } from "react";
// import Header from "./Header.js";
// import { UserContext } from "../UserContext.js";

// const IndexPage = () => {
//   const [blogs, setBlogs] = useState([]);
//   const { userInfo } = useContext(UserContext);  // Getting userInfo from context
//   const [commentInputs, setCommentInputs] = useState({});

//   useEffect(() => {
//     fetch("http://localhost:4000/all-blogs")
//       .then((response) => response.json())
//       .then((data) => setBlogs(data))
//       .catch((error) => console.error("Error fetching blogs:", error));
//   }, []);

//   const toggleSubscribe = async (author) => {
//     try {
//       const response = await fetch("http://localhost:4000/toggle-subscribe", {
//         method: "POST",
//         body: JSON.stringify({ author, username: userInfo?.username }),
//         headers: { "Content-Type": "application/json" },
//       });

//       if (response.ok) {
//         const updatedData = await response.json();
//         setBlogs(blogs.map(blog =>
//           blog.author === author ? { ...blog, subscribers: updatedData.subscribers } : blog
//         ));
//       } else {
//         alert("Failed to update subscription");
//       }
//     } catch (err) {
//       console.error("Error toggling subscription:", err);
//     }
//   };

//   const addComment = async (blogId) => {
//     if (!commentInputs[blogId]?.trim()) return;

//     try {
//       const response = await fetch("http://localhost:4000/add-comment", {
//         method: "POST",
//         body: JSON.stringify({
//           blogId,
//           username: userInfo?.username,
//           text: commentInputs[blogId],
//         }),
//         headers: { "Content-Type": "application/json" },
//       });

//       if (response.ok) {
//         const updatedData = await response.json();
//         setBlogs(blogs.map(blog =>
//           blog._id === blogId ? { ...blog, comments: updatedData.comments } : blog
//         ));
//         setCommentInputs({ ...commentInputs, [blogId]: "" });
//       }
//     } catch (err) {
//       console.error("Error adding comment:", err);
//     }
//   };

//   return (
//     <div className="indexPage">
//       <Header />

//       <h1>Welcome to the THINK & INK!</h1>

//       <div className="blog-list">
//         {blogs.map((blog) => (
//           <div key={blog._id} className="blog-card">
//             <h2>{blog.blogName}</h2>
//             <p><strong>Author:</strong> {blog.author}</p>
//             <p><strong>Theme:</strong> {blog.theme}</p>
//             <p>{blog.information}</p>

//             {/* Show Subscribe button only if logged-in user is NOT the author */}
//             {userInfo?.username !== blog.author && (
//               <button
//                 onClick={() => toggleSubscribe(blog.author)}
//                 className={blog.subscribers.includes(userInfo?.username) ? "unsubscribe" : "subscribe"}
//               >
//                 {blog.subscribers.includes(userInfo?.username) ? "Unsubscribe" : "Subscribe"}
//               </button>
//             )}

//             {/* Add Comment Section (Only if user is not the author) */}
//             {userInfo?.username !== blog.author && (
//               <div className="comment-section">
//                 <input
//                   type="text"
//                   placeholder="Add a comment..."
//                   value={commentInputs[blog._id] || ""}
//                   onChange={(e) => setCommentInputs({ ...commentInputs, [blog._id]: e.target.value })}
//                 />
//                 <button onClick={() => addComment(blog._id)}>Post</button>
//               </div>
//             )}

//             <div className="comments-list">
//               View comments :
//               {blog.comments.map((comment, index) => (
//                 <p key={index}>
//                   <strong>{comment.username}:</strong> {comment.text}
//                 </p>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default IndexPage;


import React, { useEffect, useState, useContext } from "react";
import Header from "./Header.js";
import { UserContext } from "../UserContext.js";
import '../CSS/IndexPage.css';  // Importing CSS file

const IndexPage = () => {
  const [blogs, setBlogs] = useState([]);
  const { userInfo } = useContext(UserContext);  // Getting userInfo from context
  const [commentInputs, setCommentInputs] = useState({});

  useEffect(() => {
    fetch("http://localhost:4000/all-blogs")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  const toggleSubscribe = async (author) => {
    try {
      const response = await fetch("http://localhost:4000/toggle-subscribe", {
        method: "POST",
        body: JSON.stringify({ author, username: userInfo?.username }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        const updatedData = await response.json();
        setBlogs(blogs.map(blog =>
          blog.author === author ? { ...blog, subscribers: updatedData.subscribers } : blog
        ));
      } else {
        alert("Failed to update subscription");
      }
    } catch (err) {
      console.error("Error toggling subscription:", err);
    }
  };

  const addComment = async (blogId) => {
    if (!commentInputs[blogId]?.trim()) return;

    try {
      const response = await fetch("http://localhost:4000/add-comment", {
        method: "POST",
        body: JSON.stringify({
          blogId,
          username: userInfo?.username,
          text: commentInputs[blogId],
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        const updatedData = await response.json();
        setBlogs(blogs.map(blog =>
          blog._id === blogId ? { ...blog, comments: updatedData.comments } : blog
        ));
        setCommentInputs({ ...commentInputs, [blogId]: "" });
      }
    } catch (err) {
      console.error("Error adding comment:", err);
    }
  };

  return (
    <div>
    <Header />

    <div className="indexPage">
      

      <div className="welcome"><h1>Welcome to the THINK & INK!</h1></div>

      <div className="blog-list">
        {blogs.map((blog) => (
          <div key={blog._id} className="blog-card">
            <h2>{blog.blogName}</h2>
            <p><strong>Author:</strong> {blog.author}</p>
            <p><strong>Theme:</strong> {blog.theme}</p>
            <p>{blog.information}</p>

            {/* Show Subscribe button only if logged-in user is NOT the author */}
            {userInfo?.username !== blog.author && (
              <button
                onClick={() => toggleSubscribe(blog.author)}
                className={blog.subscribers.includes(userInfo?.username) ? "unsubscribe" : "subscribe"}
              >
                {blog.subscribers.includes(userInfo?.username) ? "Unsubscribe" : "Subscribe"}
              </button>
            )}

            {/* Add Comment Section (Only if user is not the author) */}
            {userInfo?.username !== blog.author && (
              <div className="comment-section">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  value={commentInputs[blog._id] || ""}
                  onChange={(e) => setCommentInputs({ ...commentInputs, [blog._id]: e.target.value })}
                />
                <button onClick={() => addComment(blog._id)}>Post</button>
              </div>
            )}

            <div className="comments-list">
              View comments:
              {blog.comments.map((comment, index) => (
                <p key={index}>
                  <strong>{comment.username}:</strong> {comment.text}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default IndexPage;
