'use strict';

var express = require('express');
var router = express.Router();

/* GET users listing. */

var User = require('../models/user');

router.post('/register', function (req, res) {
  console.log('register', req.body);
  User.register(req.body, (err, token) => {
    if (err) return res.status(400).send(err);
    res.send(token);
  });
});

router.post('/login', function (req, res) {
  User.login(req.body, (err, token) => {
    if (err) return res.status(400).send(err);
    res.send(token);
  });
});

// route for home page
router.get('/', function(req, res) {
    res.render('index.ejs'); // load the index.ejs file
});

// route for login form
// route for processing the login form
// route for signup form
// route for processing the signup form

// route for showing the profile page
router.get('/profile', isLoggedIn, function(req, res) {
    res.render('profile.ejs', {
        user : req.user // get the user out of session and pass to template
    });
});

// =====================================
// FACEBOOK ROUTES =====================
// =====================================
// route for facebook authentication and login
// router.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));
//
// // handle the callback after facebook has authenticated the user
// router.get('/auth/facebook/callback',
//     passport.authenticate('facebook', {
//         successRedirect : '/profile',
//         failureRedirect : '/'
//     }));
//
// // route for logging out
// router.get('/logout', function(req, res) {
//     req.logout();
//     res.redirect('/');
// });


module.exports = router;

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
