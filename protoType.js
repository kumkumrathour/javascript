// function hello(){
//     console.log("hello everyone")
// }

// // hello.myself = " i am kumkum"
// console.log(hello.myself);
// function same behaving as object adding value to the function just like object
// console.log(hello.prototype)
// hello.prototype.value = "value is there";
// console.log(hello.prototype);
// const userMethod = {
//     about : function(){
//         return`${this.firstName} is ${this.age}`;
//     },
//     is18 : function(){
//         return this.age >=18;
//     }
//     }
    
//     function create(firstName,lastName ,age){
//         const user = Object.create(userMethod);
//         user.firstName =firstName;
//         user.lastName = lastName;
//         // user.email = email;
//         user.age =age;
//         // user.about = userMethod.about;
//         // user.is18 = userMethod.is18;   
//         return user;
//     }
//     const user1 = create('kumkum','rathour','kumkumrathour@gmail.com','15','hno85 krishnapuram')
//     const user2 = create('priya didi','rathour','kumkumrathour@gmail.com','15','hno85 krishnapuram')
//     const user3 = create('my lovely mom','rathour','kumkumrathour@gmail.com','15','hno85 krishnapuram')
//     console.log(user1)
//      console.log(user1.is18());
//      console.log(user3.about());


    //  new keyword 
    function Create(name,age){
        this.name = name;
        this.age = age;
    }
    Create.prototype.about = function(){
        console.log(this.name, this.age);
    }
     const user6 = new  Create("kumkum" , 23);
    user6.about();
    console.log("hello world")
