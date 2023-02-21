import fetch from 'https://cdn.skypack.dev/node-fetch';
  
fetch('https://loadshedding.eskom.co.za/LoadShedding/GetStatus', {
    
  })
  .then(response => response.text())
  .then(text => {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = text;
  })
  .catch(error => console.error(error));