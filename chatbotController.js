// server/controllers/chatbotController.js

const Book = require('/book.js');

exports.handleChat = async (req, res) => {
  const { message } = req.body;
  
  if (!message) return res.status(400).json({ reply: 'Please type something.' });

  let reply = '';

  if (message.toLowerCase().includes('recommend')) {
    const books = await Book.find().limit(3);
    reply = 'Here are some recommendations: ' + books.map(b => b.title).join(', ');
  } else if (message.toLowerCase().includes('find') || message.toLowerCase().includes('search')) {
    const words = message.split(' ');
    const keyword = words.slice(-1)[0]; // Last word
    const books = await Book.find({ author: { $regex: keyword, $options: 'i' } });
    reply = books.length
      ? 'Found books: ' + books.map(b => b.title).join(', ')
      : 'No books found for "' + keyword + '"';
  } else {
    reply = "I'm LedgerBot 🤖! You can ask me to 'recommend books' or 'find books by [author]'.";
  }

  res.json({ reply });
};
