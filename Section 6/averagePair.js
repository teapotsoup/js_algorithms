const averagePair = (arr, num) => {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    console.log(start, end);
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === num) return true;
    else if (avg < num) start++;
    else end--;
  }
  return false;
};

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));

// 0 8
// avg 10
// 0 7
// avg 6.5
// 1 7
// avg 7.5
// 2 7
// avg 7.5
// 3 7
// avg 8.5
// 3 6
