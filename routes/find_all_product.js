var express = require('express');
var router = express.Router();
var Todo = require('../models/Todo.js');

/* FIND ALL PRODUCTS */
router.get('/', function(req, res, next) {
 
 Todo.find(function (err, todos) {
    if (err) return next(err);
    res.json(todos);
  });
});

module.exports = router;




