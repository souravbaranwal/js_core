// Write a JavaScript function to check whether an `input` is a string or not.
let ifString = function(input) {
    let typeInput = typeof input;
    //  console.log(typeInput);
     if (typeInput == 'string') {
        console.log(`${typeInput} is a string`);
     } else {
         console.log(`${typeInput} is not a string`);
     }
 }

// Write a JavaScript function to check whether a string is blank or not.
let ifBlank = function(input) {
    if (input.length === 0) {
        console.log('this is a blank string');
    } else {
        console.log('this is not a blank string');
    }
}


// Write a JavaScript function to split a string and convert it into an array of words.
// Input -> "Hello World In Javascript"
// Output -> ['Hello','World', 'In', 'Javascript']
let stringArray = function (str) {
    return str.split(" ");
};
console.log(stringArray('Hello World In Javascript'));

// Write a JavaScript function to extract a specified number of characters from a string.
// Input -> (string, number) -> ('Hello World!', 4)
// Ouptut -> String -> "Hell"
extract = function (str, length) {
  
    return str.slice(str, length);
};
console.log(extract('Hello world!',4));

// Write a JavaScript function to convert a Full Name like (Rahul Dravid) -> (Rahul D.)
// Input -> (String)
// Output (String)
shortName = function (str) {
    var divideName = str.trim().split(" ");
    if (divideName.length > 1) {
        return (divideName[0] + " " + divideName[1].charAt(0) + ".");
    }
    return divideName[0];
};
console.log(shortName("Rahul Dravid"));



// Write a JavaScript function to hide email addresses to protect from unauthorized user.
// Input -> (String) -> "someone@altcampus.io"
// Output -> (String) -> "som....@altcampus.io"
function hideMail(str) {
    var arr = str.split("");
    arr.splice(5, 6, "...");
    return arr.join("");
    }
    console.log(hideMail("someone@altcampus.io"));

// Write a JavaScript function to parameterize a string
// Input -> (String) -> ('The Perks Of Being A Wallflower')
// Output -> (String) -> 'the-perks-of-being-a-wallflower
function paraString (str) {
    let sentence = str.toLowerCase();
    sentence = sentence.split(' ').join('-');
    return sentence;
    }
    console.log(paraString("The Perks Of Being A Wallflower"));

// Write a JavaScript function to capitalize the first letter of every Word of a string.
// Inpput -> (String) -> 'hello Batman from India'
// Output -> (String) -> 'Hello Batman From India'
function capitalize(str) {
    let result= str.split(" ");
    
    for (let i = 0; i < result.length; i++) {
    result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1, result[i.length]);
    }
    return result.join(" ");
    }
    console.log(capitalize('hello Batman from India'));

// Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case.
// Input (String) -> 'AaBbcVv'
// Output -> 'aAbBCvV'
function convertCasing(str) {
    var new_str = "";
    var a = str.length;
    for (var i = 0; i < a; i++) {
    if (str[i] === str[i].toLowerCase()) {
    new_str = new_str + str[i].toUpperCase();
    } else {
        new_str = new_str + str[i].toLowerCase();
    }
    }
    return new_str;
    }
    
    console.log(convertCasing('AaBbc'));


// Write a JavaScript function to convert a string into camel case.
// Input (String) -> 'Learning about js'
// Output -> 'LearningAboutJs'

var splitted = "Learning about js".split(' ');
var mapped = splitted.map((value, index) => {
    if(index === 0){
        return value.toLowerCase()
    } else {
        var splitArr = value.split(''); //["a","b","o"]
        splitArr[0] = splitArr[0].toUpperCase();
        return splitArr.join('');
    }
})
mapped.join('');

// Write a JavaScript function to uncamelize a string
// Input (String) -> 'LearningAboutJs'
// Output -> 'Learning About Js'
function  camalCase(str) {
    var newString = str.split('');
    for (let i = 0; i > newString.length; i++) {
        if (newString[i] === newString[i].toUpperCase) {
            newString = newString + ' ';
        }   newString = newString + str[i];
    }   return newString;
}













// Write a JavaScript function to concatenates a given string n times
// Input (String, number) -> ('Hello!', 4)
// Output -> 'Hello!Hello!Hello!Hello!'
function repeat(string, number) {
    var res = '';
    if(typeof number === 'undefined') {
    res = string;
    return string;
    }
    else{
    res = string.repeat(number);
    return res;
    }
    };
    console.log(repeat('Hello!',4));


