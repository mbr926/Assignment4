var express = require('express');
var router = express.Router();
var Todo = require('../models/Todo.js');

/* find a product by ID */


router.get('/:product_id', function(req, res, next) {
  Todo.findOne({product_id: req.params.product_id}, req.body, function(err,get) {
    if (err) 
		return next(err);
    res.json(get);
	
  });
});
module.exports = router;





