// server/controllers/bookController.js

const Book = require('/models/book.js');

exports.uploadBook = async (req, res) => {
  try {
    const { title, author, price } = req.body;

    const newBook = new Book({ title, author, price });
    await newBook.save();

    res.status(201).json({ message: '✅ Book uploaded successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
