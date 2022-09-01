const number =[2,3,32,3,4,554,56,54,67,8,9,65];
// const iseven = function(num){
//     return num%2===0;
// }
//  const evennumber = number.filter(iseven);
//  console.log(evennumber)

//  fuction with arrow method filter
// const odd =number.filter((num)=>{
//         return num%2!==0;
// })
// console.log(odd);


// reduce method 
// sum of all the number present in ar array
// const sum = number.reduce((accumulation,currentValue)=>{
//     return accumulation+currentValue;
// });
// console.log(sum);

// real life example of sum of all the number present in an array
// const pro = [
//     {product_id:1 , pro_name: "laptop",   price:2211 },
//     {product_id:2, pro_name: "bag",   price:221 },
//     {product_id:3 , pro_name: "bottal",   price:2451 },
//     ]
// const prosum=pro.reduce((price1,price2)=>{
//        return price2.price+price1;
// },0);
// console.log(prosum);


// sort method in an array 
const numbers = [3,4,2,1,23,8,45,63,56,4,32]
numbers.sort((a,b)=>{
    return a-b;
})   //it will first shot the array according to the string first 
// this method short the array in assending order
console.log(numbers)

//what we think after sorting an algorithum is exactly we get because sort work on the property of string 

// const username =["kumkum","neha","priya","kerti","vanshika"];
// username.sort();
// console.log(username);

// product 
const pro = [
   {product_id:1 , pro_name: "laptop",   price:2211 },
    {product_id:2, pro_name: "bag",   price:221 },
    {product_id:3 , pro_name: "bottal",   price:2451 },
    {product_id:4 , pro_name: "tv",   price:5000 },
    {product_id:5, pro_name: "frige",   price:4500},
    ]
//    simple method to sort an array
    pro.sort((a,b)=>{
        return a.price-b.price
    })
     console.log(pro)
    // it will print low to high price 
    const lowToHigh = pro.slice(0).sort((a,b)=>{
         return a.price-b.price;
    })
    console.log(lowToHigh);

    // it will print high to low price
    const highToLow= pro.slice(0).sort((a,b)=>{
        return b.price-a.price
   })
   console.log(highToLow);