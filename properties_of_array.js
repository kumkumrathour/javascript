// computed properties
const num1 = "kum";
const num2= "apo";
const val1 = "sap";
const val2= "vid";
const obj ={
    [num1] : val1,
    [num2] : val2
}
// console.log(obj);

// second method to do the same think as we do earlier
// const num3={};
// num3[num1]=val1,
// num3[num2]=val2;
// console.log(num3)

// spread operator in js
// const no1= [2,4,5,6,67,8,9];
// const no2=[4,3,2,5,6,67,9,8,9];
// const no3=[...no1,...no2];
// console.log(no3);
// const no4 =[..."4565476653"];
// console.log(no4);

// spread operator  in object 
const person= {
    name:"kumkum",
    age:22,
    adress:"hno.85 krishanpuram ",
    city:"bhopal",
    
}
const person2 ={
    name2:"neha",
    age2:15,
    addres:"h no 32 radhapuram ",
    city2:"indor"
}
// const newObj={...person,...person2, hobby:"dance ,singing , game"};
// const newobj2={..."abcdefghijklmnopqrstuvwxyz"}
// console.log(newobj2);
//  console.log(newObj);
// for(let key in person){
//      console.log(key);
// }
// for(let key2 in person2){
//     console.log(key2);
// }

// object destructuring in js
const object1 ={
    game:"badmintan",
    kitchen:"khana"
};
const object2 ={
    game1: "cricket",
    kitchen:"rice"
};
let value1=object1.game;
let value2=object2;
console.log(value1);
console.log(value2);

// shortcut to do the destructuring of object
let{game:valw1,kitchen}=object1;
console.log(valw1);
console.log(kitchen);





