// const fs = require('fs');

// let fileData;

// fs.readFile('apple.txt', 'utf8', (err, data) => {
//     fileData = data; // Data arrives late
// });

// console.log("Data is:", fileData); // Executes immediately -> Result: undefined



// ------------------------------------------------------------------------

// const fs = require('fs').promises;

// fs.readFile('apple.txt', 'utf8')
//     .then((data) => {
//         console.log("Promise Resolved Data:", data);
//     })
//     .catch((err) => {
//         console.error("Promise Rejected:", err);
//     });


// ------------------------------------------------------------------------

const fs = require('fs').promises;

async function handleFileData() {
    try {
        const data = await fs.readFile('apple.txt', 'utf8');
        console.log("Async/Await Data:", data);
    } catch (err) {
        console.log("Error caught in catch block:", err);
    }
}

handleFileData();