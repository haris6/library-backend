const {bookDao} = require('../dao/book')

const bookService = {
    createBook: async (name,author) => {
        return bookDao.createBook(name,author); 
    },

    getAllBooks: async() => {
        return bookDao.getAllBooks();
    }
}

module.exports = {bookService}