const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list")
console.log(todoList)
console.log(todoInput);
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTodoText =todoInput.value;
    const newLi = document.createElement("li");
    const newLiInnerHtml = `                              
    <span class="text"> Do this do that </span>
    <div class="todo-buttons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove ">remove</button>
    </div>`
    newLi.innerHTML =newLiInnerHtml;
    todoList.append(newLi);
     todoInput.value = "";
});
todoList.addEventListener("click",(e)=>{
    // console.log(e.target);
    if(e.target.classList.contains("remove")){
        // console.log(" you want to remove")
        const targetLi = e.target.parentNode.parentNode;
        // console.log(targetLi)
        targetLi.remove();
    }
    if(e.target.classList.contains("done")){
        // console.log(" you did it")
        const liSpan = e.target.parentNode.previousElementSibling;
        // console.log(liSpan);
        liSpan.style.textDecoration = "line-through";    // this will make the line cut

    }
})
