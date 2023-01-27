let balance = 1000;

function checkObject() {
    let betObject = prompt('объект ставки: одно из чисел в диапазоне от 0 до 36 включительно или цвет, красный или чёрный: ');
    if (betObject == 'красный' || betObject == 'чёрный' || 0 < +betObject <= 36) {
        return betObject;
    } else {
        checkObject(betObject);
    }
}

function checkSize(balance) {
    let betSize = prompt('размер ставки: ');
    if (betSize > balance) {
        checkSize(balance);
    } else {
        return betSize;
    }
}

function roulette(betObject, betSize, balance) {
    let winColor = Math.round(Math.random());
    let winNumber = Math.round(Math.random() * (36 - 1) + 1);
    console.log('Выпали: ' + winColor + ' ' + winNumber);

    if (winColor == 0) {
        winColor = true
    } else if (winColor == 1) {
        winColor == false;
    }

    if (betObject == "красный") {
        betObject = true;
    } else if (betObject = "чёрный") {
        betObject = false;
    }

    if (betObject == winColor) {
        balance = balance + betSize * 2
    } else if (parseInt(betObject) == winNumber) {
        balance = balance + betSize * 35
    } else {
        balance = balance - betSize;
    }
    console.log('Баланс: ' + balance);
  return balance;
}

while (balance > 0) {
    roulette(checkObject(), checkSize(balance), balance)
}