// synchronous js

// console.log("script start");
// for(let i = 1; i<10000; i++){
//     console.log("inside for loop")
// }
// console.log("script end");

// asynchronous js
console.log("script start");

 const id = setTimeout(()=>{
    console.log("inside settime out");
 },1000);
 console.log(id);
for(let i =0; i<1000; i++)
{
  
    console.log("....");
}
console.log("script end");
console.log(id);
// clearTimeout(id);