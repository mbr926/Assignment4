var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
//var todosRouter = require('./routes/todos');
var createRouter= require('./routes/add_product_by_id');
var findRouter= require('./routes/find_product_by_id');
var findallRouter= require('./routes/find_all_product');

var updateRouter= require('./routes/update_product');
var deleteRouter= require('./routes/delete_product');
var addRouter= require('./routes/add_product');
var addRouter= require('./routes/add_product');


var app = express();

var mongoose = require('mongoose');
// connect to MongoDB
mongoose.connect('mongodb://localhost/todo-api').then(() =>  console.log('connection succesful'))
 .catch((err) => console.error(err));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
//app.use('/todos', todosRouter);
app.use('/add_product_by_id', createRouter);
app.use('/find_all_product', findallRouter);
app.use('/add_product', addRouter);
app.use('/find_product_by_id', findRouter);
app.use('/update_product', updateRouter);
app.use('/delete_product', deleteRouter);





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error.ejs');
});

module.exports = app;
