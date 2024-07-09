// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../assets/profile.png'; // Import the profile image

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 text-black shadow-lg p-4 flex items-center z-50" style={{ backgroundColor: '#F5F7F8' }}>

      {/* Profile picture and name container */}
      <div className="flex items-center">
        {/* Profile picture */}
        <Link to="/profile">
          <img src={profileImage} alt="Profile" className="rounded-full h-10 w-10 mr-2 cursor-pointer" />
        </Link>
        {/* Name */}
        <span>Juan Dela Cruz</span>
      </div>
    </div>
  );
};

export default Header;
