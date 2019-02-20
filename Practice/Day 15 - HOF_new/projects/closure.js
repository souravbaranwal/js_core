// Exersice 1

function nonsense(string) {
    function blab() {
        alert(string)
    }
    blab();
}
// Exersice 2
function nonsense(string) {

    function blab() {
        alert(string)
    }
    setTimeout(blab, 2000);
}

// Exersice 3
function nonsense(string) {

    function blab() {
        alert(string)
    }
    return blab;
}
let blabLater = nonsense('sourav');
let blabAgainLater = nonsense('kumar');



// Exersice 5
var lastNameTrier = firstName => {
    var innerFunction = lastName => {
        console.log(firstName);
        console.log(lastName);
    }
    return innerFunction;
}
var  firstNameFarmer = lastNameTrier('Farmer');
firstNameFarmer('Brown');

// 6. Create a `storyWriter` function that returns an object with two methods. One method, `addWords` adds a word to your story and returns the story while the other one, `erase`, resets the story back to an empty string. Here is an implementation:


var storyWriter = function() {
  var story = '';
  return {
    addWords: function(words) {
      story = story + words + ' ';
      return story.trim();
    },
    erase: function() {
      story = '';
    }
  };
};


```javascript
	var farmLoveStory = storyWriter();
	farmLoveStory.addWords('There was once a lonely cow.'); // 'There was once a lonely cow.'
	farmLoveStory.addWords('It saw a friendly face.'); //'There was once a lonely cow. It saw a friendly face.'
	
	var storyOfMyLife = storyWriter();
	storyOfMyLife.addWords('My code broke.'); // 'My code broke.'
	storyOfMyLife.addWords('I ate some ice cream.'); //'My code broke. I ate some ice cream.'
	storyOfMyLife.erase(); // ''
	
	``` 
// Exersice 7

