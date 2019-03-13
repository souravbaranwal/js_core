const cuts = [
  "Chuck",
  "Brisket",
  "Shank",
  "Rib",
  "Plate",
  "Flank",
  "Short Loin",
  "Tenderloin",
  "Sirloin",
  "Round"
];

// Loop over every value of cuts array and console.log() the value using for of
for(let cut of cuts) {
  console.log(cut);
}

// Select all the elements with class of `loop` and add a event listener on every element that alerts `you clicked me` using for of. (using querySelector)
let tags = document.querySelectorAll('.loop');
for(tag of tags){
  tag.addEventListener('click', function(){
    alert('you clicked me');
  });
}

// Select all the elements with class of `loop` and add a event listener on every element that alerts `you clicked me` using for of.(using getElementsByClassName)

let tags = document.getElementsByClassName('loop');
console.log(tags);
for (tag of tags) {
  tag.addEventListener('click', function () {
    alert('you clicked me');
  });
}



var str = "The world is full of great people.";
// Loop over all the letters and reverse the whole sentence using for of
