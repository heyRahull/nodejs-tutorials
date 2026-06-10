// --- QUESTION 1: The Microtask Race ---
// console.log("1. Synchronous Code");

// setTimeout(() => {
//     console.log("2. MacroTask: Timeout (0ms)");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("3. MicroTask: Promise Resolved");
// });

// process.nextTick(() => {
//     console.log("4. MicroTask: NextTick Call");
// });

// 1-> four -> three -> 2

// console.log("5. End of Script");


// --- QUESTION 2: The Independent Race ---
// setTimeout(() => {
//     console.log("1. Timeout Triggered");
// }, 0);

// setImmediate(() => {
//     console.log("2. Immediate Triggered");
// });



// --- QUESTION 3: Inside the Core I/O Context ---
const fs = require('fs');
fs.readFile('apple.txt', () => {
    console.log("=== INSIDE FILE I/O CALLBACK ===");
    
    setTimeout(() => {
        console.log("1. Inside I/O: Timeout (0ms)");
    }, 0);

    setImmediate(() => {
        console.log("2. Inside I/O: Immediate Target");
    });
});
