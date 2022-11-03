function Search(longStr, ShortStr) {
  let count = 0;
  for (let l = 0; l <= longStr.length - ShortStr.length; l++) {
    let temp = "";
    if (longStr[l] !== ShortStr[0]) {
      continue;
    } else {
      for (let i = 0; i < ShortStr.length; i++) {
        temp += longStr[l + i];
      }
      if (ShortStr === temp) {
        count += 1;
      } else {
        continue;
      }
    }
  }
  return count;
}

console.log(Search("wowomgzomg", "omg"));
