function maxSubarraySum(arr, num) {
  let temp = -Infinity;
  if (num > arr.length) {
    return null;
  }
  for (let i = 0; i <= arr.length - num; ++i) {
    let sum = 0;
    for (let j = i; j < num + i; ++j) {
      sum += arr[j];
    }
    if (sum > temp) {
      temp = sum;
    }
  }
  return temp;
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
