var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var flash  = require('connect-flash');
var params = require('express-params');
var expressSession = require('express-session');
var expressValidator = require('express-validator');
var LocalStrategy = require('passport-local').Strategy;
var multer  = require('multer');
var deldata = require('./routes/showroute');
var updatedata  = require('./routes/update');
//var deldata = require('./routes/delroute')
var indata = require('./routes/inroute');
var productdata = require('./routes/products');
var edituser = require('./routes/edit');
var editpro = require('./routes/proEdit');
var logins = require('./routes/login');
var find = require('./routes/search');
var result = require('./routes/result');
var inpro = require('./routes/insertpro');
var app = express();
app.use(require('express-ajax'));
//app.use(express.static('/images'));
app.use(express.static(path.join(__dirname, 'images')));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressValidator());
app.use(expressSession({
    secret: 'max',
    saveUninitialized: true,
    resave: true
}));
app.use('/index', index);
app.use('/products', productdata);
app.use('/showdata', deldata);
app.use('/update', updatedata);
app.use('/insert', indata);
app.use('/edit', edituser) ;
app.use('/login', logins) ;
app.use('/search', find)
app.use('/search/result', result)
app.use('/insertpro', inpro) ;
app.use('/editpro', editpro) ;


app.use(flash());
//app.use('/showdata', deldata);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});



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
