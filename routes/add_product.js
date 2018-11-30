var express = require('express');
var router = express.Router();
var Todo = require('../models/Todo.js');

/* POST by PRODUCT */
router.route('/').post(function (req, res) {
	
	var p = new Todo();

	p.product_id = req.body.product_id;
	p.title = req.body.title;
    p.price = req.body.price; 
	p.instock = req.body.instock;
	p.photo = req.body.photo;

    p.save(function (err) {
        if (err) {
            res.send(err);
        }
        res.send({ message: 'Product Created !' })
		});
    
});

module.exports = router;
