function guessingGame() {
    const secretNumber = Math.floor(Math.random() * 100) + 1;

    function askUser() {
        const userGuess = prompt("Угадай число от 1 до 100:");

        if (userGuess === null) {
            alert("Игра окончена.");
            return;
        }

        if (isNaN(userGuess)) {
            alert("Введи число!");
            askUser();
            return;
        }

        if (parseInt(userGuess) === secretNumber) {
            alert("Поздравляю, Вы угадали!!!");
        } else if (parseInt(userGuess) > secretNumber) {
            alert("Загаданное число меньше");
            askUser();
        } else {
            alert("Загаданное число больше");
            askUser();
        }
    }

    askUser();
}

guessingGame();
