/**
 * Created by sneha_000 on 1/22/2016.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');

app.use(express.static(__dirname + '/public' ));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(multer());
//app.use(session({secret:"process.env.PASSPORT_SECRET"}));
app.use(cookieParser());

mongoose.connect("mongodb://localhost:27017")

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.get('/hello', function(req, res) {
    res.send('hello world');
});

require("./public/project/server/app")(app);
//require("./public/assignment/server/app")(app);
var fieldService = require("./public/assignment/server/services/field.service.server");
var userService = require("./public/assignment/server/services/user.service.server");
var formService = require("./public/assignment/server/services/form.server.service");

app.get('/someurl', function(req, res){
    console.log("Inside server js");
});

app.listen(port, ipaddress);