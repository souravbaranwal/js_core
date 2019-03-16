let container = document.getElementById('container');
let userInput = document.getElementById('userInput');
let userProfileSection = document.getElementById('userProfileSection');
let userNameBox = document.querySelector('.userNameBox');
let avatar = document.querySelector('.avatar');
let userDataSection = document.querySelector('.userDataSection');
let followDetails = document.querySelector('.followDetails');
var repoDetails = document.querySelector('.repoDetails');

var userName;


function displayFollows(data) {
    repoDetails.innerHTML = '';
    var htmlToAppend = '';
    data.map(elm => {
        htmlToAppend +=
            `<div class="followersBox">
          <img src="${elm.avatar_url}" alt="">
          <p>${elm.login}</p>
        </div>`;
    });
    followDetails.innerHTML = htmlToAppend;
}

function displayRepos(data) {

    var htmlToAppend = '';
    console.log(data);
    followDetails.innerHTML = ``;
    data.map(elm => {
        htmlToAppend += `<div class="reposBox">
          <p>${elm.name}</p>
        </div>`
    })
    repoDetails.innerHTML = htmlToAppend;
    console.log(htmlToAppend);
}

function displayFollowersData() {
    fetch(`https://api.github.com/users/${userName}/followers`).then(res => res.json()).then(data => displayFollows(data));

}

function displayFollowingData() {
    fetch(`https://api.github.com/users/${userName}/following`).then(res => res.json()).then(data => displayFollows(data));
}

function displayReposData() {
    fetch(`https://api.github.com/users/${userName}/repos`).then(res => res.json()).then(data => displayRepos(data));
}


function displayData(data) {
    userProfileSection.innerHTML =
        `<div ><img class="avatar" src="${data.avatar_url}" alt="" '></div>
      <div class="userNameBox"><p>${data.name}<p/></div>
      <button type="button" class="followersBtn">followers</button>
      <button type="button" class="followingBtn">following</button>
      <button type="button" class="repoBtn">repositories</button>`;
    // userInput.value = '';
    userInput.remove();
    let followersBtn = document.querySelector('.followersBtn');
    let followingBtn = document.querySelector('.followingBtn');
    let repoBtn = document.querySelector('.repoBtn');

    followersBtn.addEventListener('click', displayFollowersData);
    followingBtn.addEventListener('click', displayFollowingData);
    repoBtn.addEventListener('click', displayReposData);
}


function inputAction(event) {
    if (event.keyCode === 13) {
        userName = event.target.value;
        fetch(`https://api.github.com/users/${userName}`).then(res => res.json()).then(data => displayData(data));
    }
}

userInput.addEventListener('keyup', inputAction);