//source = https://codepen.io/etpinard/pen/XKOOeo
//source = https://codepen.io/plotly/pen/EVrRxR
//declare var hohoho
var counter=0
Plotly.plot('graph', [{
    type: 'choropleth',
    locations: ['SGP', 'MYS','THA', 'IDN'],
    z: [10,20, 30,  40]
  }], {
    geo: {
      resolution: 50,
      lataxis: {
        range: [-50, 50]
      }, 
      lonaxis: {
        range: [70, 140]
      }
    },width:700, height:500
  })


//source = https://codepen.io/mmoskorz/pen/maPExb
var ctx = document.getElementById("mybarChart").getContext("2d");

var mybarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Population'],
    datasets: [{
      label: 'Singapore',
      backgroundColor: "#dcdcdc",
      data: [10]
    }, {
      label: 'Thailand',
      backgroundColor: "#d75d47",
      data: [30]
    }, {
      label: 'Malaysia',
      backgroundColor: "#f5ac7a",
      data: [20]
    }, {
      label: 'Indonesia',
      backgroundColor: "#b20a1c",
      data: [40]
    }]
  },

  options: {
    legend: {
      display: true,
      position: 'top',
      labels: {
        fontColor: "#000080",
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
nothing123= function(){
  var emptiness
//console.log("Hello"); printing hello on console
//console.log("Hello");
/*var headReturn = document.getElementById("headerID");
headReturn.innerHTML="Hello";*/
/*
•	Track the number of clicks. It can do this by increasing the value of the counter variable that you set in Step 1e, by 1.
•	Change the text in the header element to read something like "OK, I have now received X clicks" (where X is the click count). So comment out the command for Step 1f and write a new one to achieve this instead.
•	Now make it lie: have it print out 100 times the number of actual clicks it has received.
*/
counter ++;
var counterHeader= document.getElementById("headerID");
// counterHeader.innerHTML = counter
//counterHeader.innerHTML= "Hao, I have now received " + counter + " clicks";
counterHeader.innerHTML= "Hao, I have now received " + 100*counter + " clicks";
// Hao is pinyin for OK, just practicising my chinese 
  //  return emptiness
}
//nothing123(); calling fn
//nothing123();
changeSlider= function(){
  //console.log("If this works, you should see me...does me exist?");
  let slideVal=document.getElementById("sliderStuff").value;
  let Val= Math.floor(slideVal*255);
  var headerColor=document.getElementById("headerID");
 //  Math.floor(slideVal)
  headerColor.style.backgroundColor= "rgb("+Val+","+Val+","+Val+")";
  console.log("rgb("+Val+","+Val+","+Val+")");
  //"rbg(slideVal,slideVal,slideVal)";
  //console.log(document.getElementById("sliderStuff").value);
  /*let map =function (x, a, b, m, n){
    let range = n-m;
    // x is 'proportion' of the way from a to b
    // e.g. if a=10, b=20, and x=15, x is half (.5) of the way from a to b
    let proportion = (x-a)/(b-a); 
    return (m + proportion*range);
}*/

}
sliderStuff.addEventListener("change", function() {changeSlider()});
