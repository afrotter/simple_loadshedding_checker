import fetch from 'https://cdn.skypack.dev/node-fetch';
  
fetch('https://loadshedding.eskom.co.za/LoadShedding/GetStatus', {
    mode: 'cors'
  })
  .then(response => response.text())
  .then(text => console.log(text))
  .catch(error => console.error(error));

console.log(text);