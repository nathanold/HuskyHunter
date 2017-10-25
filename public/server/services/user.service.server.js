var app = require('../../../express');
var userModel = require('../models/user.model.server');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(localStrategy));
passport.serializeUser(serializeUser);
passport.deserializeUser(deserializeUser);

app.get('/api/users', findAllUsers);

app.get('/api/user/username/:username', findUserByUsername); //fix this!
app.get('/api/user/username/:username/password/:password', findUserByCredentials);
app.get('/api/user/:userId', findUserById);

app.post('/api/login', passport.authenticate('local'), login);
app.get('/api/checkLoggedIn', checkLoggedIn);
app.get('/api/checkAdmin', checkAdmin);

app.post('/api/logout', logout);

function localStrategy(username, password, done) {
    console.log('authenticating on the server side.')
    userModel
        .findUserByUsername(username)
        .then(
            function (user) {
                if (password == user.password) {
                    console.log('passwords match');
                    return done(null, user);

                } else {
                    console.log('no match');
                    return done(null, false);
                }
            },
            function (err) {
                if (err) {
                    return done(err);
                }
            }
        );
}
function login2(req, res) {
    console.log('login 2')
}
function login(req, res) {
    console.log('user, loggin in');
    var user = req.user;
    res.json(user);
}
function logout(req, res) {
    req.logout();
    res.sendStatus(200);
}

function findUserByCredentials(req, res) {
    var username = req.params.username;
    var password = req.params.password;
    userModel
        .findUserByCredentials(username, password)
        .then(function (user) {
            res.json(user);
        }, function (err) {
            res.send(err);
        });
}

function findUserByUsername(req, res) {
    var username = req.params.username;
    console.log('finding by username in the server.');
    userModel
        .findUserByUsername(username)
        .then(function (user) {
            console.log('a user was found');
            res.send(user);
        }, function (err) {
            console.log('an error occurred');
            res.send(err);
        });
}

function findAllUsers(req, res) {
    userModel
        .findAllUsers()
        .then(function (users) {
            res.send(users);
        }, function (err) {
            res.send(err);
        });
}

function findUserById(req, res) {
    var userId = req.params['userId'];
    userModel
        .findUserById(userId)
        .then(function (user) {
            res.json(user);
        }, function (err) {
            res.send(err);
        });
}

function serializeUser(user, done) {
    done(null, user);
}

function deserializeUser(user, done) {
    userModel
        .findUserById(user._id)
        .then(
            function (user) {
                done(null, user);
            },
            function (err) {
                done(err, null);
            }
        );
}
function checkLoggedIn(req, res) {
    if (req.isAuthenticated()) {
        res.json(req.user);
    }
    else {
        res.send('0');
    }
}

function checkAdmin(req, res) {
    if (req.isAuthenticated() && req.user.roles.indexOf('ADMIN') > -1) {
        res.json(req.user);
    }
    else {
        res.send('0');
    }
}