const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const app = express();
const PORT = 5002;
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
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});
const User = mongoose.model('User', userSchema);

// Login and generate JWT token
app.post('/api/login', async (req, res) => {
    console.log("Login request received:", req.body); // Log the request body
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        }

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        const token = jwt.sign({ userId: user._id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        console.error("Error during login:", err); // Log the error for debugging
        res.status(500).json({ message: err.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`User server running on http://localhost:${PORT}`);
});
