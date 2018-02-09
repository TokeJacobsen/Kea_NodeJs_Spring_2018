//--------------------------------------
// Exercises 2 - Objects
//--------------------------------------
//Exercise 1 - Retrieve value from object by key

var myObj = {"message": "Hello, earthling! I bring peace."};

// Log the message 
//console.log(myObj.message);
//--------------------------------------
//Exercise 2 - Defining an object. 

// Create an object that has your name and age. 

var myName = "Martin";
var myAge = 22;

var myData = {"name": myName, "age": myAge};

//console.log(myData);
//--------------------------------------
//Exercise 3 - Add a property 

var stackOverflow = {};

// make a rule called isAllowed and let the value be true
stackOverflow.isAllowed = true;
//console.log(stackOverflow);
//--------------------------------------
//Exercise 4 - Remove a property 

var thisSong = {"description": "The best song in the world."}

// remove the property "description" and add a property called "about" that should say "Just a tribute." 

var key = "description";
delete thisSong[key];

thisSong.about = "Just a tribute.";

console.log(thisSong);
//--------------------------------------