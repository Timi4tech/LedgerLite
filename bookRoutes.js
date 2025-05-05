// server/routes/bookRoutes.js

const express = require('express');
const { uploadBook } = require('../controllers/bookController');

const router = express.Router();

// @route POST /api/books/upload
router.post('/upload', uploadBook);

module.exports = router;

// server/routes/bookRoutes.js

const express = require('express');
const Book = require('/models/book.js');

// ⭐ NEW: Get Featured Books
router.get('/featured', async (req, res) => {
  try {
    const featuredBooks = await Book.find({ isFeatured: true }).limit(10);
    res.json(featuredBooks);
  } catch (error) {
    console.error('Error fetching featured books:', error);
    res.status(500).json({ message: 'Server error fetching featured books' });
  }
});

// (existing other routes below...)

module.exports = router;
