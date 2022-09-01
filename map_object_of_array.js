// object literal

// const person ={
//     firstName:"mom",
//     age:24,
//     hobit:"dancing",
//     1:"one is string or number"
// }
// console.log(person.age);
// console.log(person["firstName"]);
// console.log(person[1])  // this type you can not find which type of string
// for(let key in person){
//     console.log(typeof key)
// }

// map value is a method
const person = new Map();
person.set('name','happy','smile');
person.set('age',24)
person.set(1,'one');
console.log(person);
console.log(person.get('name'));
// console.log(person.keys());
for(let kum of person.keys()){
    console.log( typeof kum)    
}
for(let word of person){
    console.log(Array.isArray(word));
}

// object
const person12= {
    id:12,
    firstName:"kumkum",
}
console.log(person12)

// short method to print the value of an in a map
const student = new Map([['name','sapna'],['age',24],['habit','dance singing']])
console.log(student);
// if i want perticular value from this student then
const userId = new Map();
userId.set(person12,{age:24, gender:"female",name:"kumkum"});
console.log(userId.get(person12));
// clone using object
const obj ={
    key1:"value1",
    key2:"value2",
    key3:"value3"
}
// const obj2={
//     id:2,
//     key1:"neha",
// }
obj.key="value"
const obj2=obj;
console.log(obj);
console.log(obj2);

// optional chaining
const user = {
    firstName: "priya",
    // adress:{houseno85 : 'krishnapuram'}
}
console.log(user.firstName);
console.log(user.adress?.houseno85)