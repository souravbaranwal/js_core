// Value of x, y, a, b

var x = 10;   10
var y = 'abc'; 'abc'
var a = x; 10
var b = y; 'abc'


// Value of x, y, a, b
var x = 10; 10
var y = 'abc'; 'abc'
var a = x; 10
var b = y; 'abc'
a = 5; 5
b = 'def'; 'def'


// Value of arr & arrCopy
var arr = [1]; 
// output: 1 
var arrCopy = arr;
arr.push(2); 
// output: 1 


// Value of obj
var obj = { name: 'ryan' };
obj = { surname: 'florance' };
// Output: { surname: 'florance' }


// What's the output.
var arr = ['Hi'];
var arr2 = arr;
console.log(arr === arr2);
// output: true



// What's the output.
var arr1 = ['Hi!'];
var arr2 = ['Hi!'];
console.log(arr1 === arr2);
console.log(arr == arr2);
// output for both are false 


//What's the output
console.log([10] === [10]);
// output: false

// What's the output?

function personDetails(person) {
  person.age = 25;
  person = {
      name: 'John',
      age: 50
  };
  
  return person;
}
var personObj1 = {
  name: 'Alex',
  age: 30
};
var personObj2 = personDetails(personObj1);
console.log(personObj1); // -> ? {name: "Alex", age: 25}
console.log(personObj2); // -> ? {name: "John", age: 50}




// Guess the output
var oldArray = [];
var object = {};
object.newArray = oldArray;
oldArray.push(10);
console.log(object.newArray === oldArray);
// output: true


// Guess the output
var a = 5;
var b = a;
a = 10;
console.log(a); 10
console.log(b); 5



// What's the output?
var a = {};
var b = a;
a.a = 1;
console.log(a); 
// output: {a: 1}
console.log(b); 
// output: {a: 1}

// What's the output.
var a = [];
var b = a;
a.push(1);
console.log(a); // [1]
// output:[1]
console.log(b); // [1]
// output:[1]
console.log(a === b);
// output: true

// Clone the object person in clone
var person = {
  name: "Mark",
  age: 34,
  subjects: {
    maths: 78,
    physics: 43
  }
}

var clone = {};
for (let key in person) {
  clone[key] = person[key];
}