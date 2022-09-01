console.log(" script start ")


const allButton = document.querySelectorAll("button");
console.log(allButton);
allButton.forEach((button)=>{
    button.addEventListener("click",(e)=>{
    let num = 0;
    for (let i = 0 ; i<= 1000000000; i++){
        num+=i;
    }
        console.log(e.currentTarget.textContent,num);
     })
 })
let outerVer = 0; 
for(let i = 0; i<=100000000; i++){
    outerVer+=i;
}
console.log(" value of variable is ", outerVer)
console.log("script end ")   