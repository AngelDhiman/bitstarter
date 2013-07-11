var express = require('express');

var app = express.createServer(express.logger());

var sys = require("sys");
var fs = require("fs");

app.get('/', function(request, response) {
  //var buffer = new Buffer(40);
  //buffer.write(fs.readFileSync(index.html),"utf-8");
  var content = fs.readFileSync("index.html","utf-8");
  response.send(content);
  //response.send(buffer.toString("utf-8",0,40));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

