const body = document.body;
// body.addEventListener("keypress",(e)=>{
//     console.log(e.key);
// })
const mainButton= document.querySelector(".btn-headline");
console.log(mainButton);
mainButton.addEventListener("mouseover", ()=>{
    console.log("mouse over event occour")
})

mainButton.addEventListener("mouseleave",()=>{
    console.log("mouse leave event ocurred")
})