var express = require('express');
var router = express.Router();
var {studentController} = require('../controllers/student')


router.post('/createstudent',studentController.createStudent );
router.get('/getstudents', studentController.getAllStudents);

module.exports = router;