// Write a JavaScript function to humanized number
// Input -> (Number) -> 1 or 2
// Output -> (String) -> 1st or 2nd
function humanization(input) {
    for (let i = 0, i < input )
}

// Make a note of all the methods and properties of string and number with these requirements:

// 1. Method Name
// 2. Syntax
// 3. Description
// 4. Argument (Data Type)
// 5. Return (Data Type)
// 6. Example

Method Name-
charAt()
Syntex-
str.charAt(index)
Description-
charAt() returns a new string consisting of the single UTF-16 code ubit located at the specified offset into the string.
Characters are indexed from left to RTCIceGatherer,index of first character is 0 and last character is string.Name.length -1.
If index supplied if out of range ,JS returns an empty string.
Argument-
any integer between 0 and 1 - length of the string.If no index is provided the default is 0 and the first character is returned.Argument
return-
a string at the specified index,empty if index is out of range.Argument
example -
var name = "simba";
console.log(name.charAt(0));
displayes - "s"

Method name-
charCodeAt()
Syntex -
str.charCodeAt(index)
Description -
it returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
it  will always return a value that is less than 65536.
Arguments -
any intiger greater of=r equal to 0 and less than the length of the string; if it is not a number, it defaults to 0.
return value-
A number representing the UTF-16 code unit value of the character at the given index; NaN if index is out of range.
example-
var sentence = 'The quick brown fox jumped over the lazy dog.';
var index = 4;
console.log('The character code ' + sentence.charCodeAt(index) + ' is equal to ' + sentence.charAt(index));
returns - "The character code 113 is equal to q"


Method Name -
Concat()
Syntex -
str.concat(string2[, string3, ...RTCIceGatherer., stringN])
Description -
The concat() function concatenates the string arguments to the calling string and returns a new string. Changes to the original string or the returned string don't affect the other. If the arguments are not of the type string, they are converted to string values before concatenating.
Argument -
string2...stringN
Strings to concatenate to this string.
Return -
A new string containing the combined text of the strings provided.
Example -
let hi = "Hi, ";
console.log(hi.concat("Raj", ". Have a nice day."));
returns- Hi, Raj. Have a nice day.

Method Name -
endsWith()
Syntex -
str.endsWith(searchString[, length])
Description -
The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false
Argument -
searchString ,The characters to be searched for at the end of this string.
length ,Optional. If provided it is used as the length of str. If omitted, the default value is the length of the string.
returns -
true or false depending on if character is found or not.concat
example -
let greetings = "How are you."
console.log(str.endsWith("you."));
will return true.endsWith

 Method name-
 includes()
 syntex - 
 str.includes(searchString[, position])
Description -
is case sensetive.determines whether one string may be found within another string, returning true or false as appropriate.
argument -
searchString -A string to be searched for within this string.
postion(optional)- position within the string at whch to begin searching for searchString.default is 0.
Return -
true of false if string is found or not found.includes
example -
const str = "How are you";
console.log(str.includes("are"));
returns -true.

method name -
indexOf()
syntex -
str.indexOf(searchValue[, fromIndex])
Description -
Characters in a string are indexed from left to right. The index of the first character is 0, and the index of the last character of a string called stringName is stringName.length - 1
returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.

argument -
returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
returns -
The index of the first occurrence of searchValue, or -1 if not found.
An empty string searchValue will match at any index between 0 and str.length
example -
const greetings = 'How are you?';
console.log(greetings.indexOf('w'));
logs 2;

Method Name -
lastIndexof()
Syntex-
str.lastIndexOf(searchValue[, fromIndex])
Discription -
returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found.
Argument -
searchValue- A string representing the value to search for. If searchValue is an empty string, then fromIndex is returned.
fromIndex (optional) -The index of the last character in the string to be considered as the beginning of a match. The default value is +Infinity. If fromIndex >= str.length, the whole string is searched. If fromIndex < 0,  the behavior will be the same as if it would be 0.
Returns -
The index of the last occurrence of the specified value; -1 if not found.
example -
let greet = "How are you?";
let searchTerm = a;
console.log(greet.lastIndexOf(searchTerm));
output : 3;

// Method Name-
// match()
// syntex - 
// str.match(regexp)
// Discription -

Method Name -
padEnd()
Syntex -
str.padEnd(targetLength [, padString])
Discription -
pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end (right) of the current string.
Argument -
targetLength -length of the resulting string once te current string has been padded
If the value is lower than the current string's length, the current string will be returned as is.
Return -
A String of the specified length with the pad string applied at the end of the current string.
Example -
'hello'.padEnd(8);
outputs -'hello   '

