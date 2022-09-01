// function outerFunction(){
//     function innerFunction(){
//         console.log("hello world");
//     }
//     return innerFunction;
// }
// const ans = outerFunction();
// // ans();
// console.log(ans);

// print name
function printFullName(){
    function printName(){
        console.log("firstName", " lastName");
    }
    return printName;
}
const ans = printFullName("kumkum" , " rathour");
ans();
// console.log(ans);`

// example of closer 
function func (){
    let counter = 0;
    return function(){
        if(counter<1){
            console.log(" you  call me")
            counter++;            
        }
        else{
            console.log("i have already called by you")
        }
    }
}
const myfuc = func();
myfuc();
myfuc();