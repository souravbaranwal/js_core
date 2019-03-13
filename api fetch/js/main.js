let container = document.getElementById('container');
let userInput = document.getElementById('userInput');
let userDataSection = document.getElementById('userDataSection');


function displayData(data) {
    console.log(data);
    userDataSection.innerHTML = `<div class="col-md-6"><img src="${data.avatar_url}" alt="" style = 'width:30%;'></div>
      <div class="col-md-6">${data.name}</div>
      <button type="button" class="btn btn-secondary">Secondary</button>
      <button type="button" class="btn btn-info">Info</button>`
    userInput.value = '';
}


function inputAction(event) {
    if (event.keyCode === 13) {
        console.log(event.target.value);
        var recievedData = new XMLHttpRequest;
        recievedData.addEventListener('load', () => displayData(JSON.parse(recievedData.response)));
        recievedData.open('GET', `https://api.github.com/users/${event.target.value}`);
        recievedData.send();
    }
}

userInput.addEventListener('keyup', inputAction);