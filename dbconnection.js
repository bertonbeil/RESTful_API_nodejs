var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'department',
  connectTimeout: 10000
});

module.exports = connection;
