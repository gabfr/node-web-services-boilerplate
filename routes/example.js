/**
 * Routes: Example
 */
// @TODO: adjust the model
module.exports = function (app, models) {

	app.post('/example', function (req, res) {

		var user = new models.Example({
			name : req.body.name
		});

		user.save();

	});

}
