let isGuestOneVeg = false;
let isGuestTwoVeg = false;

// If both are veg "Only offer up vegan dishes."
// At least one veg  "Make sure to offer up some vegan options."
// Else, "Offer up anything on the menu"
if (isGuestOneVeg && isGuestTwoVeg) {
    console.log ("Only offer up vegan dishes");
} else if (isGuestOneVeg || isGuestTwoVeg){
    console.log ("Make sure to offer up some vegan option");
} else {
    console.log ("Offer up anything on the menu");
}