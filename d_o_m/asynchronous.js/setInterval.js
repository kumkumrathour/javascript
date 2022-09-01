// set interval
// console.log("script start");
// setInterval(()=>{
//     console.log(Math.random());
// },100000);
// console.log("script end");


//  set interval program 
const body = document.body;
const button = document.querySelector("button");
console.log(button);
const intervalId = setInterval(() => {
    const red = Math.floor(Math.random() * 126);
    const green = Math.floor(Math.random() * 126);
    const blue = Math.floor(Math.random() * 126);
    const rgb = `rgb(${red},${green},${blue})`
    body.style.background= rgb;
    // button.style.color = rgb;
},1000);
button.addEventListener("click",()=>{
    clearInterval(intervalId);
    button.textContent = body.style.background;
})
console.log(intervalId)
