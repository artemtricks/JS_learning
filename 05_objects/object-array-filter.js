let objects = [
  { name: 'Василий', surname: 'Васильев' },
  { name: 'Иван', surname: 'Иванов' },
  { name: 'Пётр', surname: 'Петров' },
];

let result = [];

function filter(objects, name, meaning) {
  for (let obj = 0; objects.length > obj; ++obj) {
    console.log(objects[obj][name]);
    if (objects[obj][name] === meaning) {
      result.push(objects[obj]);
    } else {
      console.log('это не тот кто нам нужен');
    }
  }
  return(result);
}

filter(objects, 'name', 'Пётр');
console.log(result);
