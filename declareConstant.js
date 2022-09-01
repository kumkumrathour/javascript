const pi = 3.14;
console.log(pi*2);

// string indexing 

// to find particular value on word
let nameOf ="kumkum";
console.log(nameOf[4])

// to find length of an string
console.log(nameOf.length);

// if you want to find last character of an string but you dont 
// the length of the string then 
console.log(nameOf.length-1);

// to remove the spaces of the string 
let nameIs = "   mohit   "
// console.log(nameIs.length);
nameIs=nameIs.trim();
console.log(nameIs.length)


//if you want to convert into toupper case
console.log(nameIs.toUpperCase());

// to lower the case 
let charIs="KUMKUM";
charIs=charIs.toLowerCase();
console.log(charIs)

//to find out particular character in a string 
// from where to start 
// from where to end 
let charTo="  kumkum Rathour  "
charTo = charTo.slice(5,13)
console.log(charTo)

// 

