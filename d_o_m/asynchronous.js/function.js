// function promises return function from promise
// function ricePromise(){
// const bucket = ['coffee','chips','vegetables','salt','rice'];
// return new Promise((resolve,reject)=>{
//     if(bucket.includes("vegetables")&& bucket.includes("salt") &&bucket.includes("rice"))
//     {
//         resolve("fried rice");
//     }else{
//         reject("conld not do it");
//     }
// })
// }

// ricePromise().then(
//     (myfriedRice)=>{
//     console.log("lets eat", myfriedRice);
// }
// ).catch(
//     (abc)=>{
//         console.log(abc)
//  })

//  setTime out and promise
function myPromise(){
    return new Promise((resolve, reject)=>{
        const  value = true;
        setTimeout(()=>{
            if(value){
                resolve();
            }
            else{
                reject();
            }
        },20000)
    })
}
myPromise()
.then(()=>{console.log("resolve")})
.catch(()=>{console.log((reject))});