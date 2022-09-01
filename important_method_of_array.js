// for each method
//  you have to print an one digit with its index and multiple that first digit with number 
// const numbers = [2,3,4,5,56,6,7,8];
// function mult(number,index){
//     // console.log("number is ", number*2);
   // console.log("index is ",index);
    //console.log("number is ", number*2);
//     console.log(` ${number}*2 = ${number*2}`);
// }
// mult(numbers[0], 0);
// for(let i =0 ; i<numbers.length ; i++){
//     mult(numbers[i],i);
// }

// for each look
// const numbers= [3,3,2,3,4,5,6,76];
const users =[
    {firstName:"kumkum", age: 22},
    {firstName:"neha", age: 27},
    {firstName:"priya", age:24},
    {firstName:"khushi" , age:18},
]
// arow notaion infunction 
users.forEach((user,index)=>{
    console.log(user.firstName,index)
})


// users.forEach(function(user,index){
//           console.log(user.firstName,index);
// })


// function num(number , index){
//     console.log(`index is ${index} number is ${number}`)
// }
// for(let i =0; i<numbers.length ; i++){
//     num(numbers[i],i);
// foreach do by this by it self


