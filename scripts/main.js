/*fetch('../resources/ChinaSEAarmsexports.csv') //This does not work due to CORS policy
  .then(response => response.text())
  .then(csvString => {
    const rows = csvString.trim().split('\n');
    console.log("This is rows"+rows);
    const headers = rows[0].split(',');
    console.log("This is headers"+headers);
    const data = {};
    for (let i = 1; i < rows.length; i++) {
      const cols = rows[i].split(',');
      const country = cols[0];
      data[country] = {};
      console.log("This is country"+ country);
      for (let j = 1; j < cols.length; j++) {
        const year = headers[j];
        const value = parseInt(cols[j]);
        data[country][year] = value;
      }
    }
    console.log("This is data"+ data);
  })
  .catch(error => {
    console.error('Error fetching CSV file:', error);
  });*/    
  //End of failed fetch api code to load csv data

//Imported from Pythonstuff.py
const chBangl= ['61', '87', '5', '20', '9', '7', '0', '0', '33', '11', '2', '0', '0', '7', '1', '184', '67', '9', '0', '13', '81', '149', '488', '201', '450', '262', '208', '92', '637', '27', '15', '103']
const chCam= ['0', '0', '0', '4', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '56', '0', '4', '0', '0', '16', '39', '0', '0', '0', '0', '2', '1', '0', '23', '14']
const chIn= ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '10', '3', '3', '0', '2', '8', '64', '73', '34', '38', '40', '34', '16', '14', '17', '2', '0']
const chLa= ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '7', '0', '0', '0', '16', '16', '0', '1', '0', '2', '51', '9', '0', '0', '0']
const chMy= ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '5', '0', '0', '0', '0', '0', '0', '0', '0', '0', '28', '0', '55', '28']
const chBu= ['182', '13', '331', '93', '176', '118', '197', '156', '116', '3', '50', '9', '57', '74', '23', '10', '4', '13', '19', '5', '277', '251', '189', '63', '180', '215', '115', '98', '50', '4', '54', '102']
const chSL= ['138', '19', '0', '23', '15', '52', '0', '28', '18', '28', '22', '4', '9', '19', '29', '50', '49', '67', '0', '4', '0', '0', '0', '0', '0', '0', '0', '1', '59', '0', '0', '0']
const chYearTot= ['381', '119', '336', '140', '200', '177', '197', '184', '167', '42', '74', '13', '66', '100', '53', '254', '179', '99', '28', '24', '366', '496', '805', '298', '669', '517', '359', '260', '798', '48', '149', '247']


const indiaHeaders= ['1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022']
const inBangl= ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0']
const inBu= ['0', '0', '0', '0', '0', '0', '0', '0', '0', '5', '0', '0', '0', '0', '0', '9', '3', '4', '0', '0', '0', '0', '6', '0', '27', '12', '0', '0', '3', '148', '0', '0']
const inSL= ['0', '0', '0', '0', '0', '0', '0', '0', '0', '16', '0', '0', '0', '0', '0', '10', '21', '11', '0', '0', '0', '0', '0', '0', '0', '0', '37', '37', '0', '0', '0', '7']
const inYearTot= ['0', '0', '0', '0', '0', '0', '0', '0', '0', '21', '0', '0', '0', '0', '0', '19', '24', '15', '0', '0', '0', '0', '6', '0', '27', '12', '37', '37', '3', '148', '0', '7']

//End of imported data section

//Code for changing subpage within Data section taken from w3schools
function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}
//End of code for changing subpage within Data section

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
//End of code

//Total barchart for id "Overview"
const totBarlabels = ["China","India"];
const totalArmsExports = [7837, 356];  // Arms transfers values

