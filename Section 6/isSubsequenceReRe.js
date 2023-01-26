const isSubsequence = (str1, str2) => {
  let str1Pointer = 0;
  let str2Pointer = 0;

  while (str2Pointer < str2.length) {
    if (str1[str1Pointer] === str2[str2Pointer]) str1Pointer++;
    if (str1Pointer === str1.length) return true;
    str2Pointer++;
  }

  return false;
};
// console.log(isSubsequence("hello", "hello world"));
// console.log(isSubsequence("sing", "sting"));
// console.log(isSubsequence("abc", "abracadabra"));
console.log(isSubsequence("abc", "acb"));
