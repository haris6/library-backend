const {bookDao} = require('../dao/book')

const bookService = {
    createBook: async (name,author) => {
        return bookDao.createBook(name,author); 
    },

    getAllBooks: async() => {
        return bookDao.getAllBooks();
    },

    Borrow: async(bid,sid,bdate,rdate) =>{
        return bookDao.Borrow(bid,sid,bdate,rdate);
    }
}

module.exports = {bookService}