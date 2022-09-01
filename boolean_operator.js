// boolean operator
let num1 ="65";
let num2=65;
console.log(num1>+num2);

// to check == and === to check only value and === check datatype also 
console.log(num1==num2);
console.log(num1===num2);

// if else condition check 
let num=3;
let numb=5;
if(numb>num){
    console.log("numb is greater ")
}
else{
    console.log("num is greater ")
}

// count as false value 
// if i write in frint of con false "" null 0 undefine apply condesion else
// otherwise apply condesion all in case true
let con;
if(con){
    console.log(con);
}
else{
    console.log(" the giving value is false ");
}

// simple way to write if else condition through ternary operator
let age = 12;
let drink = age>=10 ? "coffee": "milk";
console.log(drink);
// if the age is greater then 10 then true drink coffe other wise condition is false drink milk 


// use of and and or operator
let age1=32;
let nameof= "kumkum";
if(name[0]==="k" && age1>30){
    console.log("she is kumkum ")
}
else {
    console.log("i dont no ");
}


// nested of condision 
let winningNumber = 19;
let userGuess= prompt("guess a number ");
if(userGuess===winningNumber){
    console.log(typeof userGuess , "you are wright")
}
else{
    // console.log("you are wrong")

if(userGuess>winningNumber){
    console.log("grater no")
}
else{
    console.log("to much grater number ")
}

// if(userGuess<winningNumber){
//     console.log("it is smaller ")
// }
// else{
//     console.log("it is two smaller ")
}







