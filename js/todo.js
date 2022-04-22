const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list');

const TODOS_KEY = "todos";

let toDos = [];

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteTodo(e){
    const li = e.target.parentElement;
    toDos = toDos.filter((toDo)=>{
        return toDo.id !== parseInt(li.id);
    });
    li.remove();
    saveTodos();
};

function paintTodo(newTodoObj){
   const li = document.createElement('li');
   li.id = newTodoObj.id;
   const span = document.createElement('span');
   span.innerText = newTodoObj.text;
   const deleteBtn = document.createElement('button');
   deleteBtn.innerText = "delete";
   deleteBtn.className = "delete-btn";
   deleteBtn.addEventListener('click',deleteTodo);
   const editBtn = document.createElement('button');
   editBtn.innerText = "edit";
   editBtn.className="edit-btn";
   li.appendChild(span);
   li.appendChild(deleteBtn);
   li.appendChild(editBtn);
   toDoList.prepend(li);

}

function handleSumbit(e){
    e.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj ={
        text:newTodo,
        id : Date.now(),
    }
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    
    saveTodos();
    
}
toDoForm.addEventListener('submit',handleSumbit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}









