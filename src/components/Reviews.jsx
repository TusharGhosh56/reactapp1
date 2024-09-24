import React from "react";
import '../css/Reviews.css';


const Reviews = () => {
  return (
    <section className="review section__container review__container">
      <span><i className="fas fa-quote-right"></i></span>
      <div className="review__content">
        <h4>MEMBER REVIEW</h4>
        <p>Our expert trainers ensure maximum results and safety.</p>
        <h3>JITENDRA SHARMA</h3>
        <p className="review__position">Personal Trainer</p>
      </div>
    </section>
  );
};

export default Reviews;
