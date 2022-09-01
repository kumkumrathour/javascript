// default parameter 
// function addtwo(a,b=8){
//     return a+b;

// }
// const ans = addtwo(40,5);
// console.log(ans);

// rest parameter 
// function myFun(a,b,c,d,...e){
//     console.log(`a is ${a}`)
//     console.log(`b is ${b}`)
//     console.log(`c is ${c}`)
//     console.log(`s is ${d}`)
//     console.log(`e is` ,e)
//     console.log(Array.isArray(e))
// }
// myFun(2,34,56,7,5,5,6,5,3,3,2);

// sum of number present in array 
function arr(...numb){
    let total =0;
      for(num of numb){
         total=total +num;
      }
      return total;
}
const ans=arr(3,4,5,5,6,7,783,2,2)
console.log(ans);
