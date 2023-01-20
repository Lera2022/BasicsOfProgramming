let size = prompt('Введите размер квадрата: ');

if (size > 200) {
    size = 200;
}

drawRect(0, 0, size, size, 'red');