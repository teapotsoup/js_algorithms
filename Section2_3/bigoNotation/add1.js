function addUpTo1(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
} // O(n)

function addUpTo2(n) {
  return (n * (n + 1)) / 2;
} //O(1)

function countUpAndDown(n) {
  console.log("Going up!");
  for (var i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("At the top!\nGoing down...");
  for (var j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("Back down. Bye!");
} // O(n)

function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
} // O(n^2)

let t1 = performance.now();
addUpTo1(1000000);
let t2 = performance.now();

let t3 = performance.now();
addUpTo2(1000000);
let t4 = performance.now();

console.log(`${(t2 - t1) / 1000} seconds`);
console.log(`${(t4 - t3) / 1000} seconds`);
