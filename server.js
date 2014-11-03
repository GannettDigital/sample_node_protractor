// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end(" <!doctype html><html ng-app><head><script src='https://ajax.googleapis.com/ajax/libs/angularjs/1.3.1/angular.min.js'></script></head><body><div><h1>Hello World</h1></div></body></html> ");
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(3001);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:3001/");