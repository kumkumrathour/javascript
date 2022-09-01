console.log("this is my tetorial")
// button with id
let myBtn =document.getElementById("myBtn");

// div with id content
let content = document.getElementById("content")

// function getData(){
//     // url ="https://api.github.com/user"
//     url="kumkum.txt"
//     fetch(url)
//     .then((response)=>{
//        return response.text();
//     }).then((data)=>{
//          console.log(data)
//     })
// }
// getData();


// this is get request 
// function getData(){
//     url ="https://api.github.com/user"
//     fetch(url)
//     .then((response)=>{
//        return response.json();
//     }).then((data)=>{
//          console.log(data)
//     })
// }
// getData();



// post request
function postData(){
    url ="https://dummy.restapiexample.com/api/v1/create";
    data ='	{"name":"kumkum676","salary":"123","age":"23"}'
    params= {
        method:'post',
        hearder:{
            'Content-Type':'application/json'
        },
        body:data
    }

    fetch(url,params)
    .then(response=> response.json())
    .then(data=>console.log(data)
    )
}
postData()
