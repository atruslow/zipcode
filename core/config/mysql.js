/**
 * Created by atruslow on 10/16/14.
 */

var mysql = require('mysql');


var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root'
});

connection.connect();

module.exports.getConnection = function () {
    return connection;
};