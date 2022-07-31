const {bookService} = require('../service/book');

const bookController = {
    createBook: async (req,res,next) => {
        try{
            const id = await bookService.createBook(req.body.name,req.body.author);
            res.status(201).json(id);
        }
        catch(err){
            console.log(err);
        }
    },

    getAllBooks: async (req,res,next) => {
        try{
            const data = await bookService.getAllBooks();
            res.status(200).json(data);
        }
        catch(err){
            console.log(err)
        }
    }
}

module.exports = {bookController}