var min = -1;
var max = -1;

function now(num, arr, d = 0) {
  //base case
  if (num === 0 && max == -1) {
    max = d;
    min = d;
    return;
  } else if (num === 0 && d > max) {
    max = d;
  } else if (num === 0 && d < min) {
    min = d;
  }
  if (num < 0) {
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    now(num - arr[i], arr, d + 1);
  }
}

function runp(input) {
  let lines = input.trim().split("\n");

  let [k, n] = lines[0].trim().split(" ").map(Number);

  let arr = lines[1].trim().split(" ").map(Number);

  let result = now(k, arr);
  if (max == -1) {
    console.log(max);
  } else {
    console.log(min, max);
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
  read += input;
});
process.stdin.on("end", function () {
  read = read.replace(/\n$/, "");
  read = read.replace(/\n$/, "");

  runp(read);
});
