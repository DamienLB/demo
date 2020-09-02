const mysql = require('mysql2');

//local mysql db connection
const connection = mysql.createConnection({
    host     : 'db',
    user     : 'root',
    password : 'pass',
    database:  'demo'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;