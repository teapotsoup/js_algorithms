const Selection = (arr) => {
  for (let i = 0; i < arr.length; ++i) {
    let minTempIdx = i;
    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[minTempIdx] > arr[j]) {
        minTempIdx = j;
      }
    }
    if (minTempIdx !== i) {
      swap = true;
      let temp = arr[i];
      arr[i] = arr[minTempIdx];
      arr[minTempIdx] = temp;
    }
  }
};

Selection([0, 2, 34, 22, 10, 19, 17]);

// 버블 정렬 : 인덱스의 바로 앞과 뒤를 비교하며 최댓값을 맨뒤로 옮기고 다음턴은 옮긴 끝부분을 제외하고 이전 작업을 반복한다
// 선택 정렬 : 최솟값을 맨앞으로 옮기고 다음턴은 옮긴 앞부분을 제외하고 이전 작업을 반복한다
