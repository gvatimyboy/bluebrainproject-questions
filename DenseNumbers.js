function countDenseNumbersInInterval(start, end) {
  let result = 0;
  const rangeLength = end - start + 1;
  const range = [...Array(rangeLength).keys()].map((i) => i + start);
  for (const el of range) {
    if (isNumberDense(el)) {
      result += 1;
    }
  }
  return result;
}

function isNumberDense(number) {
  const numberAsString = number.toString();
  let sum = 0;
  for (const digitAsString of numberAsString) {
    sum += parseInt(digitAsString);
  }
  if (sum / numberAsString.length > 7) {
    return true;
  }
  return false;
}

let countDense = countDenseNumbersInInterval(9947, 9965);
console.log(countDense);
