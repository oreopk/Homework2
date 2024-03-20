let createPhoneNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let arr = [];
let number1 = ['(', ')', ' ', '-'];
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
// (123) 456-7890
function number() {
  for (let i = 0; i <= 9; i++) {
    arr[i] = getRandomNumber(0, 10);
  }
}
function numb() {
  for (let i = 0; i <= 2; i++) {
    number1.splice(1, 0, arr[i]);
  }
  for (let i = 3; i <= 5; i++) {
    number1.splice(6, 0, arr[i]);
  }
  for (let i = 6; i <= 9; i++) {
    number1.splice(10, 0, arr[i]);
  }
  let result = number1.join('');
  return result;
}
number();

console.log(numb());
function createPhoneNumbers(arr) {
  let format = '(xxx) xxx-xxxx';

  for (let i = 0; i < arr.length; i++) {
    format = format.replace('x', arr[i]);
  }

  return format;
}
console.log(createPhoneNumbers(arr));
