const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('#todo-form #todo-write');
const toDoList = document.querySelector('#todo-list');

let toDos = [];
const TODOS_KEY = "todos";

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function aaa(i){
  return true
}

function deleteToDo(e){
  const $li = e.target.parentNode;
  $li.remove();
  toDos = toDos.filter(toDo => toDo.id != parseInt($li.id))
  saveToDos()
}

function paintToDo(newToDoObj){
  const $li = document.createElement('li');
  $li.id = newToDoObj.id

  const $check = document.createElement('input');
  $check.type = 'checkbox';
  $check.className = 'todo-check';

  const $span = document.createElement('span');
  $span.innerText = newToDoObj.text;

  const $i = document.createElement('i');
  $i.classList.add('btn-eraser');
  $i.classList.add('fa-solid');
  $i.classList.add('fa-eraser');
  console.log($i);
  $i.addEventListener('click', deleteToDo);

  $li.appendChild($check)
  $li.appendChild($span);
  $li.appendChild($i);

  toDoList.appendChild($li);
}
function handleToDoSubmit(event){
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text : newToDo,
    id : Date.now(),
  }
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit)

const savedToDos = JSON.parse(localStorage.getItem(TODOS_KEY))
if(savedToDos !== null){
  savedToDos.forEach(paintToDo);
  toDos = savedToDos
}