const { rmSync } = require('fs');
const http = require('http');

// Create a local server to receive data from
const server = http.createServer((req, res) => {
	console.log(req)
	/*
	res.writeHead(200, { 'Content-Type': 'application/json' });
	res.end(JSON.stringify({
		data: 'Hello World!',
	}));*/

	console.log(req.url)
	if (req.url == '/1') {
		res.write('Hello World 1')
	}
	else if (req.url == '/2') { 
		res.write('Hello World 2')
	}
	res.end()
});

server.listen(8000);