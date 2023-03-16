


function convertTemp(document.f1.temp.value)
{
    //var inputTemp = document.f1.temp.value;
    //console.log(inputTemp);
    var outputTemp = inputTemp * (9/5) + 32;
    console.log(outputTemp);
    document.getElementById("converted").innerHTML = "The converted temperature is: " + outputTemp;
}