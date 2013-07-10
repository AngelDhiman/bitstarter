var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

app.get('/', function(request, response) {
  var buffer = new Buffer(40);
  buffer.write(fs.readFileSync('index.html',function(err,data){
  if(err) throw err;
  console.log(data);
  }););
  response.send(buffer.toString("utf-8",0,buffer.length));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

