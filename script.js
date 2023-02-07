'use strict'

function guessfunc() {
    function res() {

        const randomNum = Math.floor(Math.random() * 100) + 1;

        let userNum = + prompt('Угадай число от 1 до 100');

        // if (isNaN(userNum)) {
        //     alert('Введи число!');

        // } else if (userNum === null) {
        //     alert('Игра окончена');

        // } else if (userNum == randomNum) {
        //     alert('Поздравляю, Вы угадали!!!');

        // } else if (userNum < randomNum) {
        //     alert('Загаданное число больше');
        //     res();
        // } else if (userNum > randomNum) {
        //     alert('Загаданное число меньше');
        //     res();
        // }
        switch (true) {
            case userNum < randomNum:
                alert('Загаданное число меньше');
                res();
                break;
            case userNum > randomNum:
                alert('Загаданное число больше');
                res();
                break;
            case userNum == randomNum:
                alert('Поздравляю, Вы угадали!!!');
                break;
            case isNaN(userNum):
                alert('Введи число!');
                break;
            case userNum === null:
                alert('Игра окончена');
        }

    }
    res()
}

let guessNumber = guessfunc();
guessNumber();