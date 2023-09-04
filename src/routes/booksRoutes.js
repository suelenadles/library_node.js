import express from "express";
import booksController from "../controller/booksController.js";

const router = express.Router();

router
  .get("/books", booksController.listBooks)
  .get("/books/publisher", booksController.listBooksByPublisher)
  .get("/books/:id", booksController.listBooksById)
  .post("/books", booksController.registerBooks)
  .put("/books/:id", booksController.updateBook)
  .delete("/books/:id", booksController.deleteBook)

  export default router;