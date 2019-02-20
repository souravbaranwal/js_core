// The Cat

// Create an object that represents a cat. It should have properties for tiredness, hunger, lonliness and happiness
// Write methods that increase and decrease those properties.
// Write a method that prints out the cat's status in each area. (Be creative e.g. Paws is really hungry, Paws is VERY happy.)
// Make the functions take arguments that increase or decrease arbitrary amounts
var cat = {
  tiredness: 0,
  hunger: 0,
  lonliness: 0,
  happiness: 0,

  increaseProperties(){
    this.tiredness++;
    this.hunger++;
    this.lonliness++;
    this.happiness++;
  },

  decreaseProperties(){
    this.tiredness--;
    this.hunger--;
    this.lonliness--;
    this.happiness--;
  },
  catTirednessStatus(){
    if (this.tiredness > 0 && this.hunger > 0 && this.lonliness && this.happiness > 0) {
      return 'cat is '
    }
  },

  catTirednessStatus(){
    this.tiredness > 0 ? 'cat is not tired' : 'cat is tired';
  },
  catHungerStatus() {
    this.hunger > 0 ? 'cat is not hungry' : 'cat is hungry';
  },
  catLonlynessStatus(){
    this.lonliness > 0 ? 'cat is not lonely': 'cat is lonly';
  },
  catHappiness(){
    this.happiness > 0 ? 'cat is happy' : 'cat is not happy';
  },
  changeProperty(tiredness,hunger,lonliness,happiness){
    this.tiredness = tiredness;
    this.hunger = hunger;
    this.happiness = happiness;
    this.lonliness = lonliness;
  }
}



// 2nd
// An object-oriented book-list!

// Create a class BookList
// Create another class called Book

// BookLists should have the following properties:
  // 1. Number of books marked as read
  // 2. Number of books marked not read yet
  // 3. A reference to the next book to read (book object)
  // 4. A reference to the current book being read (book object)
  // 5. A reference to the last book read (book object)
  // 6. An array of all the Books

// Each Book should have several properties:
  // Title
  // Genre
  // Author
  // Read (true or false)
  // Read date, can be blank, otherwise needs to be a JS Date() object


// Every Booklist should have a few methods:
// .add(book)
  // should add a book to the books list.

// .finishCurrentBook()
  // should mark the book that is currently being read as "read"
  // Give it a read date of new Date(Date.now())
  // Change the last book read to be the book that just got finished
  // Change the current book to be the next book to be read
  // Change the next book to be read property to be the first unread book you find in the list of books

  class book {
    constructor(title, genere, author, read, readDate) {
      this.title = title;
      this.genere = genere;
      this.author = author;
      this.read = read || false;
      this.readDate = new Date(readDate);
    }
  }