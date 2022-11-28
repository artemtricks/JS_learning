function reverseString(str) {
  let reverse = [];

  for (let i = str.length - 1; i >= 0; --i) {
    console.log(str[i]);
    reverse.push(str[i]);
  }

  console.log(reverse.join(''));
}


reverseString('abc'); // cba
reverseString('12345'); // 54321
