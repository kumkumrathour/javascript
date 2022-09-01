// console.log("hello world");
const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child =document.querySelector(".child");

// capturing these are being capture
// child.addEventListener("click", () =>{
//     console.log("capturing child")
// },true)
// parent.addEventListener("click", () =>{
//       console.log("capturing parents")
// },true)
// grandparent.addEventListener("click" , () =>{
//     console.log("capturing grandparents")
// },true)
// document.body.addEventListener("click" , () =>{
//     console.log("capturing body")
// },true)




// // bubbling these are not been capture
// child.addEventListener("click", () =>{
//     console.log("you click the child")
// })
// parent.addEventListener("click", () =>{
//       console.log("you click the parents")
// })
// grandparent.addEventListener("click" , () =>{
//     console.log("you click the grandsparents")
// })
// document.body.addEventListener("click" , () =>{
//     console.log("you click the body")
// })


// event delegation
grandparent.addEventListener("click",(e)=>{
    console.log(e);
})