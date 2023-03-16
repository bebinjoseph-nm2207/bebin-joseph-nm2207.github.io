// main.js

console.log("yo"); 
//it useful to use console.log anywhere and everywhere in your code to 
//make sure variable assignments and calculations are working as expected


var prodValue = 18;
var alsoValue = 26;

/*console.log("Row 1: prodValue + alsoValue");
console.log("Row 2: "  +prodValue + alsoValue);
console.log(prodValue + alsoValue);
console.log("prodValue + alsoValue" + prodValue + alsoValue);*/

//function declaration
/* function myFunction() { 
	// this function takes in no ARGUMENTS
	var p1 = 5;
	var p2 = 6; //defibut any number of arguments are possible
	var prod = p1*p2; // this variable is declared inside the function so it does not exist once the function call ends
 
	console.log(prod);   // The function prints the product of p1 and p2 to the console


} */
//function call
myFunction(5,6);
var a = 5;
var b = 6;
myFunction(a,b);
/*
 function myFunction(a,b) { 
	// this function takes in no ARGUMENTS
	var p1 = 5;
	var p2 = 6; //defibut any number of arguments are possible
	var prod = p1*p2; // this variable is declared inside the function so it does not exist once the function call ends
 
	console.log(prod);   // The function prints the product of p1 and p2 to the console


}
*/


//function declaration
function myFunction(a,b) { 
	// this function takes in arguments based on values of a and b. expecting a and b to be 5 and 6 if it is not further defined
    // i have changed the argument var to c and d cuz a and b messes up with earlier var declarations if i call this function without mentioning any values
	var prod = a * b; // this variable is declared inside the function so it does not exist once the function call ends
 
	console.log(prod);   // The function prints the product of p1 and p2 to the console
    return prod;
}
var answer= myFunction(4,9);
//36 produced twice as the value has console.log in the function itself and me calling it below
console.log(answer);

/* function calculator(x, y) {
    var result = {
        sum: x+y,
        prod: x*y,
        diff: x-y,
    }
    return result
} */
function calculator(x, y) {
    
       let sum2= x+y;
       let prod2= x*y;
    	let diff2= x-y;
		let result= {sum:sum2, prod:prod2, diff:diff2};
		console.log(result);
		return result
    }
/*console.log(sum);
console.log(prod);
console.log(diff);*/
let anything= calculator(7,9);
document.getElementById("2point7sum").innerHTML= anything.sum;
document.getElementById("2point7prod").innerHTML=anything.prod;
document.getElementById("2point7diff").innerHTML= anything.diff;
console.log(anything.sum);
