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

// const areThereDuplicates = (...args) => {
//   let i = 0;
//   for (let j = 1; j < args.length; j++) {
//     if(args[i]!== args[j]){
//         i++;
//     }else{
//         return true
//     }
//   }
//   return false
// };
console.log(areThereDuplicates(1, 2, 3));

console.log(areThereDuplicates(1, 2, 2));

console.log(areThereDuplicates("a", "b", "c", "a"));

// areThereDuplicates(1, 2, 3); // false
// areThereDuplicates(1, 2, 2); // true
// areThereDuplicates("a", "b", "c", "a"); // true
