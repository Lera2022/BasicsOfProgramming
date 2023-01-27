let prices = [100, 110, 140, 100, 150, 200, 130, 120];
let height = 200;


function drawNet (prices, height) {
    let width = height / prices.length;
    for (let i = 0; i <= prices.length; i = i + 1) {
        for (let j = 0; j <= prices.length; j++) {
            drawLine(
                0 + i * width,
                0,
                0 + i * width,
                height,
                'gray'
            );
            drawLine(
                0,
                j * width,
              prices.length * width,
              j * width,

                'gray'
            );
        }
    }
}

function priceChart(prices, height) {
    let width = height / prices.length;
    for (let i = 1; i < prices.length; i = i + 1) {
        drawLine(
            i * width,
            height - prices[i - 1],
            i * width + width,
            height - prices[i],
            1,
            'black',
        );
    }
}

drawNet (prices, height);

priceChart(prices, height);