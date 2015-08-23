var express = require('express');
var multer  = require('multer');
var app = express();
var passport = require(__dirname + '/passport');
var config = require("config");
var path = require("path");
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser')
var uuid = require('node-uuid');

var upload = multer({ dest: 'public/uploads/' })

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.isLoggedIn = function(req, res, next) {
    if (req.user)
        return next();
    res.redirect("/");
};

app.isAdmin = function(req, res, next) {
    //if (!req.user)
        return next();
    //res.redirect("/");
};

app.noCache = function(req, res, next) {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    next();
};

app.use(cookieParser());
app.use(session({
  genid: function(req) {
    return uuid.v4() // use UUIDs for session IDs 
  },
  secret: 'keyboard cat'
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/../public'));
app.use('/bower', express.static(__dirname + '/../bower_components'));
//app.use('/admin', app.isLoggedIn, app.isAdmin, express.static(__dirname + '/../templates/admin/' + config.get("template.admin")));
//app.use(express.static(__dirname + '/../templates/blog/' + config.get("template.blog")));

module.exports = app;