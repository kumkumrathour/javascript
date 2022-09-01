// promoise resolve
// promise chaining
// 
// const myPromise = Promise.resolve(5);
// myPromise.then(value=>{
//     console.log(value);
// })



// chaining 
function myPromise(){
    return new Promise((resolve,reject)=>{
        resolve("fruit");
    })
}
 myPromise().then(value=>{
    console.log(value);
    value +="banana";
    return value;
 })
 .then((value)=>{
    console.log(value);
    value +="mango";
    return value;
 }).then((value)=>{
    console.log(value);
 })

//  promise chaining
// const promise = new Promise((resolve, reject)=>{
//     resolve;
// });
// promise.then(()=>{
//     console.log("first");
// }).then(()=>{
//     console.log("second");
// }).then(()=>{
//     console.log("third");
// })