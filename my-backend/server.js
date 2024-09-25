const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken'); // For generating tokens (authentication)

const app = express();
const PORT = 5001;
const SECRET_KEY = "your-secret-key"; // Replace with a strong secret

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Define Trainer Schema and Model
const trainerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true }, // Store hashed passwords
});

const Trainer = mongoose.model('Trainer', trainerSchema);

// Middleware for checking JWT tokens (authentication middleware)
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Extract the token from the header

    if (!token) {
        return res.sendStatus(401); // No token provided
    }

    jwt.verify(token, SECRET_KEY, (err, user) => { // Use SECRET_KEY to verify the token
        if (err) {
            return res.sendStatus(403); // Invalid token
        }
        req.user = user; // Attach user information to the request
        next(); // Proceed to the next middleware or route handler
    });
};

// Trainer Login Route
app.post('/api/login-trainer', async (req, res) => {
    const { name, password } = req.body;

    // Validate the presence of name and password
    if (!name || !password) {
        return res.status(400).json({ error: 'Name and password are required.' });
    }

    // Find the trainer in the database
    try {
        const trainer = await Trainer.findOne({ name });
        if (!trainer) {
            return res.status(400).json({ error: 'Trainer not found' });
        }

        // Check if the passwords match
        if (trainer.password !== password) { // In production, use bcrypt to compare hashed passwords
            return res.status(400).json({ error: 'Invalid password' });
        }

        // Generate a token and send it in response
        const token = jwt.sign({ name: trainer.name }, SECRET_KEY, { expiresIn: '1h' }); // Set an expiration time for the token
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
