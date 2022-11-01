function BinarySearch(arr, num) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    if (start + 1 === end) {
      return -1;
    }
    let temp = parseInt((start + end) / 2);
    if (arr[temp] === num) {
      return temp;
    }
    if (arr[end] === num) {
      return end;
    }
    if (arr[start] === num) {
      return start;
    }
    if (num < arr[temp]) {
      end = temp;
    }
    if (num > arr[temp]) {
      start = temp;
    }
  }
  return -1;
}

console.log(BinarySearch([5, 6, 10, 13, 14, 18, 30, 34], 20)); // 5
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
//16;

console.log(
  BinarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    100
  )
); // -1
