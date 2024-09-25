import React, { useState } from 'react';
import axios from 'axios';
import '../css/LoginTrainer.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirecting

const LoginTrainer = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Initialize the navigate function

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Request payload:", { name, password }); // Log the payload
        
        try {
            const response = await axios.post('http://localhost:5001/api/login-trainer', { name, password });
            console.log('Login successful:', response.data);

            // Store token in localStorage
            localStorage.setItem('token', response.data.token);  
            navigate('/appointments'); // Redirect to the appointments page

        } catch (error) {
            console.error("Error:", error); // Log the error
            // Display a user-friendly error message
            setError(error.response?.data?.error || 'An error occurred. Please try again.');
        }
    };

    return (
        <div className="login-page">
            <div className="login-text">
                <h1><span>Welcome</span> Trainer!</h1>
                <p>Please login to check out the Appointments</p>
            </div>

            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <div className="input-icon">
                            <i className="fas fa-user icon"></i>
                            <input 
                                type="text" 
                                id="name" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                required 
                            />
                        </div>
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <div className="input-icon">
                            <i className="fas fa-lock icon"></i>
                            <input 
                                type="password" 
                                id="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                required 
                            />
                        </div>
                    </div>

                    {error && <p className="error">{error}</p>} {/* Display error message */}
                    
                    <button type="submit" className="login-button">Login</button> {/* Add class for styling */}
                </form>
                <p>Don't have an account? <a href="/register">Sign Up</a></p> {/* Use lowercase in href */}
            </div>
        </div>
    );
};

export default LoginTrainer;
