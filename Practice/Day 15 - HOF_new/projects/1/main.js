var counter = (function () {
  var privateCounter = 0;

  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    }
  };
})();

counter.value();
counter.increment();
counter.increment();
counter.value();
counter.decrement();
counter.value();


// Challenge 1
let addTwo = input => input + 2;

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

// Challenge 2
let addS = word => word + 's';


// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));

// Challenge 3
let multiplyByTwo = input => input * 2;

let map = (numArray, callBack) => {
  let result = [];
  numArray.forEach(num => result.push(callBack(num)));
  return result;
}

// console.log(map([1, 2, 3], addTwo));

// Challenge 4
let forEach = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

// see for yourself if your forEach works!

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
let mapWith = (numArray, callBack) => {
  let result = [];
  numArray.forEach(num => result.push(callback(num)));
  return result;
}

//Extension 2
function reduce(array, callback, initialValue) {}

let reduce = (array, callback, initialValue) => {
  let sum = initialValue;
  array.forEach(elm => (sum = callback(sum, elm)));
  return sum;
}

//Extension 3
let arrays = ([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]);
let intersection = (...args) => {
  return args.reduce((acc, array) => {
    return acc.filter(num => {
      return array.indexOf(num) !== -1
    })
  })
}

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
// function union(arrays) {}
let union = (...args) => {
  return args.reduce((acc, array) => {
    return acc.concat(array.filter(num => {
      return acc.indexOf(num) === -1
    }))
  })
}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
// Construct a function `objOfMatches` that accepts two arrays and a callback. `objOfMatches` will build an object and return it.
//  To build the object, `objOfMatches` will test each element of the first array using the callback to see if the output matches the 
// corresponding element (by index) of the second array. If there is a match,
//  the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value.
function objOfMatches(array1, array2, callback) {
  return array1.reduce((acc, word, index) => {
    if (callback(word) === array2[index]) {
      acc[word] = array2[index]
    }
    return acc
  }, {})
}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }


// ## Extension 6
// Construct a function `multiMap` that will accept two arrays: an array of values and an array of callbacks.
//  `multiMap` will return an object whose keys match the elements in the array of values.
//  The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks,
//   where the input to each callback is the key.function multiMap(arrVals, arrCallbacks) {}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

function multiMaps(arrayWords, arrayCallBacks) {
  return arrayWords.reduce((acc, curr) => {
    acc[curr] = arrayCallBacks.map(elm => elm(curr));
    return acc;
  }, {})
}


//create a function filter which uses two argumnets array and callback which filters out 
let modulusTwo = elm => elm % 2 == 0 ? true : false;


let filter = (array, callback) => {
  let newArray = [];
  array.forEach(elm => callback(elm) ? newArray.push(elm) : '');
  return newArray;
};



let filter = (array, callback) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    callback(array[i]) ? newArray.push(array[i]) : '';
  }
  return newArray;
}





