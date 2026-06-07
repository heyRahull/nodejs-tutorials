const http = require('http');

const server = http.createServer((req, res) => {
res.write('<h1>Hello World. Hello again</h1>');
res.end();
});

server.listen(3400);