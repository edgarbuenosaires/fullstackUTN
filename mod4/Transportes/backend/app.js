var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Subida de imagenes
var fileUpload = require('express-fileupload');

var cors = require('cors');

//Conectamos con el .env de la BD
require('dotenv').config();

//Variables de sesion
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// Login
var loginRouter = require('./routes/admin/login');
var adminRouter = require('./routes/admin/novedades');

var apiRouter = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// las variables de sesion se colocan antes del indexrouter
app.use(session({
  secret: 'PW2021awqyeudj',
  resave: false,
  saveUninitialized: true
}))

secured = async (req, res, next) => {
  try {
    console.log(req.session.id_usuario);
    if (req.session.id_usuario) {
      next();
    } else {
      res.redirect('/admin/login');
    }// cierro else
  } catch (error) {
    console.log(error);
  }//cierro catch error
}// cierro secured

app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/'
}))

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/admin/login', loginRouter);
app.use('/admin/novedades', adminRouter);

app.use('/api', cors(), apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
