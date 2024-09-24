import React from "react";
import '../css/Pricing.css';

const Pricing = () => {
  return (
    <section className="section__container price__container">
      <div className="price__header">
        <h2>OUR PRICING PLAN</h2>
        <p className="price_subheader">Affordable pricing plans to suit your needs.</p>
      </div>
      <div className="price__grid">
        <div className="price__card">
          <h4>Basic Plan</h4>
          <h3>₹1500</h3>
          <p><i className="fas fa-check-circle"></i> Smart workout plan</p>
          <p><i className="fas fa-check-circle"></i> At home workouts</p>
        </div>
        <div className="price__card">
          <h4>Weekly Plan</h4>
          <h3>₹2100</h3>
          <p><i className="fas fa-check-circle"></i> PRO Gyms</p>
          <p><i className="fas fa-check-circle"></i> Smart workout plan</p>
        </div>
        <div className="price__card">
          <h4>Monthly Plan</h4>
          <h3>₹4000</h3>
          <p><i className="fas fa-check-circle"></i> ELITE Gyms & Classes</p>
          <p><i className="fas fa-check-circle"></i> Personal Training</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
