
// function twoPlusFour(){
//     console.log(4+8);
// }
// twoPlusFour();

// const num1=+prompt("enter the number");
// const num2=+prompt("enter the second number");
// function sum(){
//     console.log(num1+num2);
// }
// sum();

// function sumis(number1,number2){
//     return number1 + number2;
// }
// const returnValue=sumis(3,5);
// console.log(returnValue);

// function to even and odd function   //// this is truely wrong 
// function evenis(number){
//     return number;
// }
//  returnNum=evenis(3);

// if(number/2===0){
//     console.log(returnNum,"true");
// }
// else{
//     console.log(returnNum,"false");
// }

// // question1
// function iseven(num){
//       if(num%2===0){
//         return true;
//       }
//       else{
//         return false;
//       }
// }
// console.log(iseven(50));

// take input as string and return first character of  astring 
// questuion 2
  
// function isString(kumkum){
//     return kumkum[0];
// }
// console.log(isString("abh"));

// // question 3
// // input array and target (number)
// // return the target of an index if found

// function isarray(array,target){
//     for(let i = 0 ;i<array.length; i++){
//     if(array[i]===target){
//         return i;
//     }
// }
// return -1;
// }
// const myarray = [2,3,4,5,6,7,8,9,12,12,15]
// const ans = isarray(myarray, 5)  
// console.log(ans);

// CLOSER EXAMPLE
function myFunction(power){
  return function(number){
    return number**power
  }
}
const square = myFunction(2);
const answ = square(3);
console.log(answ);