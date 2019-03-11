let root = document.getElementById("root");

//board  where can add multi list

//each list has multiple card

//crud

class Board{
  constructor(name){
    this.name = name;
    this.id = Date.now();
    this.lists =[];
    
    
  }
  
  displayBoard(elm){
    root.innerHTML=`<h2>${this.name}</h2>`;
    let div = document.createElement('DIV');
    div.setAttribute('class', 'board');
    this.lists.forEach(list => {
      list.displayList(div);
    })
    root.appendChild(div);
    let addList = document.createElement('DIV');
    let addListBtn = document.createElement('BUTTON');
    addListBtn.textContent = "+ ADD A LIST";
    addListBtn.addEventListener('click',() =>this.replaceAddList(addList));
    addList.appendChild(addListBtn);
    div.appendChild(addList);
  }

  replaceAddList(addList){
  let input = document.createElement('INPUT');
  let saveBtn = document.createElement('BUTTON');
  saveBtn.addEventListener('click',() =>{
    if(!input.value) return;
    let name = input.value;
    this.createList(name);
    render(this);
  })
  saveBtn.textContent = `save List`;
  addList.innerHTML=null;
  addList.appendChild(input);
  addList.appendChild(saveBtn);
}

  //deletBoard
  
  //add list
  createList(listName){
    let list = new List(listName,this);
    this.lists.push(list);
  } 
  
  //delete list
  delList=(e)=>{
    console.log(this);
    let idToDel = e.target.dataset.id;
    this.lists.forEach((list,index) =>{
      if(list.id == idToDel) {
        this.lists.splice(index,1);
      }
    })
    render(this);
  }

  
}

class List {
  constructor(name,boardParent) {
    this.name = name;
    this.id = Date.now();
    this.cards = [];
    
    this.boardParent = boardParent;

    
    
  }
  displayList(elm){
    console.log("hello list",elm)
    let div = document.createElement("DIV");
    div.innerHTML += ` <h4>${this.name}</h4>`;
    let delBtn = document.createElement("BUTTON")
    div.appendChild(delBtn)
    delBtn.textContent = `x`;
    delBtn.setAttribute("data-id",this.id);
    delBtn.addEventListener('click',this.boardParent.delList);
    let ul = document.createElement('UL');
    ul.setAttribute('class','list');
    this.cards.forEach(card => {
      card.displayCard(ul);
    })
    div.appendChild(ul);
    elm.appendChild(div);


    let addCard = document.createElement('DIV');
    let addCardBtn = document.createElement('BUTTON');
    addCardBtn.textContent = "+ ADD A CARD";
    addCardBtn.addEventListener('click', () => this.replaceAddCard(addCard));
    addCard.appendChild(addCardBtn);
    div.appendChild(addCard);
  }

  replaceAddCard(addCard) {
    let input = document.createElement('TEXTAREA');
    let saveBtn = document.createElement('BUTTON');
    saveBtn.addEventListener('click', () => {
      if (!input.value) return;
      let value = input.value;
      this.createCard(value);
      render(this.boardParent);
    })
    saveBtn.textContent = `save Card`;
    addCard.innerHTML = null;
    addCard.appendChild(input);
    addCard.appendChild(saveBtn);
  }
  
  //add card 
  createCard(cardValue) {

    let card = new Card(cardValue, this,this.BoardParent);
    this.cards.push(card);
  } 
  
  //delete card
  delCard = (e) => {
    console.log(this);
    let idToDel = e.target.dataset.id;
    this.cards.forEach((card, index) => {
      if (card.id == idToDel) {
        let deletedObj =this.cards.splice(index, 1);
        delete deletedObj;
      }
    })
    render(this);
  }
}

class Card {
  constructor(value,listParent,BoardParent) {
    this.value = value;
    this.id = Date.now();
    
    
    this.boardParent = BoardParent;
    this.listParent = listParent;
    
    
  }

  displayCard(elm) {
    elm.innerHTML += `<li>${this.value}</li>`;
  }
  //edit card
  
  //add card 
  
  //delete card
}

function render(board) {
  board.displayBoard(root);
}

let board1 = new Board("newBoard 1");
render(board1);


