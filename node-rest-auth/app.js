var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var helmet = require('helmet');

var passport = require("passport");
var passportConfig = require("./config/passport");
passportConfig(passport);

var routes = require('./routes/index');
var users = require('./routes/users');
var restApi = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// log to console
app.use(logger('dev'));
// get our request parameters
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.disable('x-powered-by'); // disable header detecting that app runs by express

app.use('/', routes); // default
app.use('/users', users); // default

app.use('/api', function (req, res, next) {
    passport.authenticate('jwt', {session: false}, function (err, user, info) {
        if (user) {
            return next();
        }
        if (err) {
            res.status(403).json({mesage: "1. Token could not be authenticated", fullError: err.toString()})
        }
        return res.status(403).json({mesage: "2. Token could not be authenticated", fullError: info.toString()});
    })(req, res, next);
});

app.use('/api', restApi);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers:

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
