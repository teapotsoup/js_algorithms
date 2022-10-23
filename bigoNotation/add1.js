function addUpTo1(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}

let t1 = performance.now();
addUpTo1(1000000);
let t2 = performance.now();

let t3 = performance.now();
addUpTo2(1000000);
let t4 = performance.now();

console.log(`${(t2 - t1) / 1000} seconds`);
console.log(`${(t4 - t3) / 1000} seconds`);
