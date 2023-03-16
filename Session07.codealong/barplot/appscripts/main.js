    // Average daily time spent using social media in the Asia-Pacific region in 3rd quarter of 2021, by country
    // Source: https://www-statista-com.libproxy1.nus.edu.sg/statistics/1128147/apac-daily-time-spent-using-social-media-by-country-or-region/
    const labels = ["Philippines", "Indonesia", "Malaysia", "Thailand","India","Vietnam","Singapore","Taiwan","New Zealand","Hong Kong","China","Australia","South Korea","Japan"];
    const hours = [4.08, 3.2, 3.02, 2.55, 2.33,2.29,2.24,2.08,2,1.58,1.58, 1.56, 1.13, 0.5];  // Percentages

    const dataObj = {
        labels: labels,
        datasets: [
            {
                label: "Number of hours",
                data: hours,
                borderWidth: 2,
                backgroundColor: "hsla(20,100%,80%,0.8)",
                borderColor: "hsla(0,100%,50%,1)"
            }
        ]
    };
    new Chart("sm-bar-chart", {//!--Notice here we put the id of the "new chart" we created in the html part.
                type: "bar",
                data: dataObj,
                options: { // configure options here
                    responsive: false
                }
            });
