function power(num, count) {
  if (count === 0) {
    return 1;
  }
  if (count === 1) {
    return num;
  }
  return num * power(num, count - 1);
}
console.log(power(2, 0));
console.log(power(2, 2));
console.log(power(2, 4));
