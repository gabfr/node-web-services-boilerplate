/**
 * DB Model: Example
 */
 
// @TODO: adjust the model
module.exports = function(mysql, validator) {

	var Example = function() {
		this.loadAll = function(conn, _cb) {
			var self = this;
			conn.query('SELECT * FROM user', function (err, rows) {
				_cb.call(self, rows);
			});
		};
	};

	return Example;

};
