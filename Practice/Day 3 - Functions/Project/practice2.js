// Practice different way of writing function
//  i.e
// 1. Function Decleration
// 2. Function Expression
// 3. Arrow Function

/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

//Function Decleration
function convertToString(n) {
  return String(n);
}

// function // Optional
// functionName // Optional
// (arguments) // Optional
// return // Optional

// Function Expression
let convertToString1 = function(n) {
  return String(n);
};

// Arrow Function
let convertToString = n => String(n);  

let convertToString = n => {
  return String(n);
};

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
function addNumber(n) {
  return n + 1;
}

let addNumber = function(n) {
  return n + 1;
}

let addNumber = n => {return n + 1};



/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
function subNumber(n) {
  return n - 1;
}

let subNumber = function(n) {
  return n - 1;
}

let subNumber = n => {return n -1 };


/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
function twoNumbers(x, y) {
  var sum = x + y;
  return sum;
}

let twoNumbers = function(x, y) {
  var sum = x + y;
  return sum;
}

let twoNumbers = (x, y) => {
  var sum = x + y;
  return sum;
};

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
function twoNumbers(x, y) {
  var sub = x - y;
  return sub;
}

let twoNumbers = function(x, y) {
  let sub = x - y;
  return sub;
}

let twoNumbers = (x, y) => {
  let sub = x - y;
  return sub;
}
/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
function twoNumbers(x, y) {
  let product = x * y;
  return product;
}

let twoNumbers = function(x, y) {
  let product = x * y;
  return product;
}

let twoNumbers = (x, y) => {
  let product = x * y;
  return product;
}
/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
function twoNumbers(x, y) {
  let quotient = x / y;
  return quotient;
}

let twoNumbers = function(x, y) {
  let quotient = x / y;
  return quotient;
}

let twoNumbers = (x, y) => {
  let quotient = x / y;
  return quotient;
}
/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
function numberToSquare(x) {
  let squared = x * x;
  return squared; 
}

let numberToSquare = function(x) {
  let squared = x * x;
  return squared;
}

let numberToSquare = (x) => {
  let squared = x * x;
  return squared;
}
/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */
var operation = "multiply"
function operationOfNumbers(x, y) {
  if( operation = "add" ) {
    var result = x + y;
    return  result;
  } else if (operation = "substract") {
    var result = x - y;
    return result;
  } else if(operation = "multiply") {
    var result = x * y;
    return result;
  } else if(operation = "divide") {
    var result = x / y;
    return result;
  } else {
    return "wrong operater used";
  }
}
/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
function comparison(a, b) {
  if(a > b) {
    return `${a} is greater than ${b}`;
  }
}

let comparison = function(a, b) {
  if(a > b) {
    return `${a} is greater than ${b}`;
  }
}

let comparison = (a, b) => {
  if(a > b) {
    return `${a} is greater than ${b}`;
}
}
/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
function comparison(a, b) {
  if(a < b) {
    return `${a} is greater than ${b}`;
  }
}

let comparison = function(a, b) {
  if(a < b) {
    return `${a} is greater than ${b}`;
  }
}

let comparison = (a, b) =>{
  if(a < b) {
    return `${a} is less than ${b}`;
}
}
/**
 * Returns true if `a` and `b` are equal.
 *< param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
function comparison(a, b) {
  if(a === b) {
    return `${a} is equal than ${b}`;
  }
}

let comparison = function(a, b) {
  if(a === b) {
    return `${a} is equal than ${b}`;
  }
}

let comparison = (a, b) =>{
  if(a === b) {
    return `${a} is equal than ${b}`;
}
}
/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
function comparison(a, b) {
  if(a < b) {
    return `${a} is the smallest number`;
  } else if(a > b) {
    return `${b} is the smallest number`
  }
}

let comparison = function(a, b) {
  if(a < b) {
    return `${a} is the smallest number`;
  } else if(a > b) {
    return `${b} is the smallest number`
  }
}

let comparison = (a, b) =>{
  if(a < b) {
    return `${a} is the smallest number`;
  } else if(a > b) {
    return `${b} is the smallest number`
  }
}
/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

function comparison(a, b) {
  if(a < b) {
    return `${b} is the largest number`;
  } else if(a > b) {
    return `${a} is the largest number`
  }
}

let comparison = function(a, b) {
  if(a < b) {
    return `${b} is the largest number`;
  } else if(a > b) {
    return `${a} is the largest number`
  }
}

let comparison = (a, b) =>{
  if(a < b) {
    return `${b} is the largest number`;
  } else if(a > b) {
    return `${a} is the largest number`
  }
}

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
function number(x) {
  if(x % 2 === 0) {
    return `${x} is even`;
  }
}

let numberToSquare = function(x) {
  if(x % 2 === 0) {
    return `${x} is even`;
  }
}

let numberToSquare = (x) => {
  if(x % 2 === 0) {
    return `${x} is even`;
  }
}

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
function number(x) {
  if(x % 2 != 0) {
    return `${x} is odd`;
  }
}

let numberToSquare = function(x) {
  if(x % 2 != 0) {
    return `${x} is odd`;
  }
}

let numberToSquare = (x) => {
  if(x % 2 != 0) {
    return `${x} is odd`;
  }
}

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */
function marks(score, total) {
  let percentage = (score / total) * 100;
  if(percentage > 90 && percentage <= 100) {
    return "A";
  } else if(percentage > 80 && percentage <= 90) {
    return "B";
  } else if(percentage > 70 && percentage <= 80) {
    return "C";
  } else if(percentage > 60 && percentage <= 70) {
    return "D";
  } else if(percentage > 0 && percentage <= 60) {
    return "F";
  }
}

let marks = function(score, total) {
  let percentage = (score / total) * 100;
  if(percentage > 90 && percentage <= 100) {
    return "A";
  } else if(percentage > 80 && percentage <= 90) {
    return "B";
  } else if(percentage > 70 && percentage <= 80) {
    return "C";
  } else if(percentage > 60 && percentage <= 70) {
    return "D";
  } else if(percentage > 0 && percentage <= 60) {
    return "F";
  }
}

let marks = (score, total) => {
  let percentage = (score / total) * 100;
  if(percentage > 90 && percentage <= 100) {
    return "A";
  } else if(percentage > 80 && percentage <= 90) {
    return "B";
  } else if(percentage > 70 && percentage <= 80) {
    return "C";
  } else if(percentage > 60 && percentage <= 70) {
    return "D";
  } else if(percentage > 0 && percentage <= 60) {
    return "F";
  }
}
/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */

 function words(word1, word2) {
   let joinWord = `${word1} ${word2}`;
   return joinWord;
 }  

 let words = function(word1, word2) {
  let joinWord = `${word1} ${word2}`;
  return joinWord;
 }

 let words = (word1, word2) => {
  let joinWord = `${word1} ${word2}`;
  return joinWord;
 }

/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */
