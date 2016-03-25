/**
 * Created by sneha_000 on 3/23/2016.
 */
var express = require('express');
var app = express();

//app.use will point to the directory that has the static content to be displayed
app.use(express.static(__dirname + '/public'));

//if we use app.use('/public') then the index file in the folder will be automatically reflected when we go to localhost:3000/ and the app.get('/'...) will not work
app.get('/', function(req, res) {
    res.send('Hello world from server! :)');
})

app.get('/api/users', function(req, res) {
  var users = [
      {username: 'Sneha', game: 'GTA San Andreas'},
      {username: 'Mom', game: 'Chinese Chequers'},
      {username: 'Dad', game: 'Banania'}
  ];
    res.json(users);
})

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.listen(port, ipaddress);