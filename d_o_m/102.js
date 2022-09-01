// dom document object model
// console.log(window.document)  html represent show 
console.dir(window.document)   // js representation
//  to make a webside reactable we use as it element work 


// slect element from document object we use method we have different method
// select element using get element by id
// console.log(typeof document.getElementById("main-heading"));

// store it in element 
// 
// const mainHeading =  document.getElementById("main-heading")
// console.log(mainHeading);

// select element using query selector
const mainHeading1= document.querySelector("#main-heading");
const header = document.querySelector(".header")
const navItem = document.querySelectorAll(".nav-item")
console.log(navItem)
console.log(header);
console.log(mainHeading1)

 
