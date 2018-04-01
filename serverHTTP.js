var http = require('http');

http.createServer(function(request, response){
	//HTTP status: 200: OK
	//Content type: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});
	//send the response body as "Hello World"
	response.end('Hello World\n');
}).listen(3000);
//console will print the message
console.log('Server running at http://localhost:3000/');