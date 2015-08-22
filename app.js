var bootstrap = require("./lib/bootstrap.js");

bootstrap.setup().done(function(){
	console.log("ready");
},function(err){
	console.log("Ops! "+err);
	console.log(err.stack)
	process.exit(1);
});