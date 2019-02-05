let todos = JSON.parse(localStorage.getItem('item')) || [{
        todoText: 'one',
        todoStatus: false
    },
    {
        todoText: 'two',
        todoStatus: false
    }
];
displayTodo(todos);
localStorage.setItem('item', JSON.stringify(todos));
let todoInput = document.querySelector('#todo-text');
let todoList = document.querySelector('#lists');
let addTodoBtn = document.querySelector('#add-todo');


// functions.
function displayTodo(array = []) {
    document.querySelector('ul').innerHTML = '';

    array.forEach((todo, index) => {
        let list = document.createElement('li');
        let checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.setAttribute('data-index', index);
        checkBox.checked = todo.todoStatus;
        let checkBoxStyling = document.createElement('span');
        checkBoxStyling.classList.add('checkMark');
        let checkboxParent = document.createElement('span');
        checkboxParent.classList.add('checkboxParent');
        
        checkboxParent.appendChild(checkBox);
        checkboxParent.appendChild(checkBoxStyling);
        
        
        let todoText = document.createElement('span');
        todoText.setAttribute('data-index', index);
        todoText.textContent = todo.todoText;
        todoText.className = "todo-text";
        if (todo.todoStatus) {
            todoText.classList.add('strikeout')
            }

        let close = document.createElement('span');
        close.innerHTML = `<i class="fas fa-window-close" ></i>`;
        close.setAttribute('data-index', index);

        checkboxParent.appendChild(checkBox);
        list.appendChild(checkboxParent);
        list.appendChild(todoText);
        list.appendChild(close);
        document.querySelector('ul').appendChild(list);

        checkBox.addEventListener('click', toggleTodo);
        close.addEventListener('click', closeList);
        localStorage.setItem('item', JSON.stringify(todos));
    });
}

function toggleTodo(e) {
   
    let id = e.target.dataset.index;
    todos[id].todoStatus = !todos[id].todoStatus;

    displayTodo(todos);
    localStorage.setItem('item', JSON.stringify(todos));
}

function closeList(e) {
    var id = e.target.dataset.index;
    todos.splice(id, 1);
    displayTodo(todos);
    localStorage.setItem('item', JSON.stringify(todos));
};

function addTodo() {
    if (todoInput.value) {
        let newTodo = {
            todoText: todoInput.value,
            todoStatus: false,
        };
        todos.push(newTodo);
        displayTodo(todos);
        localStorage.setItem('item', JSON.stringify(todos));

    }
    todoInput.value = '';
};

let editList = event =>{
    if (event.target.classList.contains('todo-text')) {
        let parent = event.target.parentNode;
        let label = event.target;
        let input = document.createElement('input');
        input.classList.add('newTodo');
        input.value = event.target.textContent;
        input.focus();
        parent.replaceChild(input, event.target);
        input.addEventListener('keyup', event => {
            
            
            if (event.keyCode === 13) {
                label.textContent = event.target.value;
                parent.replaceChild(label, input);
            }
        });

        input.addEventListener('blur', event => {
            label.textContent = event.target.value;
            parent.replaceChild(label, input);
        })
        
        
    }
}


//   Random Quote
  let quoteSection = document.querySelector('.quoteSection');
  let pTag = document.createElement('p');
  quoteSection.appendChild(pTag);
  pTag.innerText = quotes[0].quote;
  console.log(quotes[0].quote);

function text() {
    let generate = Math.floor(Math.random() * quotes.length) ;
    pTag.innerText = `"${quotes[generate].quote}"   By ${quotes[generate].author}`;
}
setInterval(text,10000);


// Event Listners
addTodoBtn.addEventListener('click', addTodo);
todoList.addEventListener('dblclick',editList);





// Clock 
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
const now = new Date();

const seconds = now.getSeconds();
const secondDegrees = ((seconds / 60) * 360) + 90;
secondHand.style.transform = `rotate(${secondDegrees}deg)`;


const mins = now.getMinutes();
const minsDegrees = ((mins / 60) * 360) + 90;
minsHand.style.transform = `rotate(${minsDegrees}deg)`;

const hour = now.getMinutes();
const hourDegrees = ((mins / 12) * 360) ;
hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}
setInterval(setDate, 2000);

// user Input 

let greetInput = document.querySelector('#greetInput');
let greetText = document.querySelector('#greetText');

if (JSON.parse(localStorage.getItem('userName')) == undefined) {
    greetInput.style.display = 'inline-block';
} else {
    greetText.textContent = `Hello ${JSON.parse(localStorage.getItem('userName'))}`;
}

let setUsername = e => {
    if (e.keyCode === 13) {
        localStorage.setItem('userName', JSON.stringify(greetInput.value));
        greetInput.style.display = 'none'; 
        greetText.textContent = `Hello ${JSON.parse(localStorage.getItem('userName'))}`;
    } 
}
greetInput.addEventListener('keyup', setUsername);



