/**
 * DB Model: Example
 */
 
// @TODO: adjust the model
module.exports = function(mongoose, validator) {

	var collection = 'User';

	/**
	 * Schema
	 */
	var schema = new mongoose.Schema({
		name : {
			type     : String
		}
	});

	return mongoose.model(collection, schema);

};
