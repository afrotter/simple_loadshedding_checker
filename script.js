  function fetchAPI() {
  
  fetch('https://loadshedding.eskom.co.za/LoadShedding/GetStatus', {
    mode: 'cors'
  })
  .then(response => response.json())
  .then(data => {
    // Extract the data you want to display
    const status = data.status;
    const message = data.message;

    // Use the extracted data to update the DOM
    document.getElementById('status').innerHTML = status;
    document.getElementById('message').innerHTML = message;
  });
}

// Call the fetchAPI function to execute the API request and display the data
fetchAPI();