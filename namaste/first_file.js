console.log("hello world")
// button with id content
let myBtn = document.getElementById("myBtn")

// div it id content
// let content = document.getElementById("content")
// function getData(){
//     url="https://api.github.com/users";
//        fetch(url)
//        .then((response)=>{
//         return response.json();
//        })
//        .then((data)=>{
//         console.log(data)
//        })
// }
// getData();


// post data
function postData(){
    url="	https://dummy.restapiexample.com/api/v1/create"
    data = '{"name":"kumkum","salary":"123","age":"23"}'
    params={
        method:'post',
        headers:{
            'Content-Type':'application/json'
        },
        body:data
    }
    fetch(url,params)
    .then(response=>response.json()
    )
    .then(data=>console.log(data)
    )
}
postData();







