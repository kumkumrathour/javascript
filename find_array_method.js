//find method of array 
const myArray =["hello","cat","dog","girl","boy","happy","kumkum"]


// function isLength(string){
//     return string.length===5;
// }

// call function as normal
//  const answ =myArray.find(isLength);
// console.log(answ)


//  call function as errow
// you dont need function you can define function over here itself
const answer = myArray.find((string)=>string.length===4);
console.log(answer);

// const ans = isLength("happy");
// console.log(ans)

// realistic example of find method in array
const pro = [
    {product_id:1 , pro_name: "laptop",   price:2211 },
     {product_id:2, pro_name: "bag",   price:221 },
     {product_id:3 , pro_name: "bottal",   price:2451 },
     {product_id:4 , pro_name: "tv",   price:5000 },
     {product_id:5, pro_name: "frige",   price:4500},
     ]
const ans = pro.find((prod)=>prod.product_id===3);
console.log(ans);