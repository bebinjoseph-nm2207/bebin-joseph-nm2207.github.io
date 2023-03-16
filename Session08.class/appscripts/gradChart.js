    
    
    
	const labelYear= ["2005","2006","2007","2008","2009","2010","Total"];//fill the years here from the top row, but within quotes eg "2009","2010"...

   
    const dataObj = {
        labels: labelYear,           //we want the x axis to be the years
        datasets: [
            {
                label: "Accountancy",// uncomment this line and set this to "Accountancy" for example
                data: [495,468,575,536,596,554,3224],// uncomment this line and set this to an array [] with commas that are the bold numbers next to Accountancy for example
                borderWidth: 2,
                backgroundColor: "rgb(43,53,200)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
                borderColor: "rgb(43,53,200)"//put black rgb(0,0,0) or the same color as above
            },
            {
                label: "Business Administration",// uncomment this line and set this to "Accountancy" for example
                data: [799,819,894,950,857,859,5188],// uncomment this line and set this to an array [] with commas that are the bold numbers next to Accountancy for example
                borderWidth: 2,
                backgroundColor: "rgb(67,231,98)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
                borderColor: "rgb(67,231,98)"//put black rgb(0,0,0) or the same color as above
            },
            {
                label: "Dentistry",// uncomment this line and set this to "Accountancy" for example
                data:[12,14,15,17,19,25,102] ,// uncomment this line and set this to an array [] with commas that are the bold numbers next to Accountancy for example
                borderWidth: 2,
                backgroundColor: "rgb(123,34,94)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
                borderColor: "rgb(123,34,94)"//put black rgb(0,0,0) or the same color as above
            },
            {
                label: "Health Sciences",// uncomment this line and set this to "Accountancy" for example
                data: [69,57,67,77,107,196,573] ,// uncomment this line and set this to an array [] with commas that are the bold numbers next to Accountancy for example
                borderWidth: 2,
                backgroundColor: "rgb(45,200,169)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
                borderColor: "rgb(45,200,169)"//put black rgb(0,0,0) or the same color as above
            },
            {
                label: "Information Technology",// uncomment this line and set this to "Accountancy" for example
                data:[199,130,190,210,162,154,1045] ,// uncomment this line and set this to an array [] with commas that are the bold numbers next to Accountancy for example
                borderWidth: 2,
                backgroundColor: "rgb(123,120,245)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
                borderColor: "rgb(123,120,245)"//put black rgb(0,0,0) or the same color as above
            },
            {
                label: "Law",// uncomment this line and set this to "Accountancy" for example
                data: [125,134,123,115,118,90,705],// uncomment this line and set this to an array [] with commas that are the bold numbers next to Accountancy for example
                borderWidth: 2,
                backgroundColor: "rgb(200,34,56)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
                borderColor: "rgb(200,34,56)"//put black rgb(0,0,0) or the same color as above
            },
            {
                label: "Medicine",// uncomment this line and set this to "Accountancy" for example
                data: [86,94,83,96,97,94,550],// uncomment this line and set this to an array [] with commas that are the bold numbers next to Accountancy for example
                borderWidth: 2,
                backgroundColor: "rgb(234,123,100)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
                borderColor: "rgb(234,123,100)"//put black rgb(0,0,0) or the same color as above
            },
            {
                label: "Natural, Physical & Mathematical Sciences",// uncomment this line and set this to "Accountancy" for example
                data: [674,880,827,796,946,1091,5214],// uncomment this line and set this to an array [] with commas that are the bold numbers next to Accountancy for example
                borderWidth: 2,
                backgroundColor: "rgb(238,34,25)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
                borderColor: "rgb(238,34,25)"//put black rgb(0,0,0) or the same color as above
            }
        ],
    }
    new Chart("grad-bar-chart",
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
                        text: ["Female graduates from 8 different majors from 2005-2010"],//set this to 'Number of female graduates','per Course'
                        fontFamily: "TrebuchetMS",
                        fontSize: 24,
                        fontColor: 'rgb(0,120,0)',
                    }
                }
            });
