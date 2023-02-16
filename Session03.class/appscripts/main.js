// main.js

console.log("yo");
var x = 4443423434;
var y = 439439439;
document.getElementById("twopointone").innerHTML = x + y;
// Using new IDs to avoid any confusion


var F = prompt("Please input your temperature in Farenheit");
var Cel = 5/9*(F-32);
// formula for conversion
console.log(Cel);
document.getElementById("twotwo").innerHTML = Cel + " degree Celsisus";

var m = document.getElementById("mass").innerHTML;
var c = document.getElementById("lightspeed").innerHTML;
var E = m*c*c;
// just maths
console.log(m,c, E);
var totalEnergy = document.getElementById("twothree");
totalEnergy.innerHTML= E + " joules"

//function declaration
// maps x in  the interval [a,b] into the interval [m, n]
// taken from Session3challenge doc
let map =function (x, a, b, m, n){
    let range = n-m;
    // x is 'proportion' of the way from a to b
    // e.g. if a=10, b=20, and x=15, x is half (.5) of the way from a to b
    let proportion = (x-a)/(b-a); 
    return (m + proportion*range);
}



