const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const router = express.Router();

// Register user
router.post("/register", async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        // Create new user
       // Hash password before saving
const hashedPassword = await bcrypt.hash(password, 10);

// Create new user
const user = new User({
    name,
    email,
    password: hashedPassword,
    role: role || "tenant"
});

        await user.save();

        res.status(201).json({
            message: "Registration successful",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        res.status(500).json({
            message: "Registration failed",
            error: error.message
        });
    }
});
// Login user
router.post("/login", async (req, res) => {
    try {
        const { email, password, role } = req.body;

        // Find user
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "User not found"
            });
        }

        // Check password
const passwordMatch = await bcrypt.compare(password, user.password);

if (!passwordMatch) {
    return res.status(400).json({
        message: "Incorrect password"
    });
}

        // Check role
        if (user.role !== role) {
            return res.status(400).json({
                message: "Incorrect account type"
            });
        }

        res.status(200).json({
            message: "Login successful",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        res.status(500).json({
            message: "Login failed",
            error: error.message
        });
    }
});
module.exports = router;