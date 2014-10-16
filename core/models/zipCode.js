/**
 * Created by atruslow on 10/16/14.
 */

var mysql = require('../config/mysql');

var connection = mysql.getConnection();

connection.query('use zipcode');

var getZip = function(zipCode,callback) {
    connection.query(
        'select city as city, latitude as lat, longitude as lon from zipCode z where zipCode = "'+zipCode+'";',
        callback
    );
};

var getRadius = function (lat,lon,limit,callback) {

    var sql = 'select  zipCode,city,state,latitude,longitude ';
    sql += 'from zipCode ';
    sql += 'order by ( pow(( latitude - '+lat+'), 2) +  pow((longitude - '+lon+'),2) ) ';
    sql += 'limit ' + limit;

    connection.query(
        sql,
        callback
    );
};


module.exports = {
    getZip: getZip,
    getRadius: getRadius
};