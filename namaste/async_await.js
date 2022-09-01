// console.log("This is me god kumkum ");

// async function kum(){

//     console.log("inside kumkum")
//     return "kumkum";
//     }
// console.log("before")
// let a = kum();
// console.log("after ")
// console.log(a);
// console.log("last line")




async function kum(){
    console.log(" fuction inside")
    const response =await fetch('https://api.github.com/users');
    console.log("before response");
    const users = await response.json();
    console.log("user resolved");
    return users;
    }
    console.log("first line outside function")
let a = kum();
console.log("after calling kum")
// console.log(a);
a.then(data => console.log(data))
console.log(a);
console.log("last line")



