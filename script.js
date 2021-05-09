// /*eslint-env es6*/

class MakeTodoList 
{
  constructor(list) 
  {
    this.todoList = list;
    this.todos = [];
  }

  static addtoList(text) 
  {
    let list = document.getElementById("todo-list");
    var li = document.createElement("li");
    li.textContent = text;
    list.appendChild(li);
    return li;
  }

  static removeFromList(text) 
  {
    let list = document.getElementById("todo-list");
    let childs = Array.from(list.childNodes);
    let item = childs.find(i => i.innerText === text);
    return item;
  }

  addTodo(text) 
  {
    this.todos.push(text);
    this.todoList.appendChild(MakeTodoList.addtoList(text));
  }

  removeTodo(text) 
  {
    let filter = this.todos.filter(i => i !== text);
    this.todoList.removeChild(MakeTodoList.removeFromList(text));
    this.todos = filter;
  }

  get getList() 
  {
    return this.todos;
  }

  set myData(value) 
  {
    this.todos = value;
    this.todos.map(i => MakeTodoList.addtoList(i));
  }
}
let list = document.getElementById("todo-list");

let listElement = new MakeTodoList(list);

listElement.myData = ["Eat lunch", "Finish Task"];

console.log("current  ...........", listElement.getList); 

function addtodo() 
{
  let input = document.getElementById("input").value;
  listElement.addTodo(input); 

  console.log("current  ...........", listElement.getList); 
}

function getEventTarget(e) 
{
  e = e || window.event;
  return e.target || e.srcElement;
}

function remove() 
{
  let updated = document.getElementById("todo-list");
  updated.onclick = (event) =>
  {
    var target = getEventTarget(event);
    listElement.removeTodo(target.innerText);
    console.log("current  ...........", listElement.getList); 
  };
}