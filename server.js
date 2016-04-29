var express       = require('express');
var app           = express();
var bodyParser    = require('body-parser');
var multer        = require('multer');
var passport      = require('passport');
var cookieParser  = require('cookie-parser');
var session       = require('express-session');
var mongoose      = require('mongoose');
var flash         = require('connect-flash');

//app.use(express.static(__dirname + '/public/project/client' ));
app.use(express.static(__dirname + '/public' ));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(multer());
//app.use(session({secret:"process.env.PASSPORT_SECRET"}));
app.use(cookieParser());
app.use(session({
    secret: process.env.SESSION_SECRET || 'this is the secret',
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 1800000, //previously set to just 1800 - which was too low
        httpOnly: true
    }
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

var connectionString = 'mongodb://localhost/project-db';
mongoose.connect(connectionString);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log("Successful connection...");
});

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.get('/hello', function(req, res) {
    res.send('hello world');
});

//require("./public/assignment/server/app.js")(app, db, mongoose);
require("./public/project/server/app.js")(app, db, mongoose);
//require("./public/dabbling/mongo/pageEditor/server/app.js")(app, db, mongoose);
//require("./public/dabbling/passport/app/app.js")(app);

app.get('/someurl', function(req, res){
    console.log("Inside server js");
});

app.listen(port, ipaddress);