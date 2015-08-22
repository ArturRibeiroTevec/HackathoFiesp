var http = require(__dirname + "/../lib/http");
var path = require("path");

http.get("/", http.noCache, function(req,res){
	res.sendFile(path.resolve("public/home.html"));
});

http.get("/auth/facebook/failed", http.noCache, function(req,res){
	
});

http.get("/dashboard", http.noCache, function(req,res){
	res.sendFile(path.resolve("public/dashboard.html"));
});