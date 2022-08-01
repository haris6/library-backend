const {studentService} = require('../service/student');

const studentController = {
    createStudent: async (req,res,next) => {
        try{
            const id = await studentService.createStudent(req.body.fname,req.body.lname);
            res.status(201).json(id);
        }
        catch(err){
            res.status(500).json(err);
        }
    },

    getAllStudents: async (req,res,next) => {
        try{
            const data = await studentService.getAllStudents();
            res.status(200).json(data);
        }
        catch(err){
            res.status(500).json(err);        
        }
    },

    getBorrowedBooks: async (req,res,next) => {
        try{
            const id = parseInt(req.body.id);
            const data = await studentService.getBorrowedBooks(id);
            res.status(200).json(data);
        }
        catch(err){
            res.status(500).json(err.message);
        }
    },

    returnBook: async (req,res,next) => {
        try{
            const id = parseInt(req.body.id);
            const data = await studentService.returnBook(id);
            res.status(200).json(data);
        }
        catch(err){
            res.status(500).json(err.message);
        }
    }
}

module.exports = {studentController}