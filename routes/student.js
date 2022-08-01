var express = require('express');
var router = express.Router();
var {studentController} = require('../controllers/student')


router.post('/createstudent',studentController.createStudent );
router.get('/getstudents', studentController.getAllStudents);
router.post('/borrowed', studentController.getBorrowedBooks);
router.put('/returnbook', studentController.returnBook);

module.exports = router;