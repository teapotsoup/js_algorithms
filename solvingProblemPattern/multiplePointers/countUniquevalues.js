// const Mine1 = (arr) => {
//   const count = {};
//   for (const key of arr) {
//     count[key] ? (count[key] += 1) : (count[key] = 1);
//   }
//   let counter = 0;
//   for (const key in count) {
//     if (key) {
//       counter += 1;
//     }
//   }
//   console.log(counter);
//   return counter;
// };

const Mine2 = (arr) => {
  let i = 0;
  let j = i + 1;
  if (arr.length === 0) {
    return 0;
  }
  while (j < arr.length) {
    if (arr[i] === arr[j]) {
      j += 1;
    } else {
      i += 1;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};

Mine2([1, 1, 1, 1, 1, 2]);
Mine2([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);
Mine2([]);
Mine2([-2, -1, -1, 0, 1]);
