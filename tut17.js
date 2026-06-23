const express = require('express');
const path = require('path');
const app = express();

// Resolve the absolute path to our public directory assets
const publicDirectoryPath = path.join(__dirname, 'public');
console.log("Public Directory Path:", publicDirectoryPath);

// Single line magic to serve all HTML, CSS, and Images inside that folder automatically
app.use(express.static(publicDirectoryPath));

app.listen(5000, () => {
    console.log('Server is running on port 5000...');
});