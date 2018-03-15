const stuff = require("./exportingStuff.js");
const loopieLoops = require("./loopieLoops.js");

console.log("found at index: ", loopieLoops.giveIndexBasedOnPredicate(["apples", "pears", "cherries", "bananas"], "bananas"));

stuff.giveMeTheName();

console.log(stuff.giveMeMyName("Anders"));