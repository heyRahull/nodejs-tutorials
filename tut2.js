const http = require('http');

const server = http.createServer((req, res)=>{
res.write('<h1>Hello from Server</h1>');
res.end();
});

server.listen(3200, ()=>{
    console.log('Server is running on port : 3200')
});