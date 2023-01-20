let figure = prompt('Какую фигуру вы хотите нарисовать (1 - круг, 2 - квадрат): ');
if (figure == '1') {
    let radius = prompt('Введите радиус круга: ');
    drawCircle(200, 150, radius, 'black');
} else if (figure == '2') {
    let width = prompt('Введите ширину квадрата: ');
    drawRect(50, 50, width, width, 'black');
} else {
    let figure = prompt('Какую фигуру вы хотите нарисовать (1 - круг, 2 - квадрат): ');
    if (figure == '1') {
        let radius = prompt('Введите радиус круга: ');
        drawCircle(200, 150, radius, 'black');
    } else if (figure == '2') {
        let width = prompt('Введите ширину квадрата: ');
        drawRect(50, 50, width, width, 'black');
    }
}