function guessingGame() {

    const guessedNum = Math.floor(Math.random() * 100);

    //game states
    let gameOver = false;
    let numGuess = 0;

    return function guess(num) {
        if (gameOver) return "Game Over";
        numGuess++;
        if (num === guessedNum) {
            gameOver = true;
            return `You won! You guessed ${num} in ${numGuess} attempts`;
        }

        if (num > guessedNum) return "You guessed too high";
        if (num < guessedNum) return "You guessed too low";

    }

}

module.exports = { guessingGame };
