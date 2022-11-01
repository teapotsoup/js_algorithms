// 좌측 포인터가 우측 포인터보다 앞에 있는 동안만
// 값이 작으면 스타트포인터 중간 인덱스
// 값이 크면 엔드 포인터 중간 인덱스
// 반복 끝나도 일치 없으면 -1

function BinarySearch(arr, num) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end - 1) {
    // 0 19
    let temp = parseInt((start + end) / 2); //  9
    if (num === arr[temp]) {
      return temp;
    }
    if (num < arr[temp]) {
      end = temp;
    }
    if (num > arr[temp]) {
      start = temp;
    }
    if (arr[end] === num) {
      return end;
    }
    if (arr[start] === num) {
      return start;
    }
  }
  return -1;
}

// console.log(BinarySearch([5, 6, 10, 13, 14, 18, 30, 34], 10)); // 2

// console.log(BinarySearch([1, 2, 3, 4, 5], 3)); // 2
// console.log(BinarySearch([1, 2, 3, 4, 5], 5)); // 4
// console.log(BinarySearch([1, 2, 3, 4, 5], 6)); // -1

console.log(
  BinarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    10
  )
); // 2

console.log(
  BinarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    95
  )
);
16;

console.log(
  BinarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    100
  )
); // -1
