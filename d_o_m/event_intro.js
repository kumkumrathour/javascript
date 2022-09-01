//event
// const btn = document.querySelector(".btn-headline");
// console.dir(btn);
// btn.onclick=function(){
//           console.log("you click me ");
// }
// function clickme(){
//        console.log(" click me bro ")
// }
// btn.addEventListener("click",fuction(){
//     console.log(" you have click me")
// });
// 
// const btn = document.querySelector(".btn-headline");
// btn.addEventListener("click",() =>{
//     console.log("you click me ");
//     console.log("value of this")
//     console.log(this);
// })


// buttom
console.log(" hello world")
const allButton = document.querySelectorAll("button");
// console.log(allButton)
// for(let i =0;i<my-button; i++){
//     console.log("baby")
// }


// for of method loop for an event 
for(let button of allButton){
    button.addEventListener("click", function(){
        // console.log(textContent)
        console.log("you click me ");
        console.log(this);
        console.log(this.textContent);
    })
}