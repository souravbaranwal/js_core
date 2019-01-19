// Get two values from the user ‘password’ and ‘confirm password’  using the prompt box and display a message “Password validated” if both the values match else display the message “Password do not match”
// Find the output of the following
// Logical AND operation
// true  && true; true
// true  && false; false
// false && true; false
// false && false; false

// Logical OR operation
// true  || true; true
// true  || false; true
// false || true; true
// false || false; false

// "foo" && "bar"; "bar"
// "bar" && "foo"; "foo"
// "foo" && ""; "" 
// ""    && "foo";  ""

// "foo" || "bar"; "foo"
// "bar" || "foo"; "bar"
// "foo" || ""; "foo"
// ""    || "foo"; "foo"

let isGuestOneVeg = false;
let isGuestTwoVeg = false;

// If both are veg "Only offer up vegan dishes."
// At least one veg  "Make sure to offer up some vegan options."
// Else, "Offer up anything on the menu"
if (isGuestOneVeg && isGuestTwoVeg) {
    console.log ("Only offer up vegan dishes");
} else if (isGuestOneVeg || isGuestTwoVeg){
    console.log ("Make sure to offer up some vegan option");
} else {
    console.log ("Offer up anything on the menu");
}


let temp = 4;

// 1. If temperature is less then 32 alert "It is freezing outside"
// 2. If the temperature is greater then 110 alert "It is hot outside"
// 3. else 'Go for it. It is pretty nice out'
if (temp < 4) {
    alert("It's freezing outside");
} else if (temp > 110){
    alert("Its hot outside");
} else {
    alert
    ("Go for it.It is pretty nice out");
}

// Output of this alert( alert(1) || 2 || alert(3) ); 1

// Create a function which takes two input and (a,b) and display the sum, sub, multiplication, devision of those two numbers.
// Already done in previous assignment 

// Function to display a number if user enters negative number
var value = Number(prompt("write any negative number"));
if (value < 0) {
    alert (value);
} else {
    alert("write a -ve number only");
}

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.
 var sum = 0;
 for (var i = 0; i <1000; i++){
     if (i % 3 === 0 || i % 5 === 0){
         sum = sum + 1;
     }
 }
 sum;

//  this can also be written as --

var sum = 0;
for (var i = 0; i < 1000; i++){
    if (i % 3 === 0){
        sum = sum + i;
    }
    else if (i % 5 === 0){
        sum = sum +i;
    }
}
sum;


// If user enters positive number, that number won't be displayed
var num = Number(prompt("write any negative number"));
if (num < 0){
    console.log(num);
}
// Funnction to check whether an integer entered by the user is odd or even
var num = Number(prompt("write any number"));
if (num % 2 === 0) {
    console.log("This number is even");
}
else {
    console.log("This number is odd");
}

// Funnction to take two input and show the relation using =, > or < i.e (21,45) 21 < 45, (23,12) 23 > 12
var num1 = Number(prompt("Please write number one"));
var num2 = Number(prompt("Please write number two"));
if (num1 === num2) {
    console.log(num1 + "=" + num2);
} else if (num1 > num2) {
    console.log(num1 + ">" + num2);
} else {
    console.log(num1 + "<" + num2);
}

// Funnction to Check Whether a Character is Vowel or Consonant
var char = prompt("write a letter") ;
    if (char === "a" || char === "e" || char === "i" || char === "o"|| char === "u"){
        alert (char + " is vowel");
    } else {
        alert(char + " is conconant");
    }


// Funnction to Find the Largest Number Among Three Numbers
 var num1 = Number(prompt("write first number"));
 var num2 = Number(prompt("write second number"));
 var num3 = Number(prompt("write third number"));
 if (num1 > num2 && num1 > num3) {
    console.log (num1 + " is the largest number");
 } else if (num2 > num1 && num2 > num3) {
    console.log  (num2 + " is the largest number");
 } else if (num3 > num1 && num3 > num2){
    console.log (num3 + " is the largest number");
 }

