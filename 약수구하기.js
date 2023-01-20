function solution(n) {
  let answer = [];
  for (let i = 1; i < Math.sqrt(n); i++) {
    if (n % i === 0) answer = [...answer, i, n / i];
  }
  console.log(answer);
  if (Number.isInteger(Math.sqrt(n))) answer = [...answer, Math.sqrt(n)];
  console.log(answer);

  return answer.sort((a, b) => a - b);
}
solution(10);
