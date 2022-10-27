const countUniqueValues = (arr) => {
  let i = 0;
  let j = 1;
  if (arr.length === 0) {
    return 0;
  }
  while (j < arr.length) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    if (arr[i] === arr[j]) {
      j++;
    }
  }
  console.log(i);

  console.log(arr);
};

countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
countUniqueValues([]); // 0
countUniqueValues([-2, -1, -1, 0, 1]); // 4

// 1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13
// i  j

// 1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13
//          i  j
// 1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13
//             i  j
// 1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13
//             i     j
// 1, 2, 3, 4, 7, 4, 4, 7, 12, 12, 13
//             i     j
