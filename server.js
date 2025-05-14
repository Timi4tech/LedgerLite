// server/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./authRoutes.js');
const bookRoutes = require('./bookRoutes.js');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/auth.js', authRoutes);
app.use('/books.js', bookRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
const chatbotRoutes = require('./routes/chatbotRoutes');

app.use('/chatbot.js', chatbotRoutes);
