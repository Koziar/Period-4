/*
    Explain and demonstrate use of the npm passportjs module
 */
/*
 Passport is authentication middleware for Node.
 It is designed to serve a singular purpose: authenticate requests.
 When writing modules, encapsulation is a virtue, so Passport delegates all other functionality to the application.
 This separation of concerns keeps code clean and maintainable, and makes Passport extremely easy
 to integrate into an application.
 */

//Setting up the passport module:
var passport = require('passport'),
    mongoose = require('mongoose');

module.exports = function () {
    var User = mongoose.model('User');

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        User.findOne({
            _id: id
        }, '-password -salt', function (err, user) {
            done(err, user);
        });
    });
    require('./strategies/local')();
    require('./strategies/facebook')();
};

//Configuring the local-strategy
var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    User = require('mongoose').model('User');

module.exports = function () {
    passport.use(new LocalStrategy(function (username, password, done) {
        User.findOne({
            username: username
        }, function (err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, {
                    message: 'Unknown user'
                });
            }
            if (!user.authenticate(password)) {
                return done(null, false, {
                    message: 'Invalid password'
                });
            }
            return done(null, user);
        });
    }));
};

//Using in the routes file:
var users = require('../../app/controllers/users.server.controller'),
    passport = require('passport');

module.exports = function (app) {
    app.route('/signup')
        .get(users.renderSignup)
        .post(users.signup);

    app.route('/signin')
        .get(users.renderSignin)
        .post(passport.authenticate('local', { // <-------- <-------- <------- <-------
            successRedirect: '/',
            failureRedirect: '/signin',
            failureFlash: true
        }));
}