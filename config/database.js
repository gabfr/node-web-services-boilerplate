/**
 * Config: Database
 */
module.exports = function (app, express, db) {

	db.config = {
		host: 'localhost',
		user: 'root',
		password: '123456',
		dbName: 'webservice'
	};

}
