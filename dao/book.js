const db = require('../db/db');

const bookDao = {
    createBook: async (name,author) => {
        const [id] = await db('books').insert({
            name: name,
            author: author,
        }).returning('id');
        return id;
    },

    getAllBooks: async () => {
        const data = await db('books').select();
        return data;
    },

    Borrow: async (bid,sid,bdate,rdate) => {
        const data = await db('books').where('id',bid).update({borrowed_by:sid,date_of_borrow:bdate,expected_date_of_return:rdate}).returning('id');
        return data
    }
}

module.exports = {bookDao}