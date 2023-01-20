function collectOddValues(arr) {
  let odds = [];
  function helper(arr) {
    if (arr.length === 0) {
      return;
    }

    if (arr[0] % 2 !== 0) {
      odds.push(arr[0]);
    }
    arr.slice(1);
    helper(arr);
  }
  helper(arr);
  console.log(odds);
  return odds;
}

collectOddValues([1, 2, 3, 4, 5]);
