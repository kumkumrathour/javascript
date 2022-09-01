class Animal{
    constructor(nameis,age){
        this.nameis=nameis;
        this.age=age;
    }
    eat(){
        return` the name is ${this.nameis} and age is ${this.age} is eating `
    }
    superCute(){
        return this.age<=2;
    }
    isCute(){
        return true;
    }
    isbaby(){
        return `the  name is ${this.nameis} and ${this.age} age`
    }
}   
const animal1= new Animal("kumkum", 100)

console.log(animal1)
console.log(animal1.isCute());
// console.log(animal1.superCute());
// console.log(animal1.eat());
console.log(animal1.isbaby())
class dog extends Animal{
    constructor(name,age,speed){
    super(name , age);
    this.speed = speed;
    }
    run(){
        return ` the animal ${this.nameis} is running at speed of ${this.speed}`
    }
    
// constructor(nameis, age){
//     this.nameis = nameis;
//     this.age = age;
// }
// at(){
//     return` the name is ${this.nameis} and age is ${this.age} is eating `
// }
// superCute(){
//     return this.age<=2;
// }
// isCute(){
//     return true;
// }
// isbaby(){
//     return `the  name is ${this.nameis} and ${this.age}`
// }

}
const animal2= new dog("cat", 33);
console.log(animal2)
const cat = new dog("prety dog", 3,23)
console.log(cat.run())
console.log(cat.isCute())
