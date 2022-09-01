const userMethod = {
about : function(){
    return`${this.firstName} is ${this.age}`;
},
is18 : function(){
    return this.age >=18;
}
}

function create(firstName,lastName ,age){
    const user = Object.create(userMethod);
    user.firstName =firstName;
    user.lastName = lastName;
    // user.email = email;
    user.age =age;
    // user.about = userMethod.about;
    // user.is18 = userMethod.is18;   
    return user;
}
const user1 = create('kumkum','rathour','kumkumrathour@gmail.com','15','hno85 krishnapuram')
const user2 = create('priya didi','rathour','kumkumrathour@gmail.com','15','hno85 krishnapuram')
const user3 = create('my lovely mom','rathour','kumkumrathour@gmail.com','15','hno85 krishnapuram')
console.log(user1)
// console.log(user1.is18());
// console.log(user3.about());


// improving our code 
// const userMethod = {
//     about : function(){
//         return`${this.firstName} is ${this.age}`;
//     },
//     is18 : function(){
//         return this.age >=18;
//     },
//     sing:function(){
//         return 'ijgrgrtmgitr itrgmr erifrmsg';
//     }
//     }
    
//     function create(firstName,lastName ,age){
//         const user ={};
//         user.firstName =firstName;
//         user.lastName = lastName;
//         user.sing =userMethod.sing;
//         // user.email = email;
//         user.age =age;
//         user.about = userMethod.about;
//         user.is18 = userMethod.is18;   
//         return user;
//     }
//     const user1 = create('kumkum','rathour','kumkumrathour@gmail.com','15','hno85 krishnapuram')
//     const user2 = create('priya didi','rathour','kumkumrathour@gmail.com','15','hno85 krishnapuram')
//     const user3 = create('my lovely mom','rathour','kumkumrathour@gmail.com','15','hno85 krishnapuram')
//     console.log(user1.is18());
//     console.log(user3.about());
//     console.log(user1.sing());
//     // the problem in this code is that if we make new method we have to 
//     // call in function is suppose we mis to write it will not be work that create a problem
//     // so we have to write a code where we dont have to again and again do not call to are newly made method in function 
//     const obj1 = {
//         key1: "value1",
//         key2: " value2"
//     }
//     const obj2 = {
//         key3: "value 3"
//     }
//     const obj3 = {};
//      obj3.key4 ="value4"
//     //  const obj5 =Object.create(obj1)
//     //  obj5.key6 ="value6"
//     // console.log(obj2.key2);
//     console.log(obj3.key2);
//     // console.log(obj5.key6);

//     // solution of the problem
//     const find = {
//         ver1:"find the value1",
//         ver2:"find the value2"
//     }
//     const find2 = Object.create(find);
//     find2.ver3 = "value10";
//     console.log(find2);
//     console.log(find2.__proto__)
