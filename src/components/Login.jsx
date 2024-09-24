import React, { useState } from 'react';
import '../css/Login.css'; // Ensure you have the updated CSS

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="login-page">
            {/* Container for the text */}
            <div className="login-text">
                <h1><span>Welcome</span> Back!</h1>
                <p>Please login to continue and explore our programs.</p>
            </div>
            
            {/* Form container */}
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <div className="input-icon">
                            <i className="fas fa-envelope icon"></i> {/* Font Awesome email icon */}
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
                            <i className="fas fa-lock icon"></i> {/* Font Awesome lock icon */}
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
            </div>
        </div>
    );
};

export default Login;
