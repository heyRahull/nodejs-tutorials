const express = require('express');
const app = express();

// 1. Serving HTML Tags using template literals
app.get('/html', (req, res) => {
    res.send(`
        <div style="font-family: sans-serif; text-align: center; padding: 40px; color: #2563eb;">
            <h1>Express HTML Renderer 🎨</h1>
            <p>Sending responsive UI tags directly from the backend layer.</p>
        </div>
    `);
});

// 2. Serving Pure JSON Data Array (Mock Production API)
app.get('/api/users', (req, res) => {
    res.json([
        { id: 1, name: "Rohan", role: "UI Designer" },
        { id: 2, name: "Mohan", role: "Backend Engineer" }
    ]);
});

app.listen(5000, () => console.log('Server is barking on port 5000... 🐶'));