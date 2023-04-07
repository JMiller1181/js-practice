let calculateRecursive = (num, pow) => {
  if (pow === 0) {
    return 1;
  } else {
    return num * calculateRecursive(num, pow - 1);
  }
};
let calculateIterative = (x, y) => {
  let base = x;
  let iterativeExp = (num, pow) => {
    if (pow === 0) {
      return 1;
    } else {
      for (x = pow; x > 1; x--) {
        num *= base;
      }
    }
    return num;
  };
  return iterativeExp(x, y);
};
console.log("Calculate 2^5 using recursion: " + calculateRecursive(2, 5));
console.log("Calculate 2^5 using iteration: " + calculateIterative(2, 5));
console.log("Calculate 7^3 using recursion: " + calculateRecursive(7, 3));
console.log("Calculate 7^3 using iteration: " + calculateIterative(7, 3));
console.log("Calculate 12^2 using recursion: " + calculateRecursive(12, 2));
console.log("Calculate 12^2 using iteration: " + calculateIterative(12, 2));
console.log("Calculate 9^4 using recursion: " + calculateRecursive(9, 4));
console.log("Calculate 9^4 using iteration: " + calculateIterative(9, 4));
