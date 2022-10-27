function averagePair(arr, num) {
  let i = 0;
  let j = arr.length - 1;
  while (i < arr.length - 1) {
    let avg = (arr[i] + arr[j]) / 2;
    if (avg === num) {
      return true;
    } else if (avg > num) {
      j--;
    } else {
      i++;
    }
  }
  return false;
  //   let start = 0;
  //   let end = arr.length - 1;
  //   while (start < end) {
  //     let avg = (arr[start] + arr[end]) / 2;
  //     if (avg === num) return true;
  //     else if (avg < num) start++;
  //     else end--;
  //   }
  //   return false;
}

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));

console.log(averagePair([(-1, 0, 3, 4, 5, 6)], 4.1));

console.log(averagePair([], 4));

// averagePair([1, 2, 3], 2.5); // true
// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
// averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
// averagePair([], 4); // false
