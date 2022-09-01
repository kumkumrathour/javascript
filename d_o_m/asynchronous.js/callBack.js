// understanding call back\
// call back function in synchronous language 
// function myFunc(Callback){
//     console.log("function is doing task 1")
//     Callback();
// }
//  Func2(() =>{
//     console.log("function is another doing task 2")
// });
// myFunc(Func2);
// myFunc2();


// synchronous function call back function example
function getTwoNumbersAndAdd(no1,no2,Callback){
    console.log(no1,no2);
    // console.log(no1+no2);
    Callback(no1,no2);
}
function addTwoNo(num1,num2){
    console.log(num1+num2);
}
getTwoNumbersAndAdd(9,23,addTwoNo)
// getTwoNumbers(4,9);




