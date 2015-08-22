var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	displayName : String,
	gender : String,
	facebookId : String,
	email : String
});

module.exports = mongoose.model('User', userSchema);