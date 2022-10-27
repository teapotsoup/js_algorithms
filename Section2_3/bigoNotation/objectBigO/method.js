let instructor = {
  firstName: "kelly",
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4],
};

console.log(Object.keys(instructor)); // O(N)
console.log(Object.values(instructor)); // O(N)
console.log(Object.entries(instructor)); // O(N)
console.log(instructor.hasOwnProperty("firstName")); // O(1)

// 객체 연산시 시간복잡도
// 삽입 O(1)
// 삭제 O(1)
// 탐색 O(N)
// 접근 O(1)
