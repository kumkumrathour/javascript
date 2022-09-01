const URL = "https://jsonplaceholder.typicode.com/posts"

const xhr = new XMLHttpRequest();
// console.log(xhr);
// step one 
// console.log(xhr.readyState);
xhr.open("GET",URL);
// console.log(xhr.readyState);
// xhr.onreadystatechange = function(){
    // console.log(xhr);
    // if(xhr.readyState === 4){
    //     const response = xhr.response;
    //     const data =JSON.parse(response);
    //     console.log(data)
        
    //     // console.log(xhr.readyState);
    //     // console.log(typeof xhr.response)
    // }

    // short method 

    xhr.onload=function(){
        const response = xhr.response;
        const data =JSON.parse(response);
            console.log(data)  

    }
    // console.log(xhr.readyState);}
// console.log(xhr.readyState)
xhr.send();