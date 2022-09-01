hello()
function hello(){
    console.log("hello to kumkum ")
}

// function expression method 
// console.log(ans) it will through an error
const isstring = function(anystring){
    return anystring;
}
const ans = isstring("kumkum rathour");
console.log(ans);


// function inside function 
const app=()=>{
const myfun =()=>{
    console.log("hello myfun")
}
myfun();
const add =(num1 ,num2)=>{
    return num1+num2;
}
const adder = add(3,6)
console.log(adder);
}
app();