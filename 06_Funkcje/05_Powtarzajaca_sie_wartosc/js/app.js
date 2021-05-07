const numbers = [2, 4, 5, 2, 3, 5, 1, 2, 4];

function indexOfRepeatedValue(array) {
  let firstIndex;
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] === array[j]) {
        firstIndex = j;
        break;
      }
    }
    if (firstIndex !== undefined) {
      break;
    }
  }
  console.log(firstIndex);
  return firstIndex;
}

indexOfRepeatedValue(numbers);
