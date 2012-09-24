/**
 * Dependecies
 */
var http      = require('http');
var express   = require('express');
var mongoose  = require('mongoose');
var socketio  = require('socket.io');

/**
 * Init
 */
var app      = express();
var server   = http.createServer(app);
var io       = socketio.listen(server)

/**
 * uncaughtException handler
 */
process.on('uncaughtException', function(err) {
	console.log('Error: '.red + err);
	process.exit(1);
});;

/**
 * Load Resources
 */
require('./bootstrap')(app, express, mongoose);

/**
 * DB Connection
 */
var db = mongoose.connect(
	mongoose.get('host'),
	mongoose.get('name'),
	{
		user : mongoose.get('auth user'),
		pass : mongoose.get('auth pass')
	}
);

mongoose.connection.on('error', function(err) {
	console.log('Error: '.red + err);
	process.exit(1);
});

mongoose.connection.on('connected', function() {
	/**
	 * Start!
	 */
	var port = app.get('system port');
	server.listen( port );
	console.log(app.get('app title').cyan + ' started on port ' + port.toString().cyan);
});
