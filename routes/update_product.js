var express = require('express');
var router = express.Router();
var Todo = require('../models/Todo.js');

/* Update by ID */

router.put('/:product_id', function(req, res, next) {
  Todo.findOneAndUpdate({product_id: req.params.product_id}, req.body, function(err,post) {
    if (err) 
		return next(err);
    res.json(post);
	
  });
});
module.exports = router;

