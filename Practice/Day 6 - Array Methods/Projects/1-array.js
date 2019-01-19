// Arrays to work on
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];


// Use the above two arrays and practice array methods


// Find largest number in numbers
var largestNumber = numbers.reduce(function(a,b){
    // return a > b ? a : b;
    if (a > b) {
        return a ;
    } else {
        return b;
    }
});
console.log(largestNumber);

// Find longest string in strings
var largestString = strings.reduce(function(a,b){
    // return a > b ? a : b;
    if (a.length > b.length) {
        return a ;
    } else {
        return b;
    }
});
console.log(largestString);


// Find all the even numbers

let result = numbers.filter(function(number) {
    return (number % 2 === 0)
})
console.log(result);

// Find all the odd numbers

let result = numbers.filter(function(number) {
    return (number % 2 !== 0)
})
console.log(result);

// Find all the words that contain 'is' use string method 'contains'


// Find all the words that contain 'is' use string method 'indexOf'


// Check if all the numbers in numbers array are divisible by three use array method (every)
let numDivThree = numbers.every(function(num){
    return (num % 3 == 0);
});

//  Sort Array from smallest to largest
let assendingNumber = numbers.sort(function(a, b) {
    return a - b;
});
console.log(assendingNumber);

// Remove the last word in strings
strings.pop();
console.log(strings);

// Add a new word in the array
strings.push('words');
console.log(strings);

// Remove the first word in the array
strings.shift();
console.log(strings);

// Place a new word at the start of the array use (upshift) // unshift ??
strings.unshift('JS');
console.log(strings);

// Make a subset of numbers array [18,9,7,11]
let subsetNum = numbers.splice(3, 4);
console.log(subsetNum);

// Make a subset of strings array ['a','collection']
let subStr = strings.splice(2,2);
console.log(subStr);

// Replace 12 & 18 with 1221 and 1881
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
numbers.splice(1, 1, 1221);
numbers.splice(3, 1, 1881);
console.log(numbers);

// Replace words with string in strings array
var strings = ['this','is','a','collection','of','words'];
strings.splice(5,1,'string');
console.log(strings);


// Customers Array
var customers = [
    { firstname : 'Joe', lastname : 'Blogs'},
    { firstname : 'John', lastname : 'Smith'},
    { firstname : 'Dave', lastname : 'Jones'},
    { firstname : 'Jack', lastname : 'White'}
];
// Find all customers whose firstname starts with 'J'

// Create new array with firstname and lastname


// Sort the array created above alphabetically

