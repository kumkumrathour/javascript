// function expresion
function myapp (){
    const myVar = "value1";
    function myfun(){
    //   const myVar = "value32";
      console.log("inside myfun",myVar)
       
    //   console.log(myVar);  this function is inside myfun so it is 
    // its lateral space to call other wise if you all outside it did not give any value becase outside lateral space it did not give you any value
 
    };
console.log(myVar);
myfun();
// function decration method
//     const myfun2 = function(){
      
//     };
//    const made =myfun2();
//    console.log(made);
// function arrow
    // const myfun3 = ()=>{

    // };
    //  console.log(myfun3)
}
myapp();

// block and unblock scope

{
    const element12 = "priya didi "
    let element = "kumkum";
    var element1 = "neha"
    console.log(element);
    console.log(element1);
    console.log(element12);

}
// 
// console.log(element);
 console.log(element1 +" var")
// console.log(element12);