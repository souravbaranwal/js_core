// Define a constructor function called Person which takes three arguments
//(name, yearOfBirth, job) Initiate the properties

// Define a function name calculateAge which returns the age of the person

// Use constructor function to make three objects with different values for example ('John', 1990, 'teacher')

// call the calculateAge function on each object
let Person = function (name, yearofBirth, job) {
    this.name = name;
    this.yearofBirth = yearofBirth;
    this.job = job;
}

Person.prototype.calculateAge = function(){ return (2019 - this.yearofBirth)};

let sourav = new Person('sourav',1989,'web dev');
let sajan = new Person('sajan',1992,'martial art instructor');
let kiran = new Person ('kiran', 1994, 'web dev');
