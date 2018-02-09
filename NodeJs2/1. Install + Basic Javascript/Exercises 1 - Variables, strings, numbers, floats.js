//--------------------------------------
// Exercises 1 -  Variables, strings, numbers, floats
//--------------------------------------
//Exercise 1 - Console and variables

var firstName = "Anders";
var lastName = "Latif";
// EXERCISE
// show in the console
// My first name is Anders and my last name is Latif

var result = "My name is " + firstName + ". My last name is " + lastName;

// console.log(result);

//--------------------------------------
//Exercise 2 - Numbers and Strings

var year = "2017";
var number = 1;

// Add the year plus the number
// The result should be 2018
// You cannot touch line 1 or 2

var result = parseInt(year) + number;

var currentYear = Number(year) + number;

var alsoCurrentYear = (+ year) + number;

var testingTheTwoFuncs = "201a8";

//console.log(Number(testingTheTwoFuncs));

//--------------------------------------

//--------------------------------------
//Exercise 3 - Add numbers from string to float

var numberOne = "1.10";
var numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

var sum = parseFloat(numberOne) + parseFloat(numberTwo);

var sum = parseFloat("2.2") + parseFloat("1.1");

//console.log(sum);

//--------------------------------------
//Exercise 4 - Decimals and average

var one = 10;
var two = 45;
var three = 98;

// Show in the console the avg. with 5 decimals

var total = one + two + three;
var avg = total / 3;

// console.log(avg.toFixed(5))

//--------------------------------------
//Exercise 5 - Get the character by index

var letters = "abc"
// Get me the character "c"

var char = letters.charAt(2);
var alsoChar = letters[2];

//console.log(alsoChar);

//--------------------------------------
//Exercise 6 - Replace

var fact = "You are learning javascript!";

// capitalize the J in Javascript

var facter = fact.replace("javascript", "Javascript");

console.log(facter);

//--------------------------------------
