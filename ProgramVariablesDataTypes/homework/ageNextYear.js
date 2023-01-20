let userName = prompt('Введите ваше имя');
let yearOfBirth = prompt('Введите год вашего рождения');
let today = new Date(); // Mon Nov 23 2020 15:23:46 GMT+0300 (Москва, стандартное время)
let year = today.getFullYear(); // 2020
let ageNextYear = year - yearOfBirth + 1;

console.log(userName + ', уже в следующем году вам будет ' + ageNextYear  + ' :-(');