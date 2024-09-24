import React from "react";
import '../css/Classes.css';
import classImage1 from './class-1.jpg'; // Import the first image

const Classes = () => {
  return (
    <section className="section__container class__container">
      <div className="class__image">
        <span className="bg__blur"></span>
        <img src={classImage1} alt="class" className="class__img-1" />
     
      </div>
      <div className="class__content">
        <h2 className="section__header">THE <span>CLASSES</span> YOU WILL GET HERE</h2>
        <p>High-energy, results-driven sessions for fitness enthusiasts.</p>
        <button className="btn">
          <a href="#services" style={{ color: "#333" }}>Book A Class</a>
        </button>
      </div>
    </section>
  );
};

export default Classes;
