const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let swap = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap = true;
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if (!swap) {
      break;
    }
  }
  console.log(arr);
  return arr;
};

bubbleSort([1, 6, 15, 33, 30, 32, 26, 36, 42, 45, 46, 47, 48]);
