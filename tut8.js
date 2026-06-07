const fs = require('fs');

// fs.writeFileSync('apple.txt','This is an banana.');
// console.log('File created successfully.');

// fs.appendFileSync('apple.txt','This is appended text.');
// console.log('File updated successfully.');

fs.unlinkSync('apple.txt');
console.log('File deleted successfully.');