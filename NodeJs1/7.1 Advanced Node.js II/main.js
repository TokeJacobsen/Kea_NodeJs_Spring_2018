const Bob = require("./aboutBob.js");
const fs = require("fs");

let myBob = new Bob(2, 5);
console.log("Calculated value of bobtangle is: ", myBob.bobTangle());

// never use this! this is bad practice
// let fileContent = fs.readFileSync("data", "utf8");

// instead use function callbacks
fs.readFile(__dirname + "/data.txt", "utf8", (err, data) => {
    if (err) {
        //console.log(err);
    }
    //console.log(data);
});


// a promise is a wrapper for function callbacks with nicer syntax and has additional functionality

new Promise(function(resolve, reject) {
    console.log("Calling my new created Promise.");
    setTimeout(function() {
       resolve("This promise has now been resolved."); 
    }, 2000)
}).then(function(data) {
    console.log("My resolved data: ", data);
});

function resolveAfter5Second() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve("Resolved after 5 seconds.");
        }, 5000);
    })
}

async function asyncCall() {
    console.log("About to call the resolve after 5 seconds function");
    let result = await resolveAfter5Second();
    console.log("After 5 seconds result: ",  result);
}

asyncCall();