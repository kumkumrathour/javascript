// click event practice 
console.log("hello")
const allbutton = document.querySelectorAll("button");
// console.log(allbutton.length);
allbutton.forEach(button => {
    button.addEventListener("click", (e)=>{
    //   console.log(e.target);
    e.target.style.backgroundColor = "yellow";
    e.target.style.color ="#333"

    })
})