const user = {
  name: "Alex",
  language: ["English", "Spanish", "Chinese", "JavaScript"],
  country: "Spain"
};

// Use template literal and print the message
// Alex is from Spain and knows English, Spanish, Chinese adn JavaScript
function userDetails (user) {
  console.log(`${user.name} is from ${user.country} and knows ${user.language[0]}, ${user.language[1]}, ${user.language[2]} and ${user.language[3]}.`);
}

// Use the above variable user and create HTML output
// Name: Alex Country: Spain
// ul -> Languages
//   li English
//   li Spanish
//   ...
function createUser(user) {
  let userDetails = document.querySelector('.userDetails');
  let pTag = document.createElement('p');
  let ulTag = document.createElement('ul');
  let liTag;
  pTag.innerHTML = `Name: ${user.name}, Country: ${user.country}`;
  let languageArray = user.language;
  function createLi() {
    languageArray.forEach(element => {
    liTag += `<li>${element}<li/>`;
    });
  }
  createLi(languageArray);
  userDetails.appendChild(pTag);
  ulTag.innerHTML = liTag;
  userDetails.appendChild(ulTag);
}



const pizzas = [
  "Deep Dish",
  "Peperoni",
  "Hawaiian",
  "Meatzza",
  "Spicy Mama",
  "Margherita"
];

function selectPizza () {
  let selectPizzaParent = document.querySelector('.selectPizzaParent');
  let selectMenu = document.createElement('select');
  let options;
  function createOptions() {
    pizzas.forEach(element => {
      options += `<option>${element}</option>`;
    });
  }
  createOptions(pizzas);
  selectMenu.innerHTML = options;
  selectPizzaParent.appendChild(selectMenu);
}
// Use above array and template literal to create select options for all the pizzas

const beers = [
  {
    name: "Purple Iris",
    abv: 6.8,
    label:
      "https://s3.amazonaws.com/brewerydbapi/beer/dMLwGo/upload_yiUllE-large.png",
    type: "IPA"
  },
  {
    name: "Orange Blossom Pilsner",
    abv: 5.5,
    label:
      "https://s3.amazonaws.com/brewerydbapi/beer/Rczcb9/upload_9Nhxxl-large.png",
    type: "Pilsner"
  },
  {
    name: "Darkness",
    abv: 4.2,
    label:
      "https://s3.amazonaws.com/brewerydbapi/beer/lnxbIV/upload_idNXFf-large.png",
    type: "Stout"
  },
  {
    name: "Belgian Wit",
    abv: 5.4,
    label:
      "https://s3.amazonaws.com/brewerydbapi/beer/3CvVQG/upload_xOMnlK-large.png",
    type: "Wheat"
  },
  {
    name: "Stolen Fruit",
    abv: 4.6,
    label:
      "https://s3.amazonaws.com/brewerydbapi/beer/YGT30k/upload_uVCHP7-large.png",
    type: "Wheat"
  }
];

// Use the beers array and create HTML using template literal and append into div with id books
