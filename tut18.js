const express = require('express');
const app = express();

// Set up EJS as our application template view engine
app.set('view engine', 'ejs');

app.get('/profile', (req, res) => {
    // Injecting server-side dynamic data directly into the EJS view template
    res.render('profile', {
        developerName: "Humble Coder",
        role: "Full Stack Engineer"
    });
});

app.listen(5000, () => console.log('Server is running on port 5000...'));