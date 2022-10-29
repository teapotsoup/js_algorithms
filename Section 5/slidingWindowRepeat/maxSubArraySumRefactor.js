function maxSubarraySum(arr, num) {
  let tempsum = 0;
  let maxsum = 0;
  if (num > arr.length) {
    return null;
  }
  for (let i = 0; i < num; ++i) {
    maxsum += arr[i]; // 17
  }
  tempsum = maxsum;
  for (let j = num; j < arr.length; ++j) {
    tempsum = tempsum - arr[j - num] + arr[j];
    maxsum = Math.max(maxsum, tempsum);
  }
  return maxsum;
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
