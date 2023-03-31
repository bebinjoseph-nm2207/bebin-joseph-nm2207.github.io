fetch('../resources/ChinaSEAarmsexports.csv')
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
  });

