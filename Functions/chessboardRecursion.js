function drawChessboard(size, left, top, cellSize) {
    let isBlack = true;
    for (let y = 0; y < size; y = y + 1) {
        for (let x = 0; x < size; x = x + 1) {
            let color = 'white';
            if (isBlack) {
                color = 'black';
                isBlack = false
            } else {
                isBlack = true;
            }
            drawRect(left + x * cellSize,
			top + y * cellSize,
			cellSize, cellSize,
			color
			);
        }
    }
}

drawChessboard(3, 0, 0, 100);
drawChessboard(3, 100, 100, 100 / 3);