const totBarDataObj = {
    labels: totBarlabels,
    datasets: [
        {
            label: "Value of arms exports in millions of SIPRI TIV",
            data: totalArmsExports,
            borderWidth: 2,
            backgroundColor: "hsla(20,100%,80%,0.8)",
            borderColor: "hsla(0,100%,50%,1)",
        }
    ]
};
new Chart("totBarChart", {//!--Notice here we put the id of the "new chart" we created in the html part.
            type: "bar",
            data: totBarDataObj,
            options: { // configure options here
                responsive: false,
                title: {
                  display: true,
                  text: ['Total value of Chinese & Indian arms transfers to Southeast Asia','from 1991-2022'],//set this to ['The most negative phrases in the Singlish vocabulary','According to research']
                  fontFamily: "TrebuchetMS",
                  fontSize: 24,
                  fontColor: 'rgb(100,40,150)',
              }
            }
        });
// End of code for id "Overview" barchart

//Line chart for India yearly totals arms transfers 
new Chart("inLineYrTotChart", {
  type: "line",
  data: {
    labels: indiaHeaders,
    datasets: [
      { 
        data: inYearTot,
        label: "India",
        borderColor: "#3e95cd",
        fill: false
      },
     /* { 
        data: chYearTot,
        label: "China",
        borderColor: "#8e5ea2",
        fill: false
     */    ]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: ['Yearly total values of Indian arms transfers to Southeast Asia','(in millions of TIV)'],
      fontFamily: "TrebuchetMS",
      fontSize: 24,
      fontColor: 'rgb(100,40,150)',
    }
  }
});
//End of code

//Line chart for China yearly totals arms transfers
new Chart("chLineYrTotChart", {
  type: "line",
  data: {
    labels: indiaHeaders,
    datasets: [
      { 
        data: chYearTot,
        label: "China",
        borderColor: "#8e5ea2",
        fill: false
      }    
    ]},
  options: {
    responsive: true,
    title: {
      display: true,
      text: ['Yearly total values of Chinese arms transfers to Southeast Asia', '(in millions of TIV)'],
      fontFamily: "TrebuchetMS",
      fontSize: 24,
      fontColor: 'rgb(100,40,150)',
    }
  }
});
//End of code


//Line chart for India arms recipient yearly rs
new Chart("inLinChart", {
  type: 'line',
  data: {
    labels: indiaHeaders,
    datasets: [
      { 
        data: inBangl,
        label: "Bangladesh",
        borderColor: "#3e95cd",
        fill: false
      },
      { 
        data: inBu,
        label: "Myanmar",
        borderColor: "#8e5ea2",
        fill: false
      },
      { 
        data: inSL,
        label: "Sri Lanka",
        borderColor: "#c45850",
        fill: false
      },
    ]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: ['Yearly values of Indian arms transfers by recipient country', '(in millions of TIV)'],
      fontFamily: "TrebuchetMS",
      fontSize: 24,
      fontColor: 'rgb(100,40,150)',
    }
  }
});
//End of code

//Line chart for China arms recipient yearly rs
new Chart("chLinChart", {
  type: 'line',
  data: {
    labels: indiaHeaders,
    datasets: [
      { 
        data: chBangl,
        label: "Bangladesh",
        borderColor: "#3e95cd",
        fill: false
      },
      { 
        data: chBu,
        label: "Myanmar",
        borderColor: "#8e5ea2",
        fill: false
      },
      { 
        data: chCam,
        label: "Cambodia",
        borderColor: "#3cba9f",
        fill: false
      },
      { 
        data: chIn,
        label: "Indonesia",
        borderColor: "#e8c3b9",
        fill: false
      },
      { 
        data: chLa,
        label: "Laos",
        borderColor: "#f7db02",
        fill: false
      },
      { 
        data: chMy,
        label: "Malaysia",
        borderColor: "#f79102 ",
        fill: false
      },
      { 
        data: chSL,
        label: "Sri Lanka",
        borderColor: "#c45850",
        fill: false
      },
    ]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: ['Yearly values of Chinese arms transfers by recipient country', '(in millions of TIV)'],
      fontFamily: "TrebuchetMS",
      fontSize: 24,
      fontColor: 'rgb(100,40,150)',
    }
  }
});
//End of code