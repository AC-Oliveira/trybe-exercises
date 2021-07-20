// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';
const secHead = document.querySelector('#jokeContainer')

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  fetch(API_URL, myObject)
    .then(e => e.json())
    .then(d => secHead.innerText = d.joke);
};

window.onload = () => fetchJoke();