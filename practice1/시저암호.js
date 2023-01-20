function solution(s, n) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") result += " ";
    else {
      let charCode = s.charCodeAt(i);
      if (charCode <= 90) {
        charCode += n;
        if (charCode > 90) charCode -= 26;
      } else {
        charCode += n;
        if (charCode > 122) charCode -= 26;
      }
      result += String.fromCharCode(charCode);
    }
  }
  return result;
}
// A Z
// 65 90
// a z
// 97 122

// console.log(solution("AB", 1));
// console.log(solution("z", 1)); //b

console.log(solution("a B z", 1));
