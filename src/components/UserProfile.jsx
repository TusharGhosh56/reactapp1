import React from 'react';


const UserProfile = () => {
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    location: 'New York, USA',
    profilePhoto: 'https://via.placeholder.com/150',
    bio: 'A passionate software developer with a knack for building web applications.',
  };

  const userCards = [
    {
      id: 1,
      title: 'Projects',
      description: 'Worked on 10+ web development projects focusing on frontend and backend technologies.',
    },
    {
      id: 2,
      title: 'Skills',
      description: 'Proficient in JavaScript, React, Node.js, and Python with a background in database management.',
    },
    {
      id: 3,
      title: 'Achievements',
      description: 'Received “Developer of the Year” award for 2023 in my previous company.',
    },
  ];

  return (
    <div className="about-us">
      {/* Main Intro Section */}
      <section className="intro main">
        <h1>About <span>{user.name}</span></h1>
        <p>{user.bio}</p>
      </section>

      {/* Offerings Section */}
      <section className="offerings">
        <h2>What I Offer</h2>
        <ul>
          {userCards.map((card) => (
            <li key={card.id}>
              <strong>{card.title}:</strong> {card.description}
            </li>
          ))}
        </ul>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <h2>My Mission</h2>
        <p>Dedicated to delivering high-quality software solutions and continuously improving technical skills.</p>
      </section>

      {/* Footer */}
      <footer className="footer1">
        <div className="programs__footer-content">
          <div className="programs__footer-socials">
            <p>Connect with {user.name}</p>
            <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <div className="programs__footer-links">
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UserProfile;
