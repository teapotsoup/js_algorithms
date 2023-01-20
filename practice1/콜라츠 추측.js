function solution(num) {
  var answer = 0;
  while (num > 1) {
    if (answer >= 500) {
      answer = -1;
      break;
    }
    if (num % 2 === 0) {
      answer += 1;
      num = num / 2;
    } else {
      answer += 1;
      num = num * 3 + 1;
    }
  }
  return answer;
}
solution(16);
solution(626331);
