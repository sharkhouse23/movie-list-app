// connect mysql to DB
// formulate get and post query

var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'movie_list'
});
 
// not necessary if query is used;
// connection.connect();

let getAllMovies = function(callback) {

	connection.query('Select * from movies', function (error, results) {
		if (error) {
			callback(error, null);
		} else {
			callback(null, results)
		}
	})
}

let insertMovie = function(title, callback) {

	var query = `INSERT into movies (title) VALUES (?)`
	connection.query(query, [title], function (error, results) {
		if (error) {
			callback(error, null);
		} else {
			callback(null, results)
		}
	})
}

module.exports.getAllMovies = getAllMovies;
module.exports.insertMovie = insertMovie;