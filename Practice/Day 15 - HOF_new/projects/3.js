// What’s the result of executing this code and why.
function test() {
  console.log(a);
  console.log(foo());

  var a = 1;
  function foo() {
    return 2;
  }
}

test();


// it will return undefined and 2
// undefined is returned because console.log(a) didnt have acess to a and 2 because function foo() is excuted which returns 2;

// What is result?
var a = 1;

function someFunction(number) {
  function otherFunction(input) {
    return a;
  }

  a = 5;

  return otherFunction;
}

var firstResult = someFunction(9);
// this will return the function otherFunction
var result = firstResult(2);
// thi will return the value of a which was defined  inside otherfunction as a = 5 is in its scope



// What is the result of the following code? Explain your answer.
var fullname = "John Doe";
var obj = {
  fullname: "Colin Ihrig",
  prop: {
    fullname: "Aurelio De Rosa",
    getFullname: function() {
      return this.fullname;
    }
  }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());

// What will you see in the console for the following example?
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
