
function moveTank(roadMines) {
  let health = 1;
  for (let i = 0; roadMines.length > i; ++i) {
    if (roadMines[i] === true && health > 0) {
      --health;
      console.log('танк поврежден');
      console.log(`танк переместился на ${i + 1}`);
    } else if (roadMines[i] === true && health < 1) {
      console.log('танк поврежден');
      console.log('танк уничтожен');
      break;
    } else {
      console.log(`танк переместился нa ${i + 1}`);
    }
  }
}

moveTank([false, false, false, false, false, false, false, false, false, false]);
// танк проедет по полю без мин

moveTank([false, false, true, false, false, false, false, false, false, false]);
// танк проедет по полю с одной миной но не остановится

moveTank([false, false, true, false, false, true, false, false, false, false]);
// танк поедет по полю с 2-я минами и подорвется на 2-ой мине

