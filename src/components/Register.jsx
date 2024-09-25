import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making API requests
import '../css/Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) {
      setError('Name is required.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Clear the error before the request
    setError('');

    try {
      // Send POST request to the backend API
      const response = await axios.post('http://localhost:5000/api/register', {
        name,
        email,
        password,
      });

      // If successful, show success message
      setSuccess('Registration successful!');
      console.log(response.data);
      // Optionally reset the form fields
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      setError('Registration failed. Please try again.');
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="register__container">
      <h2 className="register__heading"><span>Register</span> as user</h2>
      <div className="register__form">
        <form onSubmit={handleSubmit}>
          <div className="input__group">
            <label htmlFor="name"><i className="fas fa-user"></i> Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input__group">
            <label htmlFor="email"><i className="fas fa-envelope"></i> Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input__group">
            <label htmlFor="password"><i className="fas fa-lock"></i> Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input__group">
            <label htmlFor="confirmPassword"><i className="fas fa-lock"></i> Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>} {/* Display success message */}
          <button type="submit" className="btn__register">Register</button>
        </form>
        <p>
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
