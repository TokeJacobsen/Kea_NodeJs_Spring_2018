const fs = require("fs");
const Bob = require("./aboutBob.js");

let myBob = new Bob(3, 6);
//console.log(myBob.bobTangle());

// You should NEVER use this!! This is bad practice.
// fs.readFileSync("data.txt", "utf8");

// fs.readFile(__dirname + "/data.txt", "utf8", function(err, data) {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data);
// })


// A promise is a wrapper for callback functions with nicer syntax and additional functionality
new Promise(function(resolve, reject) {
    console.log("Calling my own promise");
    setTimeout(function() {
        resolve("Resolve my own promise.");
    }, 2000);
}).then(function(resolvedData) {
    console.log("My own promise resolved data: ", resolvedData);
});

function resolveAfter5Seconds() {
    return new Promise(resolve => {
        setTimeout( () => {
            resolve("Resolved my 5 second promise.")
        }, 5000);
    })
}

async function asyncCall() {
    console.log("Calling async call.")
    let resolvedPhrase = await resolveAfter5Seconds();
    console.log("5 sec promise resolved: ", resolvedPhrase);
}

asyncCall();