
 var todos = [{todoText: 'one',todoStatus: false},
              {todoText: 'two',todoStatus: false}
];
 

var todoInput = document.querySelector("#todo-text");
// var button = document.querySelector(".add-todo");

function addTodo() {
  if (todoInput.value) {
    var newTodo = {
      todoText: todoInput.value,
      todoStatus: false
    };
    todos.push(newTodo);
    
    displayTodo(todos);
  }
  todoInput.value = "";
  
}
function toggleTodo(e) {
  var id = e.target.dataset.index;
  todos[id].todoStatus = !todos[id].todoStatus;
  document.querySelector('span');

  if (todos[id].todoStatus) {
    document.querySelector("span[data-index='"+id+"']").style.textDecoration = "line-through" ;
    document.querySelector("span[data-index='"+id+"']").style.color ="grey";

  } else {
    document.querySelector("span[data-index='"+id+"']").style.textDecoration = "none" ;
    document.querySelector("span[data-index='"+id+"']").style.color ="black";
  }

  //todos[id].todoStatus ? document.querySelector("span[data-index='"+id+"']").style.textDecoration= "line-through" : document.querySelector("span[data-index='"+id+"']").style.textDecoration = "none" ;
  displayTodo(todos);
}


displayTodo(todos);


function displayTodo(array = []) {
  document.querySelector("ul").innerHTML = "";
  
  array.forEach((todo, index) => {
    var list = document.createElement("li");
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.setAttribute("data-index", index);
    checkBox.checked = todo.todoStatus;
    var span = document.createElement("span");
    span.setAttribute("data-index", index);
    span.textContent = todo.todoText;
    let close = document.createElement('span');
    close.innerHTML = `<i class="fas fa-window-close" style="color:rgb(182, 182, 182);font-size:15px" ></i>`;
    close.setAttribute('data-index', index);
    
    let parentSpan = document.createElement('span');
    parentSpan.className = 'parentSpan';

    let checkBoxParent = document.createElement('span');
    checkBoxParent.className = 'checkBoxParent';

    let checkMark = document.createElement('span');
    checkMark.className = 'checkMark';

    parentSpan.appendChild(checkBoxParent);
    checkBoxParent.appendChild(checkBox);
    checkBoxParent.appendChild(checkMark);
    parentSpan.appendChild(span);
    
    list.appendChild(parentSpan);
    list.appendChild(close);
    document.querySelector("ul").appendChild(list);
    checkBox.addEventListener("click", toggleTodo);
    close.addEventListener("click", closeList);
    updatePending();
    

  }
  
  
  );
  // clearList();
  
 

}

function updatePending() {
  let pending = todos.filter(todo => todo.todoStatus == false);
  document.querySelector('.pending').textContent = `${pending.length} items left`;
  // pending.length = document.querySelector('.pending').textContent;
}

function closeList(e) {
  var id = e.target.dataset.index;

  console.log(todos[id]);
  todos.splice(id,1);
  displayTodo(todos);
}


function handleEnter(event) {
      if (event.keyCode === 13) {
        addTodo();
      }
    }

document.querySelector('.all').addEventListener('click',() => displayTodo(todos));
document.querySelector('.clearAllList').addEventListener('click',clearList );




function activeList() {
  let activeListArr = todos.filter(todo => todo.todoStatus == false);
  displayTodo(activeListArr);
}
document.querySelector('.active').addEventListener('click', activeList);

function completedList() {
  let completedListArr = todos.filter(todo => todo.todoStatus);
  displayTodo(completedListArr);
}
function clearList() {
  let clearListArr = todos.filter(todo => todo.todoStatus == false );
  displayTodo(clearListArr);
}
document.querySelector('.completed').addEventListener('click',completedList );
todoInput.addEventListener('keydown', handleEnter);
// button.addEventListener("click", addTodo);

let checkAllCheckbox = document.querySelector('#checkAll');
checkAll.addEventListener('change',checkAllList);
function  checkAllList() {
  todos.forEach((todo, index) => {
    todo.todoStatus = checkAllCheckbox.checked;
    
  });
  
  displayTodo(todos);

}



