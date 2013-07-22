var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

console.log("Dir : " + __dirname + "/public");
app.use(express.static(__dirname + "/public"));

app.get('/', function(request, response) {
  var b = fs.readFileSync('./index.html');
  response.send( b.toString('utf-8'));
});

var port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log("Listening on " + port);
});
