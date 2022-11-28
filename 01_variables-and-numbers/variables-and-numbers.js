// 1

let x1 = 2;
let y1 = 3;
let x2 = 10;
let y2 = 5;

let side1 = Math.abs(x1 - x2);
let side2 = Math.abs(y1 - y2);

let area = side1 * side2;

console.log('площадь равна', area);

// 2

let a = 13.890123;
let b = 2.891564;
let n = 3;

let aNormolized = Math.round(a % 1 * Math.pow(10, n));
let bNormolized = Math.round(b % 1 * Math.pow(10, n));

console.log('числа равны', aNormolized === bNormolized);
console.log('числа  не равны', aNormolized !== bNormolized);
console.log('a > b', aNormolized > bNormolized);
console.log('a < b', aNormolized < bNormolized);
console.log('a больше либо равно b', aNormolized >= bNormolized);
console.log('a меньше либо равно b', aNormolized <= bNormolized);


// 3

let N = -5;
let M = 100;

let range = Math.abs(N - M);
let inRange = Math.round(Math.random() * range);
let min = Math.min(N, M);
let max = Math.max(N, M);

let first = min + inRange;
let second = max - inRange;
console.log(first);
console.log(second);

console.log('числа равны', first === second);
console.log('числа не равны', first !== second);
console.log('первое число больше второго числа', first > second);
console.log('первое число меньше второго числа', first < second);
console.log('первое число >= вторго числа', first >= second);
console.log('первое число <= второго числа', first <= second);

