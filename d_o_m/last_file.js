console.log("hello");
const todoForm = document.querySelector(".form-todo");
// console.log(todoForm)
const todoInput = document.querySelector(".form-todo input[type='text']")
   const todoList = document.querySelector(".todo-list")

todoForm.addEventListener("submit",(e) => {
    e.preventDefault();
    // console.log("submit event")
    // console.log(todoInput.value);
    // todoInput.value = "";

    const newTodoText = todoInput.ariaValueMax;
    const newLi =document.createElement("li");
    const newLiInnerHtml =` 
                <span class="text"> ${newTodoText} </span>
                <div class="todo-buttons">
                 <button class="todo-btn done">Done</button>
                <button class="todo-btn remove ">remove</button>
    </div>`;
newLi.innerHTML=newLiInnerHtml;
todoList.append(newLi);
todoInput.value ="";
});
todoList.addEventListener("click",(e)=>{
   if(e.target.classList.contains("done")){
    // console,log("greate ?")
    const liSpan =e.target.parentNode.previousElementSibling;
    console.log(liSpan);
    liSpan.todo.textDecoration = "line-through";
   }
   if(e.target.classList.contains("remove")){
    // console,log("you wantn to remove some thing ?")
    const targetedLi =e.target.parentNode.parentNode;
    // console.log(targetedLi);
    targetedLi.remove();
 
   }
})