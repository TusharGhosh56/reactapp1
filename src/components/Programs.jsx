import React, { useState } from 'react';
import '../css/Programs.css';

import Program1 from './program1.jpg';
import Program2 from './program2.jpg';
import Program3 from './program3.jpg';
import Program4 from './program4.jpg';

const Programs = () => {
    const [currentSlide, setCurrentSlide] = useState(0); // Set initial slide to 0 (Program1.jpg)

    const slides = [Program1, Program2, Program3, Program4]; // Array of slide images

    // Function to update carousel manually with left/right controls
    const updateCarousel = (direction) => {
        setCurrentSlide((prevSlide) => {
            if (direction === 'left') {
                return prevSlide === 0 ? slides.length - 1 : prevSlide - 1;
            } else {
                return prevSlide === slides.length - 1 ? 0 : prevSlide + 1;
            }
        });
    };

    return (
        <div className="programs__container">
            <header className="programs__header-container">
                <div className="programs__header-content">
                    <h4>EXPLORE OUR PROGRAMS</h4>
                    <h1><span>DISCOVER</span> YOUR FITNESS JOURNEY</h1>
                </div>
            </header>
            <section className="programs__section-container">
                <h2 className="programs__section-header">Our Programs</h2>

                {/* Carousel window showing only one image (Program1 initially) */}
                <div className="programs__carousel-container">
                    <span className="programs__carousel-arrow left" onClick={() => updateCarousel('left')}>&#10094;</span>
                    <div className="programs__carousel">
                        <div className="programs__carousel-slide">
                            {/* Show the current image based on currentSlide index */}
                            <img src={slides[currentSlide]} alt={`Program ${currentSlide + 1}`} />
                        </div>
                    </div>
                    <span className="programs__carousel-arrow right" onClick={() => updateCarousel('right')}>&#10095;</span>
                </div>

                {/* Program cards */}
                <div className="programs__grid">
                    <div className="programs__card">
                        <h4>Strength Training</h4>
                        <p>Build your strength and endurance with our specialized training programs.</p>
                    </div>
                    <div className="programs__card">
                        <h4>Cardio</h4>
                        <p>Boost your cardiovascular health with high-intensity workouts.</p>
                    </div>
                    <div className="programs__card">
                        <h4>Yoga</h4>
                        <p>Enhance your flexibility and mental well-being through yoga.</p>
                    </div>
                    <div className="programs__card">
                        <h4>Weight Loss</h4>
                        <p>Effective weight loss programs tailored to your needs.</p>
                    </div>
                </div>
            </section>           
        </div>
    );
};

export default Programs;
