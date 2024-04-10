
const showNextJoke = () => {
    fetch('https://api.chucknorris.io/jokes/random?category=movie') // This line of code is used to fetch the data from the API
        .then(response => response.json())
        .then(data => {
            const jokeDiv = document.getElementById('joke');
            jokeDiv.innerText = data.value;
        })
        .catch(error => {
            console.log('Error:', error);
        });
}
showNextJoke();
const button = document.querySelector('button');
button.addEventListener('click', showNextJoke);
//cosole log the result her as well
console.log(showNextJoke);
