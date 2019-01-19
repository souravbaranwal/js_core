//1. Pick a penguin from Wikipedia's List of Fictional Penguins (https://en.wikipedia.org/wiki/List_of_fictional_penguins) and
//  create an object named myPenguin with properties that represent the information listed in each column on that Wikipedia page 
//  (for example: the character's name, origin, and author).
let penguin = {
    character: "Greta",
    origin: "Mr. Popper's Penguins",
    author: "Richard and Florence Atwater",
    notes: "Children's book about a housepainter who ends up with a flock of penguins.",
}
//2. Use console.log() to print the penguin's name to the console as part of a welcome message, like "Hello, I'm a penguin and my name is [NAME HERE]!"
let penguinId = penguin.character;
console.log(`Hello, Im a penguin and my name is ${penguinId} !`);
//. Write another line of code that adds a new property to your penguin called canFly and set it to false.
penguinId.canFly = false;
//4. Add a method to your penguin called chirp that prints to the console: "CHIRP CHIRP! Is this what penguins sound like?"
penguinId.chirp = function() {
    console.log("CHIRP CHIRP! Is this what penguins sound like?");
  };

//5. Add another method to your penguin called sayHello that prints to the console the same message from problem 2 above. But this time, be sure to use the mystical, magical, all-powerful this keyword to access your penguin's name, so that way the sayHello method could potentially work for any penguin that has a name!
penguinId.sayHello = function() {
    console.log("hello, Im a penguin and my name is " + this.character + "!" );
}
//6. Next, call your penguin's sayHello() method and make sure that it works!
penguinId.sayHello();
//7. Without modifying any of your previous code, change the penguin's name to "Penguin McPenguinFace" and then call your penguin's sayHello() function one more time to make sure it still works.
penguinId.character = "Penguin McPenguinFace";
penguinId.sayHello();
//8. Write another method called fly, and inside that method, use an if / else statement to print "I can fly!" to the console if your penguin's canFly property is true, or "No flying for me!" if its canFly property is false.
penguinId.fly = function() {
    if (this.canFly)
 {
     console.log('I can fly!');
 } else {
     console.log('No flying for me !');
 }
}
//9. Call your penguin's fly() method and make sure it works!
penguinId.canFly();
//10. Change the canFly property to true -- again, without modifying any of your previous code!
penguinId.canFly = true;
//11. Now call your penguin's fly() method again and make sure it works as expected!
penguinId.canFly();
//12. Write a for ... in loop to print each key to the console. (Hint: See this page for an example of this special type of loop.)
for (key in penguinId) {
    console.log(key);
}
//13. Write another for ... in loop to print the value of each key to the console. (Hint: You'll need to use bracket notation to access the values this way, instead of dot notation!)
for (key in penguinId) {
    console.log(penguinId[key]);
}
// Exercise 2
// 14.
// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa
let recipe = {
    name: 'mole',
    Serves: 2,
    Ingredients: ["cinnamon", "cumin", "cocoa"]
}
for (key in recipe) {
    console.log(`${key}  ${recipe[key]}`);
}
// 15.
// Keep track of which books you read and which books you want to read!
 



// Create an array of objects, where each object describes a book and has
//  properties for the title (a string), author (a string), and alreadyRead 
//  (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title
//  and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether
//  you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
let bookCatalogue = [{
    title: "Harry Potter",
    author: "J. K. Rowlings",
    read: true,
   },
   { 
    title: "Godan",
    author: "Premchand",
    read: false, 
   }];
for (let i = 0; i < bookCatalogue.length; i++) {
   let book = bookCatalogue[i];
   let ifRead = book.title + ' by ' + book.author;
   if (book.read) {
       console.log('you already read ' + ifRead);
   }
   else {
       console.log('you still need to read ' + ifRead);
   }
}

/* *********************************    Arrays inside objects      ********************************* */


// 1. Add a new property to your penguin called favoriteFoods and set it equal to an array containing a list of three strings.
penguinId.favoriteFoods = ['meat', 'fish', 'peanuts'];
// 2. Access your penguin's second favorite food and print it to the console using console.log()
console.log(penguinId.favoriteFoods[1]);
// 3. Create a new variable called firstFavFood and set it equal to the first item in your penguin's array of favorite foods.
let firstFavFood = penguinId.favoriteFoods[0]
// 4. Add another food to the end of the list.
penguinId.favoriteFoods.push('another type of fish');
// 5. Print the length of your penguin's favoriteFoods array to the console with console.log()
console.log(penguinId.favoriteFoods.length);
// 6. Without modifying any of your previous code, write a new line of code that changes the value of the last item in the list to "pineapples" (overwriting the previous value).
penguinId.favoriteFoods[3] = 'small fish';
// 7. Create a new variable named lastFavFood that will always point to the last element of your penguin's favoriteFoods array, no matter how many items are in the list. (Hint: this is essentially the same problem as step 18 from above.)
let lastFavFood = penguinId.favoriteFoods [penguinId.favoriteFoods.length - 1];
//8. Write a for loop to iterate through every food in your penguin's favoriteFood property and print each one to the console. (Hint: This loop will look exactly the same as the one you wrote for step 16 above, except now you're accessing the array as a property of an object.)
for (let i = 0; i < penguinId.favoriteFoods.length; i++) {
    console.log(penguinId.favoriteFoods[i]);
}