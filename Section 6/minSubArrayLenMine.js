// 한개이상.
// 처음엔 한개, 다음엔 두개, 그다음 세개 순...
// 그렇게 해서 num 이상이면 배열 길이 리턴
// 한개는 for of 로 가능
//두개는 일전의 방법, 2개씩 했을때 안되면 세개 이상으로 넘어가는데 그 방법 구현?
//두개 합산하면서 양이 안차면 세개씩 더하는 건 말이 안된다. 두개 합산이 배열 1회차 돌고 그다음 세개합산하는데 그게 중첩 반복문이 아니고 될까?
function minSubArrayLen(arr, num) {
  for (const j of arr) {
    if (j >= num) {
      console.log(1);
      return 1;
    }
  }
  //2~5
  for (let i = 2; i < arr.length; ++i) {
    let maxSum = 0;
    for (let x = 0; x < i; ++x) {
      maxSum += arr[x];
    }
    if (maxSum >= num) {
      console.log(i);
      return i;
    } else {
      for (let j = i; j < arr.length; ++j) {
        maxSum = maxSum - arr[j - i] + arr[j];
        if (maxSum >= num) {
          console.log(i);
          return i;
        }
      }
    }
  }
  return 0;
}

minSubArrayLen([2, 3, 1, 2, 4, 3], 7); // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2, 1, 6, 5, 4], 9); // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52); // 1 -> because [62] is greater than 52
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39); // 3
