function calculateDiscounts(sumCart, quantity, promo) {
  let sum = sumCart;
  if (promo === 'ДАРИМ300' && sum > 300) {
    sum -= 300;
    console.log(sum);
  } else if (promo === 'ДАРИМ300' && sum <= 300) {
    sum = 0;
  } else {
    sum = sumCart;
  } if (quantity >= 10) {
    sum -= (sum * 0.05);
    console.log(sum);
  } if (sum >= 50000) {
    let a = 50000;
    sum -= ((sum - a) * 0.2);
    console.log(sum);
  } if (promo === 'СКИДКА15' && sum >= 20000) {
    sum -= (sum * 0.15);
    console.log(sum);
  }

  return(sum);
}

let sumKart = 21000;
let quantity = 12;
let promo = 'СКИДКА15';
calculateDiscounts(sumCart, count, promo);
