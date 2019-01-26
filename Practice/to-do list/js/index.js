// let myList  = document.getElementsByTagName("li");
// for (let i = 0; i < myList.length; i++) {
//     let span = document.createElement("span");
//     let text = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(text);
//     myList[i].appendChild(span);    
// }

// let close = document.getElementsByClassName("close");
// for (let i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//         let div = this.parentElement;
//     }
// }

// let listInput = document.querySelector('.listInput');
// let addBtn = document.querySelector('.add-btn');
// let ulTag = document.querySelector('.lists');

// addBtn.onclick = function() {
//     let li = document.createElement('li');
//     li.textContent = listInput.value;
//     if (listInput.value !== "") {
//         ulTag.appendChild(li);
//     }
//     listInput.value = "";
// };
// console.log(listInput.value);


function addTodo() {
    let inputText = document.getElementsByClassName('listInput');
    if (inputText.value) {
        let li = document.createElement('li');
        let todoCheck = document.createElement('input');
        todoCheck.type = 'checkbox';
        let span = document.createElement('span');
        span.textContent = inputText.value;

        li.appendChild(todoCheck);
        li.appendChild(span);

        document.querySelector('ul').appendChild('li');
        inputText.value = "";
    }
}


function handleEnter(event) {
    console.log(event);
    if (event.keycode === 13) {
        addTodo();
    }
}

document.querySelector('button').addEventListener('click', addTodo);
document
    .querySelector('.listInput')
    .addEventListener('keydown', handleEnter);























