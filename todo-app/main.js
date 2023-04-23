const todolist = document.getElementById("todolist")
const todos = document.querySelectorAll("li")
const addBtn = document.getElementById("addBtn")
const inputTodo = document.getElementById("todoInput")
var savedTodos = []
addBtn.addEventListener("click", function () {
    todoInput = inputTodo.value
    console.log(inputTodo.value)
    if (todoInput.length >= 1) {
        if (!(savedTodos.includes(todoInput))) {
            todolist.innerHTML = todolist.innerHTML + `<li style='cursor: pointer;' class='todo'>${todoInput}</li>`;
            savedTodos.push(todoInput);
        }
    }
})
console.log(todolist)
document.onclick = function (e) {
    if (e.target.tagName == 'LI' && e.target.className == "todo") {
        e.target.remove();
        savedTodos.splice(e.target.innerText)
    }
}
