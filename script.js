'use strict'

let guessfunc = function () {
    function Res() {
        let randomNum = Math.floor(Math.random() * 100) + 1;

        let userNum = prompt('Угадай число от 1 до 100', 'Введите число');

        if (isNaN(userNum)) {
            alert('Введи число!');
        } if (userNum === null) {
            alert('Игра окончена');

        } if (userNum == randomNum) {
            alert('Поздравляю, Вы угадали!!!');


        } else if (userNum < randomNum) {
            alert('Загаданное число меньше');
            userNum = + prompt('Введите число');
        } else if (userNum > randomNum) {
            alert('Загаданное число больше');
            userNum = +prompt('Введите число');
        }
    }
    return Res;
}

let guessNumber = guessfunc();

guessNumber();