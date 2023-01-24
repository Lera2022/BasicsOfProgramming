// 6! = 1 * 2 * 3 * 4 * 5 * 6 
let value = prompt('Введите число: ');
let result = 1;
// let n = 2;

// while (n <= value) {
//     result = result * n;
//     n = n + 1;
// }

for (let n = 2; n <= value; n = n + 1) {
    result = result * n;
}

console.log('Результат: ' + result);