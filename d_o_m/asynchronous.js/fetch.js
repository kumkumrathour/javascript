// fetch
const URL = "https://jsonplaceholder.typicode.com/posts"
 fetch(URL,{
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
 .then(response=>{
    // console.log("then is working properly")
    // console.log(responce);
    // return responce.json()
    if(response.ok){
        return response.json()
    }
    else{
        throw new Error("some thing went wrong")
    }
 })
 .then(data=>{
    console.log(data);
 })
 .catch(error =>{
    console.log("inside catch")
    console.log(error);
 })
 