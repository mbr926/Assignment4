var express = require('express');
var router = express.Router();
var Todo = require('../models/Todo.js');

/* POST by PRODUCT ID */
router.route('/:product_id').post(function (req, res) {
	var p = new Todo();
	p.product_id= req.params.product_id;
	p.title = req.body.title;
    p.price = req.body.price; 
	p.instock = req.body.instock;
	p.photo = req.body.photo;

    p.save(function (err) {
        if (err) {
            res.send(err);
        }
       res.send({ message: 'Product Created !' })
		})

});




module.exports = router;
