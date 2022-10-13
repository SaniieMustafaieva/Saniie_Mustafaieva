function digitalRoot(digit) {
  let listOfNumbers = `${digit}`.split("").map((a) => Number.parseInt(a));
  let sumList = listOfNumbers.reduce(sum, 0);
  if (sumList < 10) {
    return sumList;
  } else {
    return digitalRoot(sumList);
  }
}

function sum(a, b) {
  let sum = a + b;
  return sum;
}
console.log(digitalRoot(16));
console.log(digitalRoot(942));
console.log(digitalRoot(132189));
console.log(digitalRoot(493193));
