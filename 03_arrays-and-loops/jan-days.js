function januaryDays(firstWeekDay) {
  let week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
  let num = [];
  for (let a = 0; a <= 30; ++a) {
    num.push(a);
  }

  for (let i of num) {
    let day = (week.indexOf(firstWeekDay) + i) % 7;
    console.log(`${i + 1} января, ${week[day]}`);
  }
}

januaryDays('понедельник'); // вывести все дни недели января, если 1-я января - понедельник
januaryDays('среда'); // вывести все дни недели января, если 1-я января - среда
januaryDays('воскресенье'); // вывести все дни недели января, если 1-я января - воскресенье
