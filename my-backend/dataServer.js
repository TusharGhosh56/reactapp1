const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 5003;
const SECRET_KEY = process.env.SECRET_KEY || "your-secret-key";

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// Define User Schema and Model
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }
});
const User = mongoose.model('User', userSchema);

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(403).json({ error: 'No token provided' });
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Invalid token' });
        }
        req.user = user; // Attach user info to the request object
        next();
    });
};

// Protected route to fetch users
app.get('/api/users', authenticateToken, async (req, res) => {
    try {
        const users = await User.find({}, 'name email'); // Fetch users, only select name and email
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching users' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Data server running on http://localhost:${PORT}`);
});
