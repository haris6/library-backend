const {studentDao} = require('../dao/student')

const studentService = {
    createStudent: async (fname,lname) => {
        return studentDao.createStudent(fname,lname); 
    },

    getAllStudents: async() => {
        return studentDao.getAllStudents();
    }
}

module.exports = {studentService}