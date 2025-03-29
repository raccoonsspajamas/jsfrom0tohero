'use strict'

if (4 == 9) {
    console.log('ok!')
} else {
    console.log('Error!')
}

let num = 50;

if (num < 49) {
    console.log('Error')
} else if (num > 100) {
    console.log('МНого')
} else {
    console.log('Ok')
}

(num === 30) ? console.log('Ok') : console.log('Error')


const newNum = 51;

switch (newNum) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;

    case 50:
        console.log('В точку!')
        break;
    default:
        console.log('Не в этот раз')
        break

}