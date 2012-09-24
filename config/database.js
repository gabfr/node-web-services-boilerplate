/**
 * Config: Database
 */
module.exports = function (app, express, mongoose) {

	mongoose.set('host',      'localhost');
	mongoose.set('name',      'example');
	mongoose.set('auth user', '');
	mongoose.set('auth pass', '');

}
