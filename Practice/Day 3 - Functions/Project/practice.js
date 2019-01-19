// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Add an additional argument to the function that takes the conversion rate of human to dog years.
function calculateDogAge(puppyAge, humanAge = 7) {
  let dogYears = humanAge * puppyAge;
  console.log(`Your doggie is ${dogYears} years old in dog years!`);
}


// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Accept floating point values for amount per day, and round the result to a round number.

function calculateSupply(age, amountPerDay) {
  let maxAge = 60;
  let totalAmountConsumed = (amountPerDay * 365) * (maxAge - age);
  return `You will need ${totalAmountConsumed} rupees to last you until the ripe old age of ${maxAge}`;
  
}

// Create a function called celsiusToFahrenheit:
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

function celsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9)/ 5 + 32;
  return `${celsius} C is ${fahrenheit} F`;
}

function fahrenheitToCelsius(fahrenheit) {
  let celsius = (fahrenheit - 32) * 5/9;
  return `${fahrenheit} F is ${celsius} C`;
}

//1. The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result:

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm("Did parents allow you?");
  }
}
// Will the function work differently if else is removed?
// Yes as there will be no output if age is less than or qual to 18 !

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm("Did parents allow you?");
}
// Is there any difference in the behavior of these two variants?

// Yes as this one will return "Did parents allow you?" everytime. 

// 2. The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("Do you have your parents permission to access this page?");
  }
}
// Rewrite it, to perform the same, but without if, in a single line.
function checkAge(age){
  return age > 18 ? true : confirm("Do you have parents permission to acess this page ?");
}
// Make two variants of checkAge:
// Using a question mark operator ?
// Using OR ||
function checkAge(age) {
  return age > 18 || confirm("Do you have parents permission to acess this page ?");
}

// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Use prompt to take values for x and n, and then shows the result of pow(x,n) using alert.
// In this task the function should support only natural values of n: integers up from 1.

function pow(x, n) {
 let result = x;
  for(let i = 0; i < n; i++) {
   result = result * x;
  }
  return result;
}


// Enter a string and the program counts the number of vowels in the text. For added complexity have it report a sum of each vowel found.
var word = prompt("write any word to calculate number of letters");
function lengthString(numString) {
  let stringLength = word.length;
  return stringLength;
}

// Checks if the string entered by the user is a palindrome. That is that it reads the same forwards as backwards like “racecar”.

var word = "racecar";
var length = word.length;

function palindrome(word) {
  if(word[0] === word[length - 1] && word[1] === word[length - 2] && word[2] === word[length - 3]) {
    return `${word} is a palindrome word`;
  } else {
    return `${word}  is not a palindrome word`;
  }
}
// Counts the number of individual words in a string. For added complexity read these strings in from a text file and generate a summary.

// Show the following output using one loop.
// 1, 2, 3, 4, 5
// 6, 7, 8, 9, 10
for (let num = 1; num < 11; num ++) {
  console.log(num);
}

// Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n.

// Write a function that returns the largest element in a list.

// Write a program that asks the user for a number n and prints the sum of the numbers 1 to n
function number(num) {
  let sum = 0;
  for(i = 1; i < num; i ++){
    sum = sum + i;
  }
  return sum;
}

// Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71

function number(num) {
  let sum = 0;
  for(i = 1; i < num; i ++){
    if (i % 5 === 0 || i % 7 === 0){
      sum = sum + i;
    }
  }
  return sum;
}

// Write a program that takes a number under (25) and prints the multiplication table for the number.
let num = Number( prompt("give any number < 25") );
for (let i = 0; i <= 10; i++) {
  let result = num * i;
  console.log(num + ' * ' + i + ' = ' + result); 
}