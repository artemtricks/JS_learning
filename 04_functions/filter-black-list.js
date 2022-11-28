function generatorWhiteList(allEmailList, blackEmailList) {
  let whiteEmailList = [];

  for (let i = 0; i < allEmailList.length; ++i) {
    if (blackEmailList.includes(allEmailList[i]) === false) {
      console.log(allEmailList[i]);  // выводятся элементы для белого списка
      whiteEmailList.push(allEmailList[i]);
    } else {
      console.log(`${allEmailList[i]} этот адрес в черном списке`);
    }
  }
  console.log(whiteEmailList);
  return whiteEmailList;
}

let arrayAllMail = ['first@test', 'second@test', 'third@test', 'fourth@test', 'fifth@test', 'sixth@test', 'seventh@test'];
let arrayBlackMail = ['third@test', 'fourth@test', 'seventh@test'];

generatorWhiteList(arrayAllMail, arrayBlackMail);


