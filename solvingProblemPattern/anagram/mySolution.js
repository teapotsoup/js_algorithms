function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const word1 = {};
  const word2 = {};
  for (var i of str1) {
    word1[i] = (word1[i] || 0) + 1;
  }
  for (var i of str2) {
    word2[i] = (word2[i] || 0) + 1;
  }

  for (const key in word1) {
    if (word1[key] !== word2[key]) {
      return false;
    }
  }
  return true;
}

console.log(validAnagram("anagram", "nagaram"));
