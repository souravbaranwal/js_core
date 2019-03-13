/* const
Answer following Questions:
  1. Why no error is generated after the line 14?
  2. Why after the line 19 TypeError is generated?
Change one line of code so, that error will go away.
Don't change lines 12, 17.
*/

const arr = [1, 2];

arr.push(3);

console.log(arr);
// [1, 2, 3]

arr = [1, 2, 3, 4];
// BEFORE: Uncaught TypeError:
//   Assignment to constant variable.
// AFTER: No error
// we are reassigning a new array to the already defined constant variable arr so error is generated as a const cant be reassigned.
// It can be fixed if we use let or var to define the variable arr.
var arr = [1, 2, 3, 4];
console.log(arr);
// [1, 2, 3, 4]

// Problem 2
// What's the output and why?
var person = {
  name: "Charlie",
  age: 28
};

person = "New Value";

console.log(person);

// we are assigning value to the already defined constant variable person so error is generated as a const cant be reassigned.
// it can be fixed by using var/let instead.

// Problem 3
// What's the output and why?

const user = {
  name: "Jack",
  batch: 4
};

user.name = "Jones";

console.log(user.name);
// Output will be 'Jones' as object user is created with const.
// Object's property can be reassigned or changed but we can reassign the object and it will generate error.

// Problem 4
// What's the output and why?
{
  const ide = "Vs Code";
}
console.log(ide);

// it will generate error as ide is defined from const which creates a block level scope and the ide is not accessible outside the block.

// Problem 5
// What's the output and why?
for (const i = 0; i < 10; i++) {
  console.log(i);
}
//  at first step it will log 0 which was assigned to i ,but then there will be error as i cant be reassigned as it is defined with const.

// Problem 6
// What's the output and why?
console.log(pizza);
var pizza = "pizza 🍕🍕";

// it will give output undefined as pizza was defined after console.log and not before it.if we again console.log(pizza) it will give the desired
// result.