Method Name-
padStart()
Syntex -
str.padStart(targetL` [, padString])
Discription-
pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start (left) of the current string.
Argument -
targetLength -The length of the resulting string once the current string has been padded. If the value is less than the current string's length, the current string is returned as is.
padString(optional) - The string to pad the current string with. If this padding string is too long to stay within the targetLength, it will be truncated from the right. The default value is " " 
Return-
A String of the specified length with the pad string applied from the start.
example -
'hello'.padStart(10); -outputs - '       hello'
'hell'.padstart(10, 'foo'); outputs 'foofoofhell'

Method Name-
repeat()
Syntex-
str.repeat(count);
Discription-
constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
example -
let greet = 'how are you ? ';
console.log('Hi there ' + greet.repeat(5));
outputs - 'Hi there how are you ? how are you ? how are you ? how are you ? how are you ? 
Argment -
An integer between 0 and +∞: [0, +∞), indicating the number of times to repeat the string in the newly-created string that is to be returned.
Return -
A new string containing the specified number of copies of the given string.


// Method Name-
// replace()
// Syntex -
// str.replace(regexp|substr, newSubstr|function)
//only understand how it works.

Method Name -
slice()
Syntex -
str.slice(beginIndex[, endIndex])
Discription -
extracts a section of a string and returns it as a new string, without modifying the original string.
Argument -
beginIndex -The zero-based index at which to begin extraction.If beginIndex is greater than or equal to the length of the string, slice() returns an empty string.
endIndex - Optional. The zero-based index before which to end extraction.
Example-
let str = 'hi how are you';
console.log(str.slice(3, 6));
outputs 'how'

Method Name 
split()
Syntex -
str.split([separator[, limit]])
Discription- 
splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.
Argument -
separator(optional) - Specifies the string which denotes the points at which each split should occur.
If separator is omitted or does not occur in str, the array returned contains one element consisting of the entire string. If separator is an empty string, str is converted to an array of characters.
limit(optional) -
Integer specifying a limit on the number of splits to be found.
return -
An Array of strings split at each point where the separator occurs in the given string.

Method Name 
substring()
Syntex -
str.substring(indexStart[, indexEnd])
Discription -
substring() extracts characters from indexStart up to but not including indexEnd
If indexEnd is omitted, substring() extracts characters to the end of the string.
If indexStart is equal to indexEnd, substring() returns an empty string.
If indexStart is greater than indexEnd, then the effect of substring() is as if the two arguments were swapped; See example below.
Any argument value that is less than 0 or greater than stringName.length is treated as if it were 0 and stringName.length respectively. Any argument value that is NaN is treated as if it were 0.
Argument - 
The index of the first character to include in the returned substring.
indexEnd
Optional. The index of the first character to exclude from the returned substring.
Return -
A new string containing the specified part of the given string.
example -
let str = 'Hello';
console.log(str.substring(1, 3));
displays - 'Hel'

Method Name -
toLowerCase()
Syntex -
str.toLowerCase()
Discription -
The toLowerCase() method returns the value of the string converted to lower case. toLowerCase() does not affect the value of the string str itself.
Argument -
any string value
Return -
A new string representing the calling string converted to lower case.
Example -
console.log('HELLO'.toLowerCase());
will output - 'hello' .

Method Name -
toUpperCase()
Syntex -
str.toUpperCase()
Discription 
method returns the value of the string converted to upper case. toUpperCase() does not affect the value of the string str itself.
Returns -
String is converted to upper case.
Example -
console.log('hello'.toUpperCase());
displays -'HELLO'


Method Name -
trim()
Syntex -
str.trim()
Discripton -
method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).
Parameter -
Any string ,mainly strings having white spaces.
Return -
A new string representing the calling string stripped of whitespace from both ends.
Example -
let str = '    hello    ';
console.log(str.trim());
logs - 'hello'

Method name -
trimStart().
It works like trim() but only removes white spaces from the start of the string.

Method Name -
trimEnd()
It works like trim() but only removes whitespaces from the end of the string.

Method Name -
valueOf()
Syntex-
str.valueOf()
Discription -
The valueOf() method returns the primitive value of a String object.
Argument -
any string 
Return -
A string representing the primitive value of a given String object.
Example -
let strObj = new String('hello');
console.log(strObj);
// displays String{'hello'}
console.log(strObj.valueOf());
// displays 'hello' .

