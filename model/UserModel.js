var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	displayName : String,
	gender : String,
	facebookId : String,
	email : String,
	accessToken: String
});

module.exports = mongoose.model('User', userSchema);