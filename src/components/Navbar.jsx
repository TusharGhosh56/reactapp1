import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../css/Navbar.css';
import FitnessLogo from './logo.png';
import UserProfileIcon from './program1.jpg'; // Replace with actual user icon or photo

const Navbar = () => {
  const [isMenuActive, setMenuActive] = useState(false);
  const [isDropdownActive, setDropdownActive] = useState(false);
  const [isProfileDropdownActive, setProfileDropdownActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!isMenuActive);
  };

  const handleDropdownHover = (status) => {
    setDropdownActive(status);
  };

  const handleProfileDropdownHover = (status) => {
    setProfileDropdownActive(status);
  };

  return (
    <nav>
      <div className="nav__logo">
        <img src={FitnessLogo} alt="Gym Logo" style={{ height: '50px' }} />
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>
      <div className={`nav__menu ${isMenuActive ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/programs">Programs</Link>
        <Link to="/about">About Us</Link>

        {/* Login link with dropdown */}
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

        {/* User Profile Section */}
        <div
          className="nav__profile-dropdown"
          onMouseEnter={() => handleProfileDropdownHover(true)}
          onMouseLeave={() => handleProfileDropdownHover(false)}
        >
          <img src={UserProfileIcon} alt="User Profile" className="profile-icon" />
          {isProfileDropdownActive && (
            <div className="profile__dropdown-menu">
              <Link to="/UserProfile">Profile</Link>
              <Link to="/logout">Logout</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
