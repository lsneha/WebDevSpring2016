/**
 * Created by sneha_000 on 1/22/2016.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var session = require('express-session');
var cookieParser = require('cookie-parser');

app.use(express.static(__dirname + '/public' ));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(multer());
app.use(session({secret:"process.env.PASSPORT_SECRET"}));
app.use(cookieParser());

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;
app.get('/hello', function(req, res) {
    res.send('hello world');
});

require("./public/Assignment/server/app.js")(app);

app.listen(port, ipaddress);