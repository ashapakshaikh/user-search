var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    requireDir = require('require-dir'),
    path = require('path');

var controllers = requireDir('./server/controller/api');
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));




app.use(express.static(path.join(__dirname, 'client')));
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type,x-username,x-token');
    next();
};
app.use(allowCrossDomain);

var router = express.Router();
var routes = require('./server/router');

router.get('/', function (req, resp) {
    resp.sendfile(__dirname + '/client/index.html');
});

routes.register(router);
app.use('/api', router);


app.listen(8001, function () {
    console.log("Welcome to Dew and Dine.. server started at 7000")
})
module.exports = app;
