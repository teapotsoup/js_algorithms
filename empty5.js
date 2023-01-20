function solution(my_string, num1, num2) {
  var answer = my_string;
  let temp1 = answer[num1];
  let temp2 = answer[num2];
  answer = answer.replaceAt(1, "e");
  // my_string = my_string.replaceAt(num2, temp1);
  console.log(answer);
  return answer;
}
solution("hello", 1, 2);
solution("I love you", 3, 6);
