// "use strict"
// console.log(this);
// function performance(){
//     console.log(this);
// }performance();
// console.log(window)
// function happy(){
//     console.log(`the person name is ${this.firstName}and her age is ${this.age} `)

// }


// this code is for apply and call
// const person= {
//      firstName:'kriti',
//      age: 43,
//      about: function(habby,singer){
//         console.log(this.firstName,this.age, habby , singer)
//      }
// }
// const person1= {
// firstName:'kumkum ',
// age: 17,
// about:happy
// }
// const person2= {
// firstName:'mom ',
// age: 23,
// about:happy
// }
// person.about.call(person1,"dancing","kunal");  // the extra think we add are in call writen saperataly but 
// to resolve the problem we use apply method in this we make array and store all the extra element in it 
//  call same behave as apply internally

// this code is for bind method 
//  function about(habby,singer){
//     console.log(this.firstName,this.age, habby , singer)
//  }
// const person= {
//     firstName:'kriti',
//     age: 43,
// }
// const person1= {
// firstName:'kumkum ',
// age: 17,
// }
// const func = about.bind(person1, "dance", "ahaman");
// func();

//  arrow function 
const person12 = {
        firstName:'kriti',
         age: 43,
          about(){
             console.log(this.firstName,this.age)
        }
     }
     person12.about();