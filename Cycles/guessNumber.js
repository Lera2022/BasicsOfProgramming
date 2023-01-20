let target = Math.round(Math.random() * 10);

// console.log(target);
// while (true) {
//     let variant = prompt('Угадайте число')
//     // console.log('Итерация');
//     if (variant > target) {
//         console.log('Число ' + ' больше, чем загаданное')
//     } else if (variant < target) {
//         console.log('Число ' + ' меньше, чем загаданное')
//     } else {
//         break;
//     }
// }
let variant;

do {
    variant = prompt('Угадайте число')
    // console.log('Итерация');
    if (variant > target) {
        console.log('Число ' + ' больше, чем загаданное')
    } else if (variant < target) {
        console.log('Число ' + ' меньше, чем загаданное')
    }
} while (variant != target);

console.log('Вы угадали число ' + target);