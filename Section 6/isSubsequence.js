const isSubsequence = (str1, str2) => {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) {
      console.log("i : ", i);
      i++;
    }
    if (i === str1.length) {
      console.log("true i: ", i);
      return true;
    }
    j++;
  }
  return false;
};

isSubsequence("hello", "hello world"); // true
isSubsequence("sing", "sting"); // true
isSubsequence("abc", "abracadabra"); // true
isSubsequence("abc", "acb"); // false (order matters)
