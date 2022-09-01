const person={
    firstname:"kumkum",
    class:"collage",
    age:24,
    habit:"dancing , cooking , playing , teaching"
}
// console.log(person);
function obj(print){
    console.log(print.firstname);
    console.log(print.age);
}
obj(person);

// destruturing of a function  fro react 
function print(firstname,age){
    console.log(firstname);
    console.log(age);
    console.log(habit);
}

// call back functiom --> function call function
function myfun(a){
    console.log(a);
    a()
    // console.log('hello everyone there')
}
function myfun2(){
    console.log("inside the function ")
}
// myfun([2,3,4,5,6]);  // printing an array
// myfun({ name:"kumkum"});  // pring an object of an array
// myfun("jgrfugf");  //this will print the string of an array
myfun(myfun2);

