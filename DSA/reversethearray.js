function reversearr(arr, start, end) {
  let left = start;
  let right = end;
  while (left < right) {
    swap(arr, left, right);
    left++;
    right--;
  }
}
function swap(arr, i, j) {
  temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
arr = [1, 2, 3, 4, 5];
var n = 5;
var k = 22;
k = k % 5;
reversearr(arr, 0, 4);
reversearr(arr, 0, 1);
reversearr(arr, 2, 4);
console.log(arr.join());
console.log(arr.join(","));
console.log(arr.join(" "));
console.log(arr);
