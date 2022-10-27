const areThereDuplicates = (...args) => {
  args.sort();
  let i = 0;
  let x = 1;
  while (x < args.length) {
    if (args[i] === args[x]) {
      return true;
    } else {
      i++;
      x++;
    }
  }
  return false;
};
console.log(areThereDuplicates(1, 2, 3));

console.log(areThereDuplicates(1, 2, 2));

console.log(areThereDuplicates("a", "b", "c", "a"));

// false
// areThereDuplicates(1, 2, 2); // true
// areThereDuplicates("a", "b", "c", "a"); // true
