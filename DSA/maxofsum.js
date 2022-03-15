// var arr = [2, 5, 3, 4, 8, 1, 9, 5];
// var N = 8;
// var k = 3;
function maxofsum(N, k, arr) {
  var i = 0;
  var j = 0;
  var sum = 0;
  var max = -Infinity;
  while (j < N) {
    sum = sum + arr[j];
    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 == k) {
       max = Math.max(sum);
      sum = sum - arr[i];
      i++;
      j++;
    }
  }
  console.log(max);
}
maxofsum(8, 3, [2, 5, 3, 4, 8, 1, 9, 5]);
