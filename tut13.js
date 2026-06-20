// const http = require('http');

// const server = http.createServer((req, res) => {
//     // 1. Sending responsive HTML content
//     if (req.url === '/' && req.method === 'GET') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end('<h1>Welcome to Express.js!</h1>');
//     } 
    
//     // 2. Direct JSON API Object route (Requires manual stringify & headers)
//     else if (req.url === '/api/data' && req.method === 'GET') {
//         res.writeHead(200, { 'Content-Type': 'application/json' });
        
//         const data = {
//             name: "Rahul",
//             role: "Backend Developer",
//             framework: "Node.js HTTP"
//         };
        
//         res.end(JSON.stringify(data));
//     } 
    
//     // 3. Handle 404 Not Found (Express does this automatically)
//     else {
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.end('404 Not Found');
//     }
// });

// server.listen(5000, () => console.log('Server is running smoothly on port 5000...'));


const express = require('express');
const app = express();

// 1. Standard Homepage Route
app.get('/', (req, res) => {
    res.send('<h1>Welcome to Express!</h1>');
});

// 2. Direct API JSON Route (No JSON.stringify needed!)
app.get('/api/user', (req, res) => {
    res.json({
        name: "Rahul",
        role: "Backend Engineer",
        status: "Happy with Express"
    });
});

app.listen(5000, () => {
    console.log('Server is flying high on port 5000... ✈');
});