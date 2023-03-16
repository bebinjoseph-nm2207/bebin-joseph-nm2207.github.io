
//Add data from resources/part1.txt here
// Source of Deepfake data: Asst.Prof. Saifuddin Ahmed, NTU Singapore. A study of deepfake sharing behavior in Eight Countries. 
// It is good to add the source of the data at the bottom of the chart. Explore to find out how you could do this.
const labelCountry = ["Vietnam", "Finland", "Yugoslavia", "Singapore", "Japan", "Thailand", "Philippines", "Greece"]
const beingOld = [0.05, 0.184, 0.136, 0.074, 0.18, 0.078, 0.162, 0.106];
const beingMale = [-0.13, 0.096, 0.015, 0.04, -0.088, 0.009, -0.035, -0.059];
const beingEducated = [0.059, 0.017, -0.005, 0.018, 0.011, 0.044, 0.152, -0.005];
const usingSocialMedia =[0.116,0.035,0.026,0.049,0.146,0.096,0.078,0.042];

const dataObj = {
    labels: labelCountry,//uncomment this and set this to labelCountry
    datasets: [
        {
            /*label: "labelCountry",// uncomment this line and set this to "Age"
            //data: ,// uncomment this line and set this to beingOld
            borderWidth: 2,
            backgroundColor: "hsla(20,100%,80%,0.8)",
            borderColor: "hsla(0,100%,50%,1)"*/
            // label: "Age", // this property is just a semantic naming of your y-axis.
            // data: beingOld, // this property contains an array of values that corresponds to your x-axis labels.
            label: "Educated",
            data: beingEducated,
            borderWidth: 2, // the border width of your bars
            backgroundColor: "hsla(20,100%,80%,0.8)", // the background color of your bars
            borderColor: "hsla(0,100%,50%,1)", // the border color of your bars


        },
        {
            /*label: "labelCountry",// uncomment this line and set this to "Age"
            //data: ,// uncomment this line and set this to beingOld
            borderWidth: 2,
            backgroundColor: "hsla(20,100%,80%,0.8)",
            borderColor: "hsla(0,100%,50%,1)"*/
            // label: "Age", // this property is just a semantic naming of your y-axis.
            // data: beingOld, // this property contains an array of values that corresponds to your x-axis labels.
            label: "Social Media Usage",
            data: usingSocialMedia,
            borderWidth: 2, // the border width of your bars
            backgroundColor: "hsla(20,100%,80%,0.8)", // the background color of your bars
            borderColor: "hsla(0,100%,50%,1)", // the border color of your bars


        }
    ]

}
new Chart("dfsharing-age-bar-chart",
    {
        type: "bar",
        data: dataObj,
        options: {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            title: {
                display: true,
                text: [],//set this to 'Predicting likelihood of deepfake sharing','for Older People'
                fontFamily: "TrebuchetMS",
                fontSize: 24,
                fontColor: 'rgb(0,120,0)',
                text: ['Predicting likelihood of deepfake sharing', 'for those who are educated and use social media']
            }
        }
    });
            /*const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "red";
ctx.fillRect(50,50,50,50);
new Chart("canvas", {
    type: "bar",
    data: {},
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "",
      },
    },
  });*/

