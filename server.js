var app = require('http').createServer(handler);
var statusCode = 200;

app.listen(process.env.PORT, process.env.IP);

function handler (req, res) {
  var data = '';

  if (req.method == "POST") {
    req.on('data', function(chunk) {
      data += chunk;
    });

    req.on('end', function() {
      console.log('Received body data:');
      console.log(data.toString());
    });
  }
  
  

  res.writeHead(statusCode, {'Content-Type': 'text/plain'});
  res.write("Got it");
  res.end();
}

console.log("Listening to port " + process.env.PORT + " on IP " + process.env.IP);
console.log("Returning status code " + statusCode.toString());
