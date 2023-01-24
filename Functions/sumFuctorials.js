function factorial(value) {
    let result = 1;

    for (let n = 2; n <= value; n = n + 1) {
        result = result * n;
    }
    return result;
}

let value1 = prompt('Введите первое число: ');
let value2 = prompt('Введите второе число: ');

// let result1 = 1;

// for (let n = 2; n <= value1; n = n + 1) {
//     result1 = result1 * n;
// }

// let result2 = 1;

// for (let n = 2; n <= value2; n = n + 1) {
//     result2 = result2 * n;
// }

// let finalResult = result1 + result2;
let finalResult = factorial(value1) + factorial(value2);

console.log('Результат: ' + finalResult);