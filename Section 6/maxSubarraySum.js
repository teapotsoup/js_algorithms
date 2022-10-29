function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length <= num) {
    return null;
  }
  for (let i = 0; i < num; ++i) {
    maxSum += arr[i]; //300
  }
  //300
  tempSum = maxSum;
  for (let j = num; j < arr.length; ++j) {
    tempSum = tempSum - arr[j - num] + arr[j];
    maxSum = Math.max(tempSum, maxSum);
  }
  console.log(maxSum);
  return maxSum;
}

maxSubarraySum([100, 200, 300, 400], 2); // 700
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); // 39
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2); // 5
maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2); // 5
maxSubarraySum([2, 3], 3); // null

//rtmscl
