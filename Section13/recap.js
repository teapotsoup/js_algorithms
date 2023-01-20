const Insertion = (arr) => {
  for (let i = 1; i < arr.length; ++i) {
    const crtVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > crtVal; --j) {
      arr[j + 1] = arr[j];
      arr[j] = crtVal;
    }
    console.log(arr);
  }
};

Insertion([3, 44, 38, 5, 47, 15]);
