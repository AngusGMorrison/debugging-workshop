document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form');
  const jokeList = document.getElementById('joke-list');
  const newJokeLi = document.createElement('li');
  let username;

  function fetchJoke(){
    fetch('https://icanhazdadjoke.com/', {
      headers: { "Accept": "application/json" }
    })
    .then(res => res.json())
    .then(jokeData => renderJoke(jokeData.joke));
  }

  form.addEventListener('submit', (event) => {
    username = document.getElementById('name-input').value
    event.preventDefault();
    if(username === "") return;
    fetchJoke();
    
  })

  function renderJoke(joke) {
    newJokeLi.innerHTML = `
    <span class="username">${username} says: ${joke}</span>
    `
    jokeList.appendChild(newJokeLi);
  }


})
