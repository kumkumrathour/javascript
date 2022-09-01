console.log("hello world");
const heading1 = document.getElementById("heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");


function changeText(element,text,color,time){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(element){
        element.textContent = text;
        element.style.color= color;
        resolve("everythink is allright");
        }
    else{
         reject("somethink want wronge");   
        }
    },time)

  })  
}


// by this we get a problem of time essue
//  const returnPromise = changeText(heading1,"one","red",2000);
//  returnPromise.then(()=>{
//     changeText(heading2,"second","blue",2000)
//  }).then(()=>{
//     changeText(heading3,"third","yellow",2000)
//  }).then(()=>{
//     changeText(heading4,"fourth","green",2000)
//  }).then(()=>{
//     changeText(heading5,"fifth","purple",2000)
//  }).then(()=>{
//     changeText(heading6,"sixth","orange",2000)
//  }).then((data)=>{
//     console.log(data)
//     changeText(heading7,"seventh","pink",2000)
//  })



//  short method to do this 
// resolve problem of timing
//  changeText(heading1,"one","red",2000)
//  .then(()=>{
//    return changeText(heading2,"second","blue",2000)
//  }).then(()=>{
//    return changeText(heading3,"third","yellow",2000)
//  }).then(()=>{
//     return changeText(heading4,"fourth","green",2000)
//  }).then(()=>{
//    return changeText(heading5,"fifth","purple",2000)
//  }).then(()=>{
//     return changeText(heading6,"sixth","orange",2000)
//  }).then(()=>{
//    return changeText(heading7,"seventh","pink",2000)
//  })


//  move short method to do it 
changeText(heading1,"one","red",2000)
 .then(()=>changeText(heading2,"second","blue",2000)
 ).then(()=>changeText(heading3,"third","yellow",2000)
 ).then(()=> changeText(heading4,"fourth","green",2000)
 ).then(()=>changeText(heading5,"fifth","purple",2000)
 ).then(()=>changeText(heading6,"sixth","orange",2000)
 ).then(()=>changeText(heading7,"seventh","pink",2000))
 .catch((error)=>{
    alert(error)
 })