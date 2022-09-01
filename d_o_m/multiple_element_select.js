//const navItem = document.getElementsByClassName("nav-item");
// console.log(navItem[2])
// const navItems = document.querySelectorAll(".nav-item");
// console.log(navItems");
// work color change and background change first select the elements
// const link = document.querySelector("a");
// console.log(link);
// sele.style.backgroundColor = "white";
// sele.style.border = "2px solid green";
// console.log()


// to select somethink with multiple element at a time  use loop
// iterate element
//array like object indexing ,lengthproperty
// var navItem=document.querySelector("nav-item");
// console.log(navItem);
// navItem[0].style.backgroundColour ="green";
// console.log(navItem[0])

// const mainHeading = document.querySelector("div.headline h2");
// mainHeading.style.backgroundColor = "black"
// mainHeading.style.border="2px solid green"


//   for loop
const navItems = document.getElementsByTagName("a")
// for(let i = 0; i<navItems.length; i++){
//     const navItem = navItems[i];
//     navItem.style.backgroundColor= "#fff";
//     navItem.style.color = "blue";
// }

// for of loop
for(let navItem of navItems){
    navItem.style.backgroundColor ="#fff";
    navItem.style.color = "green";
    navItem.style.fontWeight ="bold"
}




//we cant use foreach method to iterate through
//simple for loop
//for of loop
//for each



// inner html
const headline = document.querySelector(".headline");
headline.innerHTML = "<h1> Inner html change </h1>";
headline.innerHTML+="<button class = \"btn\">Learn more</button>";
console.log(headline.innerHTML);