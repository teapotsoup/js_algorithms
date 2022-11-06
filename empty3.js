function solution(n) {
  var answer = [];
  let front = 1;
  let rear = n;
  while (front <= rear) {
    if (front * rear === n) {
      if (front === rear) {
        answer.push(front);
        break;
      } else {
        answer.push(front);
        answer.push(rear);
        front++;
        rear--;
      }
    } else if (front * rear > n) {
      rear--;
    } else if (front * rear < n) {
      front++;
    }
  }
  answer.sort((a, b) => {
    return a - b;
  });
  console.log(answer);
  return answer;
}
solution(1);
solution(10000);
