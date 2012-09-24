/**
 * Load Resources
 */

var CONFIG_DIR = './config';
var MODELS_DIR = './models';
var ROUTES_DIR = './routes';

var fs      = require('fs');
var path    = require('path');
var colors  = require('colors');

module.exports = function(app, express, mongoose) {

	/**
	 * Configuration
	 */

	fs.readdirSync(CONFIG_DIR).forEach(function (file) {
		var pathname = CONFIG_DIR + '/' + file;
		require(pathname)(app, express, mongoose);
		console.log('Loaded: '.green + pathname);
	});

	/**
	 * Models
	 */
	var models = {};
	fs.readdirSync(MODELS_DIR).forEach(function (file) {
		var pathname = MODELS_DIR + '/' + file;
		models[ path.basename(file, '.js') ] = require(pathname)(mongoose);
		console.log('Loaded: '.green + pathname);
	});

	/**
	 * Routes
	 */
	fs.readdirSync(ROUTES_DIR).forEach(function (file) {
		var pathname = ROUTES_DIR + '/' + file;
		require(pathname)(app, models);
		console.log('Loaded: '.green + pathname);
	});

}
