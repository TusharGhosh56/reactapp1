import React from "react";
import '../css/Footer.css';
import FitnessLogo from './logo.png';

const Footer = () => {
  return (
    <footer>
      <a href="#logo">
        <img src={FitnessLogo} alt="logo" />
      </a>
      <p>Connect with us on social media</p>
      <div className="footer__socials">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <p>&copy; 2024 FitClub. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
