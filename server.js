var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var session = require('express-session');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');

app.use(express.static(__dirname + '/public/dabbling/mongo/pageEditor/client' ));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//why not just multer()
app.use(multer());
//app.use(session({secret:"process.env.PASSPORT_SECRET"}));
app.use(cookieParser());
app.use(session({
    secret: 'this is the secret',
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

var connectionString = 'mongodb://127.0.0.1:27017/';
var db = mongoose.connect(connectionString);

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.get('/hello', function(req, res) {
    res.send('hello world');
});

var fieldService = require("./public/assignment/server/services/field.service.server");
var userService = require("./public/assignment/server/services/user.service.server");
var formService = require("./public/assignment/server/services/form.server.service");

//require("./public/assignment/server/app.js")(app, db, mongoose);
require("./public/project/server/app.js")(app, db, mongoose);
require("./public/dabbling/mongo/pageEditor/server/app.js")(app, db, mongoose);

app.get('/someurl', function(req, res){
    console.log("Inside server js");
});

app.listen(port, ipaddress);