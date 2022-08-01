const {studentDao} = require('../dao/student')

const studentService = {
    createStudent: async (fname,lname) => {
        return studentDao.createStudent(fname,lname); 
    },

    getAllStudents: async() => {
        return studentDao.getAllStudents();
    },

    getBorrowedBooks: async (id) =>{
        return await studentDao.getBorrowedBooks(id);
    },

    returnBook: async (id) => {
        return await studentDao.returnBook(id);
    }
}

module.exports = {studentService}