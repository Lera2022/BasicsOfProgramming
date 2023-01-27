
function findMax(array) {
    let result = array[0];

    for(let i = 1; i < array.length; i = i + 1) {
        if (array[i] > result) {
            result = array[i];
        }
    }

    return result;
}

let prices = [100, 110, 140, 100, 150, 200, 130, 120];
let max = findMax(prices);

// drawLine(30, 10, 100, 50, 1, 'black');

for (let i = 1; i < prices.length; i = i + 1) {
    drawLine(
        i * 10,
        max - prices[i - 1],
        i * 10 + 10,
        max - prices[i],
        1,
        'black',
    );
}