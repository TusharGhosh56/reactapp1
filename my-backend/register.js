const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt'); // For password hashing

const app = express();
const PORT = 5000; // Make sure this matches the port used in your frontend API call

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON data from requests

// Connect to MongoDB (replace the connection string with your MongoDB URI)
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Define User Schema and Model
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Password will be hashed
});

const User = mongoose.model('User', userSchema);

// Register a new user
app.post('/api/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if the user already exists in the database
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists with this email.' });
        }

        // Hash the password before saving it to the database
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create a new user with the hashed password
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });

        // Save the new user to the database
        await newUser.save();

        // Respond with success
        res.status(201).json({ message: 'User registered successfully', user: { name, email } });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
