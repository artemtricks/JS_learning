function randomArray(count, n, m) {
  let mass = [];

  for (let i = count; i > 0; --i) {
    let inRange = (Math.round(Math.random() * Math.abs(n - m)));
    let min = Math.min(n, m);
    mass.push(min + inRange);
  }
  console.log(mass);
}


randomArray(10, 10, 100); // вывести массив из 10-ти случайных чисел от 10 до 100
randomArray(2, 5, 1); // вывести массив из 2-х случайных чисел от 1 до 5
