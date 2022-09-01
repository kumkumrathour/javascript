console.log(" hello world ");
// type of operation
let age = +"22";
let name ="kumkum";
let number = 3.45;
console.log(typeof age);
console.log(typeof name);
console.log(typeof number);

// to convert number to string 
console.log(typeof (age + " "));
console.log(typeof +"name");

// to covert in string  SOME ERROE NOT givinf string showing undef
let ageOf = 30;
ageOf = String(ageOf);
console.log(typeof ageof);

// concatination of string 
let student1 = "17";
let student2 = "50";
let add = student1 + student2;
console.log(add);
let add1 = +student1 + +student2;
console.log(add1);

// not giving any output
let no = "34";
let no2 = "65";
let add3 = +no + +no2;
console.log(add3);


