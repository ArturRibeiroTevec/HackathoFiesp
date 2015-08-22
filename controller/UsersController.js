var http = require(__dirname + "/../lib/http");

http.get("/services/users/me", http.noCache, function(req,res){
	res.json(req.user);
});