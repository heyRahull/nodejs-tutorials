// const http = require('http');

// http.createServer((req, res) => {
//     // Sending Header: Status 200 and Content-Type HTML
//     res.writeHead(200, { 'Content-Type': 'text/html' }); 
    
//     res.write("<h1>Welcome to My Professional Server</h1>");
//     res.end();
// }).listen(5000);

















// const http = require('http');

// http.createServer((req, res) => {
//     // Sending Header: Status 200 and Content-Type HTML
//     res.writeHead(200, { 'Content-Type': 'text/html' }); 
//     res.write("<h1>Welcome to My Professional Server</h1>");
//     res.end();
// }).listen(5000);





const http = require('http');

const userData = {
    name: "Sam",
    role: "Developer",
    email: "sam@test.com"
};

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(userData));
    res.end();
}).listen(5000);
console.log("API is running on port 5000...");