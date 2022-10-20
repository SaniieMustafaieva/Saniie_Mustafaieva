function biggerNumber(digits) {
  if (digits < 10) {
    return -1;
  }
  let stringOfDigits = `${digits}`;
  for (i = stringOfDigits.length - 1; i--; i >= 0) {
    let rightDigit = Number.parseInt(stringOfDigits[i + 1]);
    let leftDigit = Number.parseInt(stringOfDigits[i]);
    if (rightDigit > leftDigit) {
      return `${stringOfDigits.slice(
        0,
        i
      )}${rightDigit}${leftDigit}${stringOfDigits.slice(i + 2)}`;
    } else {
      continue;
    }
  }
  return -1;
}
console.log(biggerNumber(12));
console.log(biggerNumber(513))
console.log(biggerNumber(2017))
console.log(biggerNumber(9))
console.log(biggerNumber(111))
console.log(biggerNumber(531))


