// Вынесите алгоритм вычисления сложного банковского процента из прошлого домашнего задания в отдельную функцию и усовершенствуйте программу: пусть она выводит сложный процент за количество месяцев, которое указал пользователь, затем за вдвое больший срок, затем за втрое больший срок.

let depositAmount = parseInt(prompt('Введите размер вклада: '));
let annualPercentage = prompt('Введите годовой процент (без знака %): ');
let numberOfMonths = prompt('Введите кол-во месяцев: ');

function bankCalculator(k) {
    let income = 0;
    let totalAmount = depositAmount;

    for (let n = 1; n <= numberOfMonths * k; n++) {
        totalAmount = totalAmount + (totalAmount * annualPercentage / 100 / 12);
        console.log(n + '. ' + totalAmount.toFixed(2));
    }
    income = totalAmount - depositAmount;
    console.log('Итого доход: ' + income.toFixed(2));
}

bankCalculator(1);
bankCalculator(2);
bankCalculator(3);