class person {
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
     get fullName(){
        return `${this.firstName} ${this.lastName} and ${this.age}`

    }
}
const person1 = new person("kumkum", "rathour",24)
console.log(person1.fullName)