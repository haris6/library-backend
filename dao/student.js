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
    }
}

module.exports = {studentDao}