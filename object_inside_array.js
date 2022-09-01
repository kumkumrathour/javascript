// object inside array is very usefull
const user =[
    {name:"kumkum",id:32,gender:"female"},
    {name:"neha", id:12,gender:"female"},
    {name:"kunal",id:33,gender:"male"},
]
console.log(user);
for(let use of user){
    console.log(use.name);
}

// nested destructuring in arrayinside literal
// const [gender1,gender2,gender3]=user;
// if you want some specific thing fromthe arrayof object then use
const[{id},,{gender}]=user
console.log(gender)