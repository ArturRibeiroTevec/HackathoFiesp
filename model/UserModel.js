var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	displayName : String,
	gender : String,
	facebookId : String,
	email : String,
	accessToken: String,
	status : String,
	interest : String,
	house : {
		size : String,
		rooms : String,
		pictures : [String],
		city : String,
		state : String,
		neighborhood : String
	}
});

module.exports = mongoose.model('User', userSchema);