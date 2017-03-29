pry = require('pryjs');

var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var methodOverride = require('method-override');
var db = require('./db');

mongoose.connect('mongodb://localhost/attraction-app');

//var attractions was originally on line 16
var index = require('./routes/index');
var users = require('./routes/users');
var attractions = require('./routes/attractions');
var sessions = require('./routes/sessions');
var sessions = require('./routes/sessions');
var usersController = require('./routes/controller/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
//app.use('/attractions', attractions);
// app.use('/attractions', attractions);
// line 26 not included in updated info
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use(session({
  secret: "derpderpderpcats",
  resave: false,
  saveUninitialized: false
}));
app.use('/', index);
app.use('/users', users);
app.use('/attractions', attractions);
app.use('/sessions', sessions);
app.use('/signup',);

//line 45 in updated info

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
