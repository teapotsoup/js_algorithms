const areThereDuplicates = (...args) => {
  let arr = args.sort();
  for (let i = 0; i < arr.length; ++i) {
    let x = i + 1;
    if (arr[i] === arr[x]) {
      return true;
    }
  }
  return false;
};

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates("a", "b", "c", "a"));
