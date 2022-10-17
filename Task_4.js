const arr = [1, 3, 6, 2, 2, 0, 4, 5];
const numberTarget = 5;
function countNumberOfPairs(array, numberTarget) {
  //filter array, that in array only numbers < numberTarget left;
  let filteredArray = array.filter(function (item) {
    return item <= numberTarget;
  });
  let count = 0;
  for (i = 0; i < filteredArray.length; i++) {
    let currentElement = filteredArray[i];
    for (a = 1; a < filteredArray.length; a++) {
      let secondCurrentElement = filteredArray[a];
      if (i === a) {
        continue;
      }
      let sum = currentElement + secondCurrentElement;
      if (sum === numberTarget) {
        count++;
      }
    }
  }
  return count;
}
console.log(countNumberOfPairs(arr, numberTarget));
