// const http = require('http');

// http.createServer((req, res) => {
//     console.log("Raw URL:", req.url);
//     res.end("Check your console!");
// }).listen(5000);











const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    // Parsing the URL
    const parsedUrl = url.parse(req.url, true);
    console.log("Parsed URL:", parsedUrl);
    const queryData = parsedUrl.query;

    console.log("User Name is:", queryData.name);
    console.log("User ID is:", queryData.id);

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h1>Hello ${queryData.name || 'Guest'}, your ID is ${queryData.id || 'Not Found'}</h1>`);
    res.end();
}).listen(5000);