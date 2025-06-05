// Generate random number
let randomNumber = parseInt(Math.random() * 100 + 1);

// Select elements
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi'); // Make sure this exists in HTML
const startOver = document.querySelector('.resultParse');

const p = document.createElement('p'); // For restart button

let prevGuess = [];
let numGuess = 1;
let playGame = true;

// Listen for guesses
if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

// Validate guess
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number greater than 0');
    } else if (guess > 100) {
        alert('Please enter a number less than or equal to 100');
    } else {
        prevGuess.push(guess);
        displayGuess(guess);
        checkGuess(guess);
    }
}

// Check guess
function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage('🎉 You guessed it right!');
        endGame();
    } else if (guess < randomNumber) {
        displayMessage('📉 Too low!');
    } else {
        displayMessage('📈 Too high!');
    }

    if (numGuess > 10 && guess !== randomNumber) {
        displayMessage(`❌ Game over! The number was ${randomNumber}`);
        endGame();
    }
}

// Show guesses and remaining
function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    if (numGuess < 10) {
        remaining.innerHTML = `${10 - numGuess}`;
    } else {
        remaining.innerHTML = `0`;
    }
    numGuess++;
}

// Show message
function displayMessage(message) {
    if (lowOrHi) {
        lowOrHi.innerHTML = `<h2>${message}</h2>`;
    }
}

// End game
function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    submit.setAttribute('disabled', '');
    p.innerHTML = '<button id="newGame">Start New Game</button>';
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

// Restart
function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function () {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = '10';
        lowOrHi.innerHTML = '';
        userInput.removeAttribute('disabled');
        submit.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
}
