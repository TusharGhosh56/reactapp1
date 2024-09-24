import React from "react";
import '../css/Join.css';
import join__image from './join.jpg'; // Import the first image


const Join = () => {
  return (
    <section className="section__container join__container">
      <h2 className="section__header">WHY <span>JOIN</span> US?</h2>
      <p className="section__subheader">Friendly atmosphere, expert trainers, and great facilities.</p>
      <div className="join__image">
      <img src={join__image} alt="class" className="class__img-1" />
        <div className="join__grid">
          <div className="join__card">
            <span><i className="fas fa-user-tie"></i></span>
            <h4>Personal Trainer</h4>
            <p>Unlock your potential with expert guidance.</p>
          </div>
          <div className="join__card">
            <span><i className="fas fa-video"></i></span>
            <h4>Practice Sessions</h4>
            <p>Improve your fitness with regular practice.</p>
          </div>
          <div className="join__card">
            <span><i className="fas fa-building"></i></span>
            <h4>Good Management</h4>
            <p>Supportive management for your success.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
