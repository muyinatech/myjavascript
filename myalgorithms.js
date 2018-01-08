/* FIBONACCI
Statement
Given a number N return the index value of the Fibonacci sequence, where the sequence is:

1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

F(n) = F(n-1) + F(n-2)
 */

function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(0)); // 1
console.log(fibonacci(1)); // 1
console.log(fibonacci(4)); // 5
console.log(fibonacci(10)); // 89

const fibonacciArray = [];
fibonacciArray[1] = 1;
fibonacciArray[2] = 1;
for (let i = 3; i < 20; i++) {
  fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2];
  console.log(fibonacciArray[i]);
}
