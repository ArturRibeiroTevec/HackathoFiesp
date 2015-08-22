var express = require('express');
var app = express();
var passport = require(__dirname + '/passport');
var config = require("config");
var path = require("path");
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.isLoggedIn = function(req, res, next) {
    if (!req.user)
        return next();
    res.redirect("/signin");
};

app.isAdmin = function(req, res, next) {
    if (!req.user)
        return next();
    res.redirect("/signin");
};

app.noCache = function(req, res, next) {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    next();
};

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/../public'));
app.use('/bower', express.static(__dirname + '/../bower_components'));
//app.use('/admin', app.isLoggedIn, app.isAdmin, express.static(__dirname + '/../templates/admin/' + config.get("template.admin")));
//app.use(express.static(__dirname + '/../templates/blog/' + config.get("template.blog")));

module.exports = app;