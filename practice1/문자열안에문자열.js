function solution(str1, str2) {
  var answer = 0;
  let str1Pointer = 0;
  while (str1Pointer <= str1.length - str2.length) {
    if (str1[str1Pointer] === str2[0]) {
      let word = "";
      for (let i = str1Pointer; i < str1Pointer + str2.length; i++) {
        word += str1[i];
      }
      if (str2 === word) {
        answer = 1;
        break;
      } else {
        str1Pointer += 1;
        continue;
      }
    } else {
      str1Pointer += 1;
    }
  }
  answer === 1 ? answer : (answer += 2);
  console.log(answer);
  return answer;
}

// solution("ab6CDE443fgh22iJKlmn1o", "6CD");
solution("ppprrrogrammers", "pppp");
