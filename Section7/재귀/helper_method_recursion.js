function collectOddValues(arr) {
  let result = [];

  function helper(arr) {
    if (arr.length === 0) {
      return;
    }

    if (arr[0] % 2 !== 0) {
      result.push(arr[0]);
    }

    helper(arr.slice(1));
  }

  helper(arr);

  return result;
}

collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);
