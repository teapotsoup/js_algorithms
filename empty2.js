function solution(my_string, letter) {
  var answer = "";

  answer = my_string.replaceAll(letter, "");
  return answer;
}

solution("BCBdbe", "B");

// const obj = {};
// for (const key of my_string) {
//   obj[key] ? (obj[key] += 1) : (obj[key] = 1);
// }
// for (const key in obj) {
//   if (key === letter) {
//     delete obj[key];
//   } else {
//     answer += key;
//   }
// }

// answer = [...new Set(my_string)].join("").replace(letter, "");
