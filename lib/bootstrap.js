var mongoose = require('mongoose');
var Promise = require('promise');
var config = require('config');
var http = require(__dirname + "/http.js");
var log = require(__dirname + "/log.js");


function connectDatabase() {
    log.info("Connecting to database...");
    return new Promise(function(fulfill, reject) {
        mongoose.connect('mongodb://' + config.get("db.host") + '/' + config.get("db.name"));
        var db = mongoose.connection;
        db.on('error', reject);
        db.once('open', fulfill);
    });
}

function loadSchemas() {
    log.info("Loading schemas...");
    return new Promise(function(fulfill, reject) {
        require('requi')(__dirname + "/../model/");
        fulfill();
    });
}

function chargeDatabase() {
    log.info("Checking database data...");
    var UserModel = require(__dirname + "/../model/UserModel");
    return new Promise(function(fulfill, reject) {
        UserModel.count({}, function(err,c) {
        	if(err) return reject(err);
        	if(c>0) return fulfill();

        	log.warn("There no users on database, an user will be created> admin:admin");
        	var user = new UserModel({username: "admin", password: "admin"});
        	user.save(function(err){
        		if(err) return reject(err);
        		fulfill();
        	});
        });
    });
}

function loadRoutes() {
    log.info("Loading controllers...");
    return new Promise(function(fulfill, reject) {
        require('requi')(__dirname + "/../controller/");
        fulfill();
    });
}

function setupHTTPServer() {
    log.info("Starting HTTP Server...");
    return new Promise(function(fulfill, reject) {
        var server = http.listen(config.get("http.port"), function() {

            var host = server.address().address;
            var port = server.address().port;

            log.info('Hackathon is running at http://%s:%s', host, port);
            fulfill();
        });
    });
}

module.exports = {
    setup: function() {
        return new Promise(function(fulfill, reject) {
            return connectDatabase()
                .then(loadSchemas)
                /*.then(chargeDatabase)*/
                .then(loadRoutes)
                .then(setupHTTPServer)
                .catch(reject)
                .done(fulfill);
        });
    }
}