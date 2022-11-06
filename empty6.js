function solution(my_string) {
  var answer = "";
  answer = my_string.toLowerCase();
  answer = [...answer];
  answer.sort();
  answer = answer.join("");
  return answer;
}
solution("Bcad");
