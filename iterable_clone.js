//iterable 
// is per for of look kam kerta ha use iterable kahate ha
const nameIs="kumkum rathour";
for(let kum of nameIs){
    console.log(kum)
}

// iterable in array
const price = [43,54,5,6,67,87,97]
for(let num of price){
    console.log(num)
}

// iterable in object 
// const obj = {'key1':bf,'key2':house}
// for(let lov of obj){
//     console.log(obj)      // it is giving error not giving any output
const firstName = " happy more happy ";
console.log(firstName.length);
console.log(firstName[3]);
// }

// set did not have length
const numbers = new Set([3,4,546,7,4,34,7,88]);
console.log(numbers.length);

// set an add value to it
const item=['key1','key2','key3','key4']
const num = new Set();
num.add(32);
num.add("kunal");
num.add(item);
num.add('value to life');
console.log(num);
num.add(item)

// to check weather a element is present or not
// const price1 = [43,54,5,6,67,87,97];
// if(price1.has(3)){
//     console.log("1 is present ");
// }
// else{
//     console.log("1 is not present ");
// }
// console.group(price1);


// to get unique element from the array we use set 
const myArray = [4,3,3,4,56,67,7,54,1,2,4,0,3,2,43];
const unique=new Set(myArray);
console.log(myArray);
console.log(unique.length);
for(let prep of unique){
    length++;
}
console.log(length);
