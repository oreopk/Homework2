function Order(sequence) {
  let List = [sequence[0]];
  for (let i = 1; i < sequence.length; i++) {
    if (sequence[i] !== sequence[i - 1]) {
      List.push(sequence[i]);
    }
  }

  return List;
}

console.log(Order('AAAABBBCCDAABBB'));
console.log(Order('ABBCcAD'));
console.log(Order([1, 2, 2, 3, 3]));
