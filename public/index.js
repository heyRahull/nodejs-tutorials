

// console.log("Current Directory Name:", __dirname);
















// const path = require('path');
// // Safely joining paths across different Operating Systems
// const htmlFilePath = path.join(__dirname, 'index.html');
// console.log("Resolved HTML File Path:", htmlFilePath);























const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    // Resolve path to the public directory
    const filePath = path.join(__dirname, 'banana.html');

    // Asynchronously read the HTML file
    fs.readFile(filePath, 'utf8', (err, content) => {
        if (err) {
            // Send 404 Error if file not found
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end("404 Error: File Not Found on Server!");
            return;
        }

        // Send 200 Success and stream the HTML content
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(content);
        res.end();
    });
}).listen(5000);

console.log("Server hosting our static page on port 5000...");