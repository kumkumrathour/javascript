console.log("hello world");
const heading1 = document.getElementById("heading1");
const heading2 = document.querySelector(".heading2");
// const heading3 = document.querySelector(".heading3");
// const heading4 = document.querySelector(".heading4");
// const heading5 = document.querySelector(".heading5");
// const heading6 = document.querySelector(".heading6");
// const heading7 = document.querySelector(".heading7");

console.log(heading1);
console.log(heading2);
// setTimeout(()=>{
//  heading1.textContent = " this is first heading 1"
   // heading1.style.color = "purple";
// },1000);

//setTimeout(()=>{
//  heading2.textContent = " this is first heading 2"
   // heading2.style.color = "purple";
// },2000);

// setTimeout(()=>{
//   heading1.textContent="one";
//   heading1.style.color = "violet";
//   setTimeout(()=>{
//     heading2.textContent="two";
//     heading2.style.color = "purple";
//     setTimeout(()=>{
//         heading3.textContent="three";
//         heading3.style.color = "red";
//         setTimeout(()=>{
//             heading4.textContent="four";
//             heading4.style.color = "pink";
//             setTimeout(()=>{
//                 heading5.textContent="five";
//                 heading5.style.color = "green";
//                 setTimeout(()=>{
//                     heading6.textContent="six";
//                     heading6.style.color = "blue";
//                     setTimeout(()=>{
//                         heading7.textContent="seven";
//                         heading7.style.color = "brown";
//                         },1000)
//                     },2000)
//                 },1000)
//             },1000)
//         },2000)
//     },1000)
// },2000)


// why we need promises 
// the problem face by function 
// function changeText(element,text,color,time,onSuccessCallBack,onFailureCallBack){
//     setTimeout(()=>{
//         if(element){
//         element.textContent = text;
//         element.style.color= color;
//         if(onSuccessCallBack){
//             // console.log("your element does not exist")
//             onSuccessCallBack();
//         }
//     }
//     else{
//         if(onFailureCallBack){
//             onFailureCallBack();
//         }
//     }
//     },time)
// }
// //  pyramid of dome
// changeText(heading1 , "one", "violate",1000,()=>{
//     changeText(heading2 , "two", "violate",2000,()=>{
//         changeText(heading3 , "three", "violate",3000,()=>{
//             changeText(heading4 , "four", "violate",1000,()=>{
//                 changeText(heading5 , "five", "violate",2000,()=>{
//                     changeText(heading6 , "six", "violate",3000,()=>{
//                         changeText(heading7 , "seven", "violate",4000,()=>{


//                         },()=>{ console.log("heading1 does not exist")})
//                     },()=>{ console.log("heading2 does not exist")})
//                 },()=>{ console.log("heading3 does not exist")})   
//             },()=>{ console.log("heading4 does not exist")})    
//         },()=>{ console.log("heading5 does not exist")})
//     },()=>{ console.log("heading6 does not exist")})            
// },()=>{ console.log("heading7 does not exist")});