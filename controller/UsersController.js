var http = require(__dirname + "/../lib/http");
var multer  = require('multer');
var upload = multer({ dest: 'public/uploads/' })
var UserModel = require(__dirname +'/../model/UserModel');

http.get("/services/users/me", http.noCache, function(req,res){
	res.json(req.user);
});

http.get("/services/users/list", http.noCache, function(req,res){
	console.log({house : {neighborhood : req.user.interest}})
	UserModel.find({"house.neighborhood" : req.user.interest}, function(err, results){
		console.log(results.length)
		res.json(results);
	});
});

http.post("/services/users/upload", upload.array('pic', 4) ,http.noCache, function(req,res){
	var fileNames = [];

	for(var i=0; i<req.files.length; i++){
		fileNames.push(req.files[i].filename)
	}

	res.json(fileNames)
});

http.post("/services/users/saveInformation" ,http.noCache, function(req,res){

	UserModel.findById(req.body._id, function(err,user){
		user.house = req.body.house;
		user.interest = req.body.interest;
		user.status = "FINISHED";
		user.save(function(err){
			if(!err){
				res.json({status:"ok"})
			}else{
				res.json({status:"error"})
			}
		});
	});
});

http.post("/services/users/savePreference" ,http.noCache, function(req,res){

	UserModel.findById(req.body._id, function(err,user){
		
		user.preference = true;
		
		user.save(function(err){
			if(!err){
				res.json({status:"ok"})
			}else{
				res.json({status:"error"})
			}
		});
	});
});