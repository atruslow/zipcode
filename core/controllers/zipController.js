/**
 * Created by atruslow on 10/16/14.
 */
var zipModel = require('../models/zipCode');


module.exports.controller = function (app) {
    app.get('/api/zip/:id', function (req, res) {

        zipModel.getZip(req.params.id,
            function (err, rows, fields) {
                if (err) throw err;

                res.send( rows[0] );
        });
    });


    app.get('/api/radius', function (req, res) {

        var lat = req.query.lat;
        var lon = req.query.lon;
        var n =  req.query.n;


        zipModel.getRadius(lat,lon,n,
            function (err, rows, fields) {
                if (err) throw err;

                res.send( rows );
            });

    });


};