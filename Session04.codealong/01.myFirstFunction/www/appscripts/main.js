// main.js

//2 ways in which to print javascript output to a browser -- developer console, alerts, webpage elements
//alert(name + " is a " + job);

printMyJob = function(name2, job2)
{ 
    document.getElementById("colorDisplay").innerHTML = name + " is a " + job;
    document.getElementById("loginName").innerHTML = "Welcome, " + name2;
}

var name = "Bob Smith";
var job = "Mechanic";

printMyJob(name,job);
