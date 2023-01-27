let a = prompt('Введите число a: ');
let b = prompt('Введите число b: ');
let c = prompt('Введите число c: ');

if (a > b && a > c) {
    console.log('Максимальное число a');
} else if (b > a && b > c) {
    console.log('Максимальное число b');
} else {
    console.log('Максимальное число c');
}
