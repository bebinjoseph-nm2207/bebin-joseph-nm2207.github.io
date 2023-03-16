    
    //Add data from resources/part1.txt here
    
    const labelYear = ["2012","2013","2014","2015","2016","2017","2018","2019","2020","2021"]//years in quotes
    
    // Source of data: World Happiness Reports
    // It is good to add the source of the data at the bottom of the chart. Explore to find out how you could do this.
    const labelCountry = ["China","Indonesia","Malaysia","Philippines","Singapore","Thailand","USA","Vietnam"]
    const dataObj = {
        labels: labelCountry,//uncomment this and set this to labelCountry
        datasets: [
            {
                //label : ["China","Indonesia","Malaysia","Philippines","Singapore","Thailand","USA","Vietnam"], // This is wrong since the code will treat each labelCountry as having all these properties
                data: [0.49,-0.14,-0.29,0.9,-0.06,-0.41,-0.05,-0.06],
                backgroundColor: ["rgba(245,233,132,255)","rgba(253,201,125,255)","rgba(250,150,115,255)","rgba(237,230,131,255)","rgba(99,190,123,255)","rgba(248,105,107,255)","rgba(255,235,132,255)","rgba(254,233,131,255)"],
                borderwidth: 2,
                //fill: false,
                
            }
        ]
     /*   datasets: [
            {
                label: "China",//country name in quotes
                data:  [0.49],// data of the country as an array, no quotes
                borderWidth: 2,
                fill: false,
                backgroundColor: "rgba(245,233,132,255)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
                borderColor: "rgba(245,233,132,255)"//put black rgb(0,0,0) or the same color as above
            },
            {
                label: "Indonesia",//country name in quotes
                data:  [-0.14],// data of the country as an array, no quotes
                borderWidth: 2,
                fill: false,
                backgroundColor: "rgba(253,201,125,255)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
                borderColor: "rgba(253,201,125,255)"//put black rgb(0,0,0) or the same color as above
            },
            {
                label: "Malaysia",//country name in quotes
                data:  [-0.29],// data of the country as an array, no quotes
                borderWidth: 2,
                fill: false,
                backgroundColor: "rgba(250,150,115,255)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
                borderColor: "rgba(250,150,115,255)"//put black rgb(0,0,0) or the same color as above
            },
            {
                label: "Philippines",//country name in quotes
                data:  [0.9],// data of the country as an array, no quotes
                borderWidth: 2,
                fill: false,
                backgroundColor: "rgba(237,230,131,255)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
                borderColor: "rgba(237,230,131,255)"//put black rgb(0,0,0) or the same color as above
            },
             {
                //SG starts at 2013 since 2012 data is missing
                label: "Singapore",//country name in quotes
                data:  [-0.06],// data of the country as an array, no quotes
                borderWidth: 2,
                fill: false,
                backgroundColor: "rgba(99,190,123,255)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
                borderColor: "rgba(99,190,123,255)"//put black rgb(0,0,0) or the same color as above
            },
            {
                label: "Thailand",//country name in quotes
                data:  [-0.41],// data of the country as an array, no quotes
                borderWidth: 2,
                fill: false,
                backgroundColor: "rgba(248,105,107,255)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
                borderColor: "rgba(248,105,107,255)"//put black rgb(0,0,0) or the same color as above
            },
            {
                label: "USA",//country name in quotes
                data:  [-0.05],// data of the country as an array, no quotes
                borderWidth: 2,
                fill: false,
                backgroundColor: "rgba(255,235,132,255)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
                borderColor: "rgba(255,235,132,255)"//put black rgb(0,0,0) or the same color as above
            },
            {
                label: "Vietnam",//country name in quotes
                data:  [-0.06],// data of the country as an array, no quotes
                borderWidth: 2,
                fill: false,
                backgroundColor: "rgba(254,233,131,255)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
                borderColor: "rgba(254,233,131,255)"//put black rgb(0,0,0) or the same color as above
            },
        ] */
    }
    new Chart("happy-chart",
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
                        text: ["Change in happiness for different countries measured for 10 years from 2012"],//set this to 'Something'
                        fontFamily: "TrebuchetMS",
                        fontSize: 24,
                        fontColor: 'rgb(0,120,0)',
                    }
                }
            });
