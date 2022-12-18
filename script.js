  fetch('https://loadshedding.eskom.co.za/LoadShedding/GetStatus', {
    mode: 'cors'
  })
  .then(response => response.text())
  .then(text => console.log(text))
  .catch(error => console.error(error));

  const fetch = require('node-fetch');

fetch('https://loadshedding.eskom.co.za/LoadShedding/GetStatus')
  .then(response => response.text())
  .then(text => console.log(text))
  .catch(error => console.error(error));