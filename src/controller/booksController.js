import books from "../models/Book.js";

class booksController{
    static listBooks = (req, res) => {
        books.find(err, books) 
            .populate('author')
            .exec((err, books) => {
            res.status(200).json(books)
        })
    }

    static listBooksById = (req, res) => {
        const id = req.params.id;
      
        books.findById(id)
            .populate('author', 'nome')
            .exec((err, books) => {
          if(err) {
            res.status(400).send({message: `${err.message} - Id do livro não localizado.`})
          } else {
            res.status(200).send(books);
          }
        })
      }

      static listBooksByPublisher = (req, res) => {
        const editora = req.query.editora
        
        books.find({'editora': editora}, {}, (err, books) => {
          res.status(200).send(books);
          
        })
      }
      
      

    static registerBooks = (req, res) => {
        let book = new books(req.body);
        
        book.save((err) => {
          
          if(err) {
            res.status(500).send({message: `${err.message} - falha ao cadastrar livro.`})
          } else {
            res.status(201).send(book.toJSON())
          }
        })
      }

      static updateBook = (req, res) => {
        const id = req.params.id;
        
        books.findByIdAndUpdate(id, {$set: req.body}), (err) => {
          if(!err) {
            res.status(200).send({message: 'Livro atualizado com sucesso'})
          } else {
            res.status(500).send({message: err.message})
          }
        }
      }

      static deleteBook = (req, res) => {
        const id = req.params.id;
      
        books.findByIdAndDelete(id, (err) => {
          if(!err){
            res.status(200).send({message: 'Livro removido com sucesso'})
          } else {
            res.status(500).send({message: err.message})
          }
        })
      }
      
      

}

export default booksController;