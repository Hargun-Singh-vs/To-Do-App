let count = 0;
const tasks = [];
const list = document.getElementById('list');
const form = document.getElementById('form');
console.log(form)


const makeUI =  (task,idx) =>{
    
    const newListElement = document.createElement('li');
    newListElement.innerText = task.todo
    newListElement.classList.add("todoItem");

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onchange = () =>{
        task.isCompleted = !task.isCompleted;
        if(task.isCompleted){
            newListElement.classList.add('cut');
        }else{
            newListElement.classList.remove('cut');
        }

    }
    
    newListElement.append(checkbox);

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'X';

    deleteBtn.onclick = () =>{
        tasks.splice(idx,1);
        renderTodo();
    }
    newListElement.appendChild(deleteBtn);
    list.append(newListElement);
}
const renderTodo = () =>{
    list.innerHTML = "";
    tasks.forEach((task,idx)=>{
        makeUI(task,idx);
    })
}
form.onsubmit = (e)=>{
    e.preventDefault();
    const newItem = document.getElementById('newItem').value;
    if(newItem.trim() === '') return false;
    
    tasks.push({
        todo :  newItem,
        todoId  : count++,
        isCompleted : false
    })

    renderTodo();
}






