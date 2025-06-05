const userInput = document.querySelector('.guess');
const form = document.querySelector('form');
let randomNumber = Math.round(Math.random()*100)
const result = document.querySelector('.result');
const allguess = document.querySelector('.all-guess');
const all_guess = [];
const submit = document.querySelector('.submit');
const startGame = document.querySelector('.start-game');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userInputValue = parseInt(userInput.value);
    if(randomNumber < userInputValue) {
        result.innerText = "Your guess is too high!"
    }
    else if(randomNumber > userInputValue){
        result.innerText = "Your guess is too low!"
    }
    else {
        result.innerText = "Your guess is too right! The number was " + randomNumber;
        startGame.disabled = false;
        submit.disabled = true;
    }

    all_guess.push(userInputValue);
    allguess.innerText = all_guess.join(', ');

    form.reset();


})

startGame.addEventListener('click', startNewGame);

function startNewGame() {
    // Generate a new random number
    randomNumber = Math.round(Math.random() * 100);

    // Reset result and previous guesses
    result.innerText = '';
    all_guess.length = 0; // Clear array
    allguess.innerText = '';

    // Enable submit button and disable start button again
    submit.disabled = false;
    startGame.disabled = true;
}