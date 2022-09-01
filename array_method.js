// array map method take call back function
const num = [3,4,5,6,67,7,54,2,35];
// first method to make a arow function 

//  const square = function(number){
//     return number*number;
// }
// const ans = num.map(square);
// console.log(ans);


//  second  method to make a map method with aerow function 
// const square = num.map((number,index)=>{
//     return ` index: ${index}  numberSquare: ${number *number}`;
// });
// console.log(square);

// realistic example of map method
const users =[
    {firstName:"kumkum", age: 22},
    {firstName:"neha", age: 27},
    {firstName:"priya", age:24},
    {firstName:"khushi" , age:18},
]

const username =users.map((user)=>{
         return user.firstName;
})
console.log(username)
// const num = [3,4,5,6,67,7,54,2,354,];
// const squarenumber=num.map((number)=>{
//     return`index:${index} the square is {num*number}`;
// })
// console.log(squarenumber);