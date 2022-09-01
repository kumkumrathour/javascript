let arr= ["kunal", "vivak","anil","kertik","aperna"];
let arr2=[];
for(let i =0 ; i<arr.length; i++){
arr2.push(arr[i].toUpperCase());
 console.log(arr[i].toUpperCase());
}
// to push arr in another arr 2use reference variable 
console.log(arr2)


// array with the help of const value
// const fruits=["chaval","itle","dosa","samosa"];
// fruits.push("rive");
// fruits.unshift("mom")
// console.log(fruits);

// for of loop
// const fruits=["apple","mango","banana","grapes","leli"];
// const fruit2 =[];
// for(let fruit of fruits)(
//     // console.log(fruit.toUpperCase(fruits))
//     fruit2.push(fruit.toUpperCase())
// )
// console.log(fruit2);

// for in loop 
const vege=["tomato","patato","carit","capcican","ladyfinger"];
const vegeta =[];
for(veget in vege){
    // this is giving index to us
    // console.log(veget) 
// this is not working showing an error
    //  vegeta.push(veget(vege[2]));
    // this will printing all the element which are present in vege from index of veget
//  console.log(vege[veget]);
// this is working and printing all elemrnt in  vegeta
     vegeta.push(vege[veget].toUpperCase());
}
// console.log(vegeta);
console.log(vegeta)
