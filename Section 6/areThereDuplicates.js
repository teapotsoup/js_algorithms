const areThereDuplicates = (...args) => {
  const count = {};
  for (let i of args) {
    count[i] ? (count[i] += 1) : (count[i] = 1);
  }
  for (let key in count) {
    if (count[key] > 1) {
      return true;
    }
  }
  return false;
};

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates("a", "b", "c", "a"));
