const {bookService} = require('../service/book');

const bookController = {
    createBook: async (req,res,next) => {
        try{
            const id = await bookService.createBook(req.body.name,req.body.author);
            res.status(201).json(id);
        }
        catch(err){
            res.status(500).json(err);        
        }
    },

    getAllBooks: async (req,res,next) => {
        try{
            const data = await bookService.getAllBooks();
            res.status(200).json(data);
        }
        catch(err){
            res.status(500).json(err);        
        }
    },
}

module.exports = {bookController}