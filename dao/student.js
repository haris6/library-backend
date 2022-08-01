const db = require('../db/db');

const studentDao = {
    createStudent: async (fname,lname) => {
        const [id] = await db('students').insert({
            first_name: fname,
            last_name: lname,
        }).returning('id');
        return id;
    },

    getAllStudents: async () => {
        const data = await db('students').select();
        return data;
    },

    getBorrowedBooks: async (id) => {
        const data = await db('books').where('borrowed_by',id).select();
        return data;
    },

    returnBook: async (id) => {
        const data = await db('books').where('id',id).update({borrowed_by:null,date_of_borrow:null,expected_date_of_return:null}).returning('id');
        return data;
    }
}

module.exports = {studentDao}