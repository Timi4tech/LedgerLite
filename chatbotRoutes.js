// server/routes/chatbotRoutes.js

const express = require('express');
const { handleChat } = require('../controllers/chatbotController');

const router = express.Router();

router.post('/query', handleChat);

module.exports = router;
