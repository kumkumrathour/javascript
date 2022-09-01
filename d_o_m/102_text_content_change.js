// change text
// textcontent and innertext


// const mainHeading = document.getElementById("main-heading")
// console.log(mainHeading.textContent);
// mainHeading.textContent = "hello everyone welcome to this webside";
// console.log(mainHeading.textContent);
// console.log(mainHeading.innerText);

const mainHeading = document.querySelector("div.headline h2");
mainHeading.style.backgroundColor = "black"
mainHeading.style.border="2px solid green"
// mainHeading.style.color = " yellow ";
// console.log(mainHeading.style);

// getter and setter
const attach =document.querySelector("a");
console.log(attach.getAttribute("href"));
attach.setAttribute("href", "https://codprog.com");
console.log(attach.getAttribute("href"));

const inputElement = document.querySelector(".form-todo input");
// console.log(inputElement.getAttribute("type"))
