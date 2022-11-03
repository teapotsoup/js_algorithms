function solution(n) {
  var answer = 0;
  if (Number.isInteger(Math.sqrt(n))) {
    let small = Math.sqrt(n);
    answer = Math.pow(small + 1, 2);
  } else {
    answer = -1;
  }
  console.log(answer);
  return answer;
}

solution(121); //144
solution(3); //-1
solution(4);
solution(5); //-1
solution(6);
