function solution(x) {
  var answer = true;
  const arr = String(x).split("");
  let sum = 0;
  arr.map((i) => {
    sum += Number(i);
  });
  x % sum === 0 ? answer : (answer = false);
  console.log(answer);
  return answer;
}
solution(10);
solution(12);
solution(11);
solution(13);
