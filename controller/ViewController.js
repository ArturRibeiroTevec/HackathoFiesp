var http = require(__dirname + "/../lib/http");

http.get("/", http.noCache, function(req,res){
	res.json({status : "Hello"});
});

http.get("/auth/facebook/failed", http.noCache, function(req,res){
	
});

http.get("/dashboard", http.noCache, function(req,res){
	res.json({status : "Hello"});
});