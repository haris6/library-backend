var express = require('express');
var router = express.Router();
var {bookController} = require('../controllers/book')

router.post('/createbook',bookController.createBook );
router.get('/getbooks', bookController.getAllBooks );
router.put('/borrow', bookController.Borrow );

module.exports = router;