import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import '../css/Navbar.css';
import FitnessLogo from './logo.png'; 

const Navbar = () => {
  const [isMenuActive, setMenuActive] = useState(false);
  const [isDropdownActive, setDropdownActive] = useState(false); // For handling dropdown hover

  const toggleMenu = () => {
    setMenuActive(!isMenuActive);
  };

  const handleDropdownHover = (status) => {
    setDropdownActive(status);
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
        <Link to="/about">About Us</Link> {/* About Us link */}
        
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
      </div>
    </nav>
  );
};

export default Navbar;
