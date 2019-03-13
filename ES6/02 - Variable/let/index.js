/* let*/

"use strict";

var i = 10;

for (var i = 0; i < 5; i++) {
  console.log(i, "Inside");
}

console.log(i, "Outside");

// Expected Output
// 0 "Inside"
// 1 "Inside"
// 2 "Inside"
// 3 "Inside"
// 4 "Inside"
//10 "Outside"  this will be incorrect and the correct output will be 5 "Outside"  as i++ increases the value of i from 4 to 5;



// Problem 2
// Write the output and reason behind it
for (let i = 0; i < 10; i++) {
  // Doing nothing
}
console.log(i);
// this will generate error as i is defined with let and it creates block scope , console.log(i) don't have acess of the i so it gives error.

// Problem 3
// Write the output and reason behind it
for (let i = 0; i < 10; i++) {
  let username = "Superuser!";
}
console.log(username);

// same reason as problem 2

// Problem 4
// Write the output and reason behind it
let name = "Jack";
name = "Jones";
console.log(name);

// it will output Jones as it was reassigned to name.

// Problem 5
// Write the output and reason behind it
let firstName = "Jack";
let firstName = "Jones";
console.log(firstName);
// it will generate error as firstName was already decelared and cant be decleared again.

// Problem 6
// Write the output and reason behind it

let marks = 76;
let pass = false;

if (marks > 70) {
  let pass = true;
}

console.log(`Passed: ${pass}`);

// it will output false as let pass = true as block level scope and console.log dont have acess to it.

// Problem 7
(function() {
  let pass = true;
})();
console.log(pass);

// it will generate error as console.log dont have any acesss of pass.
// Problem 8
{
  let users = 45;
}
console.log(users);
// it will generate error as console.log dont have any acesss of users.


// Problem 9
// What's the output and why?
console.log(pizza);
var pizza = "pizza 🍕🍕";
// undefined
