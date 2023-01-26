function sameFrequency(str1, str2) {
  str1 = String(str1);
  str2 = String(str2);
  if (str1.length !== str2.length) {
    return false;
  }
  const str1Obj = {};
  for (let i of str1) {
    str1Obj[i] ? (str1Obj[i] += 1) : (str1Obj[i] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    const letter = str2[i];
    if (!str1Obj[letter] || str1Obj[letter] === 0) {
      return false;
    } else {
      str1Obj[letter] -= 1;
    }
  }
  return true;
}
console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(35895786, 58793857));
console.log(sameFrequency(22, 222));

// sameFrequency(182, 281); // true
// sameFrequency(34, 14); // false
// sameFrequency(3589578, 5879385); // true
// sameFrequency(22, 222); // false
