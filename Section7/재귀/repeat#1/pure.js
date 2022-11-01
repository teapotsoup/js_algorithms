function collectOddValues(arr) {
  let odds = [];
  if (arr.length === 0) {
    return odds;
  }
  if (arr[0] % 2 !== 0) {
    odds.push(arr[0]);
  }

  return odds.concat(collectOddValues(arr.slice(1)));
}

console.log(collectOddValues([1, 2, 3, 4, 5]));
