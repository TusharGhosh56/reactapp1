import React, { useState } from 'react';
import '../css/Login.css'; // Ensure you have the updated CSS
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // To handle error messages
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Reset error message

        try {
            const response = await fetch('http://localhost:5002/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Login failed'); // Handle error response
            }

            // Store the JWT token in local storage
            localStorage.setItem('token', data.token);
            
            // Redirect to the homepage
            navigate('/'); // Redirect to the homepage
        } catch (err) {
            setError(err.message); // Set error message
            console.error('Login error:', err);
        }
    };

    return (
        <div className="login-page">
            <div className="login-text">
                <h1><span>Welcome</span> Back!</h1>
                <p>Please login to continue and explore our programs.</p>
            </div>

            <div className="login-container">
                <h2>Login</h2>
                {error && <p className="error-message">{error}</p>} {/* Display error message */}
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <div className="input-icon">
                            <i className="fas fa-envelope icon"></i>
                            <input 
                                type="email" 
                                id="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
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

                    <button type="submit">Login</button>
                </form>
                <p>
                    Don't have an account? <a href="/Register">Sign Up</a>
                </p>
                <p>
                    Are you a trainer? Check out the appointments <a href="/LoginTrainer">Login Trainer</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
