// import { useContext, useState } from "react";
// import { UserContext } from "../UserContext.js"; // Import the UserContext

// export default function CreateBlog() {
//   const [blogName, setBlogName] = useState("");
//   const [author, setAuthor] = useState("");
//   const [theme, setTheme] = useState("");
//   const [information, setInformation] = useState("");
//   const [url, setUrl] = useState("");
//   const [message, setMessage] = useState("");
 
//   const { userInfo } = useContext(UserContext); // Get userInfo from context

//   // Automatically populate author name from logged in user's data
//   useState(() => {
//     if (userInfo && userInfo.username) {
//       setAuthor(userInfo.username);
//     }
//   }, [userInfo]);

//   async function createBlog(e) {
//     e.preventDefault();

//     if (!blogName || !author || !theme || !information) {
//       setMessage('Please fill in all required fields.');
//       return;
//     }

//     const blogData = { blogName, author, theme, information, url };

//     try {
//       const response = await fetch('http://localhost:4000/create-blog', {
//         method: 'POST',
//         body: JSON.stringify(blogData),
//         headers: { 'Content-Type': 'application/json' },
//       });

//       if (response.status === 200) {
//         setMessage('Blog created successfully!');
//         setBlogName('');
//         setAuthor('');
//         setTheme('');
//         setInformation('');
//         setUrl('');
//       } else {
//         const errorData = await response.json();
//         setMessage(errorData.message || 'Failed to create the blog. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error creating blog:', error);
//       setMessage('An error occurred. Please try again later.');
//     }
//   }

//   return (
//     <div>
//       <h1>Create Blog</h1>
//       <form onSubmit={createBlog}>
//         <label>Blog Name</label>
//         <input
//           type="text"
//           value={blogName}
//           onChange={(e) => setBlogName(e.target.value)}
//           placeholder="Enter your blog name"
//           required
//         />
//         <br />

//         <label>Author</label>
//         <input
//           type="text"
//           value={author}
//           onChange={(e) => setAuthor(e.target.value)}
//           placeholder="Author (auto-filled)"
//           required
//           disabled
//         />
//         <br />

//         <label>Theme</label>
//         <select value={theme} onChange={(e) => setTheme(e.target.value)} required>
//           <option value="">--Select Theme--</option>
//           <option value="Education">Education</option>
//           <option value="Travel">Travel</option>
//           <option value="Food">Food</option>
//           <option value="Health">Health</option>
//           <option value="Technology">Technology</option>
//           <option value="Lifestyle">Lifestyle</option>
//           <option value="Business">Business</option>
//           <option value="Entertainment">Entertainment</option>
//           <option value="Sports">Sports</option>
//           <option value="Science">Science</option>
//         </select>
//         <br />

//         <label>Information</label>
//         <textarea
//           value={information}
//           onChange={(e) => setInformation(e.target.value)}
//           placeholder="Enter detailed information about the blog"
//           required
//         ></textarea>
//         <br />

//         <label>URL (optional)</label>
//         <input
//           type="url"
//           value={url}
//           onChange={(e) => setUrl(e.target.value)}
//           placeholder="Enter a URL (optional)"
//         />
//         <br />

//         <button type="submit">Submit</button>
//         {message && <p className="message">{message}</p>}
//       </form>
//     </div>
//   );
// }



// import { useContext, useState, useEffect } from "react";
// import { UserContext } from "../UserContext.js";

// export default function CreateBlog() {
//   const [blogName, setBlogName] = useState("");
//   const [author, setAuthor] = useState(""); // Author field
//   const [theme, setTheme] = useState("");
//   const [information, setInformation] = useState("");
//   const [url, setUrl] = useState("");
//   const [message, setMessage] = useState("");

//   const { userInfo } = useContext(UserContext); // Get logged-in user info

//   // Automatically set the author name from logged-in user info
//   useEffect(() => {
//     if (userInfo && userInfo.username) {
//       setAuthor(userInfo.username); // Set author name dynamically
//     }
//   }, [userInfo]);

//   async function createBlog(e) {
//     e.preventDefault();

//     if (!blogName || !author || !theme || !information) {
//       setMessage("Please fill in all required fields.");
//       return;
//     }

//     const blogData = { blogName, author, theme, information, url };

//     try {
//       const response = await fetch("http://localhost:4000/create-blog", {
//         method: "POST",
//         body: JSON.stringify(blogData),
//         headers: { "Content-Type": "application/json" },
//       });

