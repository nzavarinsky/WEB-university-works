var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BearSchema   = new Schema({
	title: String,
	description: String
});

module.exports = mongoose.model('Bear', BearSchema);