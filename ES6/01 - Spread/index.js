/*
Create a function sum() that will sum all arguments passed to it.
Quantity of the arguments is unknown.
Returns the sum of the arguments
*/

// Write the function here
function sum() {
    var numArr = [...arguments ];
    var sumOfNum = numArr.reduce((acc, curr) => acc + curr, 0);
    return sumOfNum;
}

// Tests
sum(1, 31);
// 35

sum(10, 200, 5);
// 215

sum(2, 5, 80, 1, 10, 12);
//110

// Select all the `p` tag and convert it into array using spread and add `click` event listener that alert `You clicked me!`
var pTags = document.querySelectorAll('p');
var pTagsArr = [...pTags];

function alertOnClick () {
    alert('You clicked me!');
}

pTagsArr.forEach(elm => elm.addEventListener('click', alertOnClick));



// Find the minimum value in the array below using spread and Math.min()
let numbers = [9, 4, 7, 1, 21, 233, 42];

let smallestNumber = Math.min(...numbers);

// Find the maximum value in the array below using spread and Math.max()
let sampleArr = [1, 9, 17, -3, 7, 89, 40, 100, 121, 8];
let largestNumber = Math.max(...sampleArr);
