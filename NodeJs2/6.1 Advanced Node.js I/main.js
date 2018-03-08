let stuff = require("./exportingStuff.js");
let loopieLoops = require("./loopieLoops.js");

// //  we are importing the function which we are calling here... 
// console.log(stuff.giveMeAName("Anders"));

// console.log(stuff.someString);

// stuff.giveMeMyName();

let fruits = ["bananas", "cherries", "apples", "pears", "oranges"];
//console.log(loopieLoops.giveMeTheIndexOf(fruits, "oranges"));


console.log(loopieLoops.giveMeTheIndexOfVersionTwo(fruits, "apples"));