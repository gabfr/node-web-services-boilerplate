/**
 * Dependecies
 */
var http      = require('http');
var express   = require('express');
var mysql 	  = require('mysql');
var socketio  = require('socket.io');

/**
 * Init
 */
var app      = express();
var server   = http.createServer(app);
var io       = socketio.listen(server)

var db = {
	mysql: mysql,
	config: null,
	pool: null
};

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
require('./bootstrap')(app, express, db);



var port = app.get('system port');
server.listen(port);
console.log(app.get('app title').cyan + ' started on port ' + port.toString().cyan);
/*
how should use?
dbPool.getConnection(function(err, conn) {
	conn.query('USE ' + mysql.escapeId(mysql._config.dbName), function(err, res) {
		
	});
});
*/
