function findLongestSubstring(str) {
  const obj = {};
  if (str === "") {
    console.log(0);
    return 0;
  }
  for (let i of str) {
    obj[i] ? (obj[i] += 1) : (obj[i] = 1);
  }
  let count = 0;
  for (let i in obj) {
    if (obj[i] === 1) {
      count += 1;
    }
  }
  console.log(obj);
  console.log(count);
  return count;
}

findLongestSubstring(""); // 0
findLongestSubstring("rithmschool"); // 7
findLongestSubstring("thisisawesome"); // 6
findLongestSubstring("thecatinthehat"); // 7
findLongestSubstring("bbbbbb"); // 1
findLongestSubstring("longestsubstring"); // 8
findLongestSubstring("thisishowwedoit"); // 6
