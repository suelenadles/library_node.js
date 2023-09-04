import express from "express";
import books from "./booksRoutes.js";
import authors from "../models/author.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
      res.status(200).send({titulo: "New Project"})
    })

    app.use(
        express.json(),
        books,
        authors
      )
    }
    
    export default routes;