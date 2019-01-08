// 1. Make a simple calculator with these functions. Using prompt, type conversion, if else statement.
// 1. Add
// 1. Sub
// 1. Mul
// 1. Div

var num1 = Number(prompt("write 1st number"));
var num2 = Number(prompt("write 2nd number"));
var conversion = prompt("write conversion operator (add/sub/mul/div)");
    if (conversion == "add") {
        alert(num1 + num2);
    }
    else if (conversion == "sub") {
        alert(num1 - num2);
    }
    else if (conversion == "mul") {
        alert(num1 * num2);
    }
    else {
        alert("write correct convertion operator");
    }