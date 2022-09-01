let mis=["apple","bananna",1,33,4,"kumkum"];
console.log(mis);
mis[7]="apoorv";
console.log(mis);
console.log(mis[4])
console.log(typeof mis);


// to find object literal is an array or not 
let obj= {};
console.log(typeof obj);
console.log(Array.isArray(mis));
console.log(Array.isArray(obj));

// push and pop of array
mis.push("grapes");
console.log(mis);
mis.pop("apoorv");
let extra =mis.pop();
console.log("extra element is " + extra);
console.log(mis);

// inshift and shift
mis.unshift("mom");
console.log(mis);
mis.shift();
console.log(mis);

// primitive and reference data type
let num1 =5;
let num2 = num1;
console.log(num1);
console.log(num2);
num1++;
console.log(num1);
console.log(num2);


// array store the addres of an refernce array it is not store the value of it 
let array1 =["mom", "papa","bhai", "didi"];

let array2=array1;
console.log(array1);
console.log(array2);

array1.push("abhay");
console.log(array1);
console.log(array2);

// clone of array 
let arr1=["kushi","vival","jyote","neha"]
let arr2=arr1.slice(2);
console.log(arr1);
console.log(arr2);

// to add element of an array 
let arr3=[].concat(arr1);
console.log(arr3)

//to add element using spread operator
let arr4 =[...arr1];
console.log(arr4);

// now add element in an array after coping the array slice method
let arr5= arr1.slice(1).concat(["love","smile","health"]);
console.log(arr5);

// concat method tona add etra element
let arr6 = [].concat(arr2,["welcome","babu","shruite"])
console.log(arr6)

// add element with spread method
let arr7 = [...arr4,"prite","quite","just"];
console.log(arr7);
