var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// const { redisClient, RedisStore, session } = require("./database/redis");

var passport = require('passport')


var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


/* app.use(
	session({
		secret: "secret#123",
		store: new RedisStore({client: redisClient}),
		resave: false,
		saveUninitialized: false,
		cookie: {
			secure: false,
			httpOnly: false,
			maxAge: 1000 * 60 * 10,
		},
	}),
); */

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
require("./middlewares/passport")(passport)
app.use('/passport',require('./routes/passport'))
app.use('/', indexRouter);
app.use('/users', usersRouter);



module.exports = app;
