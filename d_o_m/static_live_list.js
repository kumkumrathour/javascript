// static and live list 
const listItem = document.querySelectorAll(".todo-list li");
const sixthLi = document.createElement("li")
sixthLi.textContent = "the is new element"
const ul = document.querySelector(".todo-list")
ul.append(sixthLi);
console.log(listItem);


// how to get the dimension of an element
const sectionTodo = document.querySelector(".section-todo");
const info = sectionTodo.getBoundingClientRect();
console.log(info);