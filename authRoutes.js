// server/routes/authRoutes.js

const express = require('express');
const { registerUser, loginUser } = require('../authController.js');

const router = express.Router();

// @route POST /api/auth/register
router.post('/register.js', registerUser);

// @route POST /api/auth/login
router.post('/login.js', loginUser);

module.exports = router;
