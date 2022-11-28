// 1

let password = '123-4';

if ((password.includes('-') || password.includes('_')) && password.length >= 4) {
    console.log('Допустимый пароль');
} else  {
    console.log('Такой пароль не подходит');
}

// 2

let userName = 'artEM';
let userSurname = 'Kabanov';
let firstPart = userName.substring(0,1);
let lastPart = userName.substring(1);
let firstPartName = firstPart.toUpperCase();
let lastPartName = lastPart.toLowerCase();
let Name = (firstPartName + lastPartName);

console.log(Name);


let firstPartS = userSurname.substring(0,1);
let lastPartS = userSurname.substring(1);
let firstPartSurname = firstPartS.toUpperCase();
let lastPartSurname = lastPartS.toLowerCase();
let surname = firstPartSurname + lastPartSurname;
console.log(surname);

if (userName === Name) {
    console.log(`Имя ${Name} осталось без изменений`);
} else {
    console.log (`Имя ${Name} было преобразовано`);
}

let result = (userSurname === surname) ? `Фамилия ${surname} осталась без изменений` : `Фамилия ${surname} была преобразована`;
console.log(result);


// 3

let number = 10;
if (number % 2 === 0) {
    console.log(number + ' - Число четное');
} else {
    console.log(number + ' - Число нечетное');
}
