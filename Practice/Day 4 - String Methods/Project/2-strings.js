// Write a JavaScript function to chop a string into chunks of a given length.
// Input ( String, Number) -> ('Hello World!', 2)
// Output ['He', 'll', 'o ', 'Wo', 'rl', 'd!']

// str.split( separator, limit)
// function stringSpilt (string, number) {
//     var chunks = [],
//         i = 0,
//         n = string.length;
//     if (i < n) {
//       chunks.push(string.slice(i, i = 1 + number));
//     }
//     return chunks;
//   }

//Write a JavaScript function to count the occurrence of a substring in a string.
// Input (String, String) -> ('The world of the dogs', 'the')
// Output (Number) -> 2
function occurrence(String, substr) {
    String = String.split(" ");
    return String.filter(i => i.toLowerCase() === substr).length;
}
console.log(occurrence('The world of the dogs', 'the')); 



//  Write a JavaScript function to strip leading and trailing spaces from a string.
// Input (String) -> ('Hello World   ')
// Output String -> "Hello World"
function strip(str){
    return str.trim();
};
console.log(strip('Hello World   '));

// Write a JavaScript function to truncate a string to a certain number of words.
// Input (String, Number) -> ('The quick brown fox jumps over the lazy dog', 4)
// Output ( String ) -> "The quick brown fox"
function truncate(string, number) {
    let arrStr = string.split(" ");
    return arrStr.slice(0, number).join(' ');
};
// Write a JavaScript function to alphabetize a given string.(A - z)
// Input (String) -> 'United States'
// Output 'SUadeeinsttt'
function alphabetize_string(str){
    return str.split('').sort().join('');
    };

// Write a JavaScript function to test case insensitive (except special Unicode characters) string comparison.
// Input ( String String) -> ('abcd', 'AbcD')
// Output Boolean -> true
// ('ABCD', 'Abce') -> false
function testInsensitive(string1, string2)
{
var x = string1.toUpperCase() === string2.toUpperCase();
  return x;
}
console.log(testInsensitive('abcd', 'AbcD'));
console.log(testInsensitive('ABCD', 'Abce'));

function testInsensitive(string1, string2)
{
    if (string1.toUpperCase() === string2.toUpperCase())  {
        console.log('true');;
    } else {
        console.log('false');;
    }
}