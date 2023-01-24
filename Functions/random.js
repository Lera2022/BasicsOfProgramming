function generateRandomNumber(to) {
    return Math.round(Math.random() * to)
}

console.log(generateRandomNumber(1000));