// method 
// function inside an object 
// const person= {
//     firstName:'kriti',
//     age: 43,
//      about: function(){
//         console.log("person name is kumkum and age is 24 ")
        // console.log(`person name is ${firstName} and her age is ${age}`)
        // it is giving error that person name is not defined 
        //so to solve this problem that function inside object can take input . we use this object 
//         console.log(`person name is ${this.firstName} and her age is ${this.age}` )
//         console.log("")
//      }
// }
// console.log(person.about)
// person.about();

// use multiple method of a fuction 
 function happy(){
        console.log(`the person name is ${this.firstName}and her age is ${this.age} `)

}
const person= {
         firstName:'kriti',
         age: 43,
         about:happy
}
const person1= {
    firstName:'kumkum ',
    age: 17,
    about:happy
}
const person2= {
    firstName:'mom ',
    age: 23,
    about:happy
}
person1.about();



