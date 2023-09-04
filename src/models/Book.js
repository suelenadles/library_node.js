import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
    {
        id: {type: String},
        titulo: {type: String, required: true},
        autor: {type: mongoose.Schema.Types.ObjectId, ref: 'authors', required: true},
        editora: {type: String, required: true},
        numeroPaginas: {type: Number}
      }

);

const books = mongoose.model('livros', bookSchema)

export default books;
