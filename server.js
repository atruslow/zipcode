var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var router = require('./core/config/router');

var app = express();

var port = parseInt(process.env.PORT,10) || 8080 ;

app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(__dirname + '/'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');
app.engine('html', ejs.renderFile);

router.bootstrap(app);

app.get('/', function (req, res) {
    res.render('index.html');
});

app.get('*', function (req, res) {
    res.render('index.html');
});


app.listen(port);
console.log('Server running on port '+ port);

