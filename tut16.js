const express = require('express');
const app = express();

// Single dynamic endpoint to handle any query combination
app.get('/search', (req, res) => {
    // Express automatically captures and objects the query string
    const queryData = req.query; 
    
    console.log("Captured Query Object:", queryData);

    const name = queryData.name || "Guest User";
    const role = queryData.role || "Not Specified";

    res.json({
        message: `Data fetched successfully for ${name}`,
        receivedParams: {
            user_name: name,
            user_role: role
        }
    });
});

app.listen(5000, () => console.log('Query engine running on port 5000... 🚀'));