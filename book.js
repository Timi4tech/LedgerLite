// server/models/Book.js

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String },
  coverImage: { type: String },
  description: { type: String },
  price: { type: Number },
  isFeatured: { type: Boolean, default: false }, // ⭐ Make sure this exists
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
