import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../css/Navbar.css';
import FitnessLogo from './logo.png';
import Sidebar from './Sidebar';
import UserProfilePic from './program1.jpg'; // Assuming a placeholder image for the user profile

const Navbar = () => {
  const [isDropdownActive, setDropdownActive] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(prev => !prev);
  };

  const handleDropdownHover = (status) => {
    setDropdownActive(status);
  };

  return (
    <>
      <nav>
        <div className="nav__logo">
          <img src={FitnessLogo} alt="Gym Logo" style={{ height: '50px' }} />
        </div>

        <div className="nav__menu">
          <Link to="/">Home</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/about">About Us</Link>

          <div
            className="nav__dropdown"
            onMouseEnter={() => handleDropdownHover(true)}
            onMouseLeave={() => handleDropdownHover(false)}
          >
            <Link to="/login">Login</Link>
            {isDropdownActive && (
              <div className="dropdown__menu">
                <Link to="/login">Login</Link>
                <Link to="/register">Sign Up</Link>
              </div>
            )}
          </div>

          {/* Profile Picture Link */}
          <Link to="/UserProfile" className="nav__profile">
            <img src={UserProfilePic} alt="User Profile" style={{ height: '32px', borderRadius: '60%' }} />
          </Link>
        </div>

        <div className="hamburger" onClick={toggleSidebar}>
          <i className={`fas ${showSidebar ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
      </nav>

      <Sidebar isActive={showSidebar} />
    </>
  );
};

export default Navbar;
