require('./database/db')
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')

const indexRouter = require('./routes/index');
const areasRouter = require('./routes/areas');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login')
const registerAdminRouter = require('./routes/registerAdmin')
const loginAdminRouter = require('./routes/loginAdmin')
const turnosRouter = require ('./routes/turno')

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/', indexRouter);
app.use('/areas', areasRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter)
app.use('/registerAdmin', registerAdminRouter)
app.use('/loginAdmin', loginAdminRouter)
app.use('/turnos',turnosRouter)

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
  res.render('error');
});

module.exports = app;
