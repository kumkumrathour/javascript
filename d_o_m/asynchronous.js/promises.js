// promises
// future value that we get after some time

// we create a promise
const bucket = ['coffee','chips','vegetables','rice'];
 const friedRicePromise = new Promise((resolve,reject)=>{
    if(bucket.includes("vegetables")&& bucket.includes("salt") &&bucket.includes("rice"))
    {
        resolve("fried rice");
    }else{
        reject("conld not do it");
    }
})
setTimeout(()=>{
    console.log("set time out value")
 },1000)
// we consume a prosine now
friedRicePromise.then(
    // jab promiss resolve hoga 
    (myfriedRice)=>{
    console.log("lets eat", myfriedRice);
}
).catch(
    (error)=>{
        console.log(error)
 })

// ,
// agar promise resolve nahi hoa
// (error)=>{
//     console.log(error)
// }
for(let i = 0; i <20 ;i++){
    console.log(Math.random(),i);
}
console.log(" script end")