//--------------------------------------
// Exercises 1 -  Variables, strings, numbers, floats
//--------------------------------------
//Exercise 1 - Console and variables

var firstName = "Anders";
var lastName = "Latif";
// EXERCISE
// show in the console
// My first name is Anders and my last name is Latif

//console.log(firstName + " " + lastName);

//--------------------------------------
//Exercise 2 - Numbers and Strings

var year = "2017";
var number = 1;

// Add the year plus the number
// The result should be 2018
// You cannot touch line 1 or 2

var currentYear = parseInt(year) + number;

var alsoCurrentYear = Number(year) + number;

var alsoAlsoCurrentYear = (+year) + number;
// console.log(currentYear);

//--------------------------------------

//--------------------------------------
//Exercise 3 - Add numbers from string to float

var numberOne = "1.10";
var numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

var one = parseFloat(numberOne);
var two = parseFloat(numberTwo);

//console.log(one + two);

//--------------------------------------
//Exercise 4 - Add the numbers and the total with 2 decimals

var numberOne = "1.10";
var numberTwo = "2.30";

var one = parseFloat(numberOne);
var two = parseFloat(numberTwo);

var sum = (one + two).toFixed(2);

//console.log(sum);

//--------------------------------------
//Exercise 5 - Decimals and average

var one = 10;
var two = 45;
var three = 98;

// Show in the console the avg. with 5 decimals

var average = (one + two + three) / 3;


//console.log(average.toFixed(5));

//--------------------------------------
//Exercise 6 - Get the character by index

var letters = "abc"
// Get me the character "c"

var letterC = letters.substring(2, 3);

var oneLetter = letters[2];

var letterC = letters.charAt(2);

var alsoLetterC = letters.slice(-1);

//console.log(alsoLetterC);

//--------------------------------------
//Exercise 7 - Replace

var fact = "You are learning javascript!";

// capitalize the J in Javascript

//var fact = fact.slice(0, 17) + fact.charAt(17).toUpperCase() + fact.slice(18);

//var fact = fact[fact.indexOf("j")].toUpperCase();

var fact = fact.replace("j", "J");

console.log(fact);

//--------------------------------------
