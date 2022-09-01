// const firstButton = document.getElementById("one");
// // console.log(firstButton);
// firstButton.addEventListener("click",function(){
//     console.log(this);
//     // console.log(firstButton);
// })   

// firstButton.addEventListener("click", function(event){
//     console.log(event);
// })
// this is not working
// const firstButton = document.querySelector("one");
// firstButton.addEventListener("click",function(){
//     console.log(this);
// })

// function hello(abc){
//     console.log(abc);
// }
// hello({firstkey:"value1", secondkey: " value2"})


// const allButton = document.querySelectorAll(".my-button button");
// for(let button of allButton){
//     button.addEventListener("click", function(){
//         console.log(this.textContent);
//     })
// }

// const allButton1 = document.querySelectorAll("button");
// for(let button of allButton1){
//     button.addEventListener("click", function(){
//         console.log(this.textContent);
//     })
// }

const allButton = document.querySelectorAll("button");
for(let button of allButton){
    button.addEventListener("click",(e)=>{
        // console.log(e.target);
        console.log(e.currentTarget)
    })
}