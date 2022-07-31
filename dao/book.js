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
    }
}

module.exports = {bookDao}