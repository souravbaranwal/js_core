var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];
//Write a function findLongestWord that takes an array of words and returns the longest one.
//If there are 2 with the same length, it should return the first occurrence.
function findLongestWord (word) {
  let longestWord = word[0];
  for(let i = 0; i < word.length; i ++) {
    if (longestWord.length < word[i].length) {
      longestWord = word[i]
    }
  } return longestWord;
}
console.log(words);



var numbers1 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
// Create a sumArray function that takes an array of numbers1 as a parameter, and calculate the sum of all its numbers
// Use reduce method of array
// Use the above sum and calculate the average.
function sumArray (numbers1) {
  let answer = numbers1.reduce((acc, curr) => acc + curr, 0);
  console.log(answer);
  console.log(answer/numbers1.length);
}

var numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
//Write a function averageNumbers that receives an array of numbers2 and calculate the average of the numbers

function averageNumbers (numbers2) {
  let answer = numbers2.reduce((acc, curr) => acc + curr, 0);
  console.log(answer/numbers2.length);
}


var words2 = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];
//Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.



