const fs = require('fs');

//CRUD - Create, Read, Update, Delete

// fs.writeFileSync('apple.txt','This is an apple.');
// console.log('File created successfully.');

const fileContent = fs.readFileSync('apple.txt','utf-8');
console.log(fileContent);