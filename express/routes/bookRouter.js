// routes/bookRouter.js
const { Router } = require("express");

const bookRouter = Router();

bookRouter.get("/", (req, res) => res.send("All books"));
bookRouter.get("/:bookId", (req, res) => {
  const { authorId } = req.params;
  res.send(`Book ID: ${authorId}`);
});
bookRouter.post("/:bookId/reserve", (req, res) => {
  const { bookId } = req.params;
  res.send(`Got a POST request with bookID: ${bookId}`);
});

module.exports = bookRouter;
