// import { useContext, useEffect, useState } from "react";
// import { UserContext } from "../UserContext";

// export default function MyBlog() {
//   const [blogs, setBlogs] = useState([]); // Store the user's blogs
//   const { userInfo } = useContext(UserContext); // Get logged-in user info

//   useEffect(() => {
//     if (userInfo && userInfo.username) {
//       fetchBlogs(userInfo.username); // Fetch blogs for the logged-in user
//     }
//   }, [userInfo]);

//   async function fetchBlogs(username) {
//     try {
//       const response = await fetch(`http://localhost:4000/my-blogs?username=${username}`);
//       if (response.ok) {
//         const userBlogs = await response.json();
//         setBlogs(userBlogs); // Store blogs in state
//       } else {
//         console.error("Failed to fetch blogs");
//       }
//     } catch (err) {
//       console.error("Error fetching blogs:", err);
//     }
//   }

//   return (
//     <div>
//       <h1>My Blogs</h1>
//       {blogs.length > 0 ? (
//         <ul>
//           {blogs.map((blog) => (
//             <li key={blog._id}>
//               <h2>{blog.blogName}</h2>
//               <p>{blog.information}</p>
//               <p><strong>Theme:</strong> {blog.theme}</p>
//               {blog.url && (
//                 <p>
//                   <strong>URL:</strong>{" "}
//                   <a href={blog.url} target="_blank" rel="noopener noreferrer">
//                     {blog.url}
//                   </a>
//                 </p>
//               )}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>You haven't created any blogs yet.</p>
//       )}
//     </div>
//   );
// }
// import { useContext, useEffect, useState } from "react";
// import { UserContext } from "../UserContext";
// import "./MyBlogPage.css";

// export default function MyBlogPage() {
//   const [blogs, setBlogs] = useState([]);
//   const [editingBlog, setEditingBlog] = useState(null);
//   const [updatedBlog, setUpdatedBlog] = useState({ blogName: "", theme: "", information: "", url: "" });
//   const { userInfo } = useContext(UserContext);

//   useEffect(() => {
//     if (userInfo && userInfo.username) {
//       fetchBlogs(userInfo.username);
//     }
//   }, [userInfo]);

//   async function fetchBlogs(username) {
//     try {
//       const response = await fetch(`http://localhost:4000/my-blogs?username=${username}`);
//       if (response.ok) {
//         const userBlogs = await response.json();
//         setBlogs(userBlogs);
//       } else {
//         console.error("Failed to fetch blogs");
//       }
//     } catch (err) {
//       console.error("Error fetching blogs:", err);
//     }
//   }

//   // Delete Blog
//   async function handleDelete(id) {
//     try {
//       const response = await fetch(`http://localhost:4000/delete-blog/${id}`, { method: "DELETE" });
//       if (response.ok) {
//         setBlogs(blogs.filter(blog => blog._id !== id)); // Remove from UI
//       } else {
//         console.error("Failed to delete blog");
//       }
//     } catch (err) {
//       console.error("Error deleting blog:", err);
//     }
//   }

//   // Enable Edit Mode
//   function handleEditClick(blog) {
//     setEditingBlog(blog._id);
//     setUpdatedBlog({ blogName: blog.blogName, theme: blog.theme, information: blog.information, url: blog.url });
//   }

//   // Update Blog
//   async function handleUpdate() {
//     try {
//       const response = await fetch(`http://localhost:4000/update-blog/${editingBlog}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(updatedBlog),
//       });

//       if (response.ok) {
//         setEditingBlog(null);
//         fetchBlogs(userInfo.username); // Refresh the UI after update
//       } else {
//         console.error("Failed to update blog");
//       }
//     } catch (err) {
//       console.error("Error updating blog:", err);
//     }
//   }

//   return (
//     <div>
//       <h1>My Blogs</h1>
//       {blogs.length > 0 ? (
//         <ul>
//           {blogs.map(blog => (
//             <li key={blog._id}>
//               {editingBlog === blog._id ? (
//                 <div>
//                   <input
//                     type="text"
//                     value={updatedBlog.blogName}
//                     onChange={(e) => setUpdatedBlog({ ...updatedBlog, blogName: e.target.value })}
//                   />
//                   <input
//                     type="text"
//                     value={updatedBlog.theme}
//                     onChange={(e) => setUpdatedBlog({ ...updatedBlog, theme: e.target.value })}
//                   />
//                   <textarea
//                     value={updatedBlog.information}
//                     onChange={(e) => setUpdatedBlog({ ...updatedBlog, information: e.target.value })}
//                   />
//                   <input
//                     type="text"
//                     value={updatedBlog.url}
//                     onChange={(e) => setUpdatedBlog({ ...updatedBlog, url: e.target.value })}
//                   />
//                   <button onClick={handleUpdate}>Save</button>
//                   <button onClick={() => setEditingBlog(null)}>Cancel</button>
//                 </div>
//               ) : (
//                 <>
//                   <h2>{blog.blogName}</h2>
//                   <p>{blog.information}</p>
//                   <p><strong>Theme:</strong> {blog.theme}</p>
//                   {blog.url && (
//                     <p>
//                       <strong>URL:</strong>{" "}
//                       <a href={blog.url} target="_blank" rel="noopener noreferrer">
//                         {blog.url}
//                       </a>
//                     </p>
//                   )}
//                   <button onClick={() => handleEditClick(blog)}>Edit</button>
//                   <button onClick={() => handleDelete(blog._id)}>Delete</button>
//                 </>
//               )}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>You haven't created any blogs yet.</p>
//       )}
//     </div>
//   );
// }



import { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import styles from "../CSS/MyBlogPage.module.css"; // Importing CSS module

export default function MyBlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);
  const [updatedBlog, setUpdatedBlog] = useState({ blogName: "", theme: "", information: "", url: "" });
  const { userInfo } = useContext(UserContext);

  useEffect(() => {
    if (userInfo && userInfo.username) {
      fetchBlogs(userInfo.username);
    }
  }, [userInfo]);

  async function fetchBlogs(username) {
    try {
      const response = await fetch(`http://localhost:4000/my-blogs?username=${username}`);
      if (response.ok) {
        const userBlogs = await response.json();
        setBlogs(userBlogs);
      } else {
        console.error("Failed to fetch blogs");
      }
    } catch (err) {
      console.error("Error fetching blogs:", err);
    }
  }

  async function handleDelete(id) {
    try {
      const response = await fetch(`http://localhost:4000/delete-blog/${id}`, { method: "DELETE" });
      if (response.ok) {
        setBlogs(blogs.filter(blog => blog._id !== id));
      } else {
        console.error("Failed to delete blog");
      }
    } catch (err) {
      console.error("Error deleting blog:", err);
    }
  }

  function handleEditClick(blog) {
    setEditingBlog(blog._id);
    setUpdatedBlog({ blogName: blog.blogName, theme: blog.theme, information: blog.information, url: blog.url });
  }

  async function handleUpdate() {
    try {
      const response = await fetch(`http://localhost:4000/update-blog/${editingBlog}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedBlog),
      });

      if (response.ok) {
        setEditingBlog(null);
        fetchBlogs(userInfo.username);
      } else {
        console.error("Failed to update blog");
      }
    } catch (err) {
      console.error("Error updating blog:", err);
    }
  }

  return (
    <div className="maindiv">
    <div className={styles.blogsContainer}>
      <div className="heading"><h1>My Blogs</h1></div>
      {blogs.length > 0 ? (
        <ul className={styles.blogList}>
          {blogs.map(blog => (
            <li key={blog._id} className={styles.blogItem}>
              {editingBlog === blog._id ? (
                <div className={styles.editContainer}>
                  <input
                    type="text"
                    value={updatedBlog.blogName}
                    onChange={(e) => setUpdatedBlog({ ...updatedBlog, blogName: e.target.value })}
                    placeholder="Blog Name"
                  />
                  <input
                    type="text"
                    value={updatedBlog.theme}
                    onChange={(e) => setUpdatedBlog({ ...updatedBlog, theme: e.target.value })}
                    placeholder="Theme"
                  />
                  <textarea
                    value={updatedBlog.information}
                    onChange={(e) => setUpdatedBlog({ ...updatedBlog, information: e.target.value })}
                    placeholder="Blog Information"
                  />
                  <input
                    type="text"
                    value={updatedBlog.url}
                    onChange={(e) => setUpdatedBlog({ ...updatedBlog, url: e.target.value })}
                    placeholder="URL (Optional)"
                  />
                  <div className={styles.buttonContainer}>
                    <button onClick={handleUpdate}>Save</button>
                    <button className={styles.cancelButton} onClick={() => setEditingBlog(null)}>Cancel</button>
                  </div>
                </div>
              ) : (
                <>
                  <h2>{blog.blogName}</h2>
                  <p>{blog.information}</p>
                  <p className={styles.themeText}><strong>Theme:</strong> {blog.theme}</p>
                  {blog.url && (
                    <p>
                      <strong>URL:</strong>{" "}
                      <a href={blog.url} target="_blank" rel="noopener noreferrer">
                        {blog.url}
                      </a>
                    </p>
                  )}
                  <div className={styles.buttonContainer}>
                    <button onClick={() => handleEditClick(blog)}>Edit</button>
                    <button onClick={() => handleDelete(blog._id)}>Delete</button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.emptyMessage}>You haven't created any blogs yet.</p>
      )}
    </div>
    </div>
  );
}
