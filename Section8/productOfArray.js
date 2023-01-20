function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  let temp = arr[arr.length - 1];
  arr.pop();
  return temp * productOfArray(arr);
}
console.log(productOfArray([1, 2, 3]));
console.log(productOfArray([1, 2, 3, 10]));
