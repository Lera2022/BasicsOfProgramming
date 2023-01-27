let input = prompt('Введите суммы покупок из чека через запятую');
let array = input.split(',');

for(let i = 0; i < array.length; i = i + 1) {
    array[i] = +array[i];
}

let result = array[0];

for(let i = 1; i < array.length; i = i + 1) {
    result = result + array[i];
}

console.log('Сумма ваших покупок ' + result + '  рублей');