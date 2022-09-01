// every method in array 
const numbers =[,4,42,76,98];
function isEven(number){
    return number%2===0
}
const answ=numbers.every(isEven);
console.log(answ)
// const ans =number.every((numb)=>numb%2===0);
// console.log(ans);


// real life example 
const pro = [
    {product_id:1 , pro_name: "laptop",   price:2211 },
     {product_id:2, pro_name: "bag",   price:221 },
     {product_id:3 , pro_name: "bottal",   price:2451 },
     {product_id:4 , pro_name: "tv",   price:500000 },
     {product_id:5, pro_name: "frige",   price:4500},
     ]
     const answer = pro.every((prod)=>prod.price<8000);
     console.log(answer);

    //  some method in js 
    const element = [43,2,34,12,5,6,78,67,90];
    // some means kya ek bhe element aisa ha jo odd ha agar ha to true return kro
    const val = element.some((number)=>number%2===0);
    console.log(val)
    const val1 = pro.some((number)=>number.price>400000)
    console.log(val1)

    // fill method is used 
    // first use
    const myArray = new Array(10).fill(675);
    console.log(myArray);

    // second use
    element.fill(100,3,7);
    console.log(element)

    // slice array
    let elem = element.slice(5);
    console.log(elem);

    // slice method in array to delete an element of array
    element.splice(3,7);
    console.log(element)

    // to inside an element in array using slice method 
    element.splice(1,0,'insert element');
    console.log(element)