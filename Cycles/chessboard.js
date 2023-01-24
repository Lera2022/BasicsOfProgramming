let isBlack = true;

for (let y = 0; y < 3; y = y + 1) {
    console.log('Начало рисования строки');
    for (let x = 0; x < 3; x = x + 1) {
        let color = 'white';
        if (isBlack) {
            color = 'black';
            isBlack = false
        } else {
            isBlack = true;
        }
        console.log('y = ' + y + ', x = ' + x + ', color = ' + color);
        drawRect(x * 50, y * 50, 50, 50, color);
    }
}