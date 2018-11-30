var express = require('express');
var router = express.Router();
var Todo = require('../models/Todo.js');

/* DELETE PRODUCT by ID */

router.delete('/:product_id', function(req, res, next) {



Todo.findOneAndRemove({product_id: req.params.product_id}, req.body, function(err,post)
{
    if(!err){
       res.send({ message: 'Product DELETED !' })
    }
	
});
});
module.exports = router;
