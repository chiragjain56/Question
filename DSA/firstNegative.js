let arr = [12, -1, -7, 8, -15, 30, 16, 28];
let N = 8;
let k = 3;

var s = "";
var i = 0;
var j = 0;
var list = [];
while (j < N) {
  if (arr[j] < 0) {
    list.push(arr[j]);
  }
  if (j >= k - 1) {
    if (list.length > 0) {
      s += list[0] + " ";
    } else {
      s += "0" + " ";
    }
    if (list[0] == arr[i]) {
      list.shift();
    }
    i++;
  }
  j++;
}
console.log(s);
