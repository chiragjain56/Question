function isPrime(N) {
  let c = 0;
  for (let i = 1; i <= N; i++) {
    if (N % i == 0) {
      c++;
    }
  }
  if (c <= 2) {
    return true;
  } else {
    return false;
  }
}
//console.log(isPrime(7))
let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let N = arr.length;
let M = arr[0].length;
let i = 0;
let j = 0;
let k = 0;
let count = 0;
while (k < N * M) {
  if (j >= M) {
    j = 0;
    i++;
  }
  if (isPrime(arr[i][j])) {
    count++;
  }
  j++;
  k++;
}
console.log(count);
