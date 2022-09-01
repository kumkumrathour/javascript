console.log("hello world")
let age = 24;
let name = "kumkum rathour";
let statement = "hello"+ name +"how are you" + " please tell me about you age " +age;
console.log(statement);

// the best way to write code template method
let temp =  `my name is ${name} and my age is ${age}`
console.log(temp);


// big error in java script bug null
let firstName;
console.log(typeof firstName);

let myVar=null;
console.log(myVar);
myVar="kumkum";
console.log(myVar, typeof myVar);

// what type of null is ?
console.log(typeof null);
// object is 
   

// BigINT operation 
let myNum= BigInt(65);
let myNum2=34n;
console.log(myNum+myNum2);
