// fetch(URL)
// // .then(response => response.json())
// .then(response =>{
//     return response.json()
// })
// .then(data => console.log(data))

console.log("script start")
const URL = "https://jsonplaceholder.typicode.com/posts"
// fuction of async await 
// async function getPosts(){
//   const response =  await fetch(URL);
//   if(!response.ok){
//     throw new Error("somethink went wrong")
//   }
//   const data =  await response.json();
//   return data;
// //   console.log(response);
// }
const myData = getPosts();
console.log(myData);

// getPosts()
//  const returned = getPosts();
//  console.log(returned);

getPosts()
.then((myData)=>{
    console.log(myData);
})
.catch(error =>{
    console.log("inside catch")
    console.log(error);

})

console.log("script end")