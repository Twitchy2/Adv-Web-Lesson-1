// JavaScript Document
//server mode

//linking to the node httpe library

var http = require('http');

//use callback to make this work and connect

http.createServer(function(requires, response) {
	//start the httpe server with access to the reqests and response object
	response.writeHead(200); // request OK 200 times :^)
	response.end('First node page');
}).listen(3000);

console.log('Server running on port 3000');