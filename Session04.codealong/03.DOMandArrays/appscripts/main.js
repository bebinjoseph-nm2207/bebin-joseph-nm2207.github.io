// main.js

console.log("yo");

let divArray = document.body.getElementsByTagName("div");
//console.log(divArray);
for (el of divArray)
{
    console.log(el.innerHTML);
}
console.log(divArray[2].innerHTML);
divArray[5].innerHTML = "whether your a mother or whether your a brother your stayin aliiiiiive"
//*************************JavaScript can hide or show HTML elements




