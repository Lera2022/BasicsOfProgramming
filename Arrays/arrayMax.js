let input = prompt('Введите числа через запятую');
let array = input.split(',');

for(let i = 0; i < array.length; i = i + 1) {
    array[i] = +array[i];
}

let result = array[0];

for(let i = 1; i < array.length; i = i + 1) {
    if (array[i] > result) {
        result = array[i];
    }
}

console.log('Максимальное число: ' + result);


// console.log(array.length);
// console.log(array.join('_'));
// console.log(typeof array[0]);

// let a = +'2';
// let b = Number('3');
// let c = parseInt('3');

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);