//       if (response.status === 200) {
//         setMessage("Blog created successfully!");
//         setBlogName("");
//         setAuthor("");
//         setTheme("");
//         setInformation("");
//         setUrl("");
//       } else {
//         const errorData = await response.json();
//         setMessage(errorData.message || "Failed to create the blog. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error creating blog:", error);
//       setMessage("An error occurred. Please try again later.");
//     }
//   }

//   return (
//     <div>
//       <h1>Create Blog</h1>
//       <form onSubmit={createBlog}>
//         <label>Blog Name</label>
//         <input
//           type="text"
//           value={blogName}
//           onChange={(e) => setBlogName(e.target.value)}
//           placeholder="Enter your blog name"
//           required
//         />
//         <br />

//         <label>Author</label>
//         <input
//           type="text"
//           value={author}
//           placeholder="Author (auto-filled)"
//           readOnly // Make the author field read-only
//         />
//         <br />

//         <label>Theme</label>
//         <select value={theme} onChange={(e) => setTheme(e.target.value)} required>
//           <option value="">--Select Theme--</option>
//           <option value="Education">Education</option>
//           <option value="Travel">Travel</option>
//           <option value="Food">Food</option>
//           <option value="Health">Health</option>
//           <option value="Technology">Technology</option>
//           <option value="Lifestyle">Lifestyle</option>
//           <option value="Business">Business</option>
//           <option value="Entertainment">Entertainment</option>
//           <option value="Sports">Sports</option>
//           <option value="Science">Science</option>
//         </select>
//         <br />

//         <label>Information</label>
//         <textarea
//           value={information}
//           onChange={(e) => setInformation(e.target.value)}
//           placeholder="Enter detailed information about the blog"
//           required
//         ></textarea>
//         <br />

//         <label>URL (optional)</label>
//         <input
//           type="url"
//           value={url}
//           onChange={(e) => setUrl(e.target.value)}
//           placeholder="Enter a URL (optional)"
//         />
//         <br />

//         <button type="submit">Submit</button>
//         {message && <p className="message">{message}</p>}
//       </form>
//     </div>
//   );
// }



import { useContext, useState, useEffect } from "react";
import { UserContext } from "../UserContext.js";
import '../CSS/CreateBlog.css'; // Import the updated CSS for styling

export default function CreateBlog() {
  const [blogName, setBlogName] = useState("");
  const [author, setAuthor] = useState(""); // Author field
  const [theme, setTheme] = useState("");
  const [information, setInformation] = useState("");
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");

  const { userInfo } = useContext(UserContext); // Get logged-in user info

  // Automatically set the author name from logged-in user info
  useEffect(() => {
    if (userInfo && userInfo.username) {
      setAuthor(userInfo.username); // Set author name dynamically
    }
  }, [userInfo]);

  async function createBlog(e) {
    e.preventDefault();

    if (!blogName || !author || !theme || !information) {
      setMessage("Please fill in all required fields.");
      return;
    }

    const blogData = { blogName, author, theme, information, url };

    try {
      const response = await fetch("http://localhost:4000/create-blog", {
        method: "POST",
        body: JSON.stringify(blogData),
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        setMessage("Blog created successfully!");
        setBlogName("");
        setAuthor("");
        setTheme("");
        setInformation("");
        setUrl("");
      } else {
        const errorData = await response.json();
        setMessage(errorData.message || "Failed to create the blog. Please try again.");
      }
    } catch (error) {
      console.error("Error creating blog:", error);
      setMessage("An error occurred. Please try again later.");
    }
  }

  return (
    <div className="createBlogPage">
      <h1>Create Blog</h1>
      <form onSubmit={createBlog}>
        <label>Blog Name</label>
        <input
          type="text"
          value={blogName}
          onChange={(e) => setBlogName(e.target.value)}
          placeholder="Enter your blog name"
          required
        />
        
        <label>Author</label>
        <input
          type="text"
          value={author}
          placeholder="Author (auto-filled)"
          readOnly
        />

        <label>Theme</label>
        <select value={theme} onChange={(e) => setTheme(e.target.value)} required>
          <option value="">--Select Theme--</option>
          <option value="Education">Education</option>
          <option value="Travel">Travel</option>
          <option value="Food">Food</option>
          <option value="Health">Health</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Business">Business</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Sports">Sports</option>
          <option value="Science">Science</option>
        </select>

        <label>Information</label>
        <textarea
          value={information}
          onChange={(e) => setInformation(e.target.value)}
          placeholder="Enter detailed information about the blog"
          required
        ></textarea>

        <label>URL (optional)</label>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter a URL (optional)"
        />

        <button type="submit">Submit</button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
}
