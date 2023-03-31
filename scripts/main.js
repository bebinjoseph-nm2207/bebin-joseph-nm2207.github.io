fetch('../resources/ChinaSEAarmsexports.csv')
  .then(response => response.text()) // Get CSV contents as string
  .then(csvString => {
    const rows = csvString.split('\n'); // Split CSV string into rows
    const headers = rows[0].split(','); // Get headers from first row
    const data = []; // Array to store data

    for (let i = 1; i < rows.length; i++) {
      const values = rows[i].split(','); // Split row into values
      const rowObject = {};

      for (let j = 0; j < values.length; j++) {
        rowObject[headers[j]] = values[j]; // Add key-value pairs to object
      }

      data.push(rowObject); // Add object to data array
    }

    console.log(data); // Output: array of objects with key-value pairs for each row
  })
  .catch(error => console.error(error));
