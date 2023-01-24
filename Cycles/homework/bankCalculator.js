// Необходимо написать программу, которая вычисляет сложные проценты по банковскому вкладу и выводит пользователю результат, детализированный по месяцам. Пользователь вводит следующие данные: размер вклада, годовой процент (без знака %), кол-во месяцев. Пример расчёта для вклада в 1000 рублей под 6% годовых на три месяца:
// Первый месяц: 1000 + 1000 * (6% / 100 / 12) = 1005
// Второй месяц: 1005 + 1005 * (6% / 100 / 12) = 1010.025
// Третий месяц: 1010.025 + 1010.025 * (6% / 100 / 12) = 1015,07
// Итого доход: 15.07

let depositAmount = parseInt(prompt('Введите размер вклада: '));
let annualPercentage = prompt('Введите годовой процент (без знака %): ');
let numberOfMonths = prompt('Введите кол-во месяцев: ');

let income = 0;
let totalAmount = depositAmount;

for(let n = 1; n <= numberOfMonths; n++){
    totalAmount = totalAmount + (totalAmount * annualPercentage / 100 / 12);
    console.log(n + '. ' + totalAmount.toFixed(2));
}
income = totalAmount - depositAmount;
console.log('Итого доход: ' + income.toFixed(2));