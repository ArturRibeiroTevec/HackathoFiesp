var http = require(__dirname + "/../lib/http");
var mongoose = require("mongoose");
var passport = require('passport');

http.get('/auth/facebook', passport.authenticate('facebook',{scope:['public_profile','email']}));

http.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/auth/facebook/failed' }),function(req, res) {
	res.redirect('/dashboard');
});