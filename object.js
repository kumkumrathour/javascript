//  object literal

// to add key value pare in this object from extra
const collage = "uit rgpv";
 const person= {
    name:"kumkum",
    age:22,
    adress:"hno.85 krishanpuram ",
    city:"bhopal",
    adharNumber : 8948348,
    habbit: ["singing","dacing","reading","teaching","enjoying life"],
    "skil have": ["teaching","cocking","traviling","dancing"]
}
// console.log(person.age);
// person.gender="female";
// console.log(person.habbit);
// console.log(person);
// console.log(person["city"]);
// // to access data from object
// // the difference between the dot and bracket notation
// console.log(person["skil have"]);

// adding key value
// person.collage="rajiv gandhi pradhogiki vishvidhyalaya ";
// person[collage]="rajiv gandhi";
// console.log(person)

// to print key and value of key with object is print as
for(let jab in person){
   // console.log(jab);  // this will give you key name age etc
    // console.log(person[jab])  // this will only return the answer like kumkum 22etc
    console.log(jab,person[jab]);
}


