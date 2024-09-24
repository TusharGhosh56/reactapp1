import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import '../css/Header.css';

const Header = () => {
  return (
    <header className="section__container header__container">
      <div className="header__content">
        <span className="bg__blur"></span>
        <h4>BEST FITNESS IN THE TOWN</h4>
        <h1><span>MAKE</span> YOUR BODY SHAPE</h1>
        <p>
          Unleash your potential and embark on a journey towards a stronger, fitter, and more confident you.
        </p>
        <button className="btn">
          <Link to="/programs" style={{ color: "#333", textDecoration: "none" }}>Get Started</Link> {/* Use Link for navigation */}
        </button>
      </div>
      <div className="header__image"></div>
    </header>
  );
};

export default Header;
