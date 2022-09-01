const myArray=["variable221","variable752","variable3","variable4","variable5"]
// long method to print the  value of an array in an other new made arraynew with taking value from old array

// let value1=myArray.splice(3,5);
// let value2=myArray[1];
// console.log(value1);
// console.log(value2);

// let [newValue1]=myArray;  // to skip a value in array
// destructuring of an array in javascript

// console.log(newValue1);

//to store rest value after destructuring the value 
let [newva,newva2,...newva3]=myArray;
console.log(newva);
console.log(newva2);
console.log(newva3);