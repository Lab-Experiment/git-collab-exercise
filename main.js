function isOdd(number) {
  return number % 2 !== 0;
}

function yesOrNo(boolean) {
  return boolean ? "Yes" : "No";
}

console.log(`7 is Odd = ${yesOrNo(isOdd(7))}`);
console.log(`8 is Even = ${yesOrNo(isOdd(8))}`);

function increment(number) {
  return number + 1;
}

console.log(`7 + 1 = ${increment(7)}`);
