/**
 * Routes: Example
 */
// @TODO: adjust the model
module.exports = function (app, models, db) {

	app.get('/user', function(req, res) {
		db.pool.getConnection(function(err, conn) {
			models.Example.loadAll(conn, function(rows) {
				res.send(rows);
				conn.end();
			});
		});
	});

}
