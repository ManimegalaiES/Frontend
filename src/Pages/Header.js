import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';  // Importing Framer Motion
import '../CSS/Header.css';

const Header = () => {
  return (
    <div>
      <header>
        {/* Adding animation to the "THINK & INK" text */}
        <motion.div
          className="header-title"
          initial={{ opacity: 0, x: -100 }}  // Initial state (out of view)
          animate={{ opacity: 1, x: 0 }}    // Final state (visible and in place)
          transition={{ duration: 1, ease: "easeOut" }}  // Animation properties
        >
          THINK&INK
        </motion.div>
        
        <nav>
          <ul>
            <li><Link to="/subscribers">Subscribe</Link></li>
            <li><Link to="/CreateBlog">Create Blog</Link></li>
            <li><Link to="/myBlogs">My Blogs</Link></li>
            <li><Link to="/Profile">Profile</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
