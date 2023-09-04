import express from "express";
import AuthorController from "../controller/authorController";

const router = express.Router();

router
  .get("/authors", AuthorController.listAuthor)
  .get("/authors/:id", AuthorController.listAuthorsForId)
  .post("/authors", AuthorController.registerAuthor)
  .put("/authors/:id", AuthorController.updateAuthor)
  .delete("/authors/:id", AuthorController.deleteAuthor)

  export default router;