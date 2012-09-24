/**
 * Routes: Example
 */
module.exports = function (app, models) {

	app.post('/example', function (req, res) {

		var user = new models.Example({
			name : req.body.name
		});

		user.save();

	});

}
