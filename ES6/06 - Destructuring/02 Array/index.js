const pizzas = [
  "Deep Dish",
  "Peperoni",
  "Hawaiian",
  "Meatzza",
  "Spicy Mama",
  "Margherita"
];

// Store the value of index 0,1,3,5 in variables using destructuring

let [first, second, third,fourth,fifth] = pizzas;
// Swap the value of index 1 & 3.
let secondtDish = 'second';
let fourthDish = 'fourth';
[secondtDish, fourthDish] = [fourthDish, secondtDish];
