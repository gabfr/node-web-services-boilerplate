/**
 * Config: Middleware
 */
module.exports = function (app, express, mongoose) {

	app.use(express.bodyParser());
	app.use(app.router);
	app.use(express.errorHandler({
		dumpExceptions : true,
		showStack : true
	}));

}
