console.log("hello world!");
class CreateUser{
    constructor(firstName,lastName,age,adress){
    console.log("constructor called")
    this.firstName =firstName;
    this.lastName = lastName;
    this.age =age;
    this.adress=adress;
    }
    about(){
        return`${this.firstName} is ${this.age}`; 
    }
    is18(){
        return this.age >=18;
    }
    sing(){
        return 'ijgrgrtmgitr itrgmr erifrmsg';
    }
}
const user1 = new CreateUser('kumkum','rathour','23')       
        console.log(user1.firstName)
        console.log(user1.is18())
        console.log(Object.getPrototypeOf(user1))

// function CreateUser(firstName,lastName,age,adress){
    
//     this.firstName =firstName;
//     this.lastName = lastName;
//     this.age =age;
//     this.adress=adress;
// }
//        CreateUser.prototype.about = function(){
//             return`${this.firstName} is ${this.age}`;
//         },
//         CreateUser.prototype.is18 = function(){
//             return this.age >=18;
//         },
//        CreateUser.prototype.sing=function(){
//             return 'ijgrgrtmgitr itrgmr erifrmsg';
//         }
        
// const user1 = new CreateUser('kumkum','rathour','23')
// const user2 = new CreateUser('priya','rathour','15')
// const user3 = new CreateUser ('mom','rathour','15')
// console.log(user1);
// console.log(user1.is18());
// for(let key in user1){
//     console.log(key);
// }
// // or
// for(let key in user1){
//     if(user1.hasOwnProperty(key)){
//         console.log(key);
//     }
// }


// // prototype method
// let number =[2,3,4]
// // actural we write it in small in reality it is writen as 
// let numbers = new Array(2,3,45) 
// console.log(Array.prototype)
// console.log(Object.getPrototypeOf(numbers))
// console.log(numbers)
// console.log(number);
// function hello(){
//     console.log("hello every one")
// }
// hello();
// console.log(hello.prototype)