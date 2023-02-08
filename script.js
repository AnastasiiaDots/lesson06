'use strict'

function guessfunc() {

    const randomNum = Math.floor(Math.random() * 100) + 1;
    function res() {

        let userNum = prompt('Угадай число от 1 до 100');

        switch (true) {

            case userNum === null:
                alert('Игра окончена');
                break;
            case isNaN(userNum):
                alert('Введи число!');
                res();
                break;
            case userNum > randomNum:
                alert('Загаданное число меньше');
                res();
                break;
            case userNum < randomNum:
                alert('Загаданное число больше');
                res();
                break;
            case userNum == randomNum:
                alert('Поздравляю, Вы угадали!!!');
        }
    }
    res()
}

guessfunc()