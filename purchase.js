import express from "express";
import User from "../user.js";
import Book from "../book.js";
import auth from "../auth.js";

const router = express.Router();

router.post("/", auth, async (req, res) => {
  const { bookId } = req.body;
  const user = await User.findById(req.user.userId);

  if (!user.purchases.includes(bookId)) {
    user.purchases.push(bookId);
    await user.save();
  }

  res.json({ message: "Book purchased" });
});

router.get("/", auth, async (req, res) => {
  const user = await User.findById(req.user.userId).populate("purchases");
  res.json(user.purchases);
});

export default router;
