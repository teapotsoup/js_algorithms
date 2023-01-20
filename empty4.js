function solution(array) {
  var answer = 0;
  const obj = {};
  for (const key of array) {
    obj[key] ? (obj[key] += 1) : (obj[key] = 1);
  }

  let arr = Object.values(obj);
  let temp = 0;
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] > temp) {
      temp = arr[i];
    } else if (arr[i] === temp) {
      temp = -1;
    }
  }

  answer = temp;
  return answer;
}

solution([1, 2, 3, 3, 3, 4]);
solution([1, 1, 2, 2]);
solution([1]);
