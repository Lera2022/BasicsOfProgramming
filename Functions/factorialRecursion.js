function factorial(value) {
    if(value <= 1) {
        return 1;
    }
    return value * factorial(value - 1);
}

let value = prompt('Введите число: ');
console.log('Результат: ' + factorial(value));