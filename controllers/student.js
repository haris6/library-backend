const {studentService} = require('../service/student');

const studentController = {
    createStudent: async (req,res,next) => {
        try{
            const id = await studentService.createStudent(req.body.fname,req.body.lname);
            res.status(201).json(id);
        }
        catch(err){
            console.log(err);
        }
    },

    getAllStudents: async (req,res,next) => {
        try{
            const data = await studentService.getAllStudents();
            res.status(200).json(data);
        }
        catch(err){
            console.log(err)
        }
    }
}

module.exports = {studentController}