//Switch
// You are given a variable, . Your task is to print:
// - ONE, if num is equal to 1.
// - TWO, if num is equal to 2.
// - THREE, if num is equal to 3.
// - FOUR, if num is equal to 4.
// - FIVE, if num is equal to 5.
// - SIX, if num is equal to .6
// - SEVEN, if num is equal to 7.
// - EIGHT, if num is equal to .8
// - NINE, if num is equal to .9
// - PLEASE TRY AGAIN, if  is none of the above.

let num = Number(prompt("write any number between 0-10 !!"));
switch(num) {
    case 1: 
    console.log("One");
    break;

    case 2:
    console.log("Two");
    break;

    case 3: 
    console.log("Three"); 
    break;

    case 4:
    console.log("Four");
    break;

    case 5:
    console.log("Five");
    break;

    case 6:
    console.log("Six");
    break;

    case 7:
    console.log("Seven");
    break;

    case 8:
    console.log("eight");
    break;

    case 9:
    console.log("Nine");
    break;

    default:
    console.log("Please try again");
    break;
}

// You are given a variable marks. Your task is to print:
// - AA if marks is greater than 90.
// - AB if marks is greater than 80 and less than or equal to 90
// - BB if marks is greater than 70 and less than or equal to 80
// - BC if marks is greater than 60 and less than or equal to 70
// - CC if marks is greater than 50 and less than or equal to 60
// - CD if marks is greater than 40 and less than or equal to 50
// - DD if marks is greater than 30 and less than or equal to 40
// - FF if marks is less than or equal to 30

var marks = Number(prompt("write your marks to calculate grade"));
switch(true) {
    case marks > 90 && marks <= 100:
    console.log("AA"); 
    break;

    case marks > 80 && marks <=90:
    console.log("AB");
    break;

    case marks > 70 && marks <= 80:
    console.log("BB");
    break;

    case marks > 60 && marks <= 70:
    console.log("BC");
    break;

    case marks > 50 && marks <= 60:
    console.log("CC");
    break;

    case marks > 40 && marks <= 50:
    console.log("CD");
    break;

    case marks > 30 && marks <=40:
    console.log("DD");
    break;

    default:
    console.log("FF");
    break;
}

// Funnction to generate Multiplication Table of a given number (use alert for number input)

var num = Number(prompt("write any number"));
for( var i = 1; i < 11; i++){
    var mulTable = i * num;
    console.log(num + " * " + i + " = " + mulTable );    
}

// Funnctionn to calculate the Factorial of a Number.
let num = Number(prompt("write any number for its factorial"));
let factorial = 1;
for(var i = num; i >= 1; i--){
    factorial = factorial * i;
}
alert(factorial);

// Output: var x = 10 + "1"; console.log(x); typeof x;
101; "string"

//  Solve: 225 % 6 = ?

// Take two numbers and what to do with that number from user.
// Define an object with these function (add, sub, multiply, divide). Perform the operation

// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

// if else

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").


//Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

var score = Number(prompt("write your score"));
function assignGrade(score) {
    switch(true) {
        case (score > 90 && score <=100):
        console.log("A");
        break;

        case (score > 80 && score <= 90):
        console.log("B");
        break;

        case (score > 70 && score <= 80):
        console.log("C");
        break;

        case (score >= 40 && score <= 70 ):
        console.log("D");
        break;

        default:
        console.log("write correct score");
        break;
    }
}
assignGrade(score);


// Loops
// For loop
// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
for (var i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + ' is even');
    } else {
        console.log(i + ' is odd');
    }
}
// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
var num = 9;
for (var i = 0; i <= 10; i++) {
    var result = num * i;
    console.log(num + ' * ' + i + ' = ' + result);
}


for (var num = 0; num <= 10; num++) {
 for (var i = 0; i <= 10; i++) {
   var result = num * i;
   console.log(num + ' * ' + i + ' = ' + result);
 }
}
// Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

