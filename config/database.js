/**
 * Config: Database
 */
module.exports = function (app, express, mysql) {

	mysql._config = {
		host: 'localhost',
		user: 'root',
		password: '123456',
		dbName: 'webservice'
	